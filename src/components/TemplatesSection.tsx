
import React, { forwardRef, RefObject } from 'react';
import { Check, Star, Globe, Laptop } from 'lucide-react';

interface Template {
  id: number;
  title: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  features: string[];
}

interface TemplatesSectionProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  templates: Template[];
}

const TemplatesSection = forwardRef<HTMLDivElement, TemplatesSectionProps>(
  ({ selectedCategory, setSelectedCategory, templates }, ref) => {
    const filteredTemplates = selectedCategory === "all" 
      ? templates 
      : templates.filter(template => template.category === selectedCategory);

    return (
      <section ref={ref} className="py-20 bg-white">
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
    );
  }
);

TemplatesSection.displayName = 'TemplatesSection';

export default TemplatesSection;
