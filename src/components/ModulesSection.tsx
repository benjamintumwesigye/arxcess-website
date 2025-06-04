
import React, { useEffect, useRef, useState } from 'react';

const modules = [
  {
    id: 1,
    title: "A fully integrated suite of financial and payments products",
    subtitle: "Modular solutions",
    description: "Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered platform. Use Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models.",
    features: ["Connect", "Payments", "Terminal"],
    image: "/lovable-uploads/56f1bf0f-d991-4af7-82d2-df3834db5bed.png"
  },
  {
    id: 2,
    title: "Advanced Analytics and Reporting",
    subtitle: "Data-driven insights",
    description: "Get comprehensive insights into your business performance with our advanced analytics suite. Track key metrics, identify trends, and make data-driven decisions to grow your business.",
    features: ["Analytics", "Reports", "Insights"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 3,
    title: "Secure Infrastructure",
    subtitle: "Enterprise security",
    description: "Built with enterprise-grade security from the ground up. Our platform ensures your data is protected with advanced encryption, compliance certifications, and continuous monitoring.",
    features: ["Security", "Compliance", "Monitoring"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 4,
    title: "Global Scale and Performance",
    subtitle: "Worldwide reach",
    description: "Scale your business globally with our robust infrastructure. Our platform handles millions of transactions with 99.99% uptime and lightning-fast performance across all regions.",
    features: ["Global", "Performance", "Reliability"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=600"
  }
];

const ModulesSection = () => {
  const [activeModule, setActiveModule] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const moduleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;

      // Check if the container is in view
      if (containerTop <= 0 && containerTop + containerHeight > window.innerHeight) {
        // Calculate which module should be active based on scroll position
        const scrollProgress = Math.abs(containerTop) / (containerHeight - window.innerHeight);
        const moduleIndex = Math.min(
          Math.floor(scrollProgress * modules.length),
          modules.length - 1
        );
        setActiveModule(moduleIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative"
      style={{ height: `${modules.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-primary font-semibold uppercase tracking-wide text-sm">
                  {modules[activeModule].subtitle}
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {modules[activeModule].title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {modules[activeModule].description}
                </p>
              </div>

              {/* Features */}
              <div className="flex gap-4">
                {modules[activeModule].features.map((feature, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm"
                  >
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Module Navigation Dots */}
              <div className="flex gap-3 pt-8">
                {modules.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === activeModule ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    onClick={() => {
                      const targetScroll = (index * window.innerHeight * modules.length) / modules.length;
                      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={modules[activeModule].image}
                  alt={modules[activeModule].title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
