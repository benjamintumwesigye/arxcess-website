
import Hero from "@/components/Hero";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import TechStack from "@/components/Tech";
import TeamSection from "@/components/TeamSection";
import ModulesSection from "@/components/ModulesSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen font-chirp">
      <Hero />
      
      {/* Bento Grid Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Work in Action
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how we've transformed businesses with our custom software solutions
            </p>
          </div>
          
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[600px]">
            {/* Large featured image */}
            <div className="md:col-span-2 lg:col-span-2 relative group overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=600" 
                alt="Monitor showing Java programming - Custom development solutions"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Custom Development</h3>
                <p className="text-gray-300">Tailored solutions for your business needs</p>
              </div>
            </div>
            
            {/* Top right image */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=300" 
                alt="Macro photography of black circuit board - Technical expertise"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold mb-1">Technical Excellence</h3>
                <p className="text-gray-300 text-sm">Cutting-edge technology</p>
              </div>
            </div>
            
            {/* Bottom right image */}
            <div className="relative group overflow-hidden rounded-2xl lg:col-start-3 lg:row-start-2">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&h=300" 
                alt="Turned on gray laptop computer - Modern solutions"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold mb-1">Modern Solutions</h3>
                <p className="text-gray-300 text-sm">Future-ready systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    

      {/* <TeamSection /> */}

      {/* Modules Section with Sticky Scroll */}
      <ModulesSection />

      <TechStack />

      {/* FAQ Section */}
      <FAQSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
