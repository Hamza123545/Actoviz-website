import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, history } = body;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Replace with your actual backend URL
    const backendUrl = process.env.CHATBOT_BACKEND_URL || 'http://localhost:8000';
    
    const response = await fetch(`${backendUrl}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        history: history || []
      }),
    });

    if (!response.ok) {
      throw new Error(`Backend responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Chatbot API error:', error);
    
    // Fallback response if backend is not available
    return NextResponse.json({
      response: "I'm currently experiencing technical difficulties. Please try again later or contact our support team at info@actoviz.com for immediate assistance.",
      history: []
    });
  }
}
