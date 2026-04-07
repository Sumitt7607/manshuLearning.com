import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-card/95 backdrop-blur-xl shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          
          {/* Logo */}
          <button onClick={() => scrollTo("#home")}>
            <img src={logo} alt="Logo" className="h-10" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`font-medium transition ${
                  scrolled ? "text-foreground" : "text-white"
                } hover:text-primary`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => {
                const url = `https://wa.me/919110531127?text=${encodeURIComponent(
                  "Hi, I came from your website"
                )}`;
                window.open(url, "_blank");
              }}
              className="bg-primary text-white px-6 py-2 rounded-full"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle (Hamburger → Cross) */}
          <button
            className="md:hidden z-[60] relative w-8 h-8 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`absolute w-6 h-0.5 bg-primary transition-all duration-300 ${
                mobileOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute w-6 h-0.5 bg-primary transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute w-6 h-0.5 bg-primary transition-all duration-300 ${
                mobileOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-all duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 transform transition-transform duration-500 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileOpen(false)}>
            <span className="text-2xl font-bold text-gray-800">✕</span>
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col gap-6 px-6 mt-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-lg font-semibold text-gray-800 hover:text-primary text-left"
            >
              {link.label}
            </button>
          ))}

          {/* WhatsApp Button */}
          <button
            onClick={() => {
              const url = `https://wa.me/919110531127?text=${encodeURIComponent(
                "Hi, I am interested in your services"
              )}`;
              window.open(url, "_blank");
            }}
            className="mt-4 bg-primary text-white py-3 rounded-full font-semibold"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;