"use server";

import { cookies } from "next/headers";

export const A___Auth__Login = async (data: { email: string, password: string }) => {
    try {
        // Simulate login success
        console.log("Login attempt:", data);
        
        const mockToken = "demo_token_" + Date.now();
        (await cookies()).set("token", mockToken);
        
        return {
            success: true,
            message: "Login successful",
            result: { token: mockToken }
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong"
        };
    }
}

export const A___Auth__Register = async (data: { email: string, password: string, phone: string }) => {
    try {
        // Simulate registration success
        console.log("Registration attempt:", data);
        
        return {
            success: true,
            message: "Registration successful! Please check your email for verification."
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong"
        };
    }
}

export const A___Auth__Verify = async (email: string, token: string) => {
    try {
        // Simulate verification success
        console.log("Verification attempt:", { email, token });
        
        return {
            success: true,
            message: "Email verified successfully!"
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong"
        };
    }
}

