import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="text-left">
      {/* Badge */}
      <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in-up">
        <span className="text-primary text-sm font-medium">✨ SVG Hero Design Flow</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-white display-font animate-fade-in-up">
        We Build Custom Software for the{' '}
        <span className="other-font">
          Future Of Business
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-gray-100 my-8 animate-fade-in-up">
        From custom web applications to advanced mobile solutions, we develop the tools that help business adapt and grow <span className="other-font">faster</span> 
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
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
        <Button
          className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 font-semibold px-6 py-2 rounded-full uppercase text-sm tracking-wider"
        >
          Start Your Journey <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;