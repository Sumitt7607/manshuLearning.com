import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Monitor, Wrench, User, ArrowRight } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Corporate Training Solutions",
    desc: "Customized training programs that enhance leadership, productivity, teamwork, and workplace efficiency.",
    color: "primary" as const,
  },
  {
    icon: Monitor,
    title: "E-Learning Programs",
    desc: "Flexible, self-paced modules tailored to the needs of professionals and organizations.",
    color: "secondary" as const,
  },
  {
    icon: Wrench,
    title: "Skill Development Workshops",
    desc: "Focused sessions on communication, problem-solving, time management, and critical professional skills.",
    color: "primary" as const,
  },
  {
    icon: User,
    title: "Executive & Personal Coaching",
    desc: "Individual coaching that fosters personal growth and career advancement.",
    color: "secondary" as const,
  },
];

const colorMap = {
  primary: {
    bg: "bg-primary/10",
    icon: "text-primary",
    border: "border-primary/20 hover:border-primary/50",
    glow: "group-hover:shadow-[0_20px_60px_-15px_hsl(174_55%_42%_/_0.3)]",
  },
  secondary: {
    bg: "bg-secondary/10",
    icon: "text-secondary",
    border: "border-secondary/20 hover:border-secondary/50",
    glow: "group-hover:shadow-[0_20px_60px_-15px_hsl(38_80%_56%_/_0.3)]",
  },
};

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden bg-muted/50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="text-center mb-20">
          <span
            className={`inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wider uppercase mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Our Services
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground mb-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Upgrade Your <span className="gradient-text">Knowledge</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Blended learning methodologies for maximum engagement & commitment to measurable outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => {
            const colors = colorMap[service.color];
            return (
              <div
                key={i}
                className={`group relative bg-card rounded-2xl p-8 border ${colors.border} transition-all duration-500 hover:-translate-y-3 ${colors.glow} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <service.icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-4 transition-all duration-300 cursor-pointer">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
