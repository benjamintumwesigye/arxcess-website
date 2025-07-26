import React from 'react';

const HeroBentoGrid = () => {
  return (
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
  );
};

export default HeroBentoGrid;