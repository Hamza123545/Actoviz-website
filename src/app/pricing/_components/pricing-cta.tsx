import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Users, Zap } from "lucide-react";
import Link from "next/link";

const PricingCTA = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: "No upfront costs or setup fees"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: "Flexible monthly billing"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: "Cancel anytime with no penalties"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: "Priority support included"
    }
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "Active Subscriptions"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: "95%",
      label: "Customer Satisfaction"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      number: "24/7",
      label: "Support Available"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="container">
        <div className="text-center text-white mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Rent Premium Software?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Join businesses that have discovered the benefits of software rental. 
            Get access to enterprise-grade LMS and International Dialer solutions 
            without the upfront investment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Benefits and CTA */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Why Choose Actoviz?
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={`benefit-${benefit.text.substring(0, 20).toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center gap-3">
                    {benefit.icon}
                    <span className="text-white opacity-90">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">
                Get Started in Minutes
              </h4>
              <p className="text-white opacity-80">
                No complex setup or technical expertise required. Our cloud-based 
                solutions get you up and running quickly, so you can focus on 
                what matters most - managing your students or making international calls.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact-us">Get Started Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Link href="/contact-us">Request Demo</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Stats and social proof */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`} className="text-center bg-white/10 backdrop-blur rounded-lg p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white opacity-80 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-4">
                What Our Customers Say
              </h4>
              <blockquote className="text-white opacity-90 italic">
                "Actoviz's LMS solution transformed our Quran center management. The rental model 
                saved us thousands in upfront costs, and the features are exactly what we needed. 
                Highly recommended!"
              </blockquote>
              <div className="mt-4 text-white opacity-80">
                <strong>Ahmed Hassan</strong> - Director, Al-Noor Quran Center
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-white/10 backdrop-blur rounded-full px-8 py-4">
            <p className="text-white opacity-90">
              Questions? Call us at <strong>+1-800-ACTOVIZ</strong> or 
              <Link href="/contact-us" className="text-white underline ml-1">
                contact our team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
