import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MeetOurCEO = () => {
  return (
    <section className="container section grid grid-cols-1 md:grid-cols-2 large-gap bg-[url('/images/backgrounds/StarBackground.svg')] bg-cover bg-center">
      <ANIM__FadeInOutOnScroll className="flex flex-col small-gap">
        <span className="text-[16px] md:text-[20px] font-semibold text-secondary text-center md:text-left">
          Our Leadership
        </span>
        <div className="max-w-[250px] mx-auto md:mr-auto md:ml-0">
          <Image
            src="/images/ceo-muhammad-farooq.png"
            alt="CEO Muhammad Farooq"
            width={1000}
            height={1000}
            className="w-full h-full rounded-2xl"
          />
        </div>

        <h2 className="text-primary">
          Meet&nbsp;<span className="text-secondary">Muhammad Farooq</span>,
          Visionary CEO and Technology Leader
        </h2>

        <p>
          Muhammad Farooq, the driving force behind Actoviz, serves as the CEO and is
          a recognized technology leader in the digital landscape. With an
          unwavering commitment to innovation and excellence, Muhammad brings extensive experience and
          expertise to the forefront of software solutions.
        </p>
      </ANIM__FadeInOutOnScroll>
      <ANIM__FadeInOutOnScroll className="flex flex-col large-gap">
        <ANIM__FadeInOutOnScroll className="flex flex-col small-gap">
          <h4 className="text-[16px] md:text-[20px] font-semibold text-primary">
            Years of Experience
          </h4>
          <p>
            Active contributors to the digital landscape&nbsp;
            <span className="text-primary font-medium">since 2019</span>,
            we&apos;ve accumulated invaluable experience and insights in software development and business solutions.
          </p>
        </ANIM__FadeInOutOnScroll>
        <ANIM__FadeInOutOnScroll className="flex flex-col small-gap">
          <h4 className="text-[16px] md:text-[20px] font-semibold text-primary">
            Actoviz in&nbsp;
            <span className="text-[16px] md:text-[20px] font-semibold text-secondary">
              Dubai
            </span>
          </h4>
          <p>
            Actoviz recently spread its&nbsp;
            <Link
              href="https://drive.google.com/file/d/1g6Vz623OdZHR_YtJfUbDUIXyxIH_K513/view?usp=sharing"
              passHref={true}
              target="_blank"
              className="text-secondary hover:underline font-medium inline-flex items-center group gap-[2px]"
            >
              wings to Dubai{" "}
              <ArrowUpRight className="w-[12px] h-[12px] stroke-secondary group-hover:mb-2 transition ease-in-out duration-500" />
            </Link>
            , adding a new chapter to its journey. We envision Actoviz as a
            catalyst for businesses in Dubai, propelling them to new heights in the
            digital realm.
          </p>
        </ANIM__FadeInOutOnScroll>
        <ANIM__FadeInOutOnScroll className="flex flex-col small-gap">
          <h4 className="text-[16px] md:text-[20px] font-semibold text-primary">
            Innovate, Elevate,&nbsp;
            <span className="text-[16px] md:text-[20px] font-semibold text-secondary">
              Dominate
            </span>
          </h4>
          <p>
            Muhammad&apos;s mantra for success mirrors what every CEO aspires to
            achieve - continuous innovation, elevation of standards, and
            ultimate market domination through cutting-edge technology solutions.
          </p>
        </ANIM__FadeInOutOnScroll>
        <div className="font-semibold text-primary">
          Muhammad and Actoviz are dedicated to making your business thrive and soar
          in the digital skies. Let&apos;s chart the course for your
          business&apos;s digital success together!
        </div>
      </ANIM__FadeInOutOnScroll>
    </section>
  );
};

export default MeetOurCEO;
