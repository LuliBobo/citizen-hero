import React from 'react';
import { Users, Bot, Zap, Award, Lightbulb } from 'lucide-react';
const AboutUs = () => {
  return <section id="about-us" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">About Us</h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-100">
            Meet the innovative team behind CitizenDeveloperApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-purple-700">We are a very small efficient team with a large number of AI Agent helpers.</h3>
            
            <p className="text-lg text-gray-100">
              At CitizenDeveloperApp, we believe in the power of combining human creativity with AI assistance. 
              Our lean team of experts works alongside advanced AI agents to deliver exceptional solutions that would 
              traditionally require teams many times our size.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Small but Mighty Team</h4>
                  <p className="text-gray-100">Our streamlined team of developers, designers, and innovators brings decades of combined experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Bot className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">AI-Powered Assistance</h4>
                  <p className="text-gray-100">Our team is enhanced by intelligent AI agents that automate repetitive tasks and provide valuable insights.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Efficient Processes</h4>
                  <p className="text-gray-600">Our streamlined workflows and AI integration allow us to deliver projects faster than traditional teams.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 rounded-xl z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-200 rounded-xl z-0"></div>
            
            <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" alt="Our Team" className="w-full h-64 object-cover object-center" />
              
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <span className="font-medium">Award-winning solutions</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    <span className="font-medium">Innovative approach</span>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="italic text-gray-700">
                    "We combine the best of human creativity with AI efficiency to deliver solutions that exceed expectations."
                  </p>
                  <p className="text-right mt-2 text-purple-700 font-medium">— Our Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutUs;