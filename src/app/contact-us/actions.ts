"use server";

import { sendEmailNotification, formatFormDataForEmail } from "@/lib/email-service";

export const Action___POST__SendMail = async (payload: any, type: "contact" | "quote" | "consultation" | "review" | "email-modal") => {
    try {
        // Format the form data for email
        const formattedData = formatFormDataForEmail(payload, type);
        
        // Send email notification
        await sendEmailNotification({
            formData: formattedData,
            formType: type,
            recipientEmail: process.env.ADMIN_EMAIL || 'hello@actoviz.com'
        });
        
        console.log("Form submitted and email sent:", { ...payload, type });
        
        return {
            success: true,
            message: "Thank you for your message! We'll get back to you soon.",
        };
    } catch (error) {
        console.error("Email sending failed:", error);
        return {
            success: false,
            message: "Something went wrong while sending your message. Please try again.",
        };
    }
};

