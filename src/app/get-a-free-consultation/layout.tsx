import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Consultation | Actoviz - Software Rental Platform",
  description: "Schedule your free consultation with our experts to learn how our Learning Management System and International Calling Dialer can transform your business. No obligation, expert guidance.",
  keywords: "free consultation, software rental, LMS consultation, dialer consultation, business software advice",
};

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
