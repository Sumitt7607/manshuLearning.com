import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What types of organizations do you work with?", a: "We work with startups, SMEs, large enterprises, government bodies, and educational institutions across diverse industries including IT, finance, healthcare, and manufacturing." },
  { q: "Can training programs be customized?", a: "Absolutely! Every program is tailored to your organization's specific objectives, industry context, and team skill levels. We conduct a thorough needs assessment before designing any curriculum." },
  { q: "Do you offer online training?", a: "Yes, we offer fully online, in-person, and blended (hybrid) training formats. Our e-learning platform supports self-paced modules with live mentor support." },
  { q: "How do you measure training effectiveness?", a: "We use pre and post assessments, feedback surveys, performance tracking dashboards, and ROI analysis to ensure every program delivers measurable results." },
  { q: "What is the typical duration of a training program?", a: "Programs range from single-day intensive workshops to multi-week comprehensive courses. Duration is customized based on the learning objectives and depth required." },
  { q: "Do you provide certification upon completion?", a: "Yes, all participants receive a professional certificate of completion. Some programs also prepare you for globally recognized industry certifications." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-20">
          <span className={`inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wider uppercase mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            FAQ
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground mb-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-card border border-border rounded-2xl overflow-hidden transition-all duration-700 hover:border-primary/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="font-heading font-semibold text-foreground pr-4 group-hover:text-primary transition-colors duration-300">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-400 ${
                    openIndex === i ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ${
                  openIndex === i ? "max-h-60 pb-6" : "max-h-0"
                }`}
              >
                <p className="px-6 text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
