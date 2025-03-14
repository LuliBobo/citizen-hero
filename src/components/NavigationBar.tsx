
import React from 'react';
import { Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const NavigationBar = () => {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Server className="h-8 w-8 text-olive-500" />
            <Link to="/" className="ml-2 text-xl font-bold">CitizenDeveloperApp</Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-olive-500">Products</Link>
            <Link to="/" className="text-gray-600 hover:text-olive-500">Solutions</Link>
            <Link to="/" className="text-gray-600 hover:text-olive-500">Pricing</Link>
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-gray-600">Welcome, {user?.username}</span>
                <button 
                  onClick={logout}
                  className="bg-olive-500 text-white px-4 py-2 rounded-lg hover:bg-olive-600 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/sign-in" className="text-gray-600 hover:text-olive-500">Sign in</Link>
                <Link 
                  to="/sign-up" 
                  className="bg-olive-500 text-white px-4 py-2 rounded-lg hover:bg-olive-600 transition-colors"
                >
                  Start for free
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
