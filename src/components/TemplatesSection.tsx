import React, { useState } from 'react';
import { Star, Check, Globe, Laptop, ChevronLeft, ChevronRight } from 'lucide-react';
const TemplatesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
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
  return <section id="templates-section" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Ready-to-Use Templates</h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Browse our collection of professionally designed templates to kickstart your next project
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-[#E5D9B6] rounded-lg">
            <button onClick={() => setSelectedCategory("all")} className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${selectedCategory === "all" ? "bg-[#557153] text-white" : "text-gray-700 hover:bg-[#C9D7A8]"}`}>
              All Templates
            </button>
            <button onClick={() => setSelectedCategory("website")} className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${selectedCategory === "website" ? "bg-[#557153] text-white" : "text-gray-700 hover:bg-[#C9D7A8]"}`}>
              <Globe className="inline mr-1 h-4 w-4" />
              Websites
            </button>
            <button onClick={() => setSelectedCategory("application")} className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${selectedCategory === "application" ? "bg-[#557153] text-white" : "text-gray-700 hover:bg-[#C9D7A8]"}`}>
              <Laptop className="inline mr-1 h-4 w-4" />
              Applications
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map(template => <div key={template.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
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
                  {template.features.map((feature, idx) => <li key={idx} className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>)}
                </ul>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-purple-700">${template.price}</span>
                  <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default TemplatesSection;