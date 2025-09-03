import { Fragment } from "react";
import SolutionsHero from "./_components/solutions-hero";
import SolutionsGrid from "./_components/solutions-grid";
import SolutionsFeatures from "./_components/solutions-features";
import SolutionsCTA from "./_components/solutions-cta";

const SolutionsPage = () => {
  return (
    <Fragment>
      <SolutionsHero />
      <SolutionsGrid />
      <SolutionsFeatures />
      <SolutionsCTA />
    </Fragment>
  );
};

export default SolutionsPage;
