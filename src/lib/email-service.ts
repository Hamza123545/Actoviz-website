// Email service utility for form submissions (static site compatible)
export interface EmailData {
  formData: any;
  formType: 'contact' | 'quote' | 'consultation' | 'review' | 'email-modal';
  recipientEmail?: string;
}

export async function sendEmailNotification(emailData: EmailData) {
  try {
    // For static sites, we'll use a client-side email service like EmailJS
    // or redirect to a mailto link as fallback
    
    // Log the form submission for debugging
    console.log('Form submission:', emailData);
    
    // Create mailto link as fallback
    const subject = `New ${emailData.formType} submission`;
    const body = `Form Type: ${emailData.formType}\n\nForm Data:\n${JSON.stringify(emailData.formData, null, 2)}`;
    const mailtoUrl = `mailto:${emailData.recipientEmail || 'contact@actoviz.com'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open mailto link
    window.open(mailtoUrl, '_blank');
    
    return {
      success: true,
      message: 'Email client opened successfully. Please send the email to complete your submission.',
      data: {
        formType: emailData.formType,
        timestamp: new Date().toISOString()
      }
    };
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
}

// Helper function to format form data for email
export function formatFormDataForEmail(formData: any, formType: string) {
  const timestamp = new Date().toLocaleString();
  
  return {
    ...formData,
    _metadata: {
      timestamp,
      formType,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Server',
      url: typeof window !== 'undefined' ? window.location.href : 'Unknown'
    }
  };
}
