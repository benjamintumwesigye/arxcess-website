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
    <div className="rounded-2xl overflow-hidden shadow-md bg-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-end h-80 relative group">
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition duration-300"
      />
      <div className="relative z-10 w-full p-4 bg-gradient-to-t from-gray-900/70 to-transparent text-white mt-auto">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-sm opacity-80">{role}</div>
      </div>
    </div>
  );
}

const TeamSection = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
        <div>
          <div className="text-blue-700 font-semibold uppercase tracking-wide text-sm mb-2">Meet our team</div>
          <h2 className="text-4xl font-bold mb-4">Meet the Experts Behind Our Success</h2>
          <p className="text-gray-600 max-w-xl">
            Our diverse team of passionate professionals is dedicated to delivering excellence at every step of the way.
          </p>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
          <button className="px-6 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition">About Us</button>
          <button className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-semibold flex items-center gap-2">
            Open Positions
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection; 