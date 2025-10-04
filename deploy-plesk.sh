#!/bin/bash

# Plesk Deployment Script for Actoviz Website
# This script automates the deployment process for Plesk hosting

echo "🚀 Starting Plesk deployment for Actoviz website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Install EmailJS if not already installed
echo "📧 Installing EmailJS..."
npm install @emailjs/browser

# Build the project for production
echo "🔨 Building the project for production..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed. The 'dist' directory was not created."
    exit 1
fi

echo "✅ Build completed successfully!"

# Install production dependencies
echo "📦 Installing production dependencies..."
npm install --production

# Create deployment package with all necessary files
echo "📦 Creating deployment package..."
tar -czf actoviz-deployment.tar.gz \
    -C . \
    dist/ \
    package.json \
    package-lock.json \
    next.config.js \
    public/ \
    .env.production \
    deploy-plesk.sh \
    plesk-deployment.md

echo "🎉 Deployment package created: actoviz-deployment.tar.gz"
echo ""
echo "📋 Next steps:"
echo "1. Upload the 'actoviz-deployment.tar.gz' file to your Plesk hosting"
echo "2. Extract the contents to your domain's httpdocs directory"
echo "3. Copy the .htaccess file from public/.htaccess to your domain root"
echo "4. Configure your environment variables in Plesk"
echo "5. Set up your email service (EmailJS or Formspree)"
echo ""
echo "📖 For detailed instructions, see: plesk-deployment.md"
