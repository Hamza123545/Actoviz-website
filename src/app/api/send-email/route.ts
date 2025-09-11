import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formData, formType, recipientEmail } = body;

    // Validate required fields
    if (!formData || !formType) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get recipient email from environment or use default
    const toEmail = recipientEmail || process.env.ADMIN_EMAIL || 'hello@actoviz.com';

    // Generate email content based on form type
    const emailContent = generateEmailContent(formData, formType);

    // For now, we'll log the email content and simulate sending
    // In production, you can integrate with services like:
    // - Resend (recommended for Next.js)
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Or set up your own SMTP server
    
    console.log('=== EMAIL NOTIFICATION ===');
    console.log('To:', toEmail);
    console.log('Subject:', emailContent.subject);
    console.log('Form Type:', formType);
    console.log('Form Data:', JSON.stringify(formData, null, 2));
    console.log('========================');
    
    // Simulate email sending (replace with actual email service)
    // You can integrate with any email service here
    
    // For immediate testing, you can use EmailJS or similar service
    // Example with EmailJS:
    /*
    const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_USER_ID,
        template_params: {
          to_email: toEmail,
          subject: emailContent.subject,
          message: emailContent.html,
          form_type: formType,
          form_data: JSON.stringify(formData)
        }
      })
    });
    */
    
    return NextResponse.json({
      success: true,
      message: 'Email notification logged successfully',
      data: { 
        to: toEmail,
        subject: emailContent.subject,
        formType: formType,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Email API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

function generateEmailContent(formData: any, formType: string) {
  const timestamp = new Date().toLocaleString();
  
  switch (formType) {
    case 'contact':
      return {
        subject: `New Contact Form Submission - ${formData.name || 'Unknown'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${formData.name || 'Not provided'}</p>
              <p><strong>Email:</strong> ${formData.email || 'Not provided'}</p>
              <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
              <p><strong>Services Interested In:</strong> ${Array.isArray(formData.services) ? formData.services.join(', ') : formData.services || 'Not specified'}</p>
            </div>
            
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap;">${formData.message || 'No message provided'}</p>
            </div>
            
            <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #0277bd;"><strong>Submitted:</strong> ${timestamp}</p>
              <p style="margin: 5px 0 0 0; color: #0277bd;"><strong>Form Type:</strong> Contact Form</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
            <p style="color: #64748b; font-size: 14px; text-align: center;">
              This email was sent from the Actoviz website contact form.
            </p>
          </div>
        `
      };

    case 'quote':
      return {
        subject: `New Quote Request - ${formData.name || 'Unknown'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
              New Quote Request
            </h2>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Client Information</h3>
              <p><strong>Name:</strong> ${formData.name || 'Not provided'}</p>
              <p><strong>Email:</strong> ${formData.email || 'Not provided'}</p>
              <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
              <p><strong>Company:</strong> ${formData.companyName || 'Not provided'}</p>
              <p><strong>Company URL:</strong> ${formData.companyURL || 'Not provided'}</p>
              <p><strong>Country:</strong> ${formData.country || 'Not provided'}</p>
            </div>
            
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Project Details</h3>
              <p><strong>Services Needed:</strong> ${Array.isArray(formData.services) ? formData.services.join(', ') : formData.services || 'Not specified'}</p>
              <p><strong>Budget Range:</strong> ${formData.budgetRange || 'Not specified'}</p>
              <p><strong>Project Duration:</strong> ${formData.months || 'Not specified'}</p>
            </div>
            
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #92400e; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap;">${formData.message || 'No message provided'}</p>
            </div>
            
            <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #0277bd;"><strong>Submitted:</strong> ${timestamp}</p>
              <p style="margin: 5px 0 0 0; color: #0277bd;"><strong>Form Type:</strong> Quote Request</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
            <p style="color: #64748b; font-size: 14px; text-align: center;">
              This email was sent from the Actoviz website quote request form.
            </p>
          </div>
        `
      };

    case 'consultation':
      return {
        subject: `New Consultation Request - ${formData.name || 'Unknown'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
              New Free Consultation Request
            </h2>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Client Information</h3>
              <p><strong>Name:</strong> ${formData.name || 'Not provided'}</p>
              <p><strong>Email:</strong> ${formData.email || 'Not provided'}</p>
              <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
              <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
              <p><strong>Company Size:</strong> ${formData.companySize || 'Not provided'}</p>
            </div>
            
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Business Needs</h3>
              <p><strong>Services Interested In:</strong> ${Array.isArray(formData.services) ? formData.services.join(', ') : formData.services || 'Not specified'}</p>
              <p><strong>Current Challenges:</strong></p>
              <p style="white-space: pre-wrap; background-color: #ffffff; padding: 10px; border-radius: 4px;">${formData.currentChallenges || 'Not provided'}</p>
            </div>
            
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #92400e; margin-top: 0;">Project Details</h3>
              <p><strong>Implementation Timeline:</strong> ${formData.timeline || 'Not specified'}</p>
              <p><strong>Budget Range:</strong> ${formData.budget || 'Not specified'}</p>
              <p><strong>Additional Information:</strong></p>
              <p style="white-space: pre-wrap; background-color: #ffffff; padding: 10px; border-radius: 4px;">${formData.additionalInfo || 'Not provided'}</p>
            </div>
            
            <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #0277bd;"><strong>Submitted:</strong> ${timestamp}</p>
              <p style="margin: 5px 0 0 0; color: #0277bd;"><strong>Form Type:</strong> Free Consultation Request</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
            <p style="color: #64748b; font-size: 14px; text-align: center;">
              This email was sent from the Actoviz website free consultation form.
            </p>
          </div>
        `
      };

    case 'review':
      return {
        subject: `New Review Submission - ${formData.name || 'Unknown'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
              New Review Submission
            </h2>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Reviewer Information</h3>
              <p><strong>Name:</strong> ${formData.name || 'Not provided'}</p>
              <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
              <p><strong>Country:</strong> ${formData.country || 'Not provided'}</p>
              <p><strong>Category:</strong> ${formData.category || 'Not specified'}</p>
              <p><strong>Rating:</strong> ${formData.rating || 'Not provided'}/5 ⭐</p>
            </div>
            
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Review Content</h3>
              <p style="white-space: pre-wrap; background-color: #ffffff; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">${formData.text || 'No review text provided'}</p>
            </div>
            
            <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #0277bd;"><strong>Submitted:</strong> ${timestamp}</p>
              <p style="margin: 5px 0 0 0; color: #0277bd;"><strong>Form Type:</strong> Review Submission</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
            <p style="color: #64748b; font-size: 14px; text-align: center;">
              This email was sent from the Actoviz website review submission form.
            </p>
          </div>
        `
      };

    case 'email-modal':
      return {
        subject: `New Email Modal Submission - ${formData.email || 'Unknown'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
              New Email Modal Submission
            </h2>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Contact Information</h3>
              <p><strong>Email:</strong> ${formData.email || 'Not provided'}</p>
            </div>
            
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap;">${formData.message || 'No message provided'}</p>
            </div>
            
            <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #0277bd;"><strong>Submitted:</strong> ${timestamp}</p>
              <p style="margin: 5px 0 0 0; color: #0277bd;"><strong>Form Type:</strong> Email Modal</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
            <p style="color: #64748b; font-size: 14px; text-align: center;">
              This email was sent from the Actoviz website email modal.
            </p>
          </div>
        `
      };

    default:
      return {
        subject: `New Form Submission - ${formType}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
              New Form Submission
            </h2>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Form Data</h3>
              <pre style="background-color: #ffffff; padding: 15px; border-radius: 4px; overflow-x: auto;">${JSON.stringify(formData, null, 2)}</pre>
            </div>
            
            <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #0277bd;"><strong>Submitted:</strong> ${timestamp}</p>
              <p style="margin: 5px 0 0 0; color: #0277bd;"><strong>Form Type:</strong> ${formType}</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
            <p style="color: #64748b; font-size: 14px; text-align: center;">
              This email was sent from the Actoviz website.
            </p>
          </div>
        `
      };
  }
}
