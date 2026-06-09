import { escapeHtml } from './sanitize'
import type { ContactPayload } from './validation'

const BRAND = {
  paper: '#f4efe6',
  ink: '#1c1917',
  muted: '#6b635a',
  accent: '#8b4513',
  line: '#d8cfc2',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://humphrey.techbiteventures.com',
}

function layout(content: string, preheader: string) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Humphrey Otieno</title>
  </head>
  <body style="margin:0;padding:0;background:${BRAND.paper};color:${BRAND.ink};font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${BRAND.paper};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#ffffff;border:1px solid ${BRAND.line};">
            <tr>
              <td style="padding:28px 32px 12px;border-bottom:3px solid ${BRAND.accent};">
                <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:${BRAND.muted};">Humphrey Otieno</p>
                <h1 style="margin:0;font-size:28px;line-height:1.2;font-family:Georgia,'Times New Roman',serif;color:${BRAND.ink};">${escapeHtml(preheader)}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px;">${content}</td>
            </tr>
            <tr>
              <td style="padding:20px 32px 28px;border-top:1px solid ${BRAND.line};background:${BRAND.paper};">
                <p style="margin:0;font-size:12px;line-height:1.6;color:${BRAND.muted};">
                  Full Stack Software Engineer · Nairobi, Kenya<br />
                  <a href="${BRAND.siteUrl}" style="color:${BRAND.accent};text-decoration:none;">Visit portfolio</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

function field(label: string, value: string) {
  return `<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:${BRAND.ink};">
    <strong style="display:block;margin-bottom:4px;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:${BRAND.muted};">${escapeHtml(label)}</strong>
    ${value}
  </p>`
}

export function buildOwnerEmail(data: ContactPayload) {
  const fullName = `${data.firstName} ${data.lastName}`
  const html = layout(
    `
      ${field('Name', escapeHtml(fullName))}
      ${field('Email', `<a href="mailto:${escapeHtml(data.email)}" style="color:${BRAND.accent};">${escapeHtml(data.email)}</a>`)}
      ${data.phoneNumber ? field('Phone', escapeHtml(data.phoneNumber)) : ''}
      ${data.company ? field('Company', escapeHtml(data.company)) : ''}
      ${field('Message', `<span style="white-space:pre-wrap;">${escapeHtml(data.message)}</span>`)}
      <p style="margin:24px 0 0;font-size:12px;color:${BRAND.muted};">Received ${new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })} · Magazine portfolio contact form</p>
    `,
    'New contact form submission',
  )

  const text = [
    'New contact form submission',
    '',
    `Name: ${fullName}`,
    `Email: ${data.email}`,
    data.phoneNumber ? `Phone: ${data.phoneNumber}` : '',
    data.company ? `Company: ${data.company}` : '',
    '',
    'Message:',
    data.message,
  ]
    .filter(Boolean)
    .join('\n')

  return {
    subject: `Portfolio inquiry from ${fullName}`,
    html,
    text,
  }
}

export function buildAutoReplyEmail(data: ContactPayload) {
  const html = layout(
    `
      <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:${BRAND.ink};">Hi ${escapeHtml(data.firstName)},</p>
      <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:${BRAND.ink};">
        Thank you for reaching out through my portfolio. I&apos;ve received your message and will get back to you within 24 hours on weekdays.
      </p>
      <div style="margin:24px 0;padding:18px 20px;background:${BRAND.paper};border-left:3px solid ${BRAND.accent};">
        <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:${BRAND.muted};">Your message</p>
        <p style="margin:0;font-size:15px;line-height:1.6;color:${BRAND.ink};white-space:pre-wrap;">${escapeHtml(data.message.slice(0, 280))}${data.message.length > 280 ? '…' : ''}</p>
      </div>
      <p style="margin:0 0 8px;font-size:15px;line-height:1.7;color:${BRAND.ink};">Best regards,<br /><strong>Humphrey Otieno</strong><br />Full Stack Software Engineer</p>
      <p style="margin:16px 0 0;font-size:13px;line-height:1.6;color:${BRAND.muted};">
        <a href="https://github.com/humphreyotieno1" style="color:${BRAND.accent};text-decoration:none;">GitHub</a> ·
        <a href="https://www.linkedin.com/in/humphrey-otieno" style="color:${BRAND.accent};text-decoration:none;">LinkedIn</a> ·
        <a href="https://dev.to/banta" style="color:${BRAND.accent};text-decoration:none;">Blog</a>
      </p>
    `,
    'Thanks for getting in touch',
  )

  const text = [
    `Hi ${data.firstName},`,
    '',
    "Thank you for reaching out through my portfolio. I've received your message and will get back to you within 24 hours on weekdays.",
    '',
    'Your message:',
    data.message.slice(0, 280) + (data.message.length > 280 ? '…' : ''),
    '',
    'Best regards,',
    'Humphrey Otieno',
    'Full Stack Software Engineer',
  ].join('\n')

  return {
    subject: 'Thanks for contacting Humphrey Otieno',
    html,
    text,
  }
}

export function getMailConfig() {
  const username = process.env.MAIL_USERNAME
  const password = process.env.MAIL_PASSWORD

  if (!username || !password) {
    return null
  }

  return {
    transporter: {
      host: process.env.MAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.MAIL_PORT || '587', 10),
      secure: process.env.MAIL_SECURE === 'true',
      auth: { user: username, pass: password },
    },
    from: {
      name: process.env.MAIL_FROM_NAME || 'Humphrey Otieno',
      address: process.env.MAIL_DEFAULT_SENDER || username,
    },
    to: process.env.MAIL_TO || username,
  }
}
