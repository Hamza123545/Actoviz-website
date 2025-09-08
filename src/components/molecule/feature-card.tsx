import { ReactElement } from "react";
import BlueGoogle from "../assets/blue-google";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import ANIM__FadeInOutOnScroll from "../anims/fadein.anim";

const FeatureCard = ({
  image = <BlueGoogle />,
  title = "Google Paid Advertising",
  description,
  list = ["Google search PPC and display", "Google shopping", "YouTube Ads"],
  link,
}: {
  image: ReactElement;
  title: string;
  description: ReactElement | undefined;
  list: any;
  link: string;
}) => {
  return (
    <ANIM__FadeInOutOnScroll className="rounded-[10px] border border-secondary-muted hover:border-secondary bg-white/5 backdrop-blur-[8px] hover:backdrop-blur-[8px] w-full px-4 py-6 md:px-6 md:py-8 lg:px-5 lg:py-6 xl:px-6 xl:py-8 shadow-[0_4px_25px_0_rgba(89,86,255,0.05)] transition ease-in-out duration-500 hover:scale-[1.02] lg:hover:scale-[1.03]">
      <div className="flex flex-col items-start justify-start gap-4 md:gap-5 lg:gap-4">
        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 flex-shrink-0">
          {image}
        </div>
        <h4 className="font-medium text-primary text-lg md:text-xl lg:text-lg xl:text-xl leading-tight">{title}</h4>
        {description ? (
          <p className="[&>span]:font-medium text-primary/80 [&>span]:text-primary text-sm md:text-base lg:text-sm xl:text-base leading-relaxed">
            {description}
          </p>
        ) : null}
        <ul className="flex flex-col gap-3 md:gap-4 lg:gap-3 text-primary/80 text-sm md:text-base lg:text-sm xl:text-base">
          {list.map((item: string, index: number) => {
            return (
              <li
                key={`feature-${index}-${item.substring(0, 20)}`}
                className="flex items-start justify-start gap-2"
              >
                <BadgeCheck className="min-h-[14px] min-w-[14px] max-w-[14px] md:min-h-[16px] md:min-w-[16px] md:max-w-[16px] lg:min-h-[14px] lg:min-w-[14px] lg:max-w-[14px] xl:min-h-[16px] xl:min-w-[16px] xl:max-w-[16px] stroke-secondary stroke-[2px] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            );
          })}
        </ul>

        {link ? (
          <Link
            href={link}
            className="text-secondary hover:text-secondary/70 hover:underline text-sm md:text-base lg:text-sm xl:text-base font-medium mt-2"
          >
            Learn more
          </Link>
        ) : null}
      </div>
    </ANIM__FadeInOutOnScroll>
  );
};

export default FeatureCard;
