import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const flowNodes = [
  { label: "Shopify", x: 12, y: 26 },
  { label: "Ads", x: 32, y: 34 },
  { label: "Marketplaces", x: 18, y: 48 },
  { label: "Payments", x: 38, y: 54 },
  { label: "Logistics", x: 22, y: 64 },
  { label: "Unified Data", x: 55, y: 44 },
  { label: "AI Insights", x: 75, y: 50 },
];

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(badgeRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo(headlineRef.current, { opacity: 0, y: 38 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
        .fromTo(subheadRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
        .fromTo(ctaRef.current, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4");

      gsap.to(".flow-diagram", {
        y: "-=4",
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div className="absolute inset-0 bg-hero-grid opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr,0.95fr] xl:gap-16">
          <div className="space-y-8 max-w-4xl">
            <div ref={badgeRef} className="inline-flex items-center gap-2 rounded-full bg-secondary/60 px-4 py-2 border border-border/70">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs tracking-wide text-muted-foreground">Data platform for modern D2C</span>
            </div>

            <div className="space-y-4">
              <h1 ref={headlineRef} className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
                Unified Data. AI-Driven Decisions.
              </h1>
              <p ref={subheadRef} className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                Merge Shopify, Amazon, Meta Ads, Google Ads, payments, and logistics into a single clean data brain. AI reconciles the chaos, fixes tracking, and tells you what to do next.
              </p>
            </div>

            <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-3">
              <Button variant="hero" size="xl" className="group shadow-lg">
                Start Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl" className="group">
                <Play className="w-5 h-5 mr-1 group-hover:scale-110 transition-transform" />
                Book a Demo
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="px-3 py-1 rounded-full bg-secondary/70 border border-border/60 text-foreground/80">Shopify</span>
              <span className="px-3 py-1 rounded-full bg-secondary/70 border border-border/60 text-foreground/80">Meta Ads</span>
              <span className="px-3 py-1 rounded-full bg-secondary/70 border border-border/60 text-foreground/80">Google Ads</span>
              <span className="px-3 py-1 rounded-full bg-secondary/70 border border-border/60 text-foreground/80">Amazon</span>
              <span className="px-3 py-1 rounded-full bg-secondary/70 border border-border/60 text-foreground/80">Payments</span>
              <span className="px-3 py-1 rounded-full bg-secondary/70 border border-border/60 text-foreground/80">Logistics</span>
            </div>
          </div>

          <div className="relative w-full">
            <div className="pointer-events-none relative mx-auto w-full max-w-3xl" style={{ height: "clamp(260px, 40vw, 560px)" }}>
              <svg
                className="absolute inset-0 h-full w-full opacity-60"
                viewBox="0 0 100 70"
                preserveAspectRatio="xMidYMid meet"
                role="presentation"
              >
                <defs>
                  <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <g className="flow-diagram">
                  <g stroke="url(#flow)" strokeWidth="0.35" fill="none" strokeDasharray="3 3" strokeLinecap="round" vectorEffect="non-scaling-stroke" style={{ animation: "dash-flow 12s linear infinite" }}>
                    <path d="M12 26 C 20 22, 28 30, 32 34" />
                    <path d="M32 34 C 42 36, 48 40, 55 44" />
                    <path d="M18 48 C 30 46, 42 48, 55 44" />
                    <path d="M38 54 C 48 52, 52 48, 55 44" />
                    <path d="M22 64 C 36 60, 48 54, 55 44" />
                    <path d="M55 44 C 62 46, 68 48, 75 50" />
                  </g>
                  {flowNodes.map((node, idx) => (
                    <g key={node.label}>
                      <circle cx={node.x} cy={node.y} r={idx >= 5 ? 2.6 : 2.2} fill="hsl(var(--primary))" fillOpacity="0.65" />
                      <text x={node.x + 3.5} y={node.y} fontSize="3" fill="hsla(0,0%,100%,0.78)" fontFamily="Inter, 'Helvetica Neue', Arial" dominantBaseline="middle">
                        {node.label}
                      </text>
                    </g>
                  ))}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
