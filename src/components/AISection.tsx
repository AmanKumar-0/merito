import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, Bell, Box, LineChart, Sparkles } from "lucide-react";

const aiPillars = [
  {
    title: "AI Attribution Engine",
    subtitle: "Cross-channel ROAS accuracy",
    points: ["Auto UTM cleanup", "SKU + creative mapping", "Signal repair for broken pixels"],
    icon: Activity,
  },
  {
    title: "AI Profitability Engine",
    subtitle: "Net margins after fees & logistics",
    points: ["COD leakage detection", "Hidden fee recovery", "Channel-level unit economics"],
    icon: LineChart,
  },
  {
    title: "AI Alerts",
    subtitle: "Spikes, dips, anomalies",
    points: ["CAC/ROAS anomalies", "Refund spikes", "Logistics delays & courier mismatch"],
    icon: Bell,
  },
  {
    title: "AI Inventory Intelligence",
    subtitle: "Forecasted safe days",
    points: ["Winner/loser SKUs", "Reorder + bundling suggestions", "Aging stock alerts"],
    icon: Box,
  },
];

gsap.registerPlugin(ScrollTrigger);

const AISection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 60, scale: 0.94 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="ai" ref={sectionRef} className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-transparent to-secondary/10" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.12),transparent_40%),radial-gradient(circle_at_80%_40%,hsl(var(--accent)/0.12),transparent_35%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-muted-foreground">How Merito's AI Works</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            AI engines built for D2C data.
          </h2>
          <p className="text-lg text-muted-foreground">
            Attribution, profitability, alerts, and inventory intelligence—modular blocks that work together without clutter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiPillars.map((pillar, index) => (
            <div
              key={pillar.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group glass-border rounded-2xl p-6 h-full hover-glow hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <pillar.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{pillar.subtitle}</p>
                  <p className="font-display font-semibold">{pillar.title}</p>
                </div>
              </div>

              <div className="sparkline rounded-lg" />

              <ul className="mt-4 space-y-2 text-sm">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-foreground/90">
                    <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISection;
