import React from 'react';
import StarburstBackground from './StarburstBackground';
import ClientLogos from './ClientLogos';
import HeroNavigation from './Hero/HeroNavigation';
import HeroContent from './Hero/HeroContent';
import HeroBentoGrid from './Hero/HeroBentoGrid';

const Hero = () => {
  return (
    <section className="hero font-chirp relative min-h-screen bg-gradient-to-br from-hero-dark via-hero-dark-light to-black overflow-hidden">
      {/* Starburst Background */}
      <StarburstBackground />
      <img 
        src="https://cdn.prod.website-files.com/6846e0f69b48bd33083ccf30/6847051fca9d03f2175253ef_Grid%20(1).webp" 
        loading="lazy" 
        width="2874" 
        alt="" 
        className="absolute grid-pattern"
      />

      {/* Navigation */}
      <HeroNavigation />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Main Content - Two Column Layout */}
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <HeroContent />

              {/* Right Column - Bento Grid Images */}
              <HeroBentoGrid />
            </div>
          </div>
        </div>

        {/* Client Logos Section - Properly spaced at bottom */}
        {/* <div className="relative z-10 pb-8 px-[10rem]">
          <div className="text-gray-100 text-sm mb-6 text-center">
           {`[  Trusted by leading companies  ]`}
          </div>
          <ClientLogos />
        </div> */}
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-5"></div>
    </section>
  );
};

export default Hero;