import Link from "next/link";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import BrandLogo from "../assets/brandlogo";
import ANIM__FadeInOutOnScroll from "../anims/fadein.anim";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary via-primary to-secondary [&>*]:text-white">
      <div className="h-2 bg-gradient-to-r from-secondary/5 via-secondary to-secondary/5"></div>
      <div className="section container">
        <section className="flex flex-col sm:flex-row flex-wrap items-start justify-between large-gap md:small-gap">
          <ANIM__FadeInOutOnScroll className="order-4 md:order-first w-full md:w-auto">
            <div className="small-gap">
              <BrandLogo dark={true} />
            </div>
            <p className="py-[25px]">
              Actoviz is your trusted partner for premium software rental solutions. Access enterprise-grade Learning Management Systems, International Calling Dialers, and custom AI integrations without large upfront investments. Start your subscription today and scale your business with the right tools.
            </p>
            <div className="text-icon py-[25px]">
              <p className="pb-[25px]">Stay Updated with Our Latest Solutions</p>
              <div className="icons flex flex-row small-gap">
                <Link
                  href="https://www.facebook.com/actoviz"
                  target="_blank"
                >
                  <Facebook className=" cursor-pointer stroke-[1.3px] hover:stroke-secondary" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/actoviz/"
                  target="_blank"
                >
                  <Linkedin className=" cursor-pointer stroke-[1.3px] hover:stroke-secondary" />
                </Link>
                <Link
                  href="https://www.instagram.com/actoviz"
                  target="_blank"
                >
                  <Instagram className=" cursor-pointer stroke-[1.3px] hover:stroke-secondary" />
                </Link>
              </div>
            </div>
            <p className="pt-[25px]">
              © {new Date().getFullYear()} Actoviz. All rights reserved. | Software Rental Solutions
            </p>
          </ANIM__FadeInOutOnScroll>

          {HeadingLinks.map((item) => {
            return (
              <ANIM__FadeInOutOnScroll
                key={item.id}
                className=" flex flex-col items-start flex-start small-gap md:flex-start"
              >
                <h4 className="font-medium text-white text-lg md:text-xl">
                  {item.title}
                </h4>
                {item.links.map((link) => {
                  return (
                    <Link
                      key={link.id}
                      href={link.link}
                      className="hover:text-secondary"
                    >
                      {link.text}
                    </Link>
                  );
                })}
              </ANIM__FadeInOutOnScroll>
            );
          })}
        </section>
      </div>
    </footer>
  );
};

export default Footer;

const HeadingLinks = [
  {
    id: 0,
    title: "Company",
    links: [
      {
        id: 0,
        text: "Home",
        link: "/",
      },
      {
        id: 1,
        text: "About us",
        link: "/about-us",
      },
      {
        id: 2,
        text: "Contact us",
        link: "/contact-us",
      },
      {
        id: 3,
        text: "Get Free Consultation",
        link: "/get-a-free-consultation",
      },
    ],
  },
  {
    id: 1,
    title: "Software Solutions",
    links: [
      {
        id: 0,
        text: "Learning Management System",
        link: "/solutions/lms",
      },
      {
        id: 1,
        text: "International Calling Dialer",
        link: "/solutions/dialer",
      },
      {
        id: 2,
        text: "Custom AI Integrations",
        link: "/services",
      },
      {
        id: 3,
        text: "Web Development",
        link: "/services",
      },
    ],
  },
  {
    id: 2,
    title: "Support & Resources",
    links: [
      {
        id: 0,
        text: "Pricing Plans",
        link: "/pricing",
      },
      {
        id: 1,
        text: "Help Center",
        link: "/help",
      },
      {
        id: 2,
        text: "Documentation",
        link: "/docs",
      },
      {
        id: 3,
        text: "Training Resources",
        link: "/training",
      },
    ],
  },
];
