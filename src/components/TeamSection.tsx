
import React from "react";
import { MapPin, Building2, CheckCircle } from "lucide-react";

const teamMembers = [
  {
    name: "Jack Thompson",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Building innovative software solutions with modern technologies and agile methodologies.",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    badge: "Senior Developer"
  },
  {
    name: "Hannah Reed",
    role: "Brand Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg", 
    description: "Creating compelling brand experiences that drive customer engagement and business growth.",
    company: "Creative Agency",
    location: "New York, NY",
    badge: "Brand Expert"
  },
  {
    name: "Henry Wilson",
    role: "Financial Analyst",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    description: "Providing strategic financial insights and data-driven recommendations for business optimization.",
    company: "Finance Corp",
    location: "Chicago, IL", 
    badge: "CFA Certified"
  },
  {
    name: "Olivia Evans",
    role: "HR Specialist",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    description: "Developing talent strategies and fostering inclusive workplace cultures for organizational success.",
    company: "People First",
    location: "Austin, TX",
    badge: "HR Leader"
  },
];

function TeamMemberCard({ name, role, image, description, company, location, badge }: { 
  name: string; 
  role: string; 
  image: string;
  description: string;
  company: string;
  location: string;
  badge: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Background Image */}
      <div className="relative h-32 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&h=400"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Profile Image */}
      <div className="relative px-6 pb-6">
        <div className="flex justify-center -mt-12 mb-4">
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Badge */}
        <div className="flex justify-center mb-3">
          <div className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
            <CheckCircle size={12} />
            {badge}
          </div>
        </div>

        {/* Name and Role */}
        <div className="text-center mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-gray-600 font-medium">{role}</p>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
          {description}
        </p>

        {/* Company and Location */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Building2 size={14} />
            {company}
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <MapPin size={14} />
            {location}
          </div>
        </div>

        {/* View Profile Button */}
        <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
          View Profile
        </button>
      </div>
    </div>
  );
}

const TeamSection = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-4">Meet our team</div>
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
          Get to Know the Founders? <span className="underline">Explore all</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Our diverse team of passionate professionals is dedicated to delivering excellence at every step of the way.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
