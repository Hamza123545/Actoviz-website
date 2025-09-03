"use client";

import { A___Reviews__GetAll } from "@/app/reviews/post/_utils/actions";
import ProjectIdea from "../../_utils/project-idea-banner";
import Testimonials from "../../services/_utils/testimonials";
import { useEffect, useState } from "react";

const ClientsReviews = ({
  testimonial = true,
  projectIdea = true,
  reviews = [],
  hideCTA = false,
  seeAllReview = false,
  mutedBG = false,
}: {
  testimonial?: boolean;
  projectIdea?: boolean;
  reviews?: object[];
  hideCTA?: boolean;
  seeAllReview?: boolean;
  mutedBG?: boolean;
}) => {
  const [clientReviews, setClientReviews] = useState<object[]>(reviews);
  const fetchReviews = async () => {
    const result = await A___Reviews__GetAll();
    setClientReviews(result?.result?.length ? result?.result : []);
  };

  useEffect(() => {
    if (!reviews) {
      fetchReviews();
    }
  }, [reviews]);

  return (
    <>
      {testimonial ? (
        clientReviews?.length ? (
          <Testimonials
            data={clientReviews}
            hideCTA={hideCTA}
            seeAllReview={seeAllReview}
            mutedBG={mutedBG}
          />
        ) : null
      ) : null}
      {projectIdea ? <ProjectIdea /> : null}
    </>
  );
};

export default ClientsReviews;
