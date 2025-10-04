# 🚀 Plesk Deployment Guide for Actoviz Website

## 📋 Files to Upload to Plesk

### **Required Files:**
1. ✅ `server.js` - Main server file
2. ✅ `package.json` - Dependencies
3. ✅ `package-lock.json` - Lock file
4. ✅ `next.config.js` - Next.js config
5. ✅ `tailwind.config.ts` - Tailwind config
6. ✅ `tsconfig.json` - TypeScript config
7. ✅ `postcss.config.js` - PostCSS config
8. ✅ `components.json` - UI components config
9. ✅ `.htaccess` - Apache routing
10. ✅ `src/` folder - Source code
11. ✅ `public/` folder - Static assets
12. ✅ `.next/` folder - Build output (after npm run build)

## 🔧 Plesk Configuration

### **1. Node.js Settings:**
- **Enable Node.js:** Yes
- **Node.js Version:** 18.x or higher
- **Application Root:** Your domain folder
- **Startup File:** `server.js`
- **Document Root:** Your domain folder

### **2. Environment Variables:**
```
EMAIL_PASSWORD=your_actual_email_password
SMTP_HOST=actoviz.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@actoviz.com
SMTP_FROM=noreply@actoviz.com
ADMIN_EMAIL=contact@actoviz.com
NODE_ENV=production
```

### **3. Build Commands:**
```bash
npm install
npm run build
npm start
```

## 🚀 Deployment Steps

### **Step 1: Upload Files**
1. Upload all files to your domain directory
2. Make sure `.next` folder is included (build output)

### **Step 2: Install Dependencies**
1. Go to Plesk > Domains > Your Domain > Node.js
2. Run: `npm install`

### **Step 3: Build Application**
1. Run: `npm run build`
2. Wait for build to complete

### **Step 4: Start Application**
1. Set startup file to: `server.js`
2. Click "Start" or "Restart"

### **Step 5: Test**
1. Visit your domain
2. Test contact forms
3. Check email delivery

## 🔍 Troubleshooting

### **If website shows error:**
1. Check Node.js is running
2. Verify all files are uploaded
3. Check environment variables
4. Check Plesk error logs

### **If emails don't work:**
1. Verify SMTP settings
2. Check environment variables
3. Test SMTP connection
4. Check email spam folder

## ✅ Success Indicators

- ✅ Website loads without errors
- ✅ All pages work properly
- ✅ Contact forms submit successfully
- ✅ Emails received in inbox
- ✅ No console errors

## 📞 Support

If you encounter any issues:
1. Check Plesk error logs
2. Verify all files are uploaded correctly
3. Ensure environment variables are set
4. Test SMTP connection separately
