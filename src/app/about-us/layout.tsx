// import Head from "next/head";
import { ReactElement } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Actoviz | Trusted Digital Partner",
  description:
    "Learn about Actoviz - your trusted digital partner. Discover our journey, expertise, and commitment to delivering innovative solutions for businesses globally.",
};

const AboutUsLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default AboutUsLayout;
