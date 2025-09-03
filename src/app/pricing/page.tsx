import { Fragment } from "react";
import PricingHero from "./_components/pricing-hero";
import PricingPlans from "./_components/pricing-plans";
import PricingFeatures from "./_components/pricing-features";
import PricingFAQ from "./_components/pricing-faq";
import PricingCTA from "./_components/pricing-cta";

const PricingPage = () => {
  return (
    <Fragment>
      <PricingHero />
      <PricingPlans />
      <PricingFeatures />
      <PricingFAQ />
      <PricingCTA />
    </Fragment>
  );
};

export default PricingPage;
