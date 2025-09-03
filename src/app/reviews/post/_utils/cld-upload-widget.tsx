"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface FileUploadWidgetProps {
    onUpload: (url: string) => void;
    className?: string;
}

const FileUploadWidget = ({ onUpload, className }: FileUploadWidgetProps) => {
    const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        try {
            // Simulate file upload
            console.log("Uploading file:", file.name);
            
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Create a mock URL for demo purposes
            const mockUrl = `https://demo-upload.com/${file.name}_${Date.now()}`;
            
            onUpload(mockUrl);
            
        } catch (error) {
            console.error("Upload error:", error);
            alert("Upload failed. This is a demo.");
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className={className}>
            <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
            />
            <Button
                asChild
                disabled={isUploading}
                className="w-full"
            >
                <label htmlFor="file-upload">
                    {isUploading ? "Uploading..." : "Upload Image"}
                </label>
            </Button>
        </div>
    );
};

export default FileUploadWidget;
