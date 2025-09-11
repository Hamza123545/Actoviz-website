// Test script to verify email functionality
// Run this with: node test-email.js

const testEmailData = {
  formData: {
    name: "Test User",
    email: "test@example.com",
    phone: "+1234567890",
    message: "This is a test message from the email system.",
    services: ["LMS", "Calling Dialer"],
    _metadata: {
      timestamp: new Date().toLocaleString(),
      formType: 'contact',
      userAgent: 'Test Script',
      url: 'http://localhost:3000/test'
    }
  },
  formType: 'contact',
  recipientEmail: 'hello@actoviz.com'
};

async function testEmailAPI() {
  try {
    console.log('Testing email API...');
    console.log('Sending test data:', JSON.stringify(testEmailData, null, 2));
    
    const response = await fetch('http://localhost:3000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testEmailData),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Email API test successful!');
      console.log('Response:', result);
    } else {
      console.log('❌ Email API test failed!');
      console.log('Error:', result);
    }
  } catch (error) {
    console.log('❌ Email API test error:', error.message);
    console.log('Make sure your development server is running on http://localhost:3000');
  }
}

// Run the test
testEmailAPI();
