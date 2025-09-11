"use server";

export const A___Reviews__GetAll = async () => {
    try {
        // Simulate getting reviews
        console.log("Fetching all reviews");
        
        return {
            success: true,
            message: "Reviews fetched successfully",
            result: []
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong"
        };
    }
};

export const A___Reviews__Create = async (payload: any) => {
    try {
        // Send email notification for new review
        try {
            const emailResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    formData: {
                        ...payload,
                        _metadata: {
                            timestamp: new Date().toLocaleString(),
                            formType: 'review',
                            userAgent: 'Server',
                            url: 'Review Submission'
                        }
                    },
                    formType: 'review',
                    recipientEmail: process.env.ADMIN_EMAIL || 'hello@actoviz.com'
                }),
            });
            
            if (emailResponse.ok) {
                console.log("Review email notification sent successfully");
            }
        } catch (emailError) {
            console.error("Failed to send review email notification:", emailError);
            // Don't fail the review creation if email fails
        }
        
        // Simulate creating review
        console.log("Creating review:", payload);
        
        return {
            success: true,
            message: "Review created successfully",
            result: { id: Date.now(), ...payload }
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong"
        };
    }
};

export const A___Reviews__GetById = async (id: string) => {
    try {
        // Simulate getting review by ID
        console.log("Fetching review by ID:", id);
        
        return {
            success: true,
            message: "Review fetched successfully",
            result: { id, title: "Sample Review", content: "This is a sample review content." }
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong"
        };
    }
};

export const A___Reviews__Update = async (id: string, payload: any) => {
    try {
        // Simulate updating review
        console.log("Updating review:", { id, payload });
        
        return {
            success: true,
            message: "Review updated successfully",
            result: { id, ...payload }
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong"
        };
    }
};

export const A___Reviews__GetByCategory = async (category: string) => {
    try {
        // Simulate getting reviews by category
        console.log("Fetching reviews by category:", category);
        
        return {
            success: true,
            message: "Reviews fetched successfully",
            result: []
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong"
        };
    }
};

export const A___Reviews__Delete = async (id: string) => {
    try {
        // Simulate deleting review
        console.log("Deleting review:", id);
        
        return {
            success: true,
            message: "Review deleted successfully"
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong"
        };
    }
};

// Legacy exports for backward compatibility
export const Action___GET__AllReviews = A___Reviews__GetAll;
export const Action___POST__Review = A___Reviews__Create;
export const Action___DELETE__Review = A___Reviews__Delete;
export const Action___Get__Review_By_Category = A___Reviews__GetByCategory;