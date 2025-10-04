#!/bin/bash

echo "🚀 Starting Plesk Deployment for Actoviz Website..."

# Create production build
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

# Create .env.production file
echo "🔐 Creating environment file..."
cat > .env.production << EOF
EMAIL_PASSWORD=your_actual_email_password
SMTP_HOST=actoviz.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@actoviz.com
SMTP_FROM=noreply@actoviz.com
ADMIN_EMAIL=contact@actoviz.com
NODE_ENV=production
EOF

# Create server.js for Plesk
echo "🖥️ Creating server.js..."
cat > server.js << 'EOF'
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
})
EOF

# Create package.json for production
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

# Install production dependencies
echo "📥 Installing production dependencies..."
npm install --production

# Create .htaccess for proper routing
echo "🔧 Creating .htaccess..."
cat > .htaccess << 'EOF'
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [QSA,L]
EOF

echo "✅ Deployment package created successfully!"
echo "📁 Files are ready in 'plesk-deployment' folder"
echo "🚀 Upload these files to your Plesk domain directory"
