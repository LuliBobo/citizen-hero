import React, { useState } from 'react';
import { PlusCircle, MinusCircle } from 'lucide-react';
type FAQItemProps = {
  question: string;
  answer: string;
};
const FAQItem = ({
  question,
  answer
}: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="border-b border-gray-200 py-5">
      <button className="flex justify-between items-center w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-medium text-fuchsia-600">{question}</h3>
        {isOpen ? <MinusCircle className="h-5 w-5 text-purple-600 flex-shrink-0" /> : <PlusCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />}
      </button>
      {isOpen && <div className="mt-3 prose prose-purple max-w-none">
          <p className="text-gray-600">{answer}</p>
        </div>}
    </div>;
};
const FAQ = () => {
  const faqItems = [{
    question: "What is CitizenDeveloperApp?",
    answer: "CitizenDeveloperApp is a no-code platform that allows non-technical users to build, deploy, and maintain web applications and websites without writing code. It provides Web as Service and Software as Service solutions designed specifically for citizen developers."
  }, {
    question: "Do I need coding experience to use CitizenDeveloperApp?",
    answer: "No, CitizenDeveloperApp is designed for people with no coding experience. Our intuitive drag-and-drop interface and pre-built templates make it easy for anyone to create professional web applications."
  }, {
    question: "How quickly can I launch my application?",
    answer: "Most users can build and launch their first application within hours, not weeks or months. Our platform streamlines the entire development process, from design to deployment."
  }, {
    question: "What kind of applications can I build?",
    answer: "You can build a wide range of applications including e-commerce stores, business dashboards, portfolios, blogs, CRM systems, and more. Our template gallery offers numerous starting points for different use cases."
  }, {
    question: "Are the applications secure?",
    answer: "Yes, all applications built with CitizenDeveloperApp include enterprise-grade security features. We handle security updates, vulnerability patches, and compliance standards automatically."
  }, {
    question: "Can I customize my application's design?",
    answer: "Absolutely! Our platform offers extensive customization options. You can tailor designs to match your brand identity using our intuitive interface, without writing any CSS or HTML."
  }, {
    question: "What support options are available?",
    answer: "We offer multiple support channels including comprehensive documentation, video tutorials, an active community forum, and direct customer support. Enterprise customers also receive dedicated account management."
  }, {
    question: "How much does CitizenDeveloperApp cost?",
    answer: "We offer flexible pricing plans starting with a free tier for basic needs. Paid plans begin at $49/month with additional features and capabilities. Enterprise pricing is available for organizations with custom requirements."
  }];
  return <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-100">
            Find answers to common questions about how CitizenDeveloperApp works and the benefits it offers.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => <FAQItem key={index} question={item.question} answer={item.answer} />)}
        </div>
        
        <div className="text-center mt-12">
          <p className="mb-6 text-gray-100">Still have questions? We're here to help.</p>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            Contact Support
          </button>
        </div>
      </div>
    </section>;
};
export default FAQ;