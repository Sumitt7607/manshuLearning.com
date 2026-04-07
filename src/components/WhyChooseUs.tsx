import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ShieldCheck, Clock, TrendingUp, Headphones, Globe, Zap } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Certified Expertise", desc: "Industry-certified trainers with 10+ years of hands-on experience in their domains." },
  { icon: TrendingUp, title: "Proven ROI", desc: "Measurable outcomes that directly impact productivity, retention, and business growth." },
  { icon: Clock, title: "Flexible Scheduling", desc: "Programs designed around your team's availability — weekdays, weekends, or self-paced." },
  { icon: Headphones, title: "Dedicated Support", desc: "End-to-end learning support with mentors available for guidance beyond the classroom." },
  { icon: Globe, title: "Global Standards", desc: "Curriculum aligned with international benchmarks and the latest industry practices." },
  { icon: Zap, title: "Rapid Upskilling", desc: "Accelerated programs that deliver critical skills in weeks, not months." },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-20">
          <span className={`inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-semibold tracking-wider uppercase mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Why Choose Us
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground mb-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            The Manshu <span className="gradient-text">Advantage</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            What sets us apart is our relentless focus on outcomes, quality, and personalized learning journeys.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((item, i) => (
            <div
              key={i}
              className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_hsl(174_55%_42%_/_0.15)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:rotate-6 transition-all duration-500">
                <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
