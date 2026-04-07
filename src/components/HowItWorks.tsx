import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Search, PenTool, Rocket, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Assess & Analyze", desc: "We begin by understanding your organization's goals, gaps, and learning needs through detailed assessments." },
  { icon: PenTool, step: "02", title: "Design & Customize", desc: "Our experts craft a tailored learning roadmap aligned with your objectives and industry requirements." },
  { icon: Rocket, step: "03", title: "Deliver & Engage", desc: "Interactive sessions led by seasoned trainers using blended methodologies for maximum impact." },
  { icon: BarChart3, step: "04", title: "Measure & Optimize", desc: "Post-program analytics to track progress, measure ROI, and continuously refine the learning experience." },
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation();

  const handleWhatsApp = (title) => {
    const phoneNumber = "919876543210"; // apna number
    const message = `Hi, I came across your website and I'm interested in your process: ${title}. Can you explain more?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-background to-muted/40 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-[140px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        
        {/* Heading */}
        <div className="text-center mb-20">
          <span className={`inline-block px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wider uppercase mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Our Process
          </span>

          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            How It <span className="gradient-text">Works</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Step {s.step}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition">
                <s.icon className="w-8 h-8 text-primary group-hover:text-secondary transition" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-5">{s.desc}</p>

              {/* CTA */}
              {/* <div
                onClick={() => handleWhatsApp(s.title)}
                className="flex items-center justify-center gap-2 text-primary font-semibold text-sm cursor-pointer group-hover:gap-4 transition-all duration-300"
              >
                Get Details <ArrowRight className="w-4 h-4" />
              </div> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;