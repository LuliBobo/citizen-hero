
import React, { useState } from 'react';
import { Mail, Phone, Send, User, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your inquiry. We'll get back to you shortly!",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
          <p className="text-gray-600 mb-8">
            Have questions about our services? Fill out the form and our team will get back to you as soon as possible.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Phone className="h-5 w-5 text-purple-500" />
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-gray-900">Phone</h4>
                <p className="mt-1 text-gray-500">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Mail className="h-5 w-5 text-purple-500" />
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-gray-900">Email</h4>
                <p className="mt-1 text-gray-500">contact@citizendeveloperapp.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <MapPin className="h-5 w-5 text-purple-500" />
              </div>
              <div className="ml-4">
                <h4 className="font-medium text-gray-900">Address</h4>
                <p className="mt-1 text-gray-500">123 Innovation Lane, San Francisco, CA 94107</p>
              </div>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
                placeholder="John Doe"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number (Optional)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className="flex items-center">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
