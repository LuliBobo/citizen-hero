import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, ArrowRight } from 'lucide-react';

type TestimonialType = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  service: string;
  rating: number;
};

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "GrowthWave",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    quote: "CitizenDeveloperApp's Web as Service platform enabled our team to launch three marketing microsites in just two weeks. The drag-and-drop interface was intuitive enough that even our non-technical team members could contribute to the project.",
    service: "Web as Service",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Operations Manager",
    company: "LogiTech Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    quote: "We needed a custom inventory management system but didn't have the budget for a traditional development firm. Using the Software as Service platform, we built exactly what we needed in a fraction of the time and cost.",
    service: "Software as Service",
    rating: 5
  },
  {
    id: 3,
    name: "Amanda Rodriguez",
    role: "Customer Support Lead",
    company: "ServiceFirst",
    image: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    quote: "The AI Agent has been a game-changer for our customer support team. It handles 70% of routine inquiries automatically, allowing our human agents to focus on more complex customer needs. Our response times have decreased by 65%.",
    service: "AI Agent",
    rating: 4
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CEO",
    company: "StartupLaunch",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    quote: "As a startup founder, I needed to quickly create a professional online presence without hiring a web development team. CitizenDeveloperApp gave me the tools to build our company website, client portal, and internal dashboard all in one platform.",
    service: "Web as Service",
    rating: 5
  },
  {
    id: 5,
    name: "Elena Patel",
    role: "HR Director",
    company: "TalentForce",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
    quote: "We implemented an employee onboarding system using the no-code platform that integrates with all our existing HR tools. New hires now complete their paperwork 3x faster, and our team saves 15 hours per week on administrative tasks.",
    service: "Software as Service",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  const showPreviousTestimonial = () => {
    if (animating) return;
    
    setAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    
    setTimeout(() => {
      setAnimating(false);
    }, 300);
  };
  
  const showNextTestimonial = () => {
    if (animating) return;
    
    setAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    
    setTimeout(() => {
      setAnimating(false);
    }, 300);
  };
  
  const testimonialsToShow = testimonials.slice(currentIndex, currentIndex + 1);
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how businesses have transformed their operations with our platform
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Featured testimonial */}
            <div className="md:col-span-2 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 -left-4 text-purple-200">
                <Quote className="h-16 w-16 rotate-180" />
              </div>
              
              <div className={`transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}>
                <p className="text-gray-700 text-lg mb-6 mt-4 relative z-10">
                  {testimonialsToShow[0].quote}
                </p>
                
                <div className="flex items-center mt-8">
                  <img 
                    src={testimonialsToShow[0].image} 
                    alt={testimonialsToShow[0].name} 
                    className="h-14 w-14 rounded-full object-cover border-2 border-purple-200"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonialsToShow[0].name}</h4>
                    <p className="text-gray-600">{testimonialsToShow[0].role}, {testimonialsToShow[0].company}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonialsToShow[0].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    {testimonialsToShow[0].service}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Carousel controls and additional testimonial previews */}
            <div className="bg-purple-600 text-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-4">Customer Success Stories</h3>
                <p className="mb-6">
                  Join hundreds of satisfied customers who have transformed their businesses using our platform.
                </p>
                
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.id}
                      onClick={() => {
                        setCurrentIndex(index);
                      }}
                      className={`w-full text-left p-3 transition-colors rounded-lg ${currentIndex === index ? 'bg-purple-700' : 'hover:bg-purple-500'}`}
                    >
                      <div className="flex items-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="h-8 w-8 rounded-full object-cover"
                        />
                        <div className="ml-3 truncate">
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-purple-200">{testimonial.service}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={showPreviousTestimonial}
                  className="p-2 rounded-full hover:bg-purple-700 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <div className="text-sm">
                  {currentIndex + 1} of {testimonials.length}
                </div>
                
                <button
                  onClick={showNextTestimonial}
                  className="p-2 rounded-full hover:bg-purple-700 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center px-6 py-3 border border-purple-600 text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-colors">
            Read more customer stories
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
