import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, company, email, phone, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const mailOptions = {
    from: `"ResourceHub Website" <${process.env.SMTP_USER}>`,
    to: process.env.RECIPIENT_EMAIL,
    replyTo: email,
    subject: `New Enquiry from ${name}${company ? ` — ${company}` : ''}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1A2B6D; padding: 24px 32px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px;">New Website Enquiry</h1>
        </div>
        <div style="padding: 32px; background: #f5f7fa; border: 1px solid #e8ecf0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px; width: 140px;">Full Name</td>
              <td style="padding: 10px 0; color: #1c1c1e; font-weight: 600;">${name}</td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Company</td>
              <td style="padding: 10px 0; color: #1c1c1e; font-weight: 600;">${company}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #C0392B;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Phone</td>
              <td style="padding: 10px 0;"><a href="tel:${phone}" style="color: #C0392B;">${phone}</a></td>
            </tr>` : ''}
          </table>
          <hr style="border: none; border-top: 1px solid #e8ecf0; margin: 20px 0;" />
          <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px;">Message</p>
          <p style="color: #1c1c1e; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message}</p>
        </div>
        <div style="padding: 16px 32px; background: #0D1117; text-align: center;">
          <p style="color: #6b7280; font-size: 12px; margin: 0;">ResourceHub Building & Construction Materials Trading LLC — Dubai, UAE</p>
        </div>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
