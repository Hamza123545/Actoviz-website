import I from "@/components/assets/I";
import II from "@/components/assets/II";
import III from "@/components/assets/III";
import ProjectHandover from "@/components/assets/project-handover";
import Requirements from "@/components/assets/requirements";
import ResearchAndConecptualization from "@/components/assets/research-and-conecptualization";
import SectionHead from "@/components/molecule/section-head";
import WorkCard from "@/components/molecule/work-card";
import { ReactElement } from "react";

const HowWeWork = () => {
  return (
    <section className="bg-[url('/images/backgrounds/StarBackground.svg')] bg-center bg-cover">
      <div className="container section">
        <SectionHead
          highlighter="How we work?"
          H2={<>Getting started with our software rental</>}
          paragraphs={[
            <>
              We&apos;ll understand your <span>business needs</span> and provide a free
              consultation to determine the best software solutions for your requirements.
            </>,
          ]}
        />

        <div className="flex large-gap flex-col pt-[50px]">
          {WorkProcessStepsData.map(
            (item: {
              id: number;
              numberImage: ReactElement;
              image: ReactElement;
              title: string;
              description: ReactElement;
            }) => {
              const { id, numberImage, image, title, description } = item;
              return (
                <WorkCard
                  key={id}
                  id={id}
                  numberImage={numberImage}
                  image={image}
                  title={title}
                  description={description}
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};
export default HowWeWork;

const WorkProcessStepsData = [
  {
    id: 1,
    numberImage: (
      <div className="min-w-[59px]">
        <I />
      </div>
    ),
    image: <Requirements />,
    title: "Free Consultation & Needs Assessment",
    description: (
      <>
        We start by understanding your business requirements—whether you need an
        LMS for training, a calling dialer for sales, or custom AI integrations.
        Our free consultation identifies the perfect software solutions for your needs.
      </>
    ),
  },
  {
    id: 2,
    numberImage: (
      <div className="min-w-[117px]">
        <II />
      </div>
    ),
    image: <ResearchAndConecptualization />,
    title: "Software Setup & Configuration",
    description: (
      <>
        We configure your chosen software solutions with your specific requirements.
        From setting up your LMS with courses and users to configuring your calling
        dialer with CRM integration, we ensure everything works seamlessly for your business.
      </>
    ),
  },
  {
    id: 3,
    numberImage: (
      <div className="min-w-[175px]">
        <III />
      </div>
    ),
    image: <ProjectHandover />,
    title: "Launch & Ongoing Support",
    description: (
      <>
        We launch your software solutions and provide comprehensive training for your team.
        With 24/7 technical support, regular updates, and continuous optimization,
        we ensure your software rental investment delivers maximum value.
      </>
    ),
  },
];
