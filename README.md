# ACTOVIZ - Software Rental Platform

A modern, responsive marketing website for Actoviz, a software rental company specializing in Learning Management Systems (LMS) and International Calling Dialers.

## 🚀 Features

- **Static Marketing Website**: No external API dependencies
- **Responsive Design**: Built with Next.js 15 and Tailwind CSS
- **Modern UI Components**: Using ShadcnUI and Radix UI primitives
- **Demo Functionality**: Simulated forms and interactions for demonstration purposes
- **SEO Optimized**: Built with Next.js App Router for optimal performance

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.1 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS, SCSS
- **UI Components**: ShadcnUI, Radix UI
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/           # Authentication pages (demo)
│   ├── about-us/         # About page
│   ├── contact-us/       # Contact form (demo)
│   ├── pricing/          # Pricing plans
│   ├── solutions/        # Software solutions showcase
│   ├── resources/        # Resources and documentation
│   └── demo-checkout/    # Demo checkout flow
├── components/            # Reusable UI components
├── lib/                   # Utilities and constants
└── middleware.ts         # Next.js middleware
```

## 🎯 What This Website Does

This is a **static marketing website** designed to:

1. **Showcase Software Solutions**: LMS and International Calling Dialer
2. **Present Pricing Plans**: Transparent subscription options
3. **Collect Lead Information**: Contact forms and quote requests
4. **Demonstrate Features**: Interactive demos and examples
5. **Provide Information**: About company, services, and resources

## ⚠️ Important Notes

- **No External APIs**: All functionality is simulated for demonstration
- **Demo Forms**: Contact forms, authentication, and checkout are demo-only
- **Static Content**: Content is hardcoded and easily customizable
- **No Backend**: This is a frontend-only marketing website

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## 🔧 Customization

### Content Updates
- **Company Information**: Update `src/lib/constants.ts`
- **Page Content**: Modify files in `src/app/` directories
- **Styling**: Customize `src/app/globals.scss` and Tailwind config

### Adding New Pages
1. Create new directory in `src/app/`
2. Add `page.tsx` file
3. Update navigation in `src/components/layout/navbar.tsx`

### Styling Changes
- **Colors**: Update `tailwind.config.ts`
- **Components**: Modify files in `src/components/ui/`
- **Layout**: Update `src/components/layout/` components

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Design System

- **Primary Colors**: Customizable through Tailwind config
- **Typography**: Consistent font hierarchy and spacing
- **Components**: Reusable UI components with consistent styling
- **Animations**: Smooth transitions and micro-interactions

## 📄 License

This project is for demonstration purposes. All content and branding belong to Actoviz.

## 🤝 Support

For questions about this website template or customization needs, please refer to the documentation or contact the development team.

---

**Note**: This is a marketing website template. All forms, authentication, and interactive features are demonstrations and do not connect to real backend services.
