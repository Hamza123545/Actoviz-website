# Plesk Deployment Guide for Actoviz Website

## Prerequisites
- Plesk hosting account with Node.js support
- Domain name configured in Plesk
- Git repository access
- SMTP email credentials (contact@actoviz.com)

## Step 1: Prepare Your Local Environment

1. **Install dependencies:**
   ```bash
   npm install
   npm install nodemailer @types/nodemailer
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

## Step 2: Configure Environment Variables

1. **Create production environment file:**
   ```bash
   # Create .env.production
   EMAIL_PASSWORD=your_actual_email_password
   ```

2. **Update with your actual SMTP credentials:**
   - Host: actoviz.com
   - Port: 587
   - Email: contact@actoviz.com
   - Password: your email password

## Step 3: Deploy to Plesk

### Method 1: Git Deployment (Recommended)
1. **Push your code to Git repository:**
   ```bash
   git add .
   git commit -m "Production deployment ready"
   git push origin main
   ```

2. **In Plesk, set up Git deployment:**
   - Go to Plesk > Domains > Your Domain > Git
   - Add your repository URL
   - Set deployment path to your domain folder
   - Add deployment script:
   ```bash
   npm install
   npm install nodemailer @types/nodemailer
   npm run build
   ```

### Method 2: Manual Upload
1. **Run deployment script:**
   ```bash
   chmod +x deploy-plesk.sh
   ./deploy-plesk.sh
   ```

2. **Upload the generated `actoviz-deployment.tar.gz` to Plesk**

3. **Extract in your domain's httpdocs directory**

## Step 4: Configure Plesk Settings

1. **Enable Node.js:**
   - Go to Plesk > Domains > Your Domain > Node.js
   - Enable Node.js
   - Set Node.js version to 18.x or higher
   - Set application root to your domain folder
   - Set application startup file to `npm start` (or leave empty for default)

2. **Set Environment Variables:**
   - Go to Plesk > Domains > Your Domain > Node.js > Environment Variables
   - Add these variables:
     ```
     EMAIL_PASSWORD = your_actual_email_password
     SMTP_HOST = actoviz.com
     SMTP_PORT = 587
     SMTP_SECURE = false
     SMTP_USER = contact@actoviz.com
     SMTP_FROM = noreply@actoviz.com
     ADMIN_EMAIL = contact@actoviz.com
     ```

3. **Set up SSL certificate:**
   - Go to Plesk > Domains > Your Domain > SSL/TLS Certificates
   - Enable "Let's Encrypt" or upload your certificate

4. **Configure Apache/Nginx:**
   - Go to Plesk > Domains > Your Domain > Apache & nginx Settings
   - Add redirect rules for SPA routing

## Step 6: Test Your Deployment

1. **Visit your domain** to ensure the site loads
2. **Test contact forms** to ensure emails are working
3. **Test chatbot functionality** (if configured)
4. **Check all pages** for proper routing

## Troubleshooting

### Common Issues:

1. **404 errors on page refresh:**
   - Ensure redirect rules are properly configured
   - Check that `index.html` is in the root directory

2. **Email forms not working:**
   - Verify EmailJS configuration
   - Check browser console for errors
   - Test with a simple form first

3. **Images not loading:**
   - Ensure images are in the `public` folder
   - Check image paths are correct

4. **Build errors:**
   - Run `npm run build` locally first
   - Check for TypeScript errors
   - Ensure all dependencies are installed

## Performance Optimization

1. **Enable Gzip compression** in Plesk
2. **Set up CDN** for static assets
3. **Configure caching headers** for static files
4. **Optimize images** before upload

## Security Considerations

1. **Keep dependencies updated**
2. **Use HTTPS** for all communications
3. **Validate form inputs** on the client side
4. **Implement rate limiting** for forms (if needed)

## Support

If you encounter issues:
1. Check Plesk error logs
2. Verify all environment variables are set
3. Test locally first
4. Contact your hosting provider for Plesk-specific issues
