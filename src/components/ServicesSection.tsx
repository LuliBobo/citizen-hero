
import React from 'react';
import { ArrowRight, Layout, Database, Bot, PenTool, Code, Cloud, Zap, Users, Server, Shield, MessageSquare, Clock } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive suite of services designed to empower businesses and individuals alike.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-4 rounded-full mr-4">
                <Layout className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold">Web as Service</h3>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Create stunning web experiences with our customizable templates and intuitive design tools.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1">
                  <PenTool className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">Customizable Templates</h4>
                  <p className="mt-1 text-gray-500">Tailor designs to match your brand identity</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1">
                  <Code className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">No-Code Building</h4>
                  <p className="mt-1 text-gray-500">Create websites without writing code</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1">
                  <Cloud className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">Cloud Hosting</h4>
                  <p className="mt-1 text-gray-500">Reliable and scalable hosting solutions</p>
                </div>
              </div>
            </div>
            
            <button className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center w-full justify-center">
              Explore Web Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-4 rounded-full mr-4">
                <Database className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold">Software as Service</h3>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Deploy ready-to-use applications tailored to specific business needs without technical expertise.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1">
                  <Zap className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">Ready Applications</h4>
                  <p className="mt-1 text-gray-500">Pre-built solutions for common needs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1">
                  <Users className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">Team Collaboration</h4>
                  <p className="mt-1 text-gray-500">Multi-user access and workflows</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1">
                  <Clock className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">Quick Deployment</h4>
                  <p className="mt-1 text-gray-500">Go live in hours instead of months</p>
                </div>
              </div>
            </div>
            
            <button className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center w-full justify-center">
              Explore Software Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-4 rounded-full mr-4">
                <Bot className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold">AI Agent</h3>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Leverage ready-made AI Agents to automate tasks, analyze data, and provide intelligent insights.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1">
                  <MessageSquare className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">Conversational AI</h4>
                  <p className="mt-1 text-gray-500">Natural language interactions with users</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1">
                  <Server className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">Process Automation</h4>
                  <p className="mt-1 text-gray-500">Automate repetitive tasks efficiently</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1">
                  <Shield className="h-5 w-5 text-purple-500" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">Secured Integration</h4>
                  <p className="mt-1 text-gray-500">Safe integration with existing systems</p>
                </div>
              </div>
            </div>
            
            <button className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center w-full justify-center">
              Explore AI Agents
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
