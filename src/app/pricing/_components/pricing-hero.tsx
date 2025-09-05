import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const PricingHero = () => {
  return (
    <section className="bg-gradient-to-b from-primary via-primary to-secondary">
      <div className="container section text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Flexible Software Rental Pricing
          </h1>
          <p className="text-xl md:text-2xl text-secondarymuted mb-8">
            Rent premium software solutions for your business needs. No upfront costs, 
            just monthly subscriptions for the software you need. Scale as you grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>No upfront costs</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>Flexible monthly billing</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>Cancel anytime</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="#pricing-plans">View All Plans</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Link href="/contact-us">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
