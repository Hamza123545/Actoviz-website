#!/bin/bash

echo "🚀 Preparing Actoviz Website for Plesk Deployment..."

# Build the application
echo "📦 Building Next.js application..."
npm run build

# Create deployment directory
echo "📁 Creating deployment package..."
mkdir -p plesk-deployment
cd plesk-deployment

# Copy all necessary files
echo "📋 Copying files..."
cp -r ../.next ./
cp -r ../public ./
cp -r ../src ./
cp ../package.json ./
cp ../package-lock.json ./
cp ../next.config.js ./
cp ../tailwind.config.ts ./
cp ../tsconfig.json ./
cp ../postcss.config.js ./
cp ../components.json ./
cp ../server.js ./
cp ../.htaccess ./

# Create production package.json
echo "📦 Creating production package.json..."
cat > package.json << 'EOF'
{
  "name": "actoviz-website",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "node server.js",
    "build": "next build",
    "dev": "next dev"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "nodemailer": "^6.9.0"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
EOF

# Create .env.production
echo "🔐 Creating environment file..."
cat > .env.production << 'EOF'
EMAIL_PASSWORD=your_actual_email_password
SMTP_HOST=actoviz.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@actoviz.com
SMTP_FROM=noreply@actoviz.com
ADMIN_EMAIL=contact@actoviz.com
NODE_ENV=production
EOF

echo "✅ Deployment package created successfully!"
echo "📁 Files are ready in 'plesk-deployment' folder"
echo "🚀 Upload these files to your Plesk domain directory"
echo ""
echo "📋 Next Steps:"
echo "1. Upload all files from 'plesk-deployment' folder to Plesk"
echo "2. Set startup file to 'server.js' in Plesk Node.js settings"
echo "3. Set environment variables in Plesk"
echo "4. Run 'npm install' in Plesk"
echo "5. Start the application"
