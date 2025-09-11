import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import Image from "next/image";

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
            width={300}
            height={300}
            className="w-full h-full rounded-2xl"
            priority={false}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>

        <h2 className="text-primary">
          Meet&nbsp;<span className="text-secondary">Muhammad Farooq</span>,
          Visionary CEO and Technology Leader
        </h2>

        <p>
          Muhammad Farooq, the driving force behind Actoviz, serves as the CEO and is
          a recognized technology leader in the software rental industry. With an
          unwavering commitment to innovation and excellence, Muhammad brings extensive experience and
          expertise to democratizing access to enterprise-grade software solutions through flexible rental models.
        </p>
      </ANIM__FadeInOutOnScroll>
      <ANIM__FadeInOutOnScroll className="flex flex-col large-gap">
        <ANIM__FadeInOutOnScroll className="flex flex-col small-gap">
          <h4 className="text-[16px] md:text-[20px] font-semibold text-primary">
            Years of Experience
          </h4>
          <p>
            Active contributors to the software rental landscape&nbsp;
            <span className="text-primary font-medium">since 2019</span>,
            we&apos;ve accumulated invaluable experience and insights in making enterprise software accessible through innovative rental models and business solutions.
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
            Muhammad Farooq's for success mirrors what every CEO aspires to
            achieve - continuous innovation, elevation of standards, and
            ultimate market domination through cutting-edge technology solutions.
          </p>
        </ANIM__FadeInOutOnScroll>
        <div className="font-semibold text-primary">
          Muhammad Farooq and Actoviz are dedicated to making enterprise-grade software accessible to your business through our innovative rental platform. Let&apos;s chart the course for your
          business&apos;s success with the right software solutions!
        </div>
      </ANIM__FadeInOutOnScroll>
    </section>
  );
};

export default MeetOurCEO;
