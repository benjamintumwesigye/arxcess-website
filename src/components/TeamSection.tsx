
import React from "react";

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

function TeamMemberCard({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <div className="rounded-3xl overflow-hidden bg-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-end h-96 relative group">
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="relative z-10 w-full p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
        <div className="font-semibold text-xl mb-1">{name}</div>
        <div className="text-gray-300 text-sm">{role}</div>
      </div>
    </div>
  );
}

const TeamSection = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <div className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-4">Meet our team</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Meet the Experts Behind Our Success</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our diverse team of passionate professionals is dedicated to delivering excellence at every step of the way.
          </p>
        </div>
        <div className="flex gap-4 lg:flex-shrink-0">
          <button className="px-6 py-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition font-medium">
            About Us
          </button>
          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-semibold flex items-center gap-2">
            Open Positions
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
