import { useEffect, useState } from "react";
import { ChevronDown, BookOpen, Users, Award, Lightbulb } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  { icon: BookOpen, text: "Industry-relevant courses" },
  { icon: Users, text: "Expert mentors & trainers" },
  { icon: Award, text: "Practical, hands-on learning" },
  { icon: Lightbulb, text: "Flexible & affordable programs" },
];

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 hero-section opacity-80" />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="particle absolute rounded-full"
          style={{
            width: `${8 + i * 6}px`,
            height: `${8 + i * 6}px`,
            background: i % 2 === 0 ? "hsl(174 55% 42% / 0.4)" : "hsl(38 80% 56% / 0.4)",
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 1.2}s`,
          }}
        />
      ))}

      {/* Morphing blob */}
      <div className="absolute right-[-5%] top-[10%] w-[500px] h-[500px] morph opacity-10 bg-gradient-to-br from-primary to-secondary blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="inline-block px-5 py-2 rounded-full glass-effect text-secondary font-semibold text-sm tracking-wider uppercase mb-8">
              🚀 Transforming Professional Excellence
            </span>
          </div>

          <h1
            className={`font-heading text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 transition-all duration-1000 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-primary-foreground">Transforming</span>
            <br />
            <span className="text-primary-foreground">Knowledge into</span>
            <br />
      
          <span className="gradient-text block">ProfessIonaL</span>
       
            <span className="gradient-text">Excellence</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed transition-all duration-1000 delay-400 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Manshu Learning delivers high-impact learning solutions designed to equip professionals,
            organizations, and teams with the skills needed to succeed.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="#services"
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_hsl(174_55%_42%_/_0.5)] hover:scale-105"
            >
              <span className="relative z-10">Discover Our Programs</span>
              <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 glass-effect text-primary-foreground rounded-full font-bold text-lg transition-all duration-300 hover:bg-primary-foreground/10 hover:scale-105"
            >
              Partner With Us →
            </a>
          </div>

          {/* Feature pills */}
          <div
            className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-3 glass-effect rounded-full text-primary-foreground/80 text-sm font-medium hover:bg-primary-foreground/10 transition-all duration-300 hover:scale-105 cursor-default"
              >
                <f.icon className="w-4 h-4 text-secondary" />
                {f.text}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-primary-foreground/50 text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 text-secondary" />
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
