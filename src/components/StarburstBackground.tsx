import React from 'react';

const StarburstBackground = () => {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        backgroundImage: `url('/svg-hero-love-flow/back-blue.webp')`, // Path to the image in the public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Optional: Keep the grid pattern if desired */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30,129,197,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,129,197,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default StarburstBackground;