import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Search, PenTool, Rocket, BarChart3 } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Assess & Analyze", desc: "We begin by understanding your organization's goals, gaps, and learning needs through detailed assessments." },
  { icon: PenTool, step: "02", title: "Design & Customize", desc: "Our experts craft a tailored learning roadmap aligned with your objectives and industry requirements." },
  { icon: Rocket, step: "03", title: "Deliver & Engage", desc: "Interactive sessions led by seasoned trainers using blended methodologies for maximum impact." },
  { icon: BarChart3, step: "04", title: "Measure & Optimize", desc: "Post-program analytics to track progress, measure ROI, and continuously refine the learning experience." },
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 bg-muted/50 relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-20">
          <span className={`inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wider uppercase mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Our Process
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground mb-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            How It <span className="gradient-text">Works</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary -translate-y-1/2 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`group text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: isVisible ? `${i * 200}ms` : "0ms" }}
              >
                <div className="relative mx-auto mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-card border-4 border-primary/20 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <s.icon className="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-9 h-9 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-heading font-black text-sm shadow-md">
                    {s.step}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
