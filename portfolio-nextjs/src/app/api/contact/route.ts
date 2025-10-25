import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extract form data
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const company = formData.get('company') as string
    const email = formData.get('email') as string
    const phoneNumber = formData.get('phoneNumber') as string
    const message = formData.get('message') as string
    const agreed = formData.get('agreed') as string
    const attachment = formData.get('attachment') as File | null

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'All required fields must be filled out.' },
        { status: 400 }
      )
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long.' },
        { status: 400 }
      )
    }

    if (agreed !== 'true') {
      return NextResponse.json(
        { error: 'You must agree to the terms and conditions.' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.MAIL_PORT || '587'),
      secure: process.env.MAIL_SECURE === 'true',
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    })

    // Email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #555; margin-bottom: 15px;">Contact Information</h3>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
            ${phoneNumber ? `<p style="margin: 8px 0;"><strong>Phone:</strong> ${phoneNumber}</p>` : ''}
            ${company ? `<p style="margin: 8px 0;"><strong>Company:</strong> ${company}</p>` : ''}
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #555; margin-bottom: 15px;">Message</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p>This message was sent from your portfolio contact form at humphrey-portfolio-rho.vercel.app</p>
            <p>Received on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    `

    const emailText = `
New Contact Form Submission

Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
${phoneNumber ? `- Phone: ${phoneNumber}` : ''}
${company ? `- Company: ${company}` : ''}

Message:
${message}

---
This message was sent from your portfolio contact form.
Received on: ${new Date().toLocaleString()}
    `

    // Email options
    const mailOptions = {
      from: {
        name: process.env.MAIL_FROM_NAME || 'Humphrey Portfolio',
        address: process.env.MAIL_DEFAULT_SENDER || 'humphreyotieno04@gmail.com'
      },
      to: process.env.MAIL_TO || 'humphreyotieno04@gmail.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: emailText,
      html: emailHtml,
      attachments: [] as Array<{
        filename: string
        content: Buffer
        contentType: string
      }>
    }

    // Add attachment if provided
    if (attachment && attachment.size > 0) {
      const attachmentBuffer = Buffer.from(await attachment.arrayBuffer())
      mailOptions.attachments = [
        {
          filename: attachment.name,
          content: attachmentBuffer,
          contentType: attachment.type,
        }
      ]
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Send auto-reply to the sender
    const autoReplyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-bottom: 20px;">Thank You for Contacting Me!</h2>
          
          <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
            Hi ${firstName},
          </p>
          
          <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
            Thank you for reaching out through my portfolio contact form. I've received your message and will get back to you as soon as possible, typically within 24 hours during weekdays.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <p style="margin: 0; color: #555; font-size: 14px;">
              <strong>Your Message:</strong><br>
              "${message.substring(0, 100)}${message.length > 100 ? '...' : ''}"
            </p>
          </div>
          
          <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
            In the meantime, feel free to check out my work on:
          </p>
          
          <ul style="color: #555; line-height: 1.6; margin-bottom: 20px;">
            <li><a href="https://github.com/humphreyotieno1" style="color: #007bff;">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/humphrey-otieno" style="color: #007bff;">LinkedIn</a></li>
            <li><a href="https://x.com/_Banta__" style="color: #007bff;">Twitter/X</a></li>
          </ul>
          
          <p style="color: #555; line-height: 1.6;">
            Best regards,<br>
            <strong>Humphrey Otieno</strong><br>
            Full-Stack Developer
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      </div>
    `

    const autoReplyOptions = {
      from: {
        name: process.env.MAIL_FROM_NAME || 'Humphrey Portfolio',
        address: process.env.MAIL_DEFAULT_SENDER || 'humphreyotieno04@gmail.com'
      },
      to: email,
      subject: 'Thank you for contacting Humphrey Otieno',
      html: autoReplyHtml,
    }

    // Send auto-reply
    await transporter.sendMail(autoReplyOptions)

    return NextResponse.json({
      message: 'Thank you for your message! I\'ll get back to you soon.'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An error occurred while sending your message. Please try again later.' },
      { status: 500 }
    )
  }
}
