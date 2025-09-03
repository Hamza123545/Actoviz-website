import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Users } from "lucide-react";
import Link from "next/link";

const ResourcesCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="container">
        <div className="text-center text-white mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Access comprehensive resources and expert support to maximize the value 
            of your Actoviz software rental investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center bg-white/10 backdrop-blur rounded-lg p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-white opacity-80 text-sm">Active Users</div>
          </div>
          
          <div className="text-center bg-white/10 backdrop-blur rounded-lg p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <Star className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-white opacity-80 text-sm">Satisfaction Rate</div>
          </div>
          
          <div className="text-center bg-white/10 backdrop-blur rounded-lg p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white opacity-80 text-sm">Support Available</div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Start Your Software Rental Journey
            </h3>
            <p className="text-white opacity-90 mb-6">
              Join thousands of businesses that have already discovered the benefits 
              of software rental with Actoviz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact-us">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Link href="/contact-us">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesCTA;
