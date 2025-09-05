"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Globe, 
  BarChart3, 
  Shield, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  DollarSign,
  Zap,
  Headphones, 
  Target,
  Building,
  TrendingUp,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  ZoomIn
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ActovizWebDialerPage = () => {
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
      icon: <Phone className="w-8 h-8" />,
      title: "Smart Dialer Interface",
      description: "Intuitive web-based dialer with click-to-call functionality and real-time call management",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Comprehensive call reporting, performance metrics, and real-time dashboards",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with call encryption and compliance features",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Coverage",
      description: "International calling to 190+ countries with competitive rates",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const useCases = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Sales Teams",
      description: "Complete sales call management with lead tracking and performance monitoring"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Customer Support",
      description: "Comprehensive support operations with call routing and ticket management"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Real Estate",
      description: "Professional property management with client communication and lead nurturing"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Healthcare",
      description: "Secure patient communication with HIPAA compliance and appointment scheduling"
    }
  ];

  const callingRates = [
    { country: "United States", rate: "$0.04" },
    { country: "United Kingdom", rate: "$0.06" },
    { country: "Canada", rate: "$0.05" },
    { country: "Australia", rate: "$0.08" },
    { country: "Germany", rate: "$0.07" },
    { country: "India", rate: "$0.02" },
    { country: "Pakistan", rate: "$0.02" },
    { country: "UAE", rate: "$0.05" }
  ];

  // Dialer Images Data - Add your actual images here
  const dialerImages = [
    {
      id: 1,
      title: "Call Dashboard",
      description: "Real-time call management and monitoring",
      icon: <Phone className="w-12 h-12" />,
      image: "/images/dialer/dashboard.png"
    },
    {
      id: 2,
      title: "Call Analytics",
      description: "Comprehensive reporting and performance metrics",
      icon: <BarChart3 className="w-12 h-12" />,
      image: "/images/dialer/analytics.png"
    },
    {
      id: 3,
      title: "User Management",
      description: "Admin controls and user permissions",
      icon: <Users className="w-12 h-12" />,
      image: "/images/dialer/users.png"
    },
    {
      id: 4,
      title: "Call History",
      description: "Complete call logs and history tracking",
      icon: <Clock className="w-12 h-12" />,
      image: "/images/dialer/history.png"
    },
    {
      id: 5,
      title: "International Rates",
      description: "Global calling rates and coverage",
      icon: <Globe className="w-12 h-12" />,
      image: "/images/dialer/rates.png"
    },
    {
      id: 6,
      title: "Security Settings",
      description: "Enterprise security and compliance",
      icon: <Shield className="w-12 h-12" />,
      image: "/images/dialer/security.png"
    },
    {
      id: 7,
      title: "System Settings",
      description: "Configuration and system preferences",
      icon: <Zap className="w-12 h-12" />,
      image: "/images/dialer/settings.png"
    }
    // Add more images here as needed - the gallery will automatically adjust
    // Example:
    // {
    //   id: 8,
    //   title: "Your Custom Feature",
    //   description: "Description of your feature",
    //   icon: <YourIcon className="w-12 h-12" />,
    //   image: "/images/dialer/your-image.png"
    // }
  ];

  const openImageModal = (index: number) => {
    setCurrentImageIndex(index);
    setSelectedImage(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % dialerImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + dialerImages.length) % dialerImages.length);
  };

  // Auto slide functionality
  const startAutoSlide = useCallback(() => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
    autoSlideInterval.current = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % dialerImages.length);
    }, 3000); // Change slide every 3 seconds
  }, [dialerImages.length]);

  const stopAutoSlide = useCallback(() => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
      autoSlideInterval.current = null;
    }
  }, []);

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
  const handleScroll = useCallback(() => {
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
    
    if (newIndex !== currentSlideIndex && newIndex >= 0 && newIndex < dialerImages.length) {
      setCurrentSlideIndex(newIndex);
    }
    
    // Reset user scrolling flag after 1 second of no scrolling
    scrollTimeout.current = setTimeout(() => {
      setIsUserScrolling(false);
    }, 1000);
  }, [currentSlideIndex, dialerImages.length]);

  // Handle wheel events for mouse scroll
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    if (!sliderRef.current) return;
    
    const delta = e.deltaY > 0 ? 1 : -1;
    const newIndex = Math.max(0, Math.min(dialerImages.length - 1, currentSlideIndex + delta));
    
    if (newIndex !== currentSlideIndex) {
      setCurrentSlideIndex(newIndex);
      if (isAutoPlaying) {
        stopAutoSlide();
        startAutoSlide();
      }
    }
  }, [currentSlideIndex, dialerImages.length, isAutoPlaying, stopAutoSlide, startAutoSlide]);

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
  }, [isAutoPlaying, isUserScrolling, startAutoSlide, stopAutoSlide]);

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

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>International Calling Solution</span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl md:text-6xl font-bold leading-tight"
                >
                  Global
                  <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                    Calling Made Simple
                  </span>
            </motion.h1>
                
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl text-gray-300 leading-relaxed"
            >
                  Professional international calling solution with advanced features, 
                  competitive rates, and enterprise-grade security. Make calls to 190+ 
                  countries from your web browser.
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
                  <span className="text-sm text-gray-400">500+ Businesses</span>
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
                {/* Dialer Images Carousel */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-white font-semibold">Dialer Screenshots</h3>
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
                      {dialerImages.map((image, index) => (
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
                          
                          <div className="text-center">
                            <div className="text-white/50 mx-auto mb-3 group-hover:text-white/70 transition-colors duration-300">
                              {image.icon}
                            </div>
                            <p className="text-sm text-white/70 group-hover:text-white transition-colors duration-300">{image.title}</p>
                            <p className="text-xs text-white/50 mt-1 group-hover:text-white/60 transition-colors duration-300">{image.description}</p>
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
                        let endDot = Math.min(dialerImages.length - 1, startDot + totalDots - 1);
                        
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
                        {currentSlideIndex + 1} of {dialerImages.length}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage international calling operations efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainFeatures.map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dialer solution adapts to your business needs across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  {useCase.icon}
                  </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 text-sm">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pay only for what you use with our flexible pricing model
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Admin Account Fee</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$10 <span className="text-lg text-gray-600">/admin/month</span></div>
                <p className="text-gray-600">Complete administrative access with full features</p>
                  </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">International Calling Rates</h3>
                <div className="space-y-3">
                  {callingRates.slice(0, 4).map((rate, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-600">{rate.country}</span>
                      <span className="font-semibold text-blue-600">{rate.rate}/min</span>
                </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">Rates to 190+ countries available</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Included</h3>
                <div className="space-y-3">
                  {[
                    "Complete administrative access",
                    "User management capabilities", 
                    "Advanced analytics and reporting",
                    "Priority customer support",
                    "Web-based application access"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Making International Calls?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join businesses worldwide using our professional dialer solution. 
              Get started in minutes with complete web application access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/contact-us">Get Started Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link href="/pricing">View Pricing</Link>
              </Button>
                </div>
          </div>
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
                    {/* Placeholder for actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl sm:rounded-3xl flex items-center justify-center border-2 border-dashed border-gray-300 shadow-3xl">
                      <div className="text-center p-4">
                        <div className="w-20 h-20 sm:w-32 sm:h-32 bg-blue-500/20 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                          {dialerImages[currentImageIndex]?.icon}
                        </div>
                        <h3 className="text-2xl sm:text-4xl font-bold text-gray-700 mb-2 sm:mb-4">
                          {dialerImages[currentImageIndex]?.title}
                        </h3>
                        <p className="text-sm sm:text-xl text-gray-500 mb-3 sm:mb-6">
                          {dialerImages[currentImageIndex]?.description}
                        </p>
                        <p className="text-xs sm:text-lg text-gray-400">
                          Replace with: {dialerImages[currentImageIndex]?.image}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="lg:w-[500px] bg-white p-4 sm:p-8 lg:p-12 border-l border-gray-200">
                  <div className="space-y-4 sm:space-y-8">
                    <div>
                      <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                        {dialerImages[currentImageIndex]?.title}
                      </h3>
                      <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                        {dialerImages[currentImageIndex]?.description}
                      </p>
                    </div>
                    
                    <div className="pt-4 sm:pt-6 border-t border-gray-200">
                      <p className="text-sm sm:text-lg text-gray-500 mb-3 sm:mb-4">Image {currentImageIndex + 1} of {dialerImages.length}</p>
                      <div className="flex gap-2 sm:gap-3">
                        {dialerImages.map((_, index) => (
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

export default ActovizWebDialerPage;