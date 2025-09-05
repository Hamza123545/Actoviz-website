import { cn } from "@/lib/utils";
import clsx from "clsx";

const BrandLogo = ({
  dark = false,
  className,
}: {
  dark?: boolean;
  className?: string;
}) => {
  return (
    <div className={cn(className, "flex items-center gap-2")}>
      <div className="w-10 h-10">
        {!dark ? <PrimaryBrandLogo /> : <SecondaryBrandLogo />}
      </div>
      <div
        className={clsx("text-[20px] md:text-[24px]", {
          "text-white": dark,
        })}
      >
        The
        <span className="text-[20px] md:text-[24px] font-semibold">
          Actoviz
        </span>
      </div>
    </div>
  );
};

export default BrandLogo;

const PrimaryBrandLogo = () => {
  return (
    <svg
      viewBox="0 0 260 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="title desc"
    >
      <title id="title">Stylish V Logo</title>
      <desc id="desc">A modern glowing blue V with gradient and neon style</desc>
      
      <defs>
        {/* Gradient for V */}
        <linearGradient id="blueGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4FC3F7"/>
          <stop offset="50%" stopColor="#1E88E5"/>
          <stop offset="100%" stopColor="#0D47A1"/>
        </linearGradient>
        {/* Outer glow */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="12" floodColor="#2196F3" floodOpacity="0.7"/>
        </filter>
      </defs>

      {/* Background circle */}
      <circle cx="130" cy="130" r="120" fill="#F8FBFF"/>

      {/* Stylish V */}
      <path d="M60 60 L110 200 L130 200 L200 60 L170 60 L120 150 L90 60 Z"
            fill="url(#blueGlow)"
            filter="url(#glow)"/>
    </svg>
  );
};

const SecondaryBrandLogo = () => {
  return (
    <svg
      viewBox="0 0 260 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="title2 desc2"
    >
      <title id="title2">Stylish V Logo - White</title>
      <desc id="desc2">A modern glowing white V with gradient for dark backgrounds</desc>
      
      <defs>
        {/* Gradient for V - white version */}
        <linearGradient id="whiteGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF"/>
          <stop offset="50%" stopColor="#E3F2FD"/>
          <stop offset="100%" stopColor="#BBDEFB"/>
        </linearGradient>
        {/* Outer glow for white version */}
        <filter id="whiteGlowFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="12" floodColor="#FFFFFF" floodOpacity="0.8"/>
        </filter>
      </defs>

      {/* Background circle - transparent for dark backgrounds */}
      <circle cx="130" cy="130" r="120" fill="transparent"/>

      {/* Stylish V - white version */}
      <path d="M60 60 L110 200 L130 200 L200 60 L170 60 L120 150 L90 60 Z"
            fill="url(#whiteGlow)"
            filter="url(#whiteGlowFilter)"/>
    </svg>  
  );
};
