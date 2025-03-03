import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Server, Check, Cloud, Clock, Users, Shield, Zap, Code, Database, Layout, PenTool, Star, ShoppingCart, Globe, Smartphone, Laptop, ChevronLeft, ChevronRight, Send, Rocket, MessageSquare, Bot, Quote } from 'lucide-react';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Index = () => {
  const imageRef = useRef<HTMLImageElement>(null);
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

  const filteredTemplates = selectedCategory === "all" ? templates : templates.filter(template => template.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
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
            <img ref={imageRef} alt="Dashboard Preview" src="/lovable-uploads/1e7995b5-3727-416c-b64a-423be03ecad2.jpg" className="rounded-xl shadow-5xl scale-on-scroll object-scale-down" />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
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

      {/* Benefits Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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

      {/* Testimonial Section */}
      <Testimonials />

      {/* Contact Form Section */}
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

      {/* Templates Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready-to-Use Templates</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our collection of professionally designed templates to kickstart your next project
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-gray-100 rounded-lg">
              <button onClick={() => setSelectedCategory("all")} className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${selectedCategory === "all" ? "bg-purple-600 text-white" : "text-gray-700 hover:bg-gray-200"}`}>
                All Templates
              </button>
              <button onClick={() => setSelectedCategory("website")} className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${selectedCategory === "website" ? "bg-purple-600 text-white" : "text-gray-700 hover:bg-gray-200"}`}>
                <Globe className="inline mr-1 h-4 w-4" />
                Websites
              </button>
              <button onClick={() => setSelectedCategory("application")} className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${selectedCategory === "application" ? "bg-purple-600 text-white" : "text-gray-700 hover:bg-gray-200"}`}>
                <Laptop className="inline mr-1 h-4 w-4" />
                Applications
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map(template => (
              <div key={template.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <img src={template.image} alt={template.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{template.title}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {template.category === "website" ? "Website" : "Application"}
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium text-gray-700">{template.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">({template.reviews} reviews)</span>
                  </div>
                  
                  <ul className="mb-6 space-y-2">
                    {template.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-purple-700">${template.price}</span>
                    <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Index;
