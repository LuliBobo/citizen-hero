
import React from 'react';
import { Server } from 'lucide-react';

type NavigationProps = {
  scrollToTemplates: () => void;
  scrollToServices: () => void;
};

const Navigation = ({ scrollToTemplates, scrollToServices }: NavigationProps) => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Server className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold">CitizenDeveloperApp</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              scrollToServices();
            }} className="text-gray-600 hover:text-purple-600">Products</a>
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
  );
};

export default Navigation;
