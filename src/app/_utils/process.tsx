import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import CodeCloud from "@/components/assets/code-cloud";
import ROI from "@/components/assets/roi";
import LongTermPartnership from "@/components/assets/long-term-partnership";
import ProcessCard from "@/components/molecule/process-card";
import SectionHead from "@/components/molecule/section-head";
import { ReactElement } from "react";

const OurProcess = () => {
  return (
    <section className="bg-muted">
      <div className="bg-[url('/images/backgrounds/ProcessBackgrid.svg')] bg-center bg-cover">
        <div className="container section">
          <SectionHead
            highlighter="Our Process"
            H2={<>Why should you hire us?</>}
            paragraphs={[
              <>
                You Should hire us for <span>3 reasons</span>
              </>,
            ]}
          />
          <ANIM__FadeInOutOnScroll className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3  content-center gap-[34px] pt-[50px]  sm:[&>*:last-child]:col-span-2 lg:[&>*:last-child]:col-span-1">
            {ProcessData.map(
              (item: {
                id: number;
                title: string;
                details: ReactElement;
                image: ReactElement;
              }) => {
                const { id, title, details, image } = item;
                return (
                  <div key={id}>
                    <ProcessCard
                      title={title}
                      details={details}
                      image={image}
                    />
                  </div>
                );
              }
            )}
          </ANIM__FadeInOutOnScroll>
        </div>
      </div>
    </section>
  );
};
export default OurProcess;

const ProcessData = [
  {
    id: 1,
    title: "Flexible Software Rental Solutions",
    details: (
      <>
        Access premium business applications without large upfront investments. 
        Our subscription-based model includes Learning Management Systems, 
        International Calling Dialers, and custom AI integrations with 
        comprehensive support and automatic updates.
      </>
    ),
    image: <CodeCloud />,
  },
  {
    id: 2,
    title: "Proven Technology Expertise",
    details: (
      <>
        From e-learning platforms to communication solutions, we deliver 
        enterprise-grade software that drives real business results. Our 
        solutions include advanced analytics, multi-platform integration, 
        and 24/7 technical support to ensure your success.
      </>
    ),
    image: <ROI />,
  },
  {
    id: 3,
    title: "Your Technology Partner",
    details: (
      <>
        We&apos;re not just software providers; we&apos;re your dedicated 
        technology partners. Count on us for personalized solutions, ongoing 
        support, and a relentless focus on scaling your business with the 
        right tools and expertise.
      </>
    ),
    image: <LongTermPartnership />,
  },
];
