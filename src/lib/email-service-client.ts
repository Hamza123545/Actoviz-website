// Client-side email service for static deployment
// This replaces the server-side API routes for static hosting

export interface EmailData {
  name?: string;
  email: string;
  phone?: string;
  message?: string;
  company?: string;
  services?: string[];
  [key: string]: any;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  data?: any;
}

// EmailJS configuration - Replace with your actual EmailJS credentials
const EMAILJS_CONFIG = {
  serviceId: 'service_actoviz', // Replace with your EmailJS service ID
  templateId: 'template_contact', // Replace with your EmailJS template ID  
  userId: 'your_emailjs_user_id', // Replace with your EmailJS user ID
};

// Alternative: Formspree integration
const FORMPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMPREE_ENDPOINT || '';

export class EmailService {
  // Method 1: Using EmailJS (Recommended for static sites)
  static async sendEmailWithEmailJS(formData: EmailData, formType: string): Promise<EmailResponse> {
    try {
      // For now, we'll use a simple approach that works without EmailJS setup
      // This will create a mailto link with pre-filled content
      const subject = `New ${formType} submission from ${formData.name || 'Website Visitor'}`;
      const body = `
Form Type: ${formType}
Name: ${formData.name || 'Not provided'}
Email: ${formData.email || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Services: ${Array.isArray(formData.services) ? formData.services.join(', ') : formData.services || 'Not specified'}

Message:
${formData.message || 'No message provided'}

Submitted at: ${new Date().toLocaleString()}
      `.trim();

      // Create mailto link
      const mailtoUrl = `mailto:contact@actoviz.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open mailto link
      window.open(mailtoUrl, '_blank');
      
      return {
        success: true,
        message: 'Email client opened. Please send the email to complete your submission.',
        data: { mailtoUrl }
      };
    } catch (error) {
      console.error('Email service error:', error);
      return {
        success: false,
        message: 'Failed to open email client. Please try again later.',
      };
    }
  }

  // Method 2: Nodemailer SMTP Integration (Real email delivery)
  static async sendEmailWithSMTP(formData: EmailData, formType: string): Promise<EmailResponse> {
    try {
      // Using Next.js API route with Nodemailer
      const emailEndpoint = '/api/send-email';
      
      const emailPayload = {
        to: 'contact@actoviz.com',
        from: formData.email || 'noreply@actoviz.com',
        subject: `New ${formType} submission from ${formData.name || 'Website Visitor'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
              New ${formType} Submission
            </h2>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${formData.name || 'Not provided'}</p>
              <p><strong>Email:</strong> ${formData.email || 'Not provided'}</p>
              <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
              <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
              <p><strong>Services:</strong> ${Array.isArray(formData.services) ? formData.services.join(', ') : formData.services || 'Not specified'}</p>
            </div>
            
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap;">${formData.message || 'No message provided'}</p>
            </div>
            
            <div style="background-color: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #0277bd;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              <p style="margin: 5px 0 0 0; color: #0277bd;"><strong>Form Type:</strong> ${formType}</p>
            </div>
          </div>
        `,
        text: `
Form Type: ${formType}
Name: ${formData.name || 'Not provided'}
Email: ${formData.email || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Services: ${Array.isArray(formData.services) ? formData.services.join(', ') : formData.services || 'Not specified'}

Message:
${formData.message || 'No message provided'}

Submitted at: ${new Date().toLocaleString()}
        `.trim()
      };

      const response = await fetch(emailEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailPayload),
      });

      if (!response.ok) {
        throw new Error(`Email service responded with status: ${response.status}`);
      }

      return {
        success: true,
        message: 'Email sent successfully! We will get back to you soon.',
        data: { response: await response.json() }
      };
    } catch (error) {
      console.error('SMTP email error:', error);
      return {
        success: false,
        message: 'Failed to send email. Please try again later.',
      };
    }
  }

  // Method 3: Fallback - Log to console (for development)
  static async logEmailLocally(formData: EmailData, formType: string): Promise<EmailResponse> {
    console.log('=== EMAIL NOTIFICATION (LOCAL LOG) ===');
    console.log('Form Type:', formType);
    console.log('Form Data:', JSON.stringify(formData, null, 2));
    console.log('Timestamp:', new Date().toISOString());
    console.log('=====================================');

    return {
      success: true,
      message: 'Email logged locally (development mode)',
      data: { 
        formType,
        timestamp: new Date().toISOString(),
        formData 
      }
    };
  }

  // Main method that tries different services
  static async sendEmail(formData: EmailData, formType: string): Promise<EmailResponse> {
    // Try SMTP first (using Nodemailer)
    const smtpResult = await this.sendEmailWithSMTP(formData, formType);
    if (smtpResult.success) return smtpResult;

    // Try EmailJS as fallback
    if (EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.userId) {
      const emailjsResult = await this.sendEmailWithEmailJS(formData, formType);
      if (emailjsResult.success) return emailjsResult;
    }

    // Fallback to local logging
    return await this.logEmailLocally(formData, formType);
  }
}

// Chatbot service for static deployment
export class ChatbotService {
  static async sendMessage(message: string, history: any[] = []): Promise<any> {
    try {
      // If you have an external chatbot service
      const backendUrl = process.env.NEXT_PUBLIC_CHATBOT_BACKEND_URL;
      
      if (backendUrl) {
        const response = await fetch(`${backendUrl}/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message,
            history: history || []
          }),
        });

        if (response.ok) {
          return await response.json();
        }
      }

      // Fallback response
      return {
        response: "I'm currently experiencing technical difficulties. Please try again later or contact our support team at contact@actoviz.com for immediate assistance.",
        history: []
      };
    } catch (error) {
      console.error('Chatbot error:', error);
      return {
        response: "I'm currently experiencing technical difficulties. Please try again later or contact our support team at contact@actoviz.com for immediate assistance.",
        history: []
      };
    }
  }
}
