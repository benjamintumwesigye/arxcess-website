import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Are you a Webflow expert?",
      answer: "Yes! I am a Webflow developer with 2+ years of experience. I have successfully completed 110+ projects with satisfied clients."
    },
    {
      question: "Can you create custom designs?",
      answer: "Absolutely! We specialize in creating custom designs tailored to your brand and business needs. Our team works closely with you to ensure the design reflects your vision and goals."
    },
    {
      question: "Do you offer Webflow CMS & Ecommerce setup?",
      answer: "Yes, we provide comprehensive Webflow CMS and Ecommerce setup services. We can help you build dynamic content management systems and fully functional online stores."
    },
    {
      question: "Will my website be SEO-friendly?",
      answer: "Definitely! All our websites are built with SEO best practices in mind. We ensure proper meta tags, structured data, optimized loading speeds, and mobile responsiveness for better search engine rankings."
    },
    {
      question: "Can I contact you for bug fixes or website updates?",
      answer: "Of course! We provide ongoing support and maintenance services. Whether you need bug fixes, content updates, or new features, we're here to help keep your website running smoothly."
    },
    {
      question: "Do you develop Webflow templates?",
      answer: "Yes, we create custom Webflow templates that are both beautiful and functional. Our templates are designed to be easily customizable and optimized for performance."
    }
  ];

  return (
    <section className="bg-white py-20 p-8">
      <div className="max-w-[77rem] mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left side - Header and description */}
          <div className="lg:w-1/3">
            <div className="mb-6">
              <span className="text-sm text-gray-500 tracking-wider uppercase">[ FAQ ]</span>
            </div>
            <h2 className="text-2xl display-font text-black mb-6" style={{fontSize: '47px', lineHeight: '1.1'}}>
              Frequently Asked{" "}
              <span className="other-font-faq">Questions</span>
            </h2>
            <p className="my-8">
              Our team will walk you through our design approach, project details, and pricing
            </p>
            <button className="text-black font-semibold tracking-wider hover:opacity-70 transition-opacity">
              CONTACT US →
            </button>
          </div>

          {/* Right side - FAQ Accordion */}
          <div className="lg:w-1/2">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;