
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  username: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  register: (username: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Check if user is already authenticated on page load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Function to register a new user
  const register = (username: string, password: string): boolean => {
    // In a real app, you would send this to a server
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    // Check if username already exists
    if (users[username]) {
      return false;
    }
    
    // Store new user
    users[username] = { username, password };
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto-login after registration
    login(username, password);
    return true;
  };

  // Function to login
  const login = (username: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    
    // Check if user exists and password matches
    if (users[username] && users[username].password === password) {
      const currentUser = { username };
      setUser(currentUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(currentUser));
      return true;
    }
    
    return false;
  };

  // Function to logout
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
