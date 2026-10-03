// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please provide a valid name (at least 2 characters).' },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long.' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Sanitize inputs (prevent HTML injection in email)
    const escapeHtml = (str: string) =>
      String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || 'N/A');
    const safePhone = escapeHtml(phone || 'N/A');
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    const mailOptions = {
      from: `"Tasara Limited Website" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8f9fb; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #00b4d8, #0077b6); padding: 24px; border-radius: 8px 8px 0 0; color: white;">
            <h2 style="margin: 0; font-size: 22px;">New Contact Form Submission</h2>
            <p style="margin: 6px 0 0 0; opacity: 0.9; font-size: 14px;">From tasarabd.com/contact</p>
          </div>
          <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; width: 120px; color: #334155;">Name:</td>
                <td style="padding: 10px 0; color: #475569;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #334155;">Email:</td>
                <td style="padding: 10px 0; color: #475569;">
                  <a href="mailto:${safeEmail}" style="color: #0077b6;">${safeEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #334155;">Company:</td>
                <td style="padding: 10px 0; color: #475569;">${safeCompany}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #334155;">Phone:</td>
                <td style="padding: 10px 0; color: #475569;">${safePhone}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="font-weight: bold; margin: 0 0 8px 0; color: #334155;">Message:</p>
              <p style="color: #475569; line-height: 1.6; margin: 0;">${safeMessage}</p>
            </div>
          </div>
          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 16px;">
            This email was sent from the Tasara Limited website contact form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}