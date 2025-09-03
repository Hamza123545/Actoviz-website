"use client";

import { Button } from "@/components/ui/button";
import { Check, Users, BookOpen, BarChart3, Clock, Shield, Zap, Globe } from "lucide-react";
import Link from "next/link";

const LMSSolutionPage = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-User Management",
      description: "Easily manage students, instructors, and administrators with role-based access control"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Content Management",
      description: "Upload, organize, and deliver various types of learning content including videos, documents, and interactive modules"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Progress Tracking",
      description: "Monitor student progress, completion rates, and performance analytics in real-time"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Scheduling",
      description: "Set up courses, deadlines, and learning paths with customizable scheduling options"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Access",
      description: "Enterprise-grade security with SSO integration and data encryption"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Performance",
      description: "Optimized for speed with cloud-based infrastructure and CDN support"
    }
  ];

  const benefits = [
    "Reduce training costs by up to 60%",
    "Improve learning outcomes with personalized paths",
    "Scale training programs without infrastructure concerns",
    "Access from anywhere, anytime, on any device",
    "Real-time analytics and reporting",
    "Easy integration with existing systems"
  ];

  const useCases = [
    {
      title: "Corporate Training",
      description: "Employee onboarding, skill development, and compliance training for businesses of all sizes"
    },
    {
      title: "Educational Institutions",
      description: "Schools, colleges, and universities can deliver online courses and blended learning programs"
    },
    {
      title: "Professional Development",
      description: "Continuous learning and certification programs for professionals in various industries"
    },
    {
      title: "Customer Education",
      description: "Product training and support for customers to improve product adoption and satisfaction"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small teams and organizations",
      features: [
        "Up to 100 users",
        "Basic content management",
        "Standard reporting",
        "Email support",
        "Mobile responsive design"
      ]
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing businesses and educational institutions",
      features: [
        "Up to 500 users",
        "Advanced content management",
        "Custom branding",
        "Advanced analytics",
        "Priority support",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      price: "$1,199",
      period: "/month",
      description: "For large organizations with complex training needs",
      features: [
        "Unlimited users",
        "Full customization",
        "White-label solution",
        "Advanced integrations",
        "Dedicated support",
        "Custom development"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learning Management System
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Transform your training and education programs with our comprehensive LMS solution. 
              Deliver engaging learning experiences, track progress, and scale your educational initiatives.
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
              Powerful Features for Modern Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our LMS provides everything you need to create, deliver, and manage effective learning experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
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
                Why Choose Our LMS Solution?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our Learning Management System is designed to help organizations deliver effective training 
                while reducing costs and improving learning outcomes.
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
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Key Statistics</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">60%</div>
                  <div className="text-blue-100">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">40%</div>
                  <div className="text-blue-100">Improved Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">3x</div>
                  <div className="text-blue-100">Faster Training</div>
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
              Perfect for Every Learning Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're training employees, educating students, or developing professionals, 
              our LMS adapts to your specific requirements
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

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your organization's size and learning needs
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
            Ready to Transform Your Learning Programs?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of organizations that trust our LMS to deliver effective training and education
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

export default LMSSolutionPage;
