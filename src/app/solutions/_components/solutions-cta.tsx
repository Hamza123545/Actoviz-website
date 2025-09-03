import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Users, Zap } from "lucide-react";
import Link from "next/link";

const SolutionsCTA = () => {
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

  const testimonials = [
    {
      quote: "Actoviz's LMS transformed our corporate training program. The rental model saved us thousands and the platform is incredibly intuitive.",
      author: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO"
    },
    {
      quote: "The International Calling Dialer has revolutionized our global communication. Crystal clear calls and excellent pricing.",
      author: "Michael Chen",
      company: "Global Solutions",
      role: "Operations Director"
    },
    {
      quote: "We've been using Actoviz's ERP for over a year. The monthly rental model eliminated our upfront costs completely.",
      author: "Elena Rodriguez",
      company: "Manufacturing Plus",
      role: "CFO"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="container">
        <div className="text-center text-white mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Software Rental Revolution
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Whether you're a startup looking to scale efficiently or an established enterprise 
            seeking cost-effective software solutions, Actoviz is your trusted partner.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
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

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={`testimonial-${testimonial.author.toLowerCase().replace(/\s+/g, '-')}`} className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={`star-${i}`} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-white opacity-90 italic mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-white opacity-80">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm">{testimonial.role}, {testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white opacity-90 mb-6">
              Start your free trial today and experience the difference that Actoviz can make 
              for your business. No credit card required, no commitment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact-us">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Link href="/contact-us">Schedule Demo</Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-white opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
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

export default SolutionsCTA;
