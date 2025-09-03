import OurProcess from "@/app/_utils/process";
import OurServices from "@/app/_utils/our-services";
import ProjectIdea from "@/app/_utils/project-idea-banner";
import HowWeWork from "@/app/_utils/how-we-work";
import Testimonial from "@/app/_utils/testimonial";
import {
  homeFAQ,
  homeFeaturesData,
  homeTestimonialData,
} from "@/lib/data/data";
import HeroSection from "./_utils/herosection";
import Faq from "./_utils/faq";
import { BrandCarousel } from "./_utils/carousel";

const HomePage = () => {
  return (
    <main>
      <HeroSection
        H1={
          <>
            Rent Premium <span>Software Solutions</span> for Your Business Needs
          </>
        }
        P={
          <>
            Actoviz provides flexible software rental solutions including Learning Management Systems, 
            International Calling Dialers, and enterprise applications. No upfront costs, 
            just monthly subscriptions for the software you need.
          </>
        }
        videoLink="https://www.youtube.com/embed/o2lfsiE2PEg?si=TjLtbHMIhOM_rBB2"
      />
      <BrandCarousel />
      <OurServices FeaturesData={homeFeaturesData.slice(0, 6)} />
      <OurProcess />
      <Testimonial calendly={true} data={homeTestimonialData} />
      <HowWeWork />
      <div className="bg-[url('/images/backgrounds/CircleNest.svg')] bg-center bg-cover">
        <Faq data={homeFAQ} />
        <ProjectIdea />
      </div>
    </main>
  );
};

export default HomePage;
