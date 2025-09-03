import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProjectIdea = () => {
  return (
    <section className="py-[63px]">
      <div className="container">
        <div className="bg-[url('/images/backgrounds/ProjectIdeaBanner.svg')] bg-center bg-cover rounded-[20px] md:rounded-[40px] p-[25px] md:p-[50px] text-center">
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-white mb-[25px]">
            Ready to Transform Your Business with Software Rental?
          </h2>
          <p className="text-white opacity-90 text-[16px] md:text-[18px] mb-[25px] max-w-3xl mx-auto">
            Whether you need a Learning Management System for training or an International 
            Calling Dialer for global communication, Actoviz provides flexible rental 
            options that scale with your business. No upfront costs, just the software 
            you need when you need it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact-us">Start Free Trial</Link>
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

export default ProjectIdea;
