import Image from "next/image";
import { Sparkle } from "lucide-react";

interface TestimonialCardProps {
  details: {
    _id: string;
    name: string;
    rating: number;
    category: string;
    text: string;
    avatar: string;
    company: string;
    country: string;
    image: string;
    date: string;
  };
}

export const TestimonialCard = ({ details }: TestimonialCardProps) => {
  return (
    <div className="relative max-w-[400px] rounded-2xl border px-8 py-6 bg-white w-full flex flex-col">
      <div className="flex mb-4">
        {Array.from({ length: details.rating || 1 }, (_, index) => (
          <Sparkle key={index} className="rotate-45 text-secondary fill-secondary/40" />
        ))}
      </div>
      
      <p className="relative text-sm leading-[1.6] font-normal mb-4 line-clamp-3">
        {details.text}
      </p>
      
      <div className="relative mt-auto flex items-center">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <Image
              src={details.avatar || "/images/flags/usa.svg"}
              alt={details.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{details.name}</span>
            <span className="text-xs text-muted-foreground">
              {details.company} • {details.country}
            </span>
          </div>
        </div>
      </div>
      
      {details.image && (
        <div className="mt-4 relative h-32 w-full rounded-lg overflow-hidden">
          <Image
            src={details.image}
            alt="Review image"
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
};
