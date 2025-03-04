
import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to get started? Reach out to our team today.
          </p>
        </div>
        
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
