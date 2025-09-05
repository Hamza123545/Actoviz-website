"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

interface TokenVerifyProps {
  email: string;
  token: string;
}

export default function TokenVerify({ email, token }: TokenVerifyProps) {
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [message, setMessage] = useState('Verifying your token...');

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch('/api/verify-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, token }),
        });

        const data = await response.json();

        if (response.ok) {
          setStatus('success');
          setMessage('Your email has been successfully verified!');
        } else {
          setStatus('error');
          setMessage(data.message || 'Token verification failed. Please try again.');
        }
      } catch (error) {
        setStatus('error');
        setMessage('An error occurred during verification. Please try again.');
      }
    };

    if (email && token) {
      verifyToken();
    } else {
      setStatus('error');
      setMessage('Invalid verification link. Please check your email and try again.');
    }
  }, [email, token]);

  const getIcon = () => {
    switch (status) {
      case 'verifying':
        return <Loader2 className="h-8 w-8 animate-spin text-blue-500" />;
      case 'success':
        return <CheckCircle className="h-8 w-8 text-green-500" />;
      case 'error':
        return <XCircle className="h-8 w-8 text-red-500" />;
    }
  };

  const getTitle = () => {
    switch (status) {
      case 'verifying':
        return 'Verifying Your Email';
      case 'success':
        return 'Email Verified Successfully';
      case 'error':
        return 'Verification Failed';
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          {getIcon()}
        </div>
        <CardTitle>{getTitle()}</CardTitle>
        <CardDescription>
          {message}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        {status === 'success' && (
          <Button 
            onClick={() => window.location.href = '/login'}
            className="w-full"
          >
            Continue to Login
          </Button>
        )}
        {status === 'error' && (
          <Button 
            onClick={() => window.location.href = '/contact-us'}
            variant="outline"
            className="w-full"
          >
            Contact Support
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
