import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Phone, Users, Zap, Shield, Globe, CheckCircle } from "lucide-react";
import Link from "next/link";

const SolutionsHero = () => {
  const solutions = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learning Management System",
      description: "Complete student & tutor management",
      link: "/solutions/lms",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "International Dialer",
      description: "Global calling made simple",
      link: "/solutions/dialer",
      color: "from-green-500 to-green-600"
    }
  ];

  const benefits = [
    { icon: <Zap className="w-5 h-5" />, text: "No Setup Fees" },
    { icon: <Shield className="w-5 h-5" />, text: "Secure & Reliable" },
    { icon: <Globe className="w-5 h-5" />, text: "Web-Based Access" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "24/7 Support" }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/backgrounds/WhiteGrid.svg')] opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="container section relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 text-sm">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Premium Software Rental</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Rent Premium
                <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Software Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Access enterprise-grade LMS and International Dialer solutions 
                without the upfront investment. Complete web application access 
                with flexible monthly billing.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <span className="text-gray-300">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                <Link href="#solutions" className="flex items-center gap-2">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                <Link href="/contact-us">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Solutions Cards */}
          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                href={solution.link}
                className="group block p-6 bg-white/5 backdrop-blur border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-400 mb-3">
                      {solution.description}
                    </p>
                    <div className="flex items-center text-blue-400 text-sm font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
