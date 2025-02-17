
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Server } from 'lucide-react';

const Index = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollPosition = window.scrollY;
        const scale = 0.5 + (scrollPosition / window.innerHeight) * 1.5;
        imageRef.current.style.transform = `scale(${Math.min(scale, 2)})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
              <a href="#" className="text-gray-600 hover:text-purple-600">Docs</a>
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
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              alt="Dashboard Preview"
              className="rounded-xl shadow-2xl scale-on-scroll"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
