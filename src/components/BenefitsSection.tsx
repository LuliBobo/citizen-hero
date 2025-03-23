import React from 'react';
import { Layout, Database, Bot, Code, Clock, PenTool, Cloud, Users, Shield, Server, Zap, MessageSquare, ArrowRight } from 'lucide-react';
const BenefitsSection = () => {
  return <section id="benefits-section" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Benefits of Our Services</h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-100">
            Discover how our platform transforms your business through our three core offerings.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Web as Service Benefits */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-4 rounded-full mr-4">
                <Layout className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold">Web as Service</h3>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Code className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">No Coding Required</h4>
                  <p className="mt-1 text-gray-500">Create professional websites without writing a single line of code.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Rapid Development</h4>
                  <p className="mt-1 text-gray-500">Launch your website in days instead of months with our intuitive tools.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <PenTool className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Design Flexibility</h4>
                  <p className="mt-1 text-gray-500">Customize every aspect of your site to match your brand perfectly.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Cloud className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Reliable Hosting</h4>
                  <p className="mt-1 text-gray-500">Enjoy 99.9% uptime with automatic scaling to handle traffic surges.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Software as Service Benefits */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-4 rounded-full mr-4">
                <Database className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold">Software as Service</h3>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Zap className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Instant Deployment</h4>
                  <p className="mt-1 text-gray-500">Get access to business applications immediately without installation.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Users className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Team Collaboration</h4>
                  <p className="mt-1 text-gray-500">Enable seamless teamwork with real-time collaborative features.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Shield className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Enterprise Security</h4>
                  <p className="mt-1 text-gray-500">Protect sensitive business data with industry-leading security protocols.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Server className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Automatic Updates</h4>
                  <p className="mt-1 text-gray-500">Always use the latest version with zero maintenance required from your team.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI Agent Benefits */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-4 rounded-full mr-4">
                <Bot className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold">AI Agent</h3>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MessageSquare className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Conversational Interface</h4>
                  <p className="mt-1 text-gray-500">Interact naturally with AI through human-like conversations.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">24/7 Availability</h4>
                  <p className="mt-1 text-gray-500">Get assistance anytime, day or night, without waiting for human response.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Server className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Process Automation</h4>
                  <p className="mt-1 text-gray-500">Automate repetitive tasks to free up your team for creative work.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Zap className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Adaptive Learning</h4>
                  <p className="mt-1 text-gray-500">AI continuously improves based on interactions, getting smarter over time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors">
            Learn more about our benefits
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>;
};
export default BenefitsSection;