export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { paramsToSign } = body;

        // Simulate file upload signature generation
        console.log("File upload params requested:", paramsToSign);
        
        // Return a mock signature for demo purposes
        const mockSignature = "demo_signature_" + Date.now();

        return Response.json({ signature: mockSignature });
    } catch (error) {
        console.error("Error generating signature:", error);
        return Response.json({ error: "Failed to generate signature" }, { status: 500 });
    }
}