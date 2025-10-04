/* eslint-disable @next/next/next-script-for-ga */
import "./globals.scss";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PageView from "@/lib/datalayer/page-view";
import { Poppins, Lato } from "next/font/google";
import { Toaster as ToasterSonner } from "sonner";
import { CalDotComProvider, DataLayerProvider } from "@/lib/scripts";
import ChatbotWidget from "@/components/chatbot/chatbot-widget";
// import { TagManagerProvider } from "@/lib/scripts"; // Commented out to remove external API calls

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

// Declare the dataLayer object as a global variable
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const metadata: Metadata = {
  title: "Actoviz | Premium Software Rental Platform",
  description:
    "Access premium software applications on a subscription basis. Rent Learning Management Systems, International Calling Dialers, and enterprise solutions from Actoviz.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <DataLayerProvider />
        <CalDotComProvider />
      </head>

      <body className={`${poppins.className} ${lato.variable}`}>
        {/* <TagManagerProvider /> */}
        <PageView />
        <Navbar />
        <main className="overflow-hidden">{children}</main>
        <SpeedInsights />
        <Toaster />
        <ToasterSonner />
        <ChatbotWidget />
        <Footer />
      </body>
    </html>
  );
}
