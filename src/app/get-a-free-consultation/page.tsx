"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Loader, Phone, Mail, MapPin, Clock, Users, BookOpen, PhoneCall, Sparkles, Target, Zap, ArrowRight, Calendar, Brain, Shield, Rocket, Star, ChevronRight, CheckCircle, HelpCircle } from "lucide-react";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import SectionHead from "@/components/molecule/section-head";
import { motion, AnimatePresence } from "framer-motion";

const GetAFreeConsultation = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    companySize: "",
    services: [] as string[],
    currentChallenges: "",
    timeline: "",
    budget: "",
    additionalInfo: ""
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Canvas animation for background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 700; // Increased height for better visual impact
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particles for background animation
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
      direction: number;
      color: string;
    }> = [];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 4 + 1,
        speed: Math.random() * 3 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        direction: Math.random() * Math.PI * 2,
        color: `hsl(${Math.random() * 40 + 200}, 80%, 70%)` // Blue hues only
      });
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#1e40af');
      gradient.addColorStop(0.5, '#2563eb');
      gradient.addColorStop(1, '#3b82f6');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += Math.cos(particle.direction) * particle.speed;
        particle.y += Math.sin(particle.direction) * particle.speed;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        
        // Create radial gradient for glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 3
        );
        // Convert HSL to HSLA for proper opacity support
        const colorWithOpacity = particle.color.replace(')', `, ${particle.opacity})`);
        const colorTransparent = particle.color.replace(')', ', 0)');
        gradient.addColorStop(0, colorWithOpacity);
        gradient.addColorStop(1, colorTransparent);
        
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send email notification
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData: {
            ...formData,
            _metadata: {
              timestamp: new Date().toLocaleString(),
              formType: 'consultation',
              userAgent: window.navigator.userAgent,
              url: window.location.href
            }
          },
          formType: 'consultation',
          recipientEmail: process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'hello@actoviz.com'
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Consultation Request Submitted!",
          description: "Thank you for your interest. Our team will contact you within 24 hours to schedule your free consultation.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          companySize: "",
          services: [],
          currentChallenges: "",
          timeline: "",
          budget: "",
          additionalInfo: ""
        });
        setActiveStep(0);
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (activeStep < 2) setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const consultationBenefits = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Expert Assessment",
      description: "Get a professional evaluation of your current systems and requirements"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Tailored Solutions",
      description: "Receive personalized recommendations based on your business needs"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Implementation Plan",
      description: "Get a clear roadmap for implementing our solutions"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Ongoing Support",
      description: "Learn about our comprehensive support and training programs"
    }
  ];

  const steps = [
    { title: "Basic Info", description: "Tell us about yourself" },
    { title: "Business Needs", description: "What are you looking for?" },
    { title: "Additional Details", description: "Finalize your request" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section with Canvas Background */}
      <section className="relative text-white py-24 overflow-hidden">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-800/80" style={{ zIndex: 1 }}></div>
        
        <div className="container relative" style={{ zIndex: 2 }}>
          <div className="text-center max-w-4xl mx-auto">
            
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get Your Free <span className="text-blue-400">Consultation</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Let our experts help you find the perfect software rental solution tailored to your business needs
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>30 minutes consultation</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Users className="w-5 h-5 text-blue-400" />
                <span>Expert guidance</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span>No obligation</span>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <SectionHead
            highlighter="Why Choose Our Consultation?"
            H2={<>What You'll Get from Your Free Consultation</>}
            paragraphs={[
              <>
                Our expert consultants will help you understand how our software rental solutions can transform your business operations and drive growth.
              </>
            ]}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {consultationBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-blue-100 relative overflow-hidden group"
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-50 rounded-full group-hover:scale-110 transition-transform"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white relative z-10 group-hover:from-blue-700 group-hover:to-blue-800 transition-all shadow-lg">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Form Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex justify-between items-center relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 -z-10"></div>
                <div 
                  className="absolute top-1/2 left-0 h-1 bg-blue-600 -translate-y-1/2 transition-all duration-500 -z-10" 
                  style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                ></div>
                
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center relative">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${index <= activeStep ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-gray-300 text-gray-500'}`}
                    >
                      {index < activeStep ? <CheckCircle className="w-5 h-5" /> : index + 1}
                    </div>
                    <div className="mt-2 text-center">
                      <p className={`text-sm font-medium ${index <= activeStep ? 'text-blue-600' : 'text-gray-500'}`}>
                        {step.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Schedule Your Free Consultation
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and our team will contact you within 24 hours to schedule your consultation.
                  </p>
                </motion.div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <AnimatePresence mode="wait">
                    {activeStep === 0 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="name" className="flex items-center gap-2">
                              Full Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              required
                              placeholder="Enter your full name"
                              className="mt-2"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email" className="flex items-center gap-2">
                              Email Address <span className="text-red-500">*</span>
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              required
                              placeholder="Enter your email"
                              className="mt-2"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              value={formData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              placeholder="Enter your phone number"
                              className="mt-2"
                            />
                          </div>
                          <div>
                            <Label htmlFor="company">Company Name</Label>
                            <Input
                              id="company"
                              value={formData.company}
                              onChange={(e) => handleInputChange("company", e.target.value)}
                              placeholder="Enter your company name"
                              className="mt-2"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="companySize">Company Size</Label>
                          <Select value={formData.companySize} onValueChange={(value) => handleInputChange("companySize", value)}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-10">1-10 employees</SelectItem>
                              <SelectItem value="11-50">11-50 employees</SelectItem>
                              <SelectItem value="51-200">51-200 employees</SelectItem>
                              <SelectItem value="201-500">201-500 employees</SelectItem>
                              <SelectItem value="500+">500+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </motion.div>
                    )}

                    {activeStep === 1 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div>
                          <Label className="flex items-center gap-2">
                            Services You're Interested In <span className="text-red-500">*</span>
                            <HelpCircle className="w-4 h-4 text-gray-400" />
                          </Label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                            <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                              <Checkbox
                                id="lms"
                                checked={formData.services.includes("lms")}
                                onCheckedChange={() => handleServiceToggle("lms")}
                                className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                              />
                              <Label htmlFor="lms" className="cursor-pointer font-normal flex-1">Learning Management System (LMS)</Label>
                            </div>
                            <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                              <Checkbox
                                id="dialer"
                                checked={formData.services.includes("dialer")}
                                onCheckedChange={() => handleServiceToggle("dialer")}
                                className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                              />
                              <Label htmlFor="dialer" className="cursor-pointer font-normal flex-1">International Calling Dialer</Label>
                            </div>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="currentChallenges">Current Challenges</Label>
                          <Textarea
                            id="currentChallenges"
                            value={formData.currentChallenges}
                            onChange={(e) => handleInputChange("currentChallenges", e.target.value)}
                            placeholder="Describe your current challenges or pain points"
                            rows={4}
                            className="mt-2"
                          />
                        </div>
                      </motion.div>
                    )}

                    {activeStep === 2 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="timeline">Implementation Timeline</Label>
                            <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                              <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="immediate">Immediate (within 1 month)</SelectItem>
                                <SelectItem value="1-3months">1-3 months</SelectItem>
                                <SelectItem value="3-6months">3-6 months</SelectItem>
                                <SelectItem value="6+months">6+ months</SelectItem>
                                <SelectItem value="notsure">Not sure yet</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="budget">Budget Range</Label>
                            <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                              <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="under-1000">Under $1,000/month</SelectItem>
                                <SelectItem value="1000-2500">$1,000 - $2,500/month</SelectItem>
                                <SelectItem value="2500-5000">$2,500 - $5,000/month</SelectItem>
                                <SelectItem value="5000+">$5,000+/month</SelectItem>
                                <SelectItem value="notsure">Not sure yet</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="additionalInfo">Additional Information</Label>
                          <Textarea
                            id="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                            placeholder="Any additional information you'd like to share"
                            rows={4}
                            className="mt-2"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex gap-4 pt-4">
                    {activeStep > 0 && (
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={prevStep}
                        className="flex items-center gap-2"
                      >
                        <ChevronRight className="w-4 h-4 rotate-180" /> Back
                      </Button>
                    )}
                    
                    {activeStep < 2 ? (
                      <Button 
                        type="button" 
                        onClick={nextStep}
                        className="flex items-center gap-2 ml-auto"
                        disabled={
                          (activeStep === 0 && (!formData.name || !formData.email)) ||
                          (activeStep === 1 && formData.services.length === 0)
                        }
                      >
                        Next <ChevronRight className="w-4 h-4" />
                      </Button>
                    ) : (
                      <motion.button
                        type="submit"
                        disabled={loading || formData.services.length === 0}
                        className="ml-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg shadow-blue-500/25"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {loading ? (
                          <div className="flex items-center gap-2">
                            <Loader className="w-5 h-5 animate-spin" />
                            Submitting...
                          </div>
                        ) : (
                          <>
                            Schedule Free Consultation
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </motion.button>
                    )}
                  </div>
                </form>
              </div>
              
              {/* Side Info */}
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl h-fit sticky top-8 border border-blue-200"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-center mb-8">
                  <div className="relative inline-block mb-4">
                    <div className="absolute -inset-4 bg-blue-200/30 rounded-full blur-xl"></div>
                    <Calendar className="w-16 h-16 text-blue-600 relative z-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">What to Expect</h3>
                  <p className="text-gray-600">After submitting this form, our expert will contact you to schedule your consultation at a convenient time.</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Direct Contact</h4>
                      <p className="text-gray-600 text-sm">We'll call you at your preferred time to discuss your needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Detailed Proposal</h4>
                      <p className="text-gray-600 text-sm">Receive a customized solution proposal after our call.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Team</h4>
                      <p className="text-gray-600 text-sm">You'll be connected with specialists in your industry.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">No Obligation</h4>
                      <p className="text-gray-600 text-sm">The consultation is completely free with no strings attached.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-100/50 rounded-xl border border-blue-200">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-sm text-blue-800">
                      <span className="font-semibold">98% of clients</span> say our consultation helped them make better technology decisions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container text-center">
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p
            className="text-xl text-blue-100 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Don't wait to get started. Our software rental solutions can help you scale efficiently and reduce costs while accessing enterprise-grade technology.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg">
              <a href="/contact-us">Contact Sales Team</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <a href="/solutions">View Our Solutions</a>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default GetAFreeConsultation;