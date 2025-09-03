import { CheckCircle, Cloud, Shield, Zap, Users, Clock, DollarSign, ArrowRight } from "lucide-react";

const SolutionsFeatures = () => {
  const features = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud-Based Platform",
      description: "Access your software from anywhere, anytime. Our cloud infrastructure ensures 99.9% uptime and automatic scalability."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, end-to-end encryption, and regular security audits to protect your data."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Deployment",
      description: "Get started in minutes, not months. No installation, configuration, or technical expertise required."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Scalable Solutions",
      description: "Easily add or remove users and features as your business grows. No need to purchase new licenses or hardware."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance included with every subscription plan."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost-Effective",
      description: "Eliminate upfront costs and reduce total cost of ownership. Pay only for what you use with flexible billing options."
    }
  ];

  const benefits = [
    "No upfront software licensing fees",
    "Automatic updates and security patches",
    "Professional training and onboarding",
    "Custom integrations and consulting",
    "Data backup and disaster recovery",
    "Compliance and audit support"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Features */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Choose Actoviz Software Rental?
            </h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Benefits and CTA */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                What's Included in Every Plan
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={`benefit-${benefit.substring(0, 20).toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Ready to Get Started?
              </h4>
              <p className="text-gray-600 mb-4">
                Join thousands of businesses that have already transformed their operations 
                with Actoviz software rental solutions.
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                <span>Start your free trial today</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsFeatures;
