import { ReactElement } from "react";
import ANIM__FadeInOnScroll from "../anims/fadein.anim";

const SectionHead = ({
  highlighter = "Our Services",
  H2 = <>Understanding Your Business</>,
  paragraphs = [
    <>
      We&apos;ll listen to <span>your goals</span> and complete a free audit to
      discover if we&apos;re a great fit to work with each other.
    </>,
  ],
}: {
  highlighter: string;
  H2: ReactElement;
  paragraphs: any;
}) => {
  return (
    <ANIM__FadeInOnScroll className="flex flex-col items-center justify-center gap-4 md:gap-5 lg:gap-4 max-w-[566px] mx-auto text-center">
      {highlighter ? (
        <p className="text-[12px] md:text-[14px] lg:text-[12px] xl:text-[14px] text-secondary font-semibold inline-block px-3 py-[3px] md:px-4 md:py-[4px] rounded-full border border-primary/20">
          {highlighter}
        </p>
      ) : null}
      {H2 ? (
        <h2 className="text-primary [&>span]:text-secondary text-2xl md:text-3xl lg:text-2xl xl:text-3xl leading-tight">{H2}</h2>
      ) : null}
      {paragraphs.length
        ? paragraphs.map((item: any, index: number) => {
            return (
              <p
                key={`paragraph-${index}-${typeof item === 'string' ? item.substring(0, 20) : 'content'}`}
                className="[&>span]:font-medium [&>span]:text-primary text-primary/80 text-sm md:text-base lg:text-sm xl:text-base leading-relaxed"
              >
                {item}
              </p>
            );
          })
        : null}
    </ANIM__FadeInOnScroll>
  );
};

export default SectionHead;
