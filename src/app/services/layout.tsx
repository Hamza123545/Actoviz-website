import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Actoviz | Comprehensive Technology Solutions",
  description: "Explore our comprehensive technology services including custom chatbot AI integrations, web development, complex web app development, mobile apps, and more. Transform your business with our expert solutions.",
  keywords: "technology services, web development, AI chatbot, mobile app development, database integration, cloud solutions, custom software development",
  openGraph: {
    title: "Our Services - Actoviz | Comprehensive Technology Solutions",
    description: "Explore our comprehensive technology services including custom chatbot AI integrations, web development, complex web app development, mobile apps, and more.",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
