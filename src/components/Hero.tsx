
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import StarburstBackground from './StarburstBackground';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Apply background when scrolled more than 5% of viewport height
      const scrollThreshold = window.innerHeight * 0.05;
      setScrolled(window.scrollY > scrollThreshold);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero font-chirp relative min-h-screen bg-gradient-to-br from-hero-dark via-hero-dark-light to-black overflow-hidden flex items-center">
      {/* Starburst Background - Step 4: Integration */}
      <StarburstBackground />
      <img src="https://cdn.prod.website-files.com/6846e0f69b48bd33083ccf30/6847051fca9d03f2175253ef_Grid%20(1).webp" loading="lazy" width="2874" alt="" className="absolute grid-pattern"></img>
      
      {/* Navigation - with scroll-activated background */}
      <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-[rgb(0 0 0 / 0%)] border-b border-primary/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-white font-semibold text-xl">Arxcess</span>
          </div>
          
          {/* Navigation Links */}
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 flex space-x-1">
            <a href="#home" className="text-white bg-white/20 hover:bg-white/30 rounded-full px-6 py-2 transition duration-300 font-medium">Home</a>
            <a href="#about" className="text-white hover:bg-white/20 rounded-full px-6 py-2 transition duration-300 font-medium">About</a>
            <a href="#project" className="text-white hover:bg-white/20 rounded-full px-6 py-2 transition duration-300 font-medium">Project</a>
            <div className="relative group">
              <a href="#pages" className="text-white hover:bg-white/20 rounded-full px-6 py-2 transition duration-300 flex items-center font-medium">
                Pages <span className="ml-1">▼</span>
              </a>
              {/* Dropdown (hidden by default, shown on hover) */}
              <div className="absolute hidden group-hover:block bg-gray-900 mt-2 rounded-xl shadow-2xl min-w-[180px] z-50 py-2">
                <a href="#news" className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">News</a>
                <a href="#style-guide" className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">Style Guide</a>
                <a href="#licensing" className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">Licensing</a>
                <a href="#changelog" className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">Changelog</a>
              </div>
            </div>
          </div>

          {/* <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div> */}
          
          <Button 
            className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 font-semibold px-6 py-2 rounded-full uppercase text-sm tracking-wider"
          >
            CONTACT US
          </Button>
        </div>
      </nav>

      {/* Main Content - Updated to two-column layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in-up">
              <span className="text-primary text-sm font-medium">✨ SVG Hero Design Flow</span>
            </div>

            {/* Main Heading */}
            <h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up"
              style={{ textWrap: 'balance' }}
            >
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Custom Software
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up">
              Leveraging cutting-edge tools, we transform simple ideas into complex, business-ready software—custom-built or subscription-based.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up">
              <div className="flex items-center space-x-2 text-gray-300">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Custom Development</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Scalable Subscriptions</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up mb-12">
              <Button 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/80 transition-all duration-300 font-semibold text-lg px-8 py-4"
              >
                Start Your Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-600 text-white hover:bg-white/10 transition-all duration-300 font-semibold text-lg px-8 py-4"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 animate-fade-in-up">
              <div>
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-400">Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Bento Grid Images (replacing single image) */}
          <div className="relative animate-fade-in-up">
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-2 gap-3 h-[450px]">
              {/* Large featured image */}
              <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=600" 
                  alt="Person using MacBook Pro - representing custom software development"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-primary/10"></div>
              </div>
              
              {/* Top right image */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=300" 
                  alt="Macro photography of black circuit board - Technical expertise"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-primary/10"></div>
              </div>
              
              {/* Bottom right image */}
              <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&h=300" 
                  alt="Turned on gray laptop computer - Modern solutions"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-primary/10"></div>
              </div>
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-glow-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-5"></div>
    </section>
  );
};

export default Hero;
