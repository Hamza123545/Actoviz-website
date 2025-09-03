'use client'
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: "free-trial",
      question: "What's included in the free trial?",
      answer: "Our 14-day free trial includes full access to all features of your chosen plan, with no credit card required. You can explore the software, create content, and test all functionality before making a decision."
    },
    {
      id: "change-plans",
      question: "Can I change plans or cancel anytime?",
      answer: "Yes! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect immediately, and you'll only pay for what you use. No long-term contracts or cancellation fees."
    },
    {
      id: "annual-discounts",
      question: "Do you offer annual billing discounts?",
      answer: "Yes, we offer significant discounts for annual billing. Annual plans typically save you 20-30% compared to monthly billing, making it a great option for businesses looking to optimize costs."
    },
    {
      id: "data-cancellation",
      question: "What happens to my data if I cancel?",
      answer: "Your data is safe with us. If you cancel, we'll keep your data for 30 days in case you want to reactivate. You can also export all your data in standard formats before cancellation."
    },
    {
      id: "hidden-costs",
      question: "Is there a setup fee or hidden costs?",
      answer: "No hidden costs! Our pricing is transparent and includes everything you need: software access, updates, security, support, and training. The only additional cost would be if you need custom integrations or consulting services."
    },
    {
      id: "support",
      question: "What kind of support do you provide?",
      answer: "All plans include email support, with priority support for Professional and Enterprise plans. Enterprise customers get 24/7 phone support and a dedicated account manager. We also provide comprehensive documentation and training resources."
    },
    {
      id: "custom-plans",
      question: "Can I get a custom plan for my organization?",
      answer: "Absolutely! We work with organizations of all sizes to create custom plans that fit their specific needs and budget. Contact our sales team to discuss your requirements and get a personalized quote."
    },
    {
      id: "security-compliance",
      question: "How do you handle security and compliance?",
      answer: "Security is our top priority. We use enterprise-grade security measures, regular security audits, and maintain compliance with industry standards like SOC 2, GDPR, and HIPAA. All data is encrypted and backed up regularly."
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
