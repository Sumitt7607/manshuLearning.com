import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/info@manshulearning.com", {
        method: "POST",
        body: formData,
      });

      setSubmitted(true);
      form.reset();
    } catch (error) {
      alert("Something went wrong ❌");
    }

    setLoading(false);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-20">
          <span
            className={`inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wider uppercase mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Contact Us
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground mb-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            Feel Free to <span className="gradient-text">Message Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Info */}
          <div
            className={`lg:col-span-2 space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {[
              { icon: Mail, label: "Email Address", value: "info@manshulearning.com" },
              { icon: Phone, label: "Phone Number", value: "+91 91105 31127" },
              { icon: MapPin, label: "Address", value: "Andhra Pradesh, India" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 group cursor-default">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                  <div className="font-semibold text-foreground">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-3 bg-card rounded-2xl p-8 md:p-10 border border-border shadow-lg transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name..."
                required
                className="w-full px-5 py-3.5 rounded-xl bg-muted border border-border"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone..."
                className="w-full px-5 py-3.5 rounded-xl bg-muted border border-border"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Your E-mail..."
              required
              className="w-full px-5 py-3.5 rounded-xl bg-muted border border-border mb-5"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject..."
              className="w-full px-5 py-3.5 rounded-xl bg-muted border border-border mb-5"
            />

            <textarea
              name="message"
              placeholder="Your Message..."
              rows={5}
              required
              className="w-full px-5 py-3.5 rounded-xl bg-muted border border-border mb-6"
            />

            {/* Hidden fields */}
            <input type="hidden" name="_subject" value="New Contact Lead 🚀" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <button
              type="submit"
              disabled={loading}
              className="group w-full sm:w-auto px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg flex items-center justify-center gap-3"
            >
              {loading ? "Sending..." : submitted ? "Message Sent! ✓" : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;