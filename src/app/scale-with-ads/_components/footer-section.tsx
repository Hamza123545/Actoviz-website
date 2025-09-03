import { CheckCircle, FileText, XSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import TermsAndConditionDialog from "./terms-and-condition-dialog";

const features = [
  {
    id: "transparent",
    icon: <CheckCircle className="w-6 h-6 text-emerald-500" />,
    text: "100% Transparent",
  },
  {
    id: "no-contracts",
    icon: <FileText className="w-6 h-6 text-emerald-500" />,
    text: "No Contracts",
  },
  {
    id: "cancel-anytime",
    icon: <XSquare className="w-6 h-6 text-emerald-500" />,
    text: "Cancel Anytime",
  },
];

const FooterSection = () => {
  return (
    <section className="container section">
      <div className="flex flex-col items-center gap-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="flex items-center justify-center gap-3 text-gray-600"
            >
              {feature.icon}
              <span className="text-lg">{feature.text}</span>
            </div>
          ))}
        </div>

        <Link
          href="https://wa.me/+17078817969"
          passHref={true}
          target="_blank"
          className="inline-flex items-center gap-2 text-secondary hover:opacity-90 transition-opacity text-lg border border-gray-300 rounded-xl px-4 py-2 hover:border-secondary/40 transition ease-in-out duration-500"
        >
          Still unsure? Talk to our CEO directly
          <ArrowRight className="w-5 h-5" />
        </Link>
        <TermsAndConditionDialog />
      </div>
    </section>
  );
};

export default FooterSection;
