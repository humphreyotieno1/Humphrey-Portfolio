import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const company = formData.get('company') as string
    const email = formData.get('email') as string
    const phoneNumber = formData.get('phoneNumber') as string
    const message = formData.get('message') as string
    const agreed = formData.get('agreed') as string

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'All required fields must be filled out.' }, { status: 400 })
    }

    if (message.length < 10) {
      return NextResponse.json({ error: 'Message must be at least 10 characters long.' }, { status: 400 })
    }

    if (agreed !== 'true') {
      return NextResponse.json({ error: 'You must agree to the terms and conditions.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.MAIL_PORT || '587'),
      secure: process.env.MAIL_SECURE === 'true',
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    })

    const emailHtml = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="border-bottom: 2px solid #8b4513; padding-bottom: 10px;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phoneNumber ? `<p><strong>Phone:</strong> ${phoneNumber}</p>` : ''}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
        <p style="font-size: 12px; color: #666; margin-top: 24px;">Sent from magazine portfolio · ${new Date().toLocaleString()}</p>
      </div>
    `

    await transporter.sendMail({
      from: {
        name: process.env.MAIL_FROM_NAME || 'Humphrey Portfolio',
        address: process.env.MAIL_DEFAULT_SENDER || 'humphreyotieno04@gmail.com',
      },
      to: process.env.MAIL_TO || 'humphreyotieno04@gmail.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: emailHtml,
    })

    await transporter.sendMail({
      from: {
        name: process.env.MAIL_FROM_NAME || 'Humphrey Portfolio',
        address: process.env.MAIL_DEFAULT_SENDER || 'humphreyotieno04@gmail.com',
      },
      to: email,
      subject: 'Thank you for contacting Humphrey Otieno',
      html: `
        <p>Hi ${firstName},</p>
        <p>Thank you for reaching out. I've received your message and will get back to you soon.</p>
        <p>Best regards,<br><strong>Humphrey Otieno</strong></p>
      `,
    })

    return NextResponse.json({ message: "Thank you for your message! I'll get back to you soon." })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An error occurred while sending your message. Please try again later.' },
      { status: 500 },
    )
  }
}
