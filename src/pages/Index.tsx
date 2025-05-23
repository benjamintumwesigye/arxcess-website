
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen font-chirp">
      <Hero />
      
      {/* Additional sections can be added here */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Following the Designer's Workflow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This hero section was created by following the exact design process shown in the uploaded image: 
            starting with a simple star, increasing the ray count, adding blur effects, and integrating everything 
            into a beautiful hero background.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
