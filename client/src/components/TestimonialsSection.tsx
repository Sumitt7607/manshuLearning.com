import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const API = "https://manshulearning-com.onrender.com/api";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    fetch(`${API}/reviews`)
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.log(err));
  }, []);

  const next = () =>
    setActive((a) => (a + 1) % testimonials.length);

  const prev = () =>
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  if (testimonials.length === 0) return null;

  return (
    <section className="py-24 lg:py-32 bg-[#f8f9fb] relative overflow-hidden">

      {/* 🔥 HEADING */}
      <div className="text-center mb-20">
        <span className="inline-block px-4 py-1.5 bg-green-100 text-green-600 rounded-full text-sm font-semibold uppercase mb-4">
          Testimonials
        </span>

        <h2 className="text-5xl md:text-6xl font-black">
          What They{" "}
          <span className="bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent">
            Say
          </span>
        </h2>
      </div>

      {/* 🔥 CARD */}
      <div className="max-w-3xl mx-auto relative">

        <div className="bg-white rounded-3xl p-10 md:p-14 shadow-lg border border-gray-200 relative">

          {/* Quote Icon */}
          <Quote className="absolute top-6 left-6 w-12 h-12 text-gray-200" />

          {/* ⭐ Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(testimonials[active].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>

          {/* 💬 Text */}
          <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-8">
            "{testimonials[active].text}"
          </p>

          {/* 👤 User */}
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-lg text-gray-900">
                {testimonials[active].name}
              </div>
              <div className="text-gray-500 text-sm">
                {testimonials[active].role}
              </div>
            </div>

            {/* 🔥 Arrows (RIGHT SIDE) */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-green-500 hover:text-white transition"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-green-500 hover:text-white transition"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* 🔥 DOTS */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-8 bg-green-500" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

// import { useState } from "react";
// import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

// const testimonials = [
//   {
//     name: "Priya Sharma",
//     role: "HR Director, TechCorp",
//     text: "Manshu Learning transformed our entire training approach. The customized corporate programs were exactly what our team needed to level up.",
//     rating: 5,
//   },
//   {
//     name: "Rajesh Kumar",
//     role: "CEO, InnovateTech",
//     text: "The executive coaching program helped me develop critical leadership skills. The ROI we've seen from their programs is exceptional.",
//     rating: 5,
//   },
//   {
//     name: "Anita Patel",
//     role: "L&D Manager, GlobalFinance",
//     text: "Their e-learning modules are incredibly well-designed. Flexible, engaging, and our employees love the self-paced format.",
//     rating: 5,
//   },
// ];

// const TestimonialsSection = () => {
//   const [active, setActive] = useState(0);
//   const { ref, isVisible } = useScrollAnimation();

//   const next = () => setActive((a) => (a + 1) % testimonials.length);
//   const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

//   return (
//     <section id="testimonials" className="py-24 lg:py-32 bg-background relative overflow-hidden">
//       <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
//       <div className="container mx-auto px-4" ref={ref}>
//         <div className="text-center mb-20">
//           <span
//             className={`inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wider uppercase mb-4 transition-all duration-700 ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
//             }`}
//           >
//             Testimonials
//           </span>
//           <h2
//             className={`text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground mb-6 transition-all duration-700 delay-200 ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
//             }`}
//           >
//             What They <span className="gradient-text">Say</span>
//           </h2>
//         </div>

//         <div className="max-w-3xl mx-auto">
//           <div
//             className={`relative bg-card rounded-3xl p-10 md:p-14 border border-border transition-all duration-700 ${
//               isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
//             }`}
//           >
//             <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10" />

//             <div className="flex gap-1 mb-6">
//               {[...Array(testimonials[active].rating)].map((_, i) => (
//                 <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
//               ))}
//             </div>

//             <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
//               "{testimonials[active].text}"
//             </p>

//             <div className="flex items-center justify-between">
//               <div>
//                 <div className="font-heading font-bold text-foreground text-lg">
//                   {testimonials[active].name}
//                 </div>
//                 <div className="text-muted-foreground text-sm">{testimonials[active].role}</div>
//               </div>

//               <div className="flex gap-3">
//                 <button
//                   onClick={prev}
//                   className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
//                 >
//                   <ChevronLeft className="w-5 h-5" />
//                 </button>
//                 <button
//                   onClick={next}
//                   className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
//                 >
//                   <ChevronRight className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>

//             {/* Dots */}
//             <div className="flex gap-2 mt-8 justify-center">
//               {testimonials.map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setActive(i)}
//                   className={`h-2 rounded-full transition-all duration-300 ${
//                     i === active ? "w-8 bg-primary" : "w-2 bg-border"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
