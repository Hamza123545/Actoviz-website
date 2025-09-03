import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Management System (LMS) | Actoviz - Software Rental Platform",
  description: "Transform your training programs with our comprehensive LMS solution. Features include multi-user management, content management, progress tracking, and flexible pricing plans.",
  keywords: "LMS, Learning Management System, online training, corporate training, e-learning, employee training, course management",
};

export default function LMSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
