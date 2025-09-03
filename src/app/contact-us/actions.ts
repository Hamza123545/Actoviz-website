"use server";

export const Action___POST__SendMail = async (payload: any, type: "contact" | "quote") => {
    try {
        // Simulate form submission success
        console.log("Form submitted:", { ...payload, type });
        
        return {
            success: true,
            message: "Thank you for your message! We'll get back to you soon.",
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
        };
    }
};

