import React from 'react';
import HeroNavigation from '../components/Hero/HeroNavigation';
import StarburstBackground from '../components/StarburstBackground';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-hero-dark via-hero-dark-light to-black">
      {/* Starburst Background */}
      <StarburstBackground />
      
      {/* Navigation */}
      <HeroNavigation />
      
      {/* About Hero Section */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* About Tag */}
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-wider">[ ABOUT ]</span>
          </div>
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/bd5b7c39-49cd-4b0f-8b55-c89e45ec30e0.png"
                  alt="Professional working at desk with multiple monitors"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Right Column - Content */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Main Heading */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  From concept to{' '}
                  <span className="italic text-primary font-light">market leader</span>
                </h1>
              </div>
              
              {/* Description */}
              <div className="text-gray-300 text-lg leading-relaxed">
                <p>
                  Intuition and strategy integrate the{' '}
                  <span className="italic">research methodology</span>{' '}
                  that we also apply to traditional media.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;