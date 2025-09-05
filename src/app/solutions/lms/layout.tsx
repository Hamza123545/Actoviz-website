import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quran Tutor Management System | Actoviz - Complete Learning Management Solution",
  description: "Comprehensive cloud-based learning management platform for Islamic educational institutions. Manage students, tutors, classes, finances, and more with our all-in-one Quran Tutor Management System.",
  keywords: "Quran Tutor Management, Islamic Education, LMS, Learning Management System, Quran Center, Islamic School, Student Management, Tutor Management, Islamic Academy, Educational Software",
};

export default function LMSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
