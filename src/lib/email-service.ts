// Email service utility for sending form submissions
export interface EmailData {
  formData: any;
  formType: 'contact' | 'quote' | 'consultation' | 'review' | 'email-modal';
  recipientEmail?: string;
}

export async function sendEmailNotification(emailData: EmailData) {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to send email');
    }

    return result;
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
