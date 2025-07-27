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
          
          {/* Main Content - Centered */}
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <div className="mb-8">
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
      </section>
    </div>
  );
};

export default About;