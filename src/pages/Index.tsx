import React, { useEffect, useRef } from 'react';
import { ArrowRight, Server, Check, Cloud, Clock, Users, Shield, Zap, Code, Database, Layout, PenTool } from 'lucide-react';

const Index = () => {
  const imageRef = useRef<HTMLImageElement>(null);
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
  return <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Server className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold">CitizenDeveloperApp</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-purple-600">Products</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Solutions</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Pricing</a>
              
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-purple-600">Sign in</button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Start for free
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 animate-text gradient-text">
              Build Smarter, Launch Faster<br />with Citizen Developer App
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your ideas into reality without writing a single line of code
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                Start monitoring now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Schedule demo
              </button>
            </div>
          </div>
          <div className="mt-16">
            <img ref={imageRef} src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" alt="Dashboard Preview" className="rounded-xl shadow-2xl scale-on-scroll" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose CitizenDeveloperApp</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform provides powerful Web as Service and Software as Service solutions that empower citizen developers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Cloud className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold">Web as Service</h3>
              </div>
              <p className="text-gray-600 mb-6">Transform your web presence with our comprehensive Web as Service platform that streamlines development and hosting.</p>
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

            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold">Software as Service</h3>
              </div>
              <p className="text-gray-600 mb-6">Empower your business with custom software solutions without the need for complex coding or development expertise.</p>
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
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive suite of services designed to empower businesses and individuals alike.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Web as Service */}
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
              
              <div className="grid grid-cols-2 gap-6">
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
                
                <div className="flex items-start">
                  <div className="mt-1">
                    <Shield className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Security Built-in</h4>
                    <p className="mt-1 text-gray-500">Protected against common vulnerabilities</p>
                  </div>
                </div>
              </div>
              
              <button className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center w-full justify-center md:w-auto">
                Explore Web Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            {/* Software as Service */}
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
              
              <div className="grid grid-cols-2 gap-6">
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
                
                <div className="flex items-start">
                  <div className="mt-1">
                    <Server className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Fully Managed</h4>
                    <p className="mt-1 text-gray-500">We handle maintenance and updates</p>
                  </div>
                </div>
              </div>
              
              <button className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center w-full justify-center md:w-auto">
                Explore Software Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;
