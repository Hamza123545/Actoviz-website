import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        
        // Simulate webhook processing
        console.log("Webhook received:", body);
        
        // Simulate successful processing
        return NextResponse.json({ received: true, message: "Webhook processed successfully (demo)" });
    } catch (err) {
        console.error("Webhook error:", err);
        return NextResponse.json({ error: 'Webhook error' }, { status: 400 });
    }
}