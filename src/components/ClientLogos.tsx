import React from 'react';

const ClientLogos = () => {
  const logos = [
    { name: "TechCorp", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=120&h=60" },
    { name: "DataFlow", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=120&h=60" },
    { name: "CodeStream", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=120&h=60" },
    { name: "InnovateLab", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=120&h=60" },
    { name: "FutureSync", image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=120&h=60" },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Faded edges */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-hero-dark to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-hero-dark to-transparent z-10 pointer-events-none"></div>
      
      {/* Scrolling container */}
      <div className="flex animate-scroll-left">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <img
              src={logo.image}
              alt={`${logo.name} logo`}
              className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;