import { Button } from "@/components/ui/button";
import { CheckCircle, Cloud, Shield, Zap } from "lucide-react";
import Link from "next/link";

const SolutionsHero = () => {
  const highlights = [
    {
      icon: <Cloud className="w-6 h-6" />,
      text: "Cloud-based solutions"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Enterprise security"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Instant deployment"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "24/7 support"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="container section text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Enterprise Software Solutions
          </h1>
          <p className="text-xl md:text-2xl text-secondarymuted mb-8">
            Access premium business applications through our flexible rental model. 
            No upfront costs, no long-term commitments - just the software you need, 
            when you need it.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {highlights.map((highlight, index) => (
              <div key={`highlight-${highlight.text.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2">
                {highlight.icon}
                <span>{highlight.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="#solutions">Explore Solutions</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Link href="/contact-us">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
