"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface StripePaymentButtonProps {
    gigId: number;
}

const StripePaymentButton = ({ gigId }: StripePaymentButtonProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const handlePayment = async () => {
        setIsLoading(true);
        try {
            // Simulate payment processing
            console.log("Processing payment for gig:", gigId);
            
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            alert("Payment processed successfully! This is a demo.");
            
        } catch (error) {
            console.error("Payment error:", error);
            alert("Payment failed. This is a demo.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button 
            onClick={handlePayment} 
            disabled={isLoading}
            className="w-full"
        >
            {isLoading ? "Processing..." : "Start Free Trial"}
        </Button>
    );
};

export default StripePaymentButton;
