
import React, { useState } from "react";

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
];

function TeamMemberCard({ name, role, image }: { 
  name: string; 
  role: string; 
  image: string;
}) {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="w-80 h-80 rounded-full overflow-hidden bg-gray-100 mb-6 shadow-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 text-lg">{role}</p>
    </div>
  );
}

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleMembers = teamMembers.slice(currentIndex, currentIndex + 3);
  
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-gray-50">
      <div className="text-center mb-16">
        <div className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-4">MEET THE TEAM</div>
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
          Meet the Experts Behind Our Success
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Our diverse team of passionate professionals is dedicated to delivering excellence at every step of the way.
        </p>
      </div>
      
      <div className="flex justify-center items-center gap-8 mb-12">
        {visibleMembers.map((member, index) => (
          <TeamMemberCard key={`${member.name}-${currentIndex + index}`} {...member} />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3">
        {Array.from({ length: Math.max(0, teamMembers.length - 2) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
