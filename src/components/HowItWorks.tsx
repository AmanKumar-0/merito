import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Link2, Database, BarChart3, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect Your Channels",
    description: "Secure OAuth for Shopify, Amazon, Meta, Google Ads & more. AI maps SKUs and fixes broken UTMs in one pass.",
    features: ["One-click OAuth", "UTM cleanup", "AI SKU mapping"],
    color: "from-primary to-[hsl(340,100%,60%)]",
    iconBg: "bg-primary/20",
  },
  {
    number: "02",
    icon: Database,
    title: "AI Cleans & Reconciles",
    description: "Orders, fees, COD leaks, SKU mismatches, and duplicates are reconciled automatically—P&L ready.",
    features: ["Fees + COD fixes", "Duplicate suppression", "P&L ready"],
    color: "from-[hsl(340,100%,60%)] to-accent",
    iconBg: "bg-[hsl(340,100%,60%)]/20",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Insights Instantly",
    description: "AI flags CAC spikes, predicts runout, and recommends which ads to scale today—no dashboards to build.",
    features: ["CAC/ROAS alerts", "Runout predictions", "Spend moves"],
    color: "from-accent to-[hsl(200,100%,50%)]",
    iconBg: "bg-accent/20",
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the connecting line
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate cards with stagger
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { 
              opacity: 0, 
              y: 60,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.2,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
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
    <section id="how-it-works" className="py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Setup in 3 AI-Powered Steps
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Go live with AI doing the heavy lifting
          </h2>
          <p className="text-lg text-muted-foreground">
            No complex setup. No engineers. Connect, let AI reconcile the chaos, and move from data to action in minutes.
          </p>
        </div>

        {/* Steps Container */}
        <div className="max-w-6xl mx-auto relative">
          {/* Connecting Line (Desktop) */}
          <div 
            ref={lineRef}
            className="hidden lg:block absolute top-32 left-[15%] right-[15%] h-1 bg-gradient-to-r from-primary via-[hsl(340,100%,60%)] to-accent rounded-full origin-left"
            style={{ transformOrigin: 'left center' }}
          />

          {/* Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="relative group"
              >
                {/* Step Number Floating Badge */}
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 z-20 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center font-display font-bold text-xl text-primary-foreground shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {step.number}
                </div>

                {/* Card */}
                <div className="glass rounded-3xl pt-16 pb-8 px-8 h-full hover-glow transition-all duration-500 group-hover:border-primary/30 relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${step.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-7 h-7 text-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-2xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {step.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Gradient Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>

                {/* Arrow Connector (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary rotate-90" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl" className="group">
            Start Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Connect. Clean. Act. All before your next standup.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
