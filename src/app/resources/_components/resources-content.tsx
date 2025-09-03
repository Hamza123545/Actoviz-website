import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileText, Users, Download, ExternalLink } from "lucide-react";
import Link from "next/link";

const ResourcesContent = () => {
  const resources = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Product Documentation",
      description: "Comprehensive guides, API references, and technical documentation for our LMS and calling solutions.",
      links: [
        { text: "LMS User Guide", href: "#" },
        { text: "Dialer API Reference", href: "#" },
        { text: "Getting Started Guide", href: "#" },
        { text: "Best Practices", href: "#" }
      ]
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Tutorials",
      description: "Step-by-step video guides to help you master your Actoviz software quickly and efficiently.",
      links: [
        { text: "Getting Started Videos", href: "#" },
        { text: "Advanced Features", href: "#" },
        { text: "Integration Tutorials", href: "#" },
        { text: "Troubleshooting Guides", href: "#" }
      ]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Best Practices & Guides",
      description: "Expert insights and proven strategies to maximize the value of your software rental investment.",
      links: [
        { text: "Implementation Checklist", href: "#" },
        { text: "Security Best Practices", href: "#" },
        { text: "Performance Optimization", href: "#" },
        { text: "Compliance Guidelines", href: "#" }
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community & Support",
      description: "Connect with other users, share experiences, and get help from our community and support team.",
      links: [
        { text: "Community Forum", href: "#" },
        { text: "Knowledge Base", href: "#" },
        { text: "Support Tickets", href: "#" },
        { text: "Live Chat Support", href: "#" }
      ]
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access everything you need to succeed with Actoviz software rental solutions. 
            From getting started to advanced optimization, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div key={`resource-${resource.title.toLowerCase().replace(/\s+/g, '-')}`} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {resource.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                {resource.description}
              </p>

              <div className="space-y-3">
                {resource.links.map((link, linkIndex) => (
                  <div key={`${resource.title}-link-${linkIndex}-${link.text.substring(0, 20).toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="text-gray-700">{link.text}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Need More Help?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Can't find what you're looking for? Our support team is here to help you 
              get the most out of your Actoviz software rental.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact-us">Contact Support</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Link href="/contact-us">Schedule Training</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesContent;
