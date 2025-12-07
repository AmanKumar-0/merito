import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const integrations = [
  { name: "Shopify", category: "E-commerce", logo: "/logos/integrations/shopify.svg" },
  { name: "Amazon", category: "Marketplace", logo: "/logos/integrations/amazon.svg" },
  { name: "Flipkart", category: "Marketplace", logo: "/logos/integrations/flipkart.svg" },
  { name: "Meta", category: "Marketing", logo: "/logos/integrations/meta.svg" },
  { name: "Google Ads", category: "Marketing", logo: "/logos/integrations/google-ads.svg" },
  { name: "Razorpay", category: "Payments", logo: "/logos/integrations/razorpay.svg" },
  { name: "Delhivery", category: "Logistics", logo: "/logos/integrations/delhivery.png" },
  { name: "Shiprocket", category: "Logistics", logo: "/logos/integrations/shiprocket.png" },
  { name: "WooCommerce", category: "E-commerce", logo: "/logos/integrations/woocommerce.svg" },
  { name: "Myntra", category: "Marketplace", logo: "/logos/integrations/myntra.png" },
  { name: "Nykaa", category: "Marketplace", logo: "/logos/integrations/nykaa.png" },
  { name: "Google Analytics", category: "Analytics", logo: "/logos/integrations/google-analytics.png" },
];

const Integrations = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="integrations" ref={sectionRef} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Integrations
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
            Connect the stack you already run.
          </h2>
          <p className="text-lg text-muted-foreground">
            Official connectors for commerce, ads, payments, and logistics. AI keeps them in sync without maintenance.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">20+ Integrations • 15-min Sync • 99.9% Uptime</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="rounded-2xl bg-secondary/50 border border-border/60 p-4 flex items-center gap-3 hover:-translate-y-1 transition-all duration-300"
              title={`${integration.name} — ${integration.category}`}
            >
              <div className="w-12 h-12 rounded-xl bg-card/70 border border-border/60 flex items-center justify-center overflow-hidden text-foreground">

                  <img
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    className="w-7 h-7 object-contain filter grayscale brightness-110 contrast-110 transition duration-200 hover:grayscale-0"
                    loading="lazy"
                  />
                
              </div>
              <div>
                <p className="font-semibold leading-tight text-foreground">{integration.name}</p>
                <p className="text-xs text-muted-foreground">{integration.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
          {[
            { value: "20+", label: "Integrations" },
            { value: "15 min", label: "Sync frequency" },
            { value: "99.9%", label: "Uptime" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-5">
              <p className="text-3xl font-display font-bold text-gradient-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
