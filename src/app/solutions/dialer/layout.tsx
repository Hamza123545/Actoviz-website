import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actoviz Web Dialer | Professional Cloud-Based Calling Solution",
  description: "Complete voice communication platform for sales teams, customer support, and business operations. Manage calls, track performance, and scale your communication with our comprehensive, cloud-based dialer.",
  keywords: "Actoviz Web Dialer, cloud-based dialer, business communication, call management, call recording, call analytics, web dialer, professional calling solution, sales dialer, customer support dialer",
};

export default function DialerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
