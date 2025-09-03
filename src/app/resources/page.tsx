import { Fragment } from "react";
import ResourcesHero from "./_components/resources-hero";
import ResourcesContent from "./_components/resources-content";
import ResourcesCTA from "./_components/resources-cta";

const ResourcesPage = () => {
  return (
    <Fragment>
      <ResourcesHero />
      <ResourcesContent />
      <ResourcesCTA />
    </Fragment>
  );
};

export default ResourcesPage;
