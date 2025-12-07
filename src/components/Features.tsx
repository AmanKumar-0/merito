import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  TrendingUp, 
  Target, 
  Package, 
  Zap, 
  PieChart, 
  Bot 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: PieChart,
    title: "Omnichannel P&L Tracker",
    description: "AI reconciles every order, fee, and return to deliver trustworthy P&L in minutes, not days.",
    bullets: ["Channel + SKU margins", "Payment & logistics fees baked in", "Audit-ready exports"],
    color: "from-primary to-[hsl(340,100%,60%)]",
  },
  {
    icon: Target,
    title: "Precision Ad Tracking",
    description: "AI-powered attribution mapping gives you cross-channel ROAS accuracy without broken UTMs.",
    bullets: ["AI-powered attribution", "UTM auto-cleanup", "Creative & SKU mapping"],
    color: "from-[hsl(340,100%,60%)] to-accent",
  },
  {
    icon: Package,
    title: "Product Intelligence",
    description: "Spot winners, aging stock, and pricing opportunities with SKU-level profitability signals.",
    bullets: ["Winner/loser SKUs", "Safe days & aging stock", "Pricing lift suggestions"],
    color: "from-accent to-[hsl(200,100%,50%)]",
  },
  {
    icon: Zap,
    title: "40+ Instant Reports",
    description: "Acquisition, retention, cohorts, and ops reports ready on day one—no BI build needed.",
    bullets: ["Cohorts & LTV", "Cashflow-ready views", "Ops + CX reporting"],
    color: "from-[hsl(200,100%,50%)] to-primary",
  },
  {
    icon: Bot,
    title: "AI Marketing Copilot",
    description: "Daily recommendations to rebalance spend, scale winners, and pause waste automatically.",
    bullets: ["Spend reallocation", "Creative fatigue alerts", "Goal-based playbooks"],
    color: "from-primary to-accent",
  },
  {
    icon: TrendingUp,
    title: "Real-time Analytics",
    description: "Live dashboards with anomaly detection so you never miss a spike or dip.",
    bullets: ["Anomaly alerts", "Live cohorts", "Forecasted trends"],
    color: "from-[hsl(280,100%,60%)] to-primary",
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Cards stagger animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { 
              opacity: 0, 
              y: 60,
              rotateX: -15,
            },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.8,
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
    <section id="features" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Features
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Everything You Need to
            <br />
            <span className="text-gradient">Scale Your Brand</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From P&L tracking to AI-powered insights, Merito gives you the complete toolkit
            to make data-driven decisions and grow faster.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group relative"
            >
              <div className="rounded-2xl bg-secondary/60 border border-border/60 p-7 h-full hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-5`}>
                  <feature.icon className="w-full h-full text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {feature.description}
                </p>
                {feature.bullets && (
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
