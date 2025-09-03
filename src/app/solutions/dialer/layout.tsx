import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Calling Dialer | Actoviz - Software Rental Platform",
  description: "Break down geographical barriers with our advanced international calling solution. Connect with customers worldwide, reduce costs, and expand your global reach.",
  keywords: "international calling, dialer, global communication, international business, VoIP, international phone calls, business communication",
};

export default function DialerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
