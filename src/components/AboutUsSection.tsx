
import React from 'react';
import { Bot, Users, Zap, Star } from 'lucide-react';

const AboutUsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are a small, efficient team working alongside powerful AI agents to deliver exceptional solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Small Team, Big Impact</h3>
            <p className="text-lg text-gray-600">
              At CitizenDeveloperApp, we believe in quality over quantity. Our compact team of experts works seamlessly together, 
              each bringing specialized skills and knowledge to create solutions that empower businesses.
            </p>
            
            <div className="flex items-start gap-3">
              <Users className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-medium text-gray-900">Human Expertise</h4>
                <p className="text-gray-600">Our team brings decades of combined experience in software development, design, and business strategy.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Bot className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-medium text-gray-900">AI Augmentation</h4>
                <p className="text-gray-600">We leverage powerful AI agents to handle repetitive tasks, analyze data, and accelerate development.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Zap className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-medium text-gray-900">Efficiency-First Approach</h4>
                <p className="text-gray-600">Our lean methodology and AI integration allow us to deliver enterprise-quality solutions at startup speed.</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" 
              alt="Our team working with AI" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600">To democratize software development by empowering citizen developers with AI-powered tools.</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Team</h3>
            <p className="text-gray-600">A small group of passionate technologists and business experts working alongside advanced AI systems.</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Bot className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our AI Partners</h3>
            <p className="text-gray-600">Cutting-edge AI agents that help us design, develop, test, and optimize your digital solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
