
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
  };

  return (
    <section className="bg-gray-50 py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Newsletter Signup */}
        <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Sign up today and get a free sample up to 100 records.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" className="bg-black text-white hover:bg-gray-800 px-6">
              Get started
            </Button>
          </form>
          
          <div className="flex items-center justify-center gap-3">
            <span className="text-gray-600">Our experts are ready to help!</span>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-red-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Skip Tracing Section - Floating Card */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 w-full max-w-4xl px-6">
        <div className="bg-gradient-to-br from-primary via-gray-900 to-black rounded-2xl p-12 text-white relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Experience superior skip tracing
              </h2>
              <p className="text-gray-300 mb-8">
                150+ data points per search.
              </p>
              <Button className="bg-white text-black hover:bg-gray-100 px-6">
                Get started
              </Button>
            </div>
            
            {/* Dotted Globe Illustration */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                {/* Circular border */}
                <div className="absolute inset-0 border-2 border-primary/30 rounded-full"></div>
                
                {/* Dotted pattern to represent globe */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-12 gap-1 w-48 h-48">
                    {Array.from({ length: 144 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-1 h-1 rounded-full ${
                          Math.random() > 0.3 ? 'bg-white opacity-60' : 'bg-transparent'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
