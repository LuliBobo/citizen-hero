
import React from 'react';
import { Link } from 'react-router-dom';
import { Server, User, LogOut } from 'lucide-react';
import { useUser } from '../contexts/UserContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';

type NavigationProps = {
  scrollToTemplates: () => void;
  scrollToServices: () => void;
};

const Navigation = ({ scrollToTemplates, scrollToServices }: NavigationProps) => {
  const { user, logout } = useUser();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={scrollToTop}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                scrollToTop();
              }
            }}
          >
            <Server className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold">CitizenDeveloperApp</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              scrollToServices();
            }} className="text-gray-600 hover:text-purple-600">Products</a>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: document.querySelector('.py-20.bg-gray-50')?.getBoundingClientRect().top + window.scrollY - 80,
                behavior: 'smooth'
              });
            }} className="text-gray-600 hover:text-purple-600">Solutions</a>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              scrollToTemplates();
            }} className="text-gray-600 hover:text-purple-600">Pricing</a>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 text-purple-600">
                      {user.username.charAt(0).toUpperCase()}
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{user.username}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={logout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-purple-600">
                  Sign in
                </Link>
                <Link to="/register" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
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

export default Navigation;
