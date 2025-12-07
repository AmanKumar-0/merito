import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Shield, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const focusInputRef = useRef<HTMLInputElement>(null);
  const smartCardRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<"panel" | "card">("card");
  const hasSetSeen = useRef(false);

  const ConversionForm = ({ stacked = false }: { stacked?: boolean }) => (
    <form
      className={
        stacked
          ? "grid gap-4"
          : "grid gap-4 md:grid-cols-4 md:items-end"
      }
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="space-y-2">
        <Label className="text-sm text-muted-foreground">Full name</Label>
        <Input
          type="text"
          placeholder="Alex Morgan"
          required
          className="bg-secondary/70 border-border/70 focus-visible:ring-primary/70"
        />
      </div>
      <div className="space-y-2">
        <Label className="text-sm text-muted-foreground">Work email</Label>
        <Input
          type="email"
          placeholder="you@brand.com"
          required
          className="bg-secondary/70 border-border/70 focus-visible:ring-primary/70"
        />
      </div>
      <div className="space-y-2">
        <Label className="text-sm text-muted-foreground">Phone</Label>
        <Input
          type="tel"
          placeholder="(+91) 98765 43210"
          required
          className="bg-secondary/70 border-border/70 focus-visible:ring-primary/70"
        />
      </div>
      <Button type="submit" variant="hero" size="xl" className="w-full md:w-auto md:min-w-[180px]">
        Book a Demo
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </form>
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { 
          opacity: 0, 
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Floating background animation
      gsap.to(".cta-float", {
        y: -30,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Smart modal/card animations & state
  useEffect(() => {
    const overlay = overlayRef.current;
    const panel = panelRef.current;
    const smartCard = smartCardRef.current;
    if (!overlay || !panel || !smartCard) return;

    const showPanel = mode === "panel";

    if (showPanel) {
      gsap.set(smartCard, { display: "none" });
      gsap.set([overlay, panel], { display: "flex", pointerEvents: "auto" });
      gsap.fromTo(
        overlay,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: "power1.out" }
      );
      gsap.fromTo(
        panel,
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.32,
          ease: "power3.out",
          onComplete: () => focusInputRef.current?.focus(),
        }
      );
    } else {
      gsap.to(panel, {
        opacity: 0,
        y: 32,
        scale: 0.98,
        duration: 0.22,
        ease: "power2.inOut",
        onComplete: () => gsap.set(panel, { display: "none" }),
      });
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.22,
        ease: "power1.inOut",
        onComplete: () => gsap.set(overlay, { display: "none", pointerEvents: "none" }),
      });
      gsap.set(smartCard, { display: "flex" });
      gsap.fromTo(
        smartCard,
        { opacity: 0, y: 24, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: "power2.out" }
      );
    }
  }, [mode]);

  // First-visit logic
  useEffect(() => {
    const seen = typeof window !== "undefined" ? localStorage.getItem("smartPanelSeen") : null;
    if (!seen) {
      setMode("panel");
      hasSetSeen.current = true;
      localStorage.setItem("smartPanelSeen", "true");
    } else {
      setMode("card");
    }
  }, []);

  // Scroll to minimize
  useEffect(() => {
    const handleScroll = () => {
      if (mode === "panel") {
        setMode("card");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mode]);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/8 to-background" />
      <div className="cta-float absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] bg-primary/12 rounded-full blur-[140px]" />
      <div className="cta-float absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] bg-accent/12 rounded-full blur-[110px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div ref={cardRef} className="glass-strong rounded-2xl p-12 md:p-14 text-left relative overflow-hidden shadow-xl">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-accent to-primary" />
            <div className="absolute -top-16 -right-10 w-36 h-36 bg-primary/18 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-10 w-32 h-32 bg-accent/18 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 bg-secondary/80 px-4 py-2 rounded-lg border border-border/70">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground/80">AI-native revenue control center</span>
              </div>

              <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
                Book a data strategy session
              </h2>

              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Consolidate commerce, ads, and retention data into a single command surface. Our team will map your stack and configure AI guardrails for faster, safer decisions.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-md border border-border/70 px-3 py-1 bg-secondary/60">
                  <Shield className="h-4 w-4 text-primary" /> SOC2-ready pipelines
                </span>
                <span className="inline-flex items-center gap-2 rounded-md border border-border/70 px-3 py-1 bg-secondary/60">
                  <Sparkles className="h-4 w-4 text-accent" /> Humans + AI onboarding in {"<"} 7 days
                </span>
                <span className="inline-flex items-center gap-2 rounded-md border border-border/70 px-3 py-1 bg-secondary/60">
                  <ArrowRight className="h-4 w-4 text-foreground/70" /> Priority slots for growth teams
                </span>
              </div>

              <ConversionForm />

              <p className="text-sm text-muted-foreground">
                Response in under 2 hours. Zero-engineering setup. EU/India data residency available.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Smart modal panel */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 hidden items-end md:items-center justify-center bg-background/35 backdrop-blur-sm"
        style={{ pointerEvents: mode === "panel" ? "auto" : "none" }}
        onClick={() => setMode("card")}
      >
        <div
          ref={panelRef}
          className="relative w-full max-w-xl mx-4 md:mx-0 bg-card/90 backdrop-blur-2xl border border-border/60 rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Priority demo</p>
              <h3 className="text-2xl font-display font-semibold">Get a tailored walkthrough</h3>
              <p className="text-sm text-muted-foreground mt-2">Share details and we will map the best setup for your stack.</p>
            </div>
            <button
              aria-label="Close"
              className="text-muted-foreground hover:text-foreground transition"
              onClick={() => setMode("card")}
            >
              ×
            </button>
          </div>

          <form className="grid gap-4 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2 md:col-span-2">
              <Label className="text-sm text-muted-foreground">Full name</Label>
              <Input
                ref={focusInputRef}
                type="text"
                placeholder="Alex Morgan"
                required
                className="bg-secondary/70 border-border/70 focus-visible:ring-primary/70"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Work email</Label>
              <Input
                type="email"
                placeholder="you@brand.com"
                required
                className="bg-secondary/70 border-border/70 focus-visible:ring-primary/70"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Phone</Label>
              <Input
                type="tel"
                placeholder="(+91) 98765 43210"
                required
                className="bg-secondary/70 border-border/70 focus-visible:ring-primary/70"
              />
            </div>
            <div className="md:col-span-2 flex flex-wrap gap-3 items-center justify-between">
              <p className="text-xs text-muted-foreground">We reply under 2 hours. No spam, no pressure.</p>
              <Button type="submit" variant="hero" size="lg" className="min-w-[160px]">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Floating smart card */}
      <div
        ref={smartCardRef}
        className="fixed right-4 bottom-4 md:bottom-6 md:right-6 z-30 hidden"
      >
        <button
          type="button"
          onClick={() => setMode("panel")}
          className="glass-strong border border-border/60 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 text-left hover:-translate-y-0.5 transition-all duration-200"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-display font-semibold text-lg">
            ↗
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-foreground">Book a demo</span>
            <span className="text-xs text-muted-foreground">Tailored walkthrough. Tap to expand.</span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default CTA;
