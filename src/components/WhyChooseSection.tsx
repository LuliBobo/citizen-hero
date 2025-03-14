import React from 'react';
import { Cloud, Zap, Bot, Check, Clock, Users, Shield } from 'lucide-react';
const WhyChooseSection = () => {
  return <section className="py-20 bg-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose CitizenDeveloperApp</h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Our platform provides powerful Web as Service and Software as Service solutions that empower citizen developers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="bg-[#A4BE7B] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-[#E5D9B6] p-3 rounded-lg mr-4">
                <Cloud className="h-6 w-6 text-[#5F8D4E]" />
              </div>
              <h3 className="text-xl font-semibold text-white">Web as Service</h3>
            </div>
            <p className="text-white mb-6">Transform your web presence with our comprehensive Web as Service platform that streamlines development and hosting.</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Intuitive drag-and-drop interface</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Responsive design out of the box</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">SEO optimization built-in</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Automatic content delivery network</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#A4BE7B] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-[#E5D9B6] p-3 rounded-lg mr-4">
                <Zap className="h-6 w-6 text-[#5F8D4E]" />
              </div>
              <h3 className="text-xl font-semibold text-white">Software as Service</h3>
            </div>
            <p className="text-white mb-6">Empower your business with custom software solutions without the need for complex coding or development expertise.</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">No-code application builder</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Pre-built templates for common use cases</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Database integration made simple</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Workflow automation tools</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#A4BE7B] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-[#E5D9B6] p-3 rounded-lg mr-4">
                <Bot className="h-6 w-6 text-[#5F8D4E]" />
              </div>
              <h3 className="text-xl font-semibold text-white">AI Agent</h3>
            </div>
            <p className="text-white mb-6">Leverage intelligent AI agents to automate tasks, provide insights, and enhance decision-making across your organization.</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Natural language processing capabilities</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Custom AI assistants for specific tasks</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Data analysis and pattern recognition</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Continuous learning and improvement</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Faster Time to Market</h3>
            <p className="text-gray-600">Launch your digital solutions up to 80% faster than traditional development.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Empower Your Team</h3>
            <p className="text-gray-600">Allow anyone in your organization to build and deploy solutions regardless of technical expertise.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
            <p className="text-gray-600">Rest easy with built-in security features that protect your applications and data.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyChooseSection;