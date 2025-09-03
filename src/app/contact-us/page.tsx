"use client";

import { Building, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import ContactForm from "./contact-form";


const ContactUs = () => {
  const ContactInfo = [
    {
      id: 0,
      icon: <Phone />,
      title: "Call Us",
      info: "+1-800-ACTOVIZ",
    },
    {
      id: 1,
      icon: <Building />,
      title: "Main Office",
      info: "123 Tech Plaza, Innovation District, Silicon Valley, CA 94025",
    },
    {
      id: 2,
      icon: <MessageCircle />,
      title: "WhatsApp",
      info: "+1-800-ACTOVIZ",
    },
  ];
  return (
    <div className="bg-[url('/images/backgrounds/StarBackground.svg')] bg-cover bg-center">
      <ANIM__FadeInOutOnScroll className="container section grid grid-cols-1 md:grid-cols-2 small-gap">
        <ANIM__FadeInOutOnScroll className="flex flex-col bg-primary rounded-xl p-[25px] lg:p-[50px] large-gap">
          <div className="flex flex-col small-gap">
            <h1 className="text-white">Get in Touch</h1>
            <p className="text-secondarymuted">
              Ready to transform your business with our software rental solutions? 
              Contact us today to discuss your needs and discover how Actoviz can help 
              you access premium software without the heavy upfront costs.
            </p>
          </div>
          {ContactInfo.map((item: any) => {
            return (
              <ANIM__FadeInOutOnScroll
                key={item.id}
                className="grid grid-cols-1 gap-[10px]"
              >
                <div className="[&>svg]:stroke-white">{item.icon}</div>
                <h3 className="text-[16px] lg:text-[20px] font-medium text-white">
                  {item.title}
                </h3>
                {item.id === 2 || item.id === 0 ? (
                  <Link href={`tel:${item.info}`} className="text-white">
                    {item.info}
                  </Link>
                ) : (
                  <p className="text-white">{item.info}</p>
                )}
              </ANIM__FadeInOutOnScroll>
            );
          })}
        </ANIM__FadeInOutOnScroll>
        <ContactForm />
      </ANIM__FadeInOutOnScroll>
    </div>
  );
};

export default ContactUs;
