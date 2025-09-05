"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Code, 
  Globe, 
  Database, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import Link from "next/link";

const ServicesPage = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasRef2 = useRef<HTMLCanvasElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle click outside dropdowns
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // First canvas animation (hero section)
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 600;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particles for hero canvas
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }
    
    const particles: Particle[] = [];
    const colors = ['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.15)', 'rgba(255, 255, 255, 0.1)'];
    
    // Create particles
    for (let i = 0; i < 80; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const speedX = (Math.random() - 0.5) * 0.5;
      const speedY = (Math.random() - 0.5) * 0.5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particles.push({ x, y, size, speedX, speedY, color });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  useEffect(() => {
    // Second canvas animation (CTA section)
    const canvas = canvasRef2.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 400;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create wave effect
    const drawWaves = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw multiple waves
      for (let i = 0; i < 3; i++) {
        const amplitude = 15 + i * 5;
        const frequency = 0.01 + i * 0.005;
        const speed = 0.05 + i * 0.01;
        const yBase = canvas.height * 0.8 - i * 20;
        
        ctx.beginPath();
        ctx.moveTo(0, yBase);
        
        for (let x = 0; x < canvas.width; x++) {
          const y = yBase + Math.sin(x * frequency + time * speed) * amplitude;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${0.05 + i * 0.05})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${0.01 + i * 0.01})`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
      }
      
      requestAnimationFrame(() => drawWaves(time + 0.05));
    };
    
    drawWaves(0);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const services = [
    {
      id: 1,
      icon: <Bot className="w-8 h-8" />,
      title: "Custom Chatbot AI Integrations",
      description: "Intelligent conversational AI solutions tailored to your business needs",
      features: [
        "Natural Language Processing",
        "Multi-platform Integration",
        "Custom Training Models",
        "Real-time Analytics",
        "24/7 Customer Support",
        "Multi-language Support"
      ],
      pricing: "Starting from $299/month",
      category: "AI & Automation",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      expandedDescription: "Our AI chatbot solutions leverage cutting-edge natural language processing to create seamless conversational experiences for your customers. We develop custom models trained on your specific data and integrate them across all your platforms."
    },
    {
      id: 2,
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Fast Loading Speed",
        "Cross-browser Compatibility",
        "Content Management System",
        "Mobile-first Approach"
      ],
      pricing: "Starting from $199/month",
      category: "Development",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      expandedDescription: "We create stunning, high-performance websites that not only look great but also convert visitors into customers. Our development process focuses on user experience, speed, and search engine optimization to maximize your online presence."
    },
    {
      id: 3,
      icon: <Globe className="w-8 h-8" />,
      title: "Complex Web App Development",
      description: "Enterprise-grade web applications with advanced functionality",
      features: [
        "Scalable Architecture",
        "Database Integration",
        "API Development",
        "User Authentication",
        "Real-time Features",
        "Cloud Deployment"
      ],
      pricing: "Starting from $599/month",
      category: "Development",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      expandedDescription: "We build sophisticated web applications that handle complex business logic, large datasets, and real-time interactions. Our applications are scalable, secure, and designed to grow with your business needs."
    },
    {
      id: 4,
      icon: <Database className="w-8 h-8" />,
      title: "Database Management & Integration",
      description: "Comprehensive database solutions and seamless system integrations",
      features: [
        "Database Design & Optimization",
        "Data Migration Services",
        "API Integration",
        "Data Security & Backup",
        "Performance Monitoring",
        "Cloud Database Setup"
      ],
      pricing: "Starting from $399/month",
      category: "Data & Integration",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      expandedDescription: "Our database experts design, optimize, and maintain robust data infrastructure. We ensure your data flows seamlessly between systems while maintaining security, integrity, and performance."
    },
    {
      id: 5,
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "iOS & Android Development",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "App Analytics Integration"
      ],
      pricing: "Starting from $799/month",
      category: "Mobile",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      expandedDescription: "We create engaging mobile experiences that users love. From native iOS and Android apps to cross-platform solutions, we build applications that are fast, intuitive, and aligned with your business goals."
    },
    {
      id: 6,
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure & DevOps",
      description: "Scalable cloud solutions and automated deployment pipelines",
      features: [
        "Cloud Architecture Design",
        "CI/CD Pipeline Setup",
        "Container Orchestration",
        "Monitoring & Logging",
        "Auto-scaling Solutions",
        "Security Implementation"
      ],
      pricing: "Starting from $499/month",
      category: "Infrastructure",
      color: "from-teal-500 to-blue-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      expandedDescription: "We design and implement robust cloud infrastructure that scales with your business. Our DevOps practices ensure reliable, automated deployments and maintain high availability for your applications."
    }
  ];

  const categories = ["All", "AI & Automation", "Development", "Data & Integration", "Mobile", "Infrastructure"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const stats = [
    { icon: <Users className="w-6 h-6" />, label: "Happy Clients", value: "500+" },
    { icon: <Award className="w-6 h-6" />, label: "Projects Completed", value: "1000+" },
    { icon: <Clock className="w-6 h-6" />, label: "Years Experience", value: "5+" },
    { icon: <Star className="w-6 h-6" />, label: "Client Satisfaction", value: "98%" }
  ];

  const toggleDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/30"></div>
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl"></div>

        <div className="container relative z-10 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Badge className="bg-blue-500/20 text-blue-100 border-blue-400/30 px-6 py-3 text-base font-medium backdrop-blur-sm">
                Our Services
              </Badge>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive <span className="text-blue-300">Technology Solutions</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From AI-powered chatbots to complex web applications, we provide end-to-end technology solutions 
              to transform your business operations and drive growth.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Zap className="w-5 h-5 text-blue-300" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Shield className="w-5 h-5 text-blue-300" />
                <span>Secure Solutions</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Award className="w-5 h-5 text-blue-300" />
                <span>Quality Guaranteed</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600 shadow-sm">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of technology services to meet all your business needs
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-nowrap overflow-x-auto justify-start md:justify-center gap-3 md:gap-4 mb-12 scrollbar-hide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 md:px-6 py-2 rounded-full transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 border-gray-300 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={dropdownRef}>
            <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="relative"
              >
                <Card className={`h-full transition-all duration-300 hover:shadow-2xl ${service.bgColor} ${service.borderColor} border overflow-hidden rounded-2xl`}>
                  <CardContent className="p-6">
                    <div className={`h-1 w-full bg-gradient-to-r ${service.color} rounded-full mb-5`}></div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white shadow-lg ring-1 ring-white/20`}>
                        {service.icon}
                      </div>
                      <Badge variant="secondary" className="text-xs rounded-full">
                        {service.category}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-gray-500">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Starting from</p>
                        <p className="text-lg font-bold text-gray-900">{service.pricing}</p>
                      </div>
                      <Button 
                        asChild
                        size="sm"
                        className={`bg-gradient-to-r ${service.color} hover:opacity-90 text-white shadow-lg`}
                      >
                        <Link href="/contact-us" className="flex items-center gap-2">
                          Get Quote
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>

                    {/* Expand button */}
                    <button
                      className="w-full mt-4 pt-4 border-t border-gray-200 flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                      onClick={() => toggleDropdown(service.id)}
                    >
                      {activeDropdown === service.id ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          Learn More
                        </>
                      )}
                    </button>
                  </CardContent>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {activeDropdown === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 bg-white border-t border-gray-200">
                          <p className="text-gray-600 mb-4">{service.expandedDescription}</p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>

                          <Button 
                            asChild
                            className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white shadow-lg mt-4`}
                          >
                            <Link href="/contact-us" className="flex items-center justify-center gap-2">
                              Request Custom Quote
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
        <canvas 
          ref={canvasRef2}
          className="absolute inset-0 w-full h-full opacity-30"
        />
        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg backdrop-blur-sm">
                <Link href="/contact-us">Get Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600 backdrop-blur-sm">
                <Link href="/get-a-free-consultation">Schedule a Call</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;