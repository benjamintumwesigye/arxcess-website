
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
    <section className="font-chirp relative min-h-screen bg-gradient-to-br from-hero-dark via-hero-dark-light to-black overflow-hidden flex items-center">
      {/* Starburst Background - Step 4: Integration */}
      <StarburstBackground />
      
      {/* Navigation - with scroll-activated background */}
      <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-black/30 border-b border-hero-green/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-hero-green rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">A</span>
            </div>
            <span className="text-white font-semibold text-xl">Arxcess</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
          
          <Button 
            className="bg-hero-green text-black hover:bg-hero-green-light transition-all duration-300 font-semibold px-6"
          >
            Get Started
          </Button>
        </div>
      </nav>

      {/* Main Content - Added padding-top to account for the fixed header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-hero-green/10 border border-hero-green/20 rounded-full mb-8 animate-fade-in-up">
            <span className="text-hero-green text-sm font-medium">✨ SVG Hero Design Flow</span>
          </div>

          {/* Main Heading - Updated with text-wrap: balance and background-clip: text */}
          <h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight animate-fade-in-up text-center"
            style={{ textWrap: 'balance' }}
          >
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-hero-green to-hero-green-light bg-clip-text text-transparent">
              Custom Software
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Unlock scalable software tailored to your needs, from custom builds to seamless subscriptions.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up justify-center">
            <div className="flex items-center space-x-2 text-gray-300">
              <div className="w-2 h-2 bg-hero-green rounded-full"></div>
              <span>Custom Development</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <div className="w-2 h-2 bg-hero-green rounded-full"></div>
              <span>Scalable Subscriptions</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <div className="w-2 h-2 bg-hero-green rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up justify-center">
            <Button 
              size="lg" 
              className="bg-hero-green text-black hover:bg-hero-green-light transition-all duration-300 font-semibold text-lg px-8 py-4"
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
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up">
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
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-5"></div>
    </section>
  );
};

export default Hero;
