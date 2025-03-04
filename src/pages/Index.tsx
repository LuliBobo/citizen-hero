
import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import WhyChooseSection from '../components/WhyChooseSection';
import BenefitsSection from '../components/BenefitsSection';
import ServicesSection from '../components/ServicesSection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import TemplatesSection from '../components/TemplatesSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const templatesRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollPosition = window.scrollY;
        const scale = 0.5 + scrollPosition / window.innerHeight * 1.5;
        imageRef.current.style.transform = `scale(${Math.min(scale, 2)})`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTemplates = () => {
    templatesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const templates = [{
    id: 1,
    title: "E-commerce Starter",
    category: "website",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 124,
    price: 49,
    features: ["Responsive Design", "Product Catalog", "Shopping Cart", "Payment Integration"]
  }, {
    id: 2,
    title: "Business Dashboard",
    category: "application",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80",
    rating: 4.6,
    reviews: 89,
    price: 79,
    features: ["Data Visualization", "User Management", "Analytics", "Custom Reports"]
  }, {
    id: 3,
    title: "Portfolio Showcase",
    category: "website",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 56,
    price: 39,
    features: ["Gallery Layout", "Bio Section", "Contact Form", "Project Showcase"]
  }, {
    id: 4,
    title: "Mobile App Builder",
    category: "application",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    rating: 4.7,
    reviews: 102,
    price: 99,
    features: ["Drag-and-Drop Interface", "Component Library", "Preview Mode", "Export Options"]
  }, {
    id: 5,
    title: "Blog Platform",
    category: "website",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    rating: 4.5,
    reviews: 78,
    price: 59,
    features: ["Content Management", "Comment System", "SEO Optimized", "Social Sharing"]
  }, {
    id: 6,
    title: "CRM Solution",
    category: "application",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 116,
    price: 129,
    features: ["Contact Management", "Sales Pipeline", "Task Tracking", "Email Integration"]
  }];

  return (
    <div className="min-h-screen bg-white">
      <Navigation scrollToTemplates={scrollToTemplates} />
      <HeroSection imageRef={imageRef} />
      <WhyChooseSection />
      <BenefitsSection />
      <ServicesSection />
      <Testimonials />
      <ContactSection />
      <TemplatesSection 
        ref={templatesRef}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        templates={templates}
      />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
