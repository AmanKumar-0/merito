import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    title: "10+ hrs saved monthly",
    quote: "Merito transformed how we look at our business. The P&L tracker alone saved us 10+ hours every month.",
    author: "Rahul Sharma",
    role: "Founder, StyleCraft",
    brand: "StyleCraft",
    metric: "Ops time saved",
    rating: 5,
  },
  {
    title: "35% better ROAS",
    quote: "Finally, a platform that understands D2C. The ad tracking accuracy is unmatched in the market.",
    author: "Priya Mehta",
    role: "Marketing Head, FreshBox",
    brand: "FreshBox",
    metric: "ROAS lift",
    rating: 5,
  },
  {
    title: "3x faster decisions",
    quote: "We went from scattered spreadsheets to one unified dashboard. Best decision for our growing brand.",
    author: "Arjun Verma",
    role: "Co-founder, NatureCare",
    brand: "NatureCare",
    metric: "Decision speed",
    rating: 5,
  },
];

const logos = [
  "iSeed",
  "Dezerv",
  "Pocket Aces",
  "Paisabazaar",
  "Arjun Vaidya",
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-transparent to-secondary/10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <p className="text-lg text-muted-foreground">
            See why fast-growing D2C brands trust Merito for their data needs.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative overflow-hidden mb-20">
          <div
            className="flex gap-6 w-max overflow-x-auto md:overflow-hidden pb-4 snap-x snap-mandatory testimonial-marquee"
            ref={cardsRef}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.author}-${index}`}
                className="testimonial-card min-w-[300px] max-w-[360px] snap-start glass-border rounded-2xl p-6 relative hover-glow hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 opacity-15">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-[hsl(340,100%,60%)] flex items-center justify-center font-display font-bold text-primary-foreground">
                    {testimonial.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                  {testimonial.title}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <span className="px-2 py-1 rounded-full bg-secondary/60 text-foreground/80">{testimonial.brand}</span>
                  <span>{testimonial.metric}</span>
                </div>

                <blockquote className="text-base text-foreground/90 leading-relaxed mb-4">
                  “{testimonial.quote}”
                </blockquote>

                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backed By Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Backed by top founders and VCs
            </span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo) => (
              <div
                key={logo}
                className="glass px-6 py-3 rounded-xl text-muted-foreground font-display font-semibold hover:text-foreground hover:border-primary/30 transition-all cursor-default hover:scale-105"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
