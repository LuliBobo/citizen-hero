
import React from 'react';
import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import WhyChooseSection from '../components/WhyChooseSection';
import AboutUs from '../components/AboutUs';
import BenefitsSection from '../components/BenefitsSection';
import ServicesSection from '../components/ServicesSection';
import ProductListSection from '../components/ProductListSection';
import Testimonials from '../components/Testimonials';
import TemplatesSection from '../components/TemplatesSection';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-olive-50">
      {/* Navigation */}
      <NavigationBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose Section */}
      <WhyChooseSection />

      {/* About Us Section */}
      <AboutUs />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Product List Section */}
      <ProductListSection />

      {/* Testimonial Section */}
      <Testimonials />

      {/* Templates Section */}
      <TemplatesSection />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Form Section */}
      <section className="py-20 bg-[#E4EAD3]">
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
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
