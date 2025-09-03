import React from "react";
import CodeCloud from "@/components/assets/code-cloud";
import Campaigns from "@/components/assets/campaigns";

export const homeFeaturesData = [
  {
    id: 1,
    image: <CodeCloud key="lms-icon" />,
    title: "Learning Management System (LMS)",
    description: (
      <>
        Complete e-learning platform for <span>educational institutions</span> and corporate training needs.
      </>
    ),
    list: ["Course creation and management", "Student progress tracking", "Assessment tools", "Video conferencing integration"],
    link: "/solutions/lms",
  },
  {
    id: 2,
    image: <Campaigns key="dialer-icon" />,
    title: "International Calling Dialer",
    description: (
      <>
        Professional <span>calling solution</span> for global communication with advanced features.
      </>
    ),
    list: [
      "Global calling capabilities",
      "Call recording and analytics",
      "CRM integration",
      "Multi-language support",
    ],
    link: "/solutions/dialer",
  },
];

export const homeTestimonialData = {
  highlighter: "Customer Success Stories",
  H2: (
    <>
      Trusted by Businesses
      <br />
      Worldwide
    </>
  ),
  paragraphs: [
    <>
      Our <span>satisfied</span> clients from various industries trust Actoviz for their LMS and calling needs. 
      We deliver <span>reliable solutions</span> with exceptional support.
    </>,
  ],
  testimonialList: [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "usa.svg",
      imageSlug: "user1",
      testimonial: (
        <>
          Actoviz's LMS has transformed our corporate training program. The platform is intuitive, 
          feature-rich, and their support team is incredibly responsive. Highly recommended!
        </>
      ),
    },
    {
      id: 2,
      name: "Michael Chen",
      country: "australia.svg",
      imageSlug: "user2",
      testimonial: (
        <>
          The International Calling Dialer has revolutionized our global communication. 
          Crystal clear calls, excellent pricing, and seamless integration with our existing systems.
        </>
      ),
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      country: "spain.svg",
      imageSlug: "user3",
      testimonial: (
        <>
          We've been using Actoviz's LMS for over a year now. The monthly rental model 
          saved us thousands in upfront costs, and the software is enterprise-grade quality.
        </>
      ),
    },
  ],
};

export const homeFAQ = {
  title: <>Frequently Asked Questions</>,
  faqs: [
    {
      id: 1,
      question: <>What is Actoviz, and what services do you provide?</>,
      answer: (
        <>
          Actoviz is a software rental platform that provides access to premium business applications 
          including Learning Management Systems and International Calling Dialers on flexible subscription plans.
        </>
      ),
    },
    {
      id: 2,
      question: (
        <>
          How does the software rental model work?
        </>
      ),
      answer: (
        <>
          Instead of purchasing expensive software licenses, you can rent our applications on a 
          monthly or annual basis. This includes full access to the software, updates, and support 
          without large upfront investments.
        </>
      ),
    },
    {
      id: 3,
      question: <>What are the benefits of renting software vs. buying?</>,
      answer: (
        <>
          Renting software offers lower upfront costs, automatic updates, technical support, 
          flexibility to scale up or down, and access to enterprise-grade solutions without 
          the commitment of ownership.
        </>
      ),
    },
    {
      id: 4,
      question: <>Can I cancel my subscription at any time?</>,
      answer: (
        <>
          Yes, our subscriptions are flexible. You can cancel at any time with no long-term 
          commitments. We also offer different billing cycles to suit your business needs.
        </>
      ),
    },
    {
      id: 5,
      question: (
        <>
          Do you provide training and support for the software?
        </>
      ),
      answer: (
        <>
          Absolutely! We provide comprehensive onboarding, training materials, and 24/7 
          technical support to ensure you get the most out of our software solutions.
        </>
      ),
    },
  ],
};
