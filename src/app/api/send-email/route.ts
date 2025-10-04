import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { to, from, subject, html, text } = body;

    // SMTP Configuration using your email server
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'actoviz.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER || 'contact@actoviz.com',
        pass: process.env.EMAIL_PASSWORD, // Set this in your environment variables
      },
      tls: {
        rejectUnauthorized: false, // Ignore SSL certificate issues
        ciphers: 'SSLv3'
      }
    });

    // Email options
    const mailOptions = {
      from: from || process.env.SMTP_FROM || 'noreply@actoviz.com',
      to: to || process.env.ADMIN_EMAIL || 'contact@actoviz.com',
      subject: subject || 'New Form Submission',
      html: html,
      text: text,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
