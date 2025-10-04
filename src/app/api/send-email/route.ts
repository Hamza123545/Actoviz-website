import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { to, from, subject, html, text } = body;

    // SMTP Configuration using your email server
    const transporter = nodemailer.createTransport({
      host: 'actoviz.com',
      port: 587, // Try port 587 instead of 465
      secure: false, // false for 587, true for 465
      auth: {
        user: 'contact@actoviz.com',
        pass: process.env.EMAIL_PASSWORD, // Set this in your environment variables
      },
      tls: {
        rejectUnauthorized: false, // Ignore SSL certificate issues
        ciphers: 'SSLv3'
      }
    });

    // Email options
    const mailOptions = {
      from: from || 'noreply@actoviz.com',
      to: to || 'contact@actoviz.com',
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
