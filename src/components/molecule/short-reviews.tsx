"use client";

import SectionHead from "./section-head";
import { Button } from "../ui/button";
import Link from "next/link";

const ShortReviews = () => {
  return (
    <section className="bg-[url('/images/backgrounds/SquareBackground.svg')] bg-center bg-cover">
      <div className="section container">
        <SectionHead
          highlighter="What Our Customers Say?"
          H2={
            <>
              Let <span>Trust</span> Play the Role
            </>
          }
          paragraphs={[]}
        />
        
        {/* Static reviews section instead of external script */}
        <div className="pt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
            <p className="text-white mb-4">
              "Actoviz has transformed how we access software. The rental model saved us thousands in upfront costs while giving us access to enterprise-grade solutions."
            </p>
            <div className="text-white/80 text-sm">
              - Sarah Johnson, Tech Startup CEO
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
            <p className="text-white mb-4">
              "The LMS solution is incredible. Our training completion rates increased by 40% and the analytics help us track progress effectively."
            </p>
            <div className="text-white/80 text-sm">
              - Michael Chen, HR Director
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
            <p className="text-white mb-4">
              "Excellent customer support and flexible solutions. Actoviz understands business needs and delivers exactly what we require."
            </p>
            <div className="text-white/80 text-sm">
              - Emily Rodriguez, Operations Manager
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center pt-[50px]">
          <Link href="/reviews/#topPoint">
            <Button variant={"outline"}>View Our Wall of Love</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ShortReviews;
