import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import Link from "next/link";

const PricingPlans = () => {
  const plans = [
    {
      name: "LMS - Monthly",
      price: "170",
      currency: "PKR",
      period: "/student/month",
      description: "Perfect for small to medium Quran centers",
      features: [
        "Complete student management",
        "Tutor management system",
        "Class scheduling",
        "Basic financial management",
        "Progress tracking",
        "Email support",
        "Complete web application access"
      ],
      notIncluded: [
        "Advanced analytics",
        "Priority support",
        "API integration",
        "Mobile application"
      ],
      popular: false,
      cta: "Get Started",
      link: "/contact-us"
    },
    {
      name: "LMS - Annual",
      price: "1,700",
      currency: "PKR",
      period: "/student/year",
      description: "Best value with 2 months free",
      features: [
        "Everything in Monthly plan",
        "Advanced analytics",
        "Priority support",
        "Custom reporting",
        "Complete web application access",
        "Enhanced reporting features"
      ],
      notIncluded: [
        "White-label solution",
        "Custom development",
        "Dedicated support",
        "API integration",
        "Mobile application"
      ],
      popular: true,
      cta: "Get Started",
      link: "/contact-us"
    },
    {
      name: "International Dialer",
      price: "$10",
      currency: "USD",
      period: "/admin/month",
      description: "Complete administrative access with full features",
      features: [
        "Complete administrative access",
        "User management capabilities",
        "Advanced analytics and reporting",
        "Priority customer support",
        "International calling rates",
        "Complete web application access"
      ],
      notIncluded: [
        "Calling minutes (pay per use)",
        "API integration",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false,
      cta: "Get Started",
      link: "/contact-us"
    }
  ];

  return (
    <section id="pricing-plans" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Software Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rent our premium software solutions with flexible pricing. No upfront costs, 
            just monthly subscriptions for the software you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={`plan-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular 
                  ? 'ring-2 ring-primary scale-105' 
                  : 'hover:shadow-xl transition-shadow'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.currency} {plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-900">What's included:</h4>
                {plan.features.map((feature, featureIndex) => (
                  <div key={`${plan.name}-feature-${featureIndex}-${feature.substring(0, 20)}`} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                
                {plan.notIncluded.length > 0 && (
                  <>
                    <h4 className="font-semibold text-gray-900 mt-6">Not included:</h4>
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <div key={`${plan.name}-not-included-${featureIndex}-${feature.substring(0, 20)}`} className="flex items-center gap-3">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <span className="text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>

              <Button asChild className="w-full" size="lg">
                <Link href={plan.link}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We can tailor our software rental plans for your specific requirements.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact-us">Contact Us for Custom Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
