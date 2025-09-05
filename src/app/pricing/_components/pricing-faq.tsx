'use client'
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: "lms-pricing",
      question: "How does the LMS pricing work?",
      answer: "Our LMS pricing is based on the number of students. You can choose between monthly billing (170 PKR per student per month) or annual billing (1,700 PKR per student per year, which saves you 2 months). You'll receive complete login details to access the web application. For institutions with 1000+ students, we offer custom enterprise pricing."
    },
    {
      id: "dialer-pricing",
      question: "What's included in the International Dialer pricing?",
      answer: "The dialer costs $10 USD per admin account per month. This includes complete administrative access, user management, analytics, and full web application access. You'll receive complete login details to access the web application. Calling minutes are charged separately based on international rates (starting from $0.02 per minute for countries like India and Pakistan)."
    },
    {
      id: "change-plans",
      question: "Can I change plans or cancel anytime?",
      answer: "Yes! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect immediately, and you'll only pay for what you use. No long-term contracts or cancellation fees."
    },
    {
      id: "annual-discounts",
      question: "Do you offer annual billing discounts?",
      answer: "Yes! Our LMS annual plan offers significant savings - you get 2 months free when you pay annually (1,700 PKR per student per year vs 2,040 PKR if paid monthly). This represents a 17% discount."
    },
    {
      id: "data-cancellation",
      question: "What happens to my data if I cancel?",
      answer: "Your data is safe with us. If you cancel, we'll keep your data for 30 days in case you want to reactivate. You can also export all your data in standard formats before cancellation."
    },
    {
      id: "hidden-costs",
      question: "Is there a setup fee or hidden costs?",
      answer: "No hidden costs! Our pricing is transparent and includes everything you need: software access, updates, security, support, and training. The only additional costs are calling minutes for the dialer service (pay-per-use) and any custom integrations you might need."
    },
    {
      id: "support",
      question: "What kind of support do you provide?",
      answer: "All plans include email support. Annual LMS subscribers get priority support, and enterprise customers get dedicated support. We also provide comprehensive documentation, training resources, and onboarding assistance."
    },
    {
      id: "custom-plans",
      question: "Can I get a custom plan for my organization?",
      answer: "Absolutely! We work with organizations of all sizes to create custom plans that fit their specific needs and budget. For large institutions (1000+ students) or complex requirements, contact our sales team for personalized enterprise solutions."
    },
    {
      id: "web-access",
      question: "How do I access the software applications?",
      answer: "Both our LMS and International Dialer are web-based applications. Once you subscribe, we'll provide you with complete login details including username, password, and web application URL. You can access the software from any web browser on any device - no installation required."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our software rental model and pricing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="bg-white rounded-lg mb-4 shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? Our team is here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Contact Support
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
