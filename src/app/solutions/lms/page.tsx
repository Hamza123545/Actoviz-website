"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  BookOpen, 
  BarChart3, 
  Shield, 
  Calendar,
  DollarSign,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Building,
  Target,
  Star,
  TrendingUp,
  Globe,
  Clock,
  Award,
  Headphones,
  ChevronRight,
  Play,
  Settings,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  ZoomIn
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const QuranTutorManagementPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoSlideInterval = useRef<NodeJS.Timeout | null>(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const mainFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Student Management",
      description: "Complete student profiles, enrollment tracking, and progress monitoring with advanced analytics",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Tutor Management",
      description: "Comprehensive tutor profiles, performance assessment, and schedule management",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Class Management",
      description: "Flexible class creation, resource allocation, and real-time monitoring",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Financial Management",
      description: "Automated invoicing, payment processing, and comprehensive financial reporting",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const useCases = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Quran Centers",
      description: "Complete management for Islamic education centers with student and tutor tracking"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Language Schools",
      description: "Comprehensive language learning management with progress tracking and assessments"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Private Tutoring",
      description: "Professional tutoring business management with scheduling and payment processing"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Skill Training",
      description: "Specialized skill training programs with certification and progress monitoring"
    }
  ];

  const pricingPlans = [
    {
      name: "Monthly Plan",
      price: "170",
      currency: "PKR",
      period: "/student/month",
      description: "Perfect for small to medium centers",
      features: [
        "Complete student management",
        "Tutor management system",
        "Class scheduling",
        "Basic financial management",
        "Progress tracking",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Annual Plan",
      price: "1,700",
      currency: "PKR", 
      period: "/student/year",
      description: "Best value with 2 months free",
      features: [
        "Everything in Monthly plan",
        "Advanced analytics",
        "Priority support",
        "Custom reporting",
        "Web application access",
        "Enhanced features"
      ],
      popular: true
    }
  ];

  // LMS Images Data - Using your actual LMS images
  const lmsImages = [
    {
      id: 1,
      title: "LMS Dashboard",
      description: "Main dashboard view with analytics and overview",
      icon: <BookOpen className="w-12 h-12" />,
      image: "/images/pages/LMS/lms1.png"
    },
    {
      id: 2,
      title: "Student Management",
      description: "Student profiles & enrollment management",
      icon: <Users className="w-12 h-12" />,
      image: "/images/pages/LMS/lms2.png"
    },
    {
      id: 3,
      title: "Tutor Management",
      description: "Tutor profiles & schedule management",
      icon: <GraduationCap className="w-12 h-12" />,
      image: "/images/pages/LMS/lms3.png"
    },
    {
      id: 4,
      title: "Class Scheduling",
      description: "Schedule management and calendar view",
      icon: <Calendar className="w-12 h-12" />,
      image: "/images/pages/LMS/lms4.png"
    },
    {
      id: 5,
      title: "Financial Management",
      description: "Payments & invoicing system",
      icon: <DollarSign className="w-12 h-12" />,
      image: "/images/pages/LMS/lms5.png"
    },
    {
      id: 6,
      title: "Analytics & Reports",
      description: "Performance insights and reporting",
      icon: <BarChart3 className="w-12 h-12" />,
      image: "/images/pages/LMS/lms6.png"
    },
    {
      id: 7,
      title: "System Settings",
      description: "Configuration & system setup",
      icon: <Settings className="w-12 h-12" />,
      image: "/images/pages/LMS/lms7.png"
    }
  ];

  const openImageModal = (index: number) => {
    setCurrentImageIndex(index);
    setSelectedImage(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % lmsImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + lmsImages.length) % lmsImages.length);
  };

  // Auto slide functionality
  const startAutoSlide = useCallback(() => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
    autoSlideInterval.current = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % lmsImages.length);
    }, 3000); // Change slide every 3 seconds
  }, [lmsImages.length]);

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
      autoSlideInterval.current = null;
    }
  };


  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
    if (isAutoPlaying) {
      stopAutoSlide();
      startAutoSlide();
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Handle scroll events to detect user interaction
  const handleScroll = () => {
    if (!sliderRef.current) return;
    
    setIsUserScrolling(true);
    
    // Clear existing timeout
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    
    // Calculate which slide is currently visible
    const scrollLeft = sliderRef.current.scrollLeft;
    const slideWidth = 320 + 24; // w-80 (320px) + gap-6 (24px)
    const newIndex = Math.round(scrollLeft / slideWidth);
    
    if (newIndex !== currentSlideIndex && newIndex >= 0 && newIndex < lmsImages.length) {
      setCurrentSlideIndex(newIndex);
    }
    
    // Reset user scrolling flag after 1 second of no scrolling
    scrollTimeout.current = setTimeout(() => {
      setIsUserScrolling(false);
    }, 1000);
  };

  // Handle wheel events for mouse scroll
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (!sliderRef.current) return;
    
    const delta = e.deltaY > 0 ? 1 : -1;
    const newIndex = Math.max(0, Math.min(lmsImages.length - 1, currentSlideIndex + delta));
    
    if (newIndex !== currentSlideIndex) {
      setCurrentSlideIndex(newIndex);
      if (isAutoPlaying) {
        stopAutoSlide();
        startAutoSlide();
      }
    }
  };

  // Auto slide effect
  useEffect(() => {
    if (isAutoPlaying && !isUserScrolling) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }

    return () => {
      stopAutoSlide();
    };
  }, [isAutoPlaying, isUserScrolling, startAutoSlide]);

  // Scroll to current slide (only when not user scrolling)
  useEffect(() => {
    if (sliderRef.current && !isUserScrolling) {
      const slideWidth = 320 + 24; // w-80 (320px) + gap-6 (24px)
      sliderRef.current.scrollTo({
        left: currentSlideIndex * slideWidth,
        behavior: 'smooth'
      });
    }
  }, [currentSlideIndex, isUserScrolling]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/backgrounds/WhiteGrid.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        
        <div className="container section relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 text-sm border border-white/10"
                >
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  <span>Learning Management System</span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl md:text-6xl font-bold leading-tight"
                >
                  Complete
                  <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    Education Management
                  </span>
            </motion.h1>
                
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl text-gray-300 leading-relaxed"
                >
                  Comprehensive LMS solution for educational institutions. Manage students, 
                  tutors, classes, and finances all in one powerful web application. 
                  Perfect for Quran centers, language schools, and training institutes.
            </motion.p>
              </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-600/25">
                  <Link href="/contact-us" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
              </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white/50 hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur shadow-lg">
                  <Link href="#demo" className="flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Watch Demo
                  </Link>
              </Button>
            </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-6 pt-4"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="w-8 h-8 rounded-full bg-blue-500 border-2 border-slate-900"></div>
            ))}
          </div>
                  <span className="text-sm text-gray-400">500+ Institutions</span>
        </div>
                <div className="h-6 w-px bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-400">4.9/5 Rating</span>
        </div>
              </motion.div>
          </div>
          
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-xl"></div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 relative z-10">
                {/* LMS Images Carousel */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-white font-semibold">LMS Screenshots</h3>
                       </div>
                    <div className="flex items-center gap-3">
                      <div className="text-xs text-white/60 hidden sm:block">
                        Scroll or swipe to navigate
                     </div>
                      {/* Auto Play Toggle */}
                      <button
                        onClick={toggleAutoPlay}
                        className="w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/20 shadow-lg"
                        title={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                      >
                        {isAutoPlaying ? (
                          <div className="w-3 h-3 bg-white rounded-sm"></div>
                        ) : (
                          <Play className="w-3 h-3 ml-0.5" />
                     )}
                   </button>
                    </div>
                  </div>
                  
                  {/* Auto Sliding Image Gallery */}
                  <div className="relative">
                   
                    {/* Slider Container */}
                    <div 
                      ref={sliderRef}
                      className="flex gap-6 overflow-x-auto scrollbar-hide pt-2 pb-6 px-2 cursor-grab active:cursor-grabbing" 
                      style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
                      onScroll={handleScroll}
                      onWheel={handleWheel}
                    >
                      {lmsImages.map((image, index) => (
                       <motion.div
                          key={image.id}
                          className={`flex-shrink-0 w-80 h-48 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all duration-300 group relative overflow-hidden ${
                            index === currentSlideIndex ? 'ring-2 ring-blue-400/50' : ''
                          }`}
                          onClick={() => openImageModal(index)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Zoom overlay */}
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <ZoomIn className="w-8 h-8 text-white" />
                         </div>
                          
                          <div className="w-full h-full relative">
                            <Image 
                              src={image.image} 
                              alt={image.title}
                              fill
                              className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-white mx-auto mb-2">
                                  {image.icon}
                 </div>
                                <p className="text-sm text-white font-semibold">{image.title}</p>
                                <p className="text-xs text-white/80 mt-1">{image.description}</p>
             </div>
           </div>
        </div>
                  </motion.div>
                ))}
              </div>
                    
                    {/* Slide Indicators - Show 5 dots */}
                    <div className="flex justify-center mt-6 gap-3">
                      {(() => {
                        const totalDots = 5;
                        const dots = [];
                        
                        // Calculate which dots to show based on current position
                        let startDot = Math.max(0, currentSlideIndex - 2);
                        let endDot = Math.min(lmsImages.length - 1, startDot + totalDots - 1);
                        
                        // Adjust start if we're near the end
                        if (endDot - startDot < totalDots - 1) {
                          startDot = Math.max(0, endDot - totalDots + 1);
                        }
                        
                        for (let i = startDot; i <= endDot; i++) {
                          dots.push(
                            <button
                              key={i}
                              onClick={() => goToSlide(i)}
                              className={`transition-all duration-300 ${
                                i === currentSlideIndex 
                                  ? 'w-8 h-2 bg-white rounded-full' 
                                  : 'w-2 h-2 bg-white/40 hover:bg-white/60 rounded-full'
                              }`}
                            />
                          );
                        }
                        
                        return dots;
                      })()}
                    </div>

                    {/* Slide Counter */}
                    <div className="flex justify-center mt-3">
                      <div className="bg-white/10 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full border border-white/20">
                        {currentSlideIndex + 1} of {lmsImages.length}
            </div>
                </div>
                </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Everything You Need to Manage Education
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Comprehensive features designed for educational institutions of all sizes
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainFeatures.map((feature, index) => (
                  <motion.div 
                    key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center p-8 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
              </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="w-5 h-5 text-blue-500 mx-auto" />
              </div>
            </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Perfect for Every Educational Institution
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our LMS adapts to your educational needs across various institutions
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Pay per student with flexible monthly or annual billing options
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-white rounded-2xl p-8 border ${plan.popular ? 'border-blue-500 shadow-2xl shadow-blue-100 scale-105 ring-2 ring-blue-500/20' : 'border-gray-200 hover:shadow-xl'} transition-all duration-300`}
              >
                {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/25">
                    Most Popular
                      </span>
                  </div>
                )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.currency} {plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                  </div>
                    <p className="text-gray-600">{plan.description}</p>
                </div>

                  <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                      </div>
            ))}
          </div>

                  <Button asChild className="w-full" size="lg" variant={plan.popular ? "default" : "outline"}>
                    <Link href="/contact-us" className="flex items-center justify-center gap-2">
                      Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                </Button>
              </motion.div>
            ))}
          </div>

            </div>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Advanced Features & Capabilities
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Everything you need to run a successful educational institution
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <BarChart3 className="w-6 h-6" />, title: "Advanced Analytics", desc: "Comprehensive reporting and performance insights" },
              { icon: <Calendar className="w-6 h-6" />, title: "Smart Scheduling", desc: "AI-powered schedule optimization and conflict resolution" },
              { icon: <Shield className="w-6 h-6" />, title: "Data Security", desc: "Enterprise-grade security and data protection" },
              { icon: <Globe className="w-6 h-6" />, title: "Web Access", desc: "Complete web application access from any device" },
              { icon: <Headphones className="w-6 h-6" />, title: "24/7 Support", desc: "Priority support for annual subscribers" },
              { icon: <TrendingUp className="w-6 h-6" />, title: "Scalable", desc: "Grows with your institution from 10 to 1000+ students" }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/backgrounds/WhiteGrid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-green-700/20"></div>
        
        <div className="container text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-white"
          >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Education Management?
          </h2>
            <p className="text-xl mb-8 text-white">
              Join educational institutions worldwide using our comprehensive LMS solution. 
              Get started in minutes with complete web application access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg">
                <Link href="/contact-us" className="flex items-center gap-2">
                  Get Started Now <ArrowRight className="w-4 h-4" />
                </Link>
            </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white/50 hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur shadow-lg">
                <Link href="/pricing" className="flex items-center gap-2">
                  View Pricing <ArrowRight className="w-4 h-4" />
                </Link>
            </Button>
          </div>
            
            <div className="mt-12 p-6 bg-white/10 backdrop-blur rounded-2xl border border-white/20">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Free 14-day trial</span>
          </div>
                <div className="h-4 w-px bg-white/30 hidden md:block"></div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>No credit card required</span>
                </div>
                <div className="h-4 w-px bg-white/30 hidden md:block"></div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Cancel anytime</span>
                </div>
              </div>
          </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-[95vw] h-[95vh] sm:w-[98vw] sm:h-[98vh] max-w-none max-h-none bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 sm:top-8 sm:right-8 z-10 w-12 h-12 sm:w-16 sm:h-16 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-110"
              >
                <X className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-8 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 sm:w-20 sm:h-20 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 sm:w-10 sm:h-10" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-8 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 sm:w-20 sm:h-20 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-110"
              >
                <ChevronRightIcon className="w-6 h-6 sm:w-10 sm:h-10" />
              </button>

              {/* Image Content */}
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image Section */}
                <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-8 lg:p-16">
                  <div className="relative w-full h-full max-h-[60vh] lg:max-h-none">
                    <Image
                      src={lmsImages[currentImageIndex]?.image}
                      alt={lmsImages[currentImageIndex]?.title}
                      fill
                      className="w-full h-full object-contain rounded-2xl sm:rounded-3xl shadow-3xl"
           />
         </div>
                </div>

                {/* Info Section */}
                <div className="lg:w-[500px] bg-white p-4 sm:p-8 lg:p-12 border-l border-gray-200">
                  <div className="space-y-4 sm:space-y-8">
                    <div>
                      <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                        {lmsImages[currentImageIndex]?.title}
                      </h3>
                      <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                        {lmsImages[currentImageIndex]?.description}
                      </p>
                    </div>
                    
                    <div className="pt-4 sm:pt-6 border-t border-gray-200">
                      <p className="text-sm sm:text-lg text-gray-500 mb-3 sm:mb-4">Image {currentImageIndex + 1} of {lmsImages.length}</p>
                      <div className="flex gap-2 sm:gap-3">
                        {lmsImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`h-3 sm:h-4 rounded-full transition-all duration-200 ${
                              index === currentImageIndex ? 'bg-blue-500 w-8 sm:w-12' : 'bg-gray-300 hover:bg-gray-400 w-3 sm:w-4'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 sm:pt-6 border-t border-gray-200">
                      <Button asChild className="w-full h-12 sm:h-16 text-sm sm:text-lg" size="lg">
                        <Link href="/contact-us" className="flex items-center justify-center gap-2 sm:gap-3">
                          Get Started <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
                        </Link>
            </Button>
          </div>
                  </div>
          </div>
        </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuranTutorManagementPage;