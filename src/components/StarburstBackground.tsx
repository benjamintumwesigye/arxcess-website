
import React from 'react';

const StarburstBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main starburst - static version with increased width and adjusted position */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
        <svg
          width="1200"
          height="900"
          viewBox="0 0 1200 900"
        >
          <defs>
            {/* Blur filter - Step 3 from the design */}
            <filter id="starblur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            </filter>
            
            {/* Glow effect */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Gradient for the rays */}
            <radialGradient id="starGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1e81c5" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#4a9edd" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#7bb3e8" stopOpacity="0.1" />
            </radialGradient>
          </defs>

          {/* Step 1 & 2: Star with increased count (many rays) and decreased opacity */}
          <g transform="translate(600, 450)">
            {/* Generate multiple rays - increasing the "count" as shown in step 2 */}
            {Array.from({ length: 36 }, (_, i) => (
              <g key={i} transform={`rotate(${i * 10})`}>
                <path
                  d="M 0,0 L 4,225 L 0,450 L -4,225 Z"
                  fill="url(#starGradient)"
                  filter="url(#starblur)"
                  opacity="0.6"
                />
              </g>
            ))}
            
            {/* Additional inner rays for depth */}
            {Array.from({ length: 24 }, (_, i) => (
              <g key={`inner-${i}`} transform={`rotate(${i * 15 + 7.5})`}>
                <path
                  d="M 0,0 L 3,150 L 0,300 L -3,150 Z"
                  fill="url(#starGradient)"
                  filter="url(#glow)"
                  opacity="0.3"
                />
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Additional animated glow effect - keeping the pulse animation but repositioning */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2/3">
        <div 
          className="w-144 h-144 rounded-full opacity-20 animate-glow-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(30,129,197,0.3) 0%, rgba(30,129,197,0.1) 40%, transparent 70%)',
            width: '36rem',
            height: '36rem'
          }}
        />
      </div>

      {/* Subtle grid pattern for tech feel */}
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
