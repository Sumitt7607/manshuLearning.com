import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const clients = [
  "TechCorp", "InnovateTech", "GlobalFinance", "LeadEdge", "SkyNet Solutions",
  "VisionaryHR", "PrimeSkills", "NexGen Labs", "CoreLogic", "DataBridge",
];

const ClientLogos = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 bg-background border-y border-border overflow-hidden">
      <div ref={ref} className="container mx-auto px-4">
        <p className={`text-center text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-10 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          Trusted by Leading Organizations
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-8 px-8 py-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-300 group cursor-default shrink-0"
            >
              <span className="font-heading font-bold text-lg text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
