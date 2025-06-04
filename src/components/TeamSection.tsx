import React, { useState, useEffect } from "react";

const teamMembers = [
  {
    name: "Jack Thompson",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Hannah Reed",
    role: "Brand Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Henry Wilson",
    role: "Financial Analyst",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Olivia Evans",
    role: "HR Specialist",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "David Chen",
    role: "Product Designer",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

function TeamMemberCard({ name, role, image, position }: {
  name: string;
  role: string;
  image: string;
  position: 'far-left' | 'left' | 'center' | 'right' | 'far-right';
}) {
  const getCardStyles = () => {
    switch (position) {
      case 'far-left':
      case 'far-right':
        return "opacity-30 scale-75 blur-sm";
      case 'left':
      case 'right':
        return "opacity-60 grayscale";
      case 'center':
        return "opacity-100 scale-105";
      default:
        return "";
    }
  };

  return (
    <div className={`flex flex-col items-center text-center px-4 transition-all duration-500 ${getCardStyles()}`}>
      <div className="w-64 h-74 rounded-xl overflow-hidden my-6 shadow-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 left-8 right-8 text-start text-white px-2 py-1 rounded-md bg-white/30 backdrop-blur-md border border-white/30 shadow-lg">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <h5 className="text-md font-bold text-overflow-ellipsis">{name}</h5>
              <p className="text-sm">{role}</p>
            </div>
            <span>
              <button
                className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="View profile"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 6000); // 6000ms = 6 seconds

    return () => clearInterval(interval);
  }, []);

  const getVisibleMembers = () => {
    const positions: Array<'far-left' | 'left' | 'center' | 'right' | 'far-right'> = ['far-left', 'left', 'center', 'right', 'far-right'];
    const visibleMembers = [];

    for (let i = 0; i < 5; i++) {
      const memberIndex = (currentIndex + i - 2 + teamMembers.length) % teamMembers.length;
      visibleMembers.push({
        ...teamMembers[memberIndex],
        position: positions[i],
        key: `${memberIndex}-${currentIndex}`
      });
    }

    return visibleMembers;
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-4">MEET THE TEAM</div>
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
          Meet the Experts Behind Our Success
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Our diverse team of passionate professionals is dedicated to delivering excellence at every step of the way.
        </p>
      </div>

      <div className="relative flex justify-center items-center gap-4 mb-12 overflow-hidden">
        {/* Left gradient overlay */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
          style={{ background: 'linear-gradient(to right, white 10%, transparent)' }} />
        {/* Right gradient overlay */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
          style={{ background: 'linear-gradient(to left, white 10%, transparent)' }} />

        {/* Carousel cards */}
        {getVisibleMembers().map((member) => (
          <TeamMemberCard key={member.key} {...member} />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
