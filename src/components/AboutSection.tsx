import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Eye, Award, Briefcase } from "lucide-react";
import aboutImg from "@/assets/about-image.jpg";

const stats = [
  { value: "500+", label: "Professionals Trained" },
  { value: "50+", label: "Corporate Clients" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "10+", label: "Years Experience" },
];

const AboutSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={sectionRef} className="text-center mb-20">
          <span
            className={`inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wider uppercase mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            About Us
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground mb-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Know Us <span className="gradient-text">Better</span>
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={aboutImg}
                alt="Team collaboration"
                className="w-full h-[450px] object-cover"
                loading="lazy"
                width={1024}
                height={768}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl card-elevated">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">10+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Who We Are</h3>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Manshu Learning is a professional training and development organization committed to
              delivering quality learning experiences. With a focus on practical application and
              industry relevance, we provide corporate training, skill development, and e-learning
              programs that empower individuals and organizations to achieve measurable growth.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
                <Target className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-heading font-bold text-foreground mb-2">Our Mission</h4>
                <p className="text-sm text-muted-foreground">
                  To design and deliver structured, impactful, and innovative learning solutions
                  that drive personal effectiveness and organizational success.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-secondary/5 border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:scale-[1.02]">
                <Eye className="w-8 h-8 text-secondary mb-3" />
                <h4 className="font-heading font-bold text-foreground mb-2">Our Vision</h4>
                <p className="text-sm text-muted-foreground">
                  To be a trusted global partner in professional learning and corporate development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats counter */}
        <div ref={statsRef} className="counter-section rounded-3xl p-10 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`text-center transition-all duration-700 ${
                  statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="text-4xl md:text-5xl font-heading font-black text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
