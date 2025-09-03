"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const DemoCheckoutPage = () => {
  const searchParams = useSearchParams();
  const gigId = searchParams.get("gigId");
  const session = searchParams.get("session");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (gigId && session) {
      // Simulate processing
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setIsCompleted(true);
      }, 3000);
    }
  }, [gigId, session]);

  const getGigName = (id: string) => {
    switch (id) {
      case "1":
        return "Learning Management System (LMS)";
      case "2":
        return "International Calling Dialer";
      default:
        return "Software Solution";
    }
  };

  if (isProcessing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Processing Your Request</CardTitle>
            <CardDescription>
              Setting up your software rental...
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-sm text-gray-600">
              This is a demo. In a real application, this would connect to your backend.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-green-600">Setup Complete!</CardTitle>
            <CardDescription>
              Your software rental has been configured successfully.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800">
                {getGigName(gigId || "")}
              </h3>
              <p className="text-sm text-green-600 mt-1">
                Session ID: {session}
              </p>
            </div>
            <p className="text-sm text-gray-600">
              This is a demonstration of the checkout flow. In a real application, 
              you would receive access credentials and setup instructions.
            </p>
            <div className="space-y-2">
              <Button asChild className="w-full">
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>Demo Checkout</CardTitle>
          <CardDescription>
            This is a demonstration checkout page
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            Invalid or missing checkout parameters.
          </p>
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DemoCheckoutPage;
