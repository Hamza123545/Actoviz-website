
export async function createStripeCheckout(gigId: number) {
    try {
        // Simulate Stripe checkout creation
        console.log("Creating checkout session for gig:", gigId);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Return a mock checkout URL
        const mockCheckoutUrl = `/demo-checkout?gigId=${gigId}&session=demo_${Date.now()}`;
        
        return mockCheckoutUrl;
    } catch (error) {
        console.error("Error creating checkout:", error);
        return "/";
    }
}