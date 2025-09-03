"use client";
import { ReactElement, ReactNode } from "react";
import ANIM__FadeInOnScroll from "@/components/anims/fadein.anim";
import { AuroraBackground } from "@/components/ui/aurora-background";
import HeroCTA from "./hero-cta";

const HeroSection = ({
  H1 = (
    <>
      Rent Premium <span>Software Solutions</span> for Your Business Needs
    </>
  ),
  P = (
    <>
      Actoviz is a leading <span>software rental platform</span> that provides access to premium 
      applications including <span>Learning Management Systems</span>, <span>International Calling Dialers</span>, 
      and <span>enterprise software solutions</span> on flexible subscription plans.
    </>
  ),
  videoLink = "https://www.youtube.com/embed/o2lfsiE2PEg?si=tJmSicv7r4UXVtYn",
  cta = <HeroCTA />,
}: {
  H1: ReactElement;
  P: ReactElement;
  videoLink: string;
  cta?: ReactNode;
}) => {
  const backgroundImage = `bg-[url('/images/backgrounds/HeroBackground.svg')]`;
  return (
    <AuroraBackground>
      <section className={`${backgroundImage} bg-center bg-cover`}>
        <div className="container section grid grid-cols-1 lg:grid-cols-2 items-center large-gap">
          <ANIM__FadeInOnScroll className="order-2 lg:order-1 flex flex-col small-gap">
            <h1 className="text-primary [&>span]:text-secondary">{H1}</h1>
            <p className="hero-description">{P}</p>
            {cta ? (
              <div className="flex flex-wrap items-center small-gap">{cta}</div>
            ) : null}
          </ANIM__FadeInOnScroll>
          <ANIM__FadeInOnScroll className="order-1 lg:order-2">
            {[
              <div
                key={1}
              >
                <iframe
                  className="aspect-video w-full h-full rounded-2xl mx-auto border shadow-xl shadow-2xl"
                  src={videoLink}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>,
            ]}
          </ANIM__FadeInOnScroll>
        </div>
      </section>
    </AuroraBackground>
  );
};

export default HeroSection;
