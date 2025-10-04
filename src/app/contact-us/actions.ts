// Client-side email handling for static deployment
import { EmailService } from "@/lib/email-service-client";

export const Action___POST__SendMail = async (payload: any, type: "contact" | "quote" | "consultation" | "review" | "email-modal") => {
    try {
        // Use client-side email service
        const result = await EmailService.sendEmail(payload, type);
        
        console.log("Form submitted:", { ...payload, type, result });
        
        return {
            success: result.success,
            message: result.message,
        };
    } catch (error) {
        console.error("Email sending failed:", error);
        return {
            success: false,
            message: "Something went wrong while sending your message. Please try again.",
        };
    }
};

