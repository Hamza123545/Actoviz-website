import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Phone
} from "lucide-react";
import Link from "next/link";

const SolutionsGrid = () => {
  const solutions = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learning Management System (LMS)",
      description: "Complete e-learning platform for educational institutions and corporate training",
      features: [
        "Course creation and management",
        "Student progress tracking",
        "Assessment tools",
        "Video conferencing integration",
        "Mobile learning support",
        "Advanced analytics"
      ],
      category: "Education",
      link: "/solutions/lms"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "International Calling Dialer",
      description: "Professional calling solution for global communication with advanced features",
      features: [
        "Global calling capabilities",
        "Call recording and analytics",
        "CRM integration",
        "Multi-language support",
        "Call scheduling",
        "Advanced reporting"
      ],
      category: "Communication",
      link: "/solutions/dialer"
    }
  ];

  const categories = ["All", "Education", "Communication"];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Software Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From learning management to international calling, we offer focused solutions 
            designed to meet your specific business needs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={`category-${category.toLowerCase()}`}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                category === "All" 
                  ? "bg-primary text-white" 
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {solutions.map((solution, index) => (
            <div key={`solution-${solution.title.toLowerCase().replace(/\s+/g, '-')}`} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg">
                  {solution.icon}
                </div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full mb-2">
                    {solution.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {solution.description}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {solution.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={`${solution.title}-feature-${featureIndex}-${feature.substring(0, 20).toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button asChild className="w-full" variant="outline">
                <Link href={solution.link}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Need a custom solution or have specific requirements?
          </p>
          <Button asChild size="lg">
            <Link href="/contact-us">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;
