import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import FeatureCard from "@/components/molecule/feature-card";
import LinkButton from "@/components/molecule/link-button";
import SectionHead from "@/components/molecule/section-head";

const OurServices = ({ FeaturesData }: { FeaturesData: any }) => {
  return (
    <section className="bg-[url('/images/backgrounds/SquareBackground.svg')] bg-center bg-cover">
      <div className="container py-12 md:py-16 lg:py-20 flex flex-col gap-8 md:gap-10 lg:gap-12">
        <SectionHead
          highlighter="Our Services"
          H2={<>Understanding Your Business</>}
          paragraphs={[
            <>
              We&apos;ll listen to <span>your goals</span> and complete a free
              audit to discover if we&apos;re a great fit to work with each
              other.
            </>,
          ]}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-6 xl:gap-8">
          {FeaturesData.map((item: any) => {
            const { id, image, title, description, list, link } = item;
            return (
              <FeatureCard
                key={id}
                image={image}
                title={title}
                description={description}
                list={list}
                link={link}
              />
            );
          })}
        </div>
        {FeaturesData.length < 7 ? <LinkButton /> : null}
      </div>
    </section>
  );
};

export default OurServices;
