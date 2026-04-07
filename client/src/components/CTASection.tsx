import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={768} />
        <div className="absolute inset-0 hero-section opacity-90" />
      </div>

      {/* Floating accents */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground/10 rounded-full floating" />
      <div className="absolute bottom-10 right-20 w-20 h-20 border border-secondary/20 rounded-full floating-delayed" />
      <div className="absolute top-1/2 right-[15%] w-4 h-4 bg-secondary/40 rounded-full particle" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className={`max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="inline-block px-5 py-2 rounded-full glass-effect text-secondary font-semibold text-sm tracking-wider uppercase mb-8">
            🎯 Ready to Transform?
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary-foreground mb-6 leading-tight">
            Start Your Learning
            <br />
            <span className="gradient-text">Journey Today</span>
          </h2>

          <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto">
            Join hundreds of professionals and organizations that have already elevated their skills with Manshu Learning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#contact"
              className="group relative px-10 py-5 bg-secondary text-secondary-foreground rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_hsl(38_80%_56%_/_0.5)] hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </a>
            <a
              href="#services"
              className="px-10 py-5 glass-effect text-primary-foreground rounded-full font-bold text-lg transition-all duration-300 hover:bg-primary-foreground/10 hover:scale-105"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
