import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="overflow-x-hidden">
    <Navbar />
    <HeroSection />
    {/* <ClientLogos /> */}
    <AboutSection />
    <WhyChooseUs />
    <ServicesSection />
    <HowItWorks />
    <TestimonialsSection />
    <FAQSection />
    <CTASection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
