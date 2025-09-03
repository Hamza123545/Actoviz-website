"use client";
import { BrandCarousel } from "@/app/_utils/carousel";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import SectionHead from "@/components/molecule/section-head";
import ShortReviews from "@/components/molecule/short-reviews";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import {
  Clock,
  Globe,
  MessageCircle,
  PieChartIcon,
  RocketIcon,
  Stars,
  Wand2Icon,
} from "lucide-react";
import { useState } from "react";
import MessageFromCEO from "./_utils/meet-our-ceo";

const AboutUS = () => {

  const [disable, setDisable] = useState(false);
  const [email, setEmail] = useState("");
  const NumberCards = [
    {
      id: 1,
      numbers: "500+",
      title: "Active Subscriptions",
      desc: (
        <>
          We currently serve over 500 businesses worldwide with our software rental solutions, 
          helping them access enterprise-grade applications without heavy upfront investments.
        </>
      ),
    },
    {
      id: 2,
      numbers: "95%",
      title: "Customer Satisfaction",
      desc: (
        <>
          Our commitment to quality and support has resulted in a 95% customer satisfaction rate, 
          with clients praising our reliable software and exceptional service.
        </>
      ),
    },
    {
      id: 3,
      numbers: "50+",
      title: "Software Solutions",
      desc: (
        <>
          We offer a comprehensive portfolio of over 50 software solutions covering various 
          business needs from learning management to enterprise resource planning.
        </>
      ),
    },
  ];
  const Values = [
    {
      id: 1,
      icon: <RocketIcon />,
      title: "Innovation First",
      desc: (
        <>
          We continuously innovate our software solutions to meet evolving business needs, 
          ensuring our clients always have access to cutting-edge technology.
        </>
      ),
    },
    {
      id: 2,
      icon: <Clock />,
      title: "24/7 Support",
      desc: (
        <>
          Our dedicated support team is available around the clock to ensure your software 
          runs smoothly and your business operations never stop.
        </>
      ),
    },
    {
      id: 3,
      icon: <Stars />,
      title: "Flexible Solutions",
      desc: (
        <>
          We believe in providing flexible software rental options that scale with your business. 
          No long-term commitments, just the solutions you need when you need them.
        </>
      ),
    },
    {
      id: 4,
      icon: <MessageCircle />,
      title: "Customer Success",
      desc: (
        <>
          Your success is our priority. We work closely with clients to ensure they maximize 
          the value of our software solutions and achieve their business goals.
        </>
      ),
    },
  ];
  const Offerings = [
    {
      id: 1,
      icon: <Wand2Icon />,
      title: "Software Rental Platform",
      desc: (
        <>
          Access premium business applications through our flexible subscription model, 
          eliminating the need for large upfront software investments.
        </>
      ),
    },
    {
      id: 2,
      icon: <PieChartIcon />,
      title: "Learning Management Systems",
      desc: (
        <>
          Comprehensive e-learning platforms for educational institutions and corporate 
          training, featuring advanced analytics and reporting capabilities.
        </>
      ),
    },
    {
      id: 3,
      icon: <Stars />,
      title: "Communication Solutions",
      desc: (
        <>
          Professional calling solutions including international dialers with advanced 
          features like call recording, analytics, and CRM integration.
        </>
      ),
    },
  ];
  return (
    <>
      <section className="bg-muted">
        <div className="bg-[url('/images/backgrounds/WhiteGrid.svg')] bg-cover bg-center">
          <div className="container section flex flex-col large-gap">
            <SectionHead
              highlighter="About us"
              H2={<>About Actoviz</>}
              paragraphs={[
                <>
                  Actoviz is a leading software rental platform that democratizes access to 
                  premium business applications. We believe that every business, regardless of size, 
                  should have access to enterprise-grade software solutions without the burden of 
                  heavy upfront costs or long-term commitments.
                </>,
              ]}
            />
            <div className="w-full bg-[url('/images/pages/about-us/about.jpg')] bg-center bg-cover grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 large-gap p-[25px] md:p-[50px] rounded-[10px]">
              {NumberCards.map((item: any) => {
                return (
                  <ANIM__FadeInOutOnScroll
                    key={item.id}
                    className={`backdrop-blur-lg bg-white/30 border border-secondarymuted rounded-[10px] px-4 py-8 flex flex-col small-gap text-center items-center justify-center ${
                      item.id === 3
                        ? "col-span-1 sm:col-span-2 lg:col-span-1"
                        : "col-span-1"
                    }`}
                  >
                    <span className="text-6xl font-medium text-white">
                      {item.numbers}
                    </span>
                    <h3 className="text-white text-[16px] md:text-[20px] font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-white">{item.desc}</p>
                  </ANIM__FadeInOutOnScroll>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="section flex flex-col large-gap bg-[url('/images/backgrounds/StarBackground.svg')] bg-center bg-cover">
        <SectionHead
          highlighter="Our Mission"
          H2={<>Empowering businesses through accessible software solutions</>}
          paragraphs={[
            <>We're committed to making enterprise-grade software accessible to businesses of all sizes</>,
          ]}
        />
        <ANIM__FadeInOutOnScroll className="grid grid-cols-1 sm:grid-cols-2 large-gap container">
          {Values.map((item: any) => {
            return (
              <div
                key={item.id}
                className="w-full h-full flex flex-col small-gap text-center items-center justify-center bg-white/5 backdrop-blur border rounded-[10px] border-secondarymuted  hover:shadow-lg p-[25px] transition ease-in-out duration-750"
              >
                <div className="[&>svg]:stroke-secondary border border-secondary border-dashed rounded inline-block mx-auto p-3">
                  {item.icon}
                </div>
                <h3 className="text-[16px] md:text-[20px] font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="">{item.desc}</p>
              </div>
            );
          })}
        </ANIM__FadeInOutOnScroll>
      </section>
      <section className="bg-muted rounded-b-[20px] md:rounded-b-[40px]">
        <div className="py-[63px] container">
          <BrandCarousel />
        </div>
      </section>
      <ANIM__FadeInOutOnScroll className="container section bg-[url('/images/backgrounds/CircleNest.svg')] bg-cover bg-center">
        <h2 className="text-center text-primary">Our Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 large-gap pt-[50px]">
          {Offerings.map((item: any) => {
            return (
              <ANIM__FadeInOutOnScroll
                key={item.id}
                className={`flex flex-col small-gap text-center items-center justify-center ${
                  item.id % 5 === 0 ? "col-span-1 sm:col-span-2 " : "col-span-1"
                } bg-white/5 backdrop-blur border rounded-[10px] border-secondarymuted  hover:shadow-lg p-[25px] transition ease-in-out duration-750`}
              >
                <div className="[&>svg]:stroke-secondary border border-secondary border-dashed rounded inline-block mx-auto p-3">
                  {item.icon}
                </div>
                <h3 className="text-[16px] md:text-[20px] font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="">{item.desc}</p>
              </ANIM__FadeInOutOnScroll>
            );
          })}
        </div>
      </ANIM__FadeInOutOnScroll>
      <MessageFromCEO />

      <ShortReviews />
      <section className="bg-primary">
        <div className="container section flex flex-col md:flex-row justify-between items-center large-gap">
          <ANIM__FadeInOutOnScroll className="flex flex-col small-gap">
            <h2 className="text-muted text-center md:text-left">
              Join the Software Rental Revolution
            </h2>
            <p className="text-muted text-center md:text-left">
              Whether you're a startup looking to scale efficiently or an established enterprise 
              seeking cost-effective software solutions, Actoviz is your trusted partner. 
              Let's transform how you access and use business software.
            </p>
          </ANIM__FadeInOutOnScroll>
          <ANIM__FadeInOutOnScroll className="flex flex-col small-gap min-w-[300px]">
            <Input
              placeholder="Enter your email"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              disabled={disable}
              variant="secondary"
              onClick={() => {
                setDisable(true);
                setTimeout(() => {
                  setDisable(false);
                }, 1000);
                if (email) {
                  toast({
                    title: "Subscription Request",
                    description: "Thank you for your interest in Actoviz!",
                  });
                } else {
                  toast({
                    variant: "error",
                    title: "Subscription Request",
                    description: "Oops! Something went wrong.",
                  });
                }
              }}
            >
              Get Started
            </Button>
          </ANIM__FadeInOutOnScroll>
        </div>
      </section>
    </>
  );
};

export default AboutUS;
