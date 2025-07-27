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
      <section className="relative z-10 pt-32 pb-20 min-h-[50vh] flex items-center">
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
                From concept to
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl italic text-primary font-light leading-tight">
                market leader
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

      {/* Bento Grid Section */}
      <section className="relative z-10 py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto">
            {/* Left Card - Image with Text Below */}
            <div className="bg-gray-900/30 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-800/50">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-4b2e558d2937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional workspace with multiple monitors"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <p className="text-white text-lg leading-relaxed">
                  We believe that the human dimensions essential to start any successful{' '}
                  <span className="italic text-primary">project</span>{' '}
                  <span className="italic text-gray-400">and that this is where splendour</span>{' '}
                  emotional relationships between the company and people are born.
                </p>
              </div>
            </div>

            {/* Right Card - Text Above, Image Below */}
            <div className="bg-gray-900/30 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-800/50">
              <div className="p-8">
                <p className="text-white text-lg leading-relaxed mb-8">
                  Intuition and strategy integrate the{' '}
                  <span className="italic text-primary">research methodology</span>{' '}
                  that we also apply to traditional media.
                </p>
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Modern office workspace with natural lighting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;