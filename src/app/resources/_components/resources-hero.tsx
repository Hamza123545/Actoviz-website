import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileText, Users } from "lucide-react";
import Link from "next/link";

const ResourcesHero = () => {
  const resourceTypes = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      text: "Documentation"
    },
    {
      icon: <Video className="w-6 h-6" />,
      text: "Video Tutorials"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      text: "Best Practices"
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Community Support"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="container section text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Resources & Support
          </h1>
          <p className="text-xl md:text-2xl text-secondarymuted mb-8">
            Everything you need to get the most out of your Actoviz software rental. 
            From comprehensive documentation to expert support, we're here to help you succeed.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {resourceTypes.map((type, index) => (
              <div key={`resource-${type.text.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2">
                {type.icon}
                <span>{type.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="#resources">Explore Resources</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Link href="/contact-us">Get Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesHero;
