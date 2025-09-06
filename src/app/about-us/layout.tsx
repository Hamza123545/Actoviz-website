// import Head from "next/head";
import { ReactElement } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Actoviz | Leading Software Rental Platform",
  description:
    "Learn about Actoviz - the leading software rental platform. Discover our journey, expertise, and commitment to making enterprise-grade software accessible to businesses of all sizes through flexible subscription models.",
};

const AboutUsLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default AboutUsLayout;
