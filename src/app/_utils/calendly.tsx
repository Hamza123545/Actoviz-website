"use client";

import Cal from "@calcom/embed-react";
import { useEffect, useState } from "react";

const Calendly = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div className="section" id="calendly">
      {isClient ? (
        <div className="w-0 h-0 overflow-scroll" id="my-cal-inline"></div>
      ) : null}
      <Cal
        calLink="muhammad-farooq-ceo-of-actoviz/software-demo-consultation"
        config={{ theme: "light" }}
        id="my-cal-inline"
      ></Cal>
    </div>
  );
};

export default Calendly;
