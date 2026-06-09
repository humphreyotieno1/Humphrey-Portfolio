import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { buildAutoReplyEmail, buildOwnerEmail, getMailConfig } from '@/lib/contact/email-templates'
import { checkRateLimit, getClientIp } from '@/lib/contact/rate-limit'
import { sanitizeText } from '@/lib/contact/sanitize'
import { parseContactForm } from '@/lib/contact/validation'

const SUCCESS_MESSAGE =
  "Thank you for your message! I've sent a confirmation to your inbox and will reply soon."

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    if (sanitizeText(formData.get('website'), 200)) {
      return NextResponse.json({ message: SUCCESS_MESSAGE })
    }

    const ip = getClientIp(request)
    const rateLimit = checkRateLimit(ip)

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: `Too many messages sent. Please try again in ${rateLimit.retryAfterSeconds ?? 900} seconds.`,
        },
        {
          status: 429,
          headers: rateLimit.retryAfterSeconds
            ? { 'Retry-After': String(rateLimit.retryAfterSeconds) }
            : undefined,
        },
      )
    }

    const parsed = parseContactForm(formData)

    if (!parsed.ok) {
      return NextResponse.json({ error: parsed.error }, { status: 400 })
    }

    const mailConfig = getMailConfig()
    if (!mailConfig) {
      console.error('Contact form misconfigured: missing MAIL_USERNAME or MAIL_PASSWORD')
      return NextResponse.json(
        { error: 'Email service is not configured yet. Please email me directly.' },
        { status: 503 },
      )
    }

    const transporter = nodemailer.createTransport(mailConfig.transporter)
    const ownerEmail = buildOwnerEmail(parsed.data)
    const autoReply = buildAutoReplyEmail(parsed.data)

    await transporter.sendMail({
      from: mailConfig.from,
      to: mailConfig.to,
      replyTo: parsed.data.email,
      subject: ownerEmail.subject,
      html: ownerEmail.html,
      text: ownerEmail.text,
    })

    await transporter.sendMail({
      from: mailConfig.from,
      to: parsed.data.email,
      subject: autoReply.subject,
      html: autoReply.html,
      text: autoReply.text,
    })

    return NextResponse.json({ message: SUCCESS_MESSAGE })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An error occurred while sending your message. Please try again later.' },
      { status: 500 },
    )
  }
}
