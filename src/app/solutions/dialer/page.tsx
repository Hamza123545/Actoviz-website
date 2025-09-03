"use client";

import { Button } from "@/components/ui/button";
import { Check, Phone, Globe, BarChart3, Clock, Shield, Zap, Users, Headphones, Target } from "lucide-react";
import Link from "next/link";

const DialerSolutionPage = () => {
  const features = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "International Calling",
      description: "Make calls to over 200+ countries with competitive international rates and crystal clear voice quality"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Coverage",
      description: "Connect with customers worldwide through our extensive network of international carriers"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Call Analytics",
      description: "Track call performance, success rates, and detailed reporting for optimization"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Round-the-clock calling capabilities with automatic timezone detection"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Communication",
      description: "Enterprise-grade security with encrypted calls and fraud protection"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High Performance",
      description: "Optimized for speed with low latency and high call success rates"
    }
  ];

  const benefits = [
    "Reduce international calling costs by up to 80%",
    "Improve global customer reach and engagement",
    "Scale international operations without infrastructure concerns",
    "Access from anywhere with cloud-based solution",
    "Real-time call monitoring and analytics",
    "Easy integration with existing CRM systems"
  ];

  const useCases = [
    {
      title: "Sales & Marketing",
      description: "Reach international prospects, conduct global sales calls, and expand market presence"
    },
    {
      title: "Customer Support",
      description: "Provide 24/7 customer service across different time zones and regions"
    },
    {
      title: "Business Development",
      description: "Establish partnerships and collaborations with international businesses"
    },
    {
      title: "Remote Teams",
      description: "Enable seamless communication for distributed teams across the globe"
    }
  ];

  const advancedFeatures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-User Management",
      description: "Manage multiple users, assign calling quotas, and control access permissions"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Call Recording",
      description: "Record calls for quality assurance, training, and compliance purposes"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Smart Routing",
      description: "Intelligent call routing based on location, timezone, and availability"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 minutes/month",
        "50+ countries coverage",
        "Basic call analytics",
        "Email support",
        "Mobile app access"
      ]
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing businesses and sales teams",
      features: [
        "Up to 5,000 minutes/month",
        "100+ countries coverage",
        "Advanced analytics",
        "Call recording",
        "Priority support",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations with high call volumes",
      features: [
        "Unlimited minutes",
        "200+ countries coverage",
        "Full customization",
        "White-label solution",
        "Dedicated support",
        "Custom integrations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              International Calling Dialer
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Break down geographical barriers with our advanced international calling solution. 
              Connect with customers worldwide, reduce costs, and expand your global reach.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/get-a-free-consultation">Get Free Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Global Communication
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our International Calling Dialer provides everything you need to connect with customers worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Dialer Solution?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our International Calling Dialer is designed to help businesses expand globally 
                while reducing communication costs and improving customer reach.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Key Statistics</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">80%</div>
                  <div className="text-green-100">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-green-100">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-green-100">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Business Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're expanding globally, supporting international customers, or building remote teams, 
              our dialer adapts to your specific requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Features for Enterprise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take your international calling to the next level with our advanced features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 shadow-lg border border-green-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your international calling needs and budget
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${
                index === 1 ? 'border-primary scale-105' : 'border-gray-200'
              }`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-1">{plan.price}</div>
                  <div className="text-gray-500">{plan.period}</div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" variant={index === 1 ? "default" : "outline"}>
                  <Link href="/get-a-free-consultation">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Go Global with Your Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of businesses that trust our dialer to expand their international reach
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/get-a-free-consultation">Start Free Trial</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Link href="/contact-us">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DialerSolutionPage;
