import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="hero-section py-16 relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            left: `${i * 30}%`,
            top: `${i * 20 - 10}%`,
            filter: "blur(80px)",
          }}
        />
      ))}
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="flex flex-col items-center text-center">
        <img src={logo} alt="Manshu Learning" className="h-12 mb-6" />
        <p className="text-primary-foreground/60 max-w-md mb-8">
          Partner with Manshu Learning to cultivate a culture of continuous improvement and
          long-term professional success.
        </p>
        <div className="flex gap-6 mb-10">
          {["Home", "About", "Services", "Testimonials", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-primary-foreground/60 hover:text-secondary transition-colors duration-300 text-sm"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 w-full">
          <p className="text-primary-foreground/40 text-sm">
            Copyright © 2026 Manshu Learning. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
