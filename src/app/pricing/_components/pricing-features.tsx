import { CheckCircle, DollarSign, Shield, Zap, Users, Clock } from "lucide-react";

const PricingFeatures = () => {
  const features = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "No Upfront Costs",
      description: "Start using enterprise software immediately without large capital investments. Pay only for what you use."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with regular updates, backups, and compliance certifications included in every plan."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Setup",
      description: "Get started in minutes, not months. Our cloud-based solutions require no installation or configuration."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Scalable Solutions",
      description: "Easily add or remove users and features as your business grows. No need to purchase new licenses."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance included with every subscription plan."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Always Updated",
      description: "Automatic updates ensure you always have the latest features and security patches at no extra cost."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Software Rental?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional software purchases come with hidden costs and complexity. 
            Our rental model provides everything you need with none of the hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of businesses that have already transformed their operations 
              with Actoviz software rental solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFeatures;
