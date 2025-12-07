import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const inlineIcons = {
  shiprocket: (
    <svg viewBox="0 0 48 48" className="w-7 h-7" aria-hidden>
      <path
        d="M10 24c0-.6.24-1.17.66-1.59l13.1-13.1a2.25 2.25 0 0 1 3.18 0l3.1 3.1a2.25 2.25 0 0 1 0 3.18L17.94 26.75a.5.5 0 0 0 .35.85H30a2 2 0 0 1 1.41.59l3.3 3.3A2 2 0 0 1 33.3 34H17.5c-.8 0-1.57-.32-2.14-.89l-4.7-4.7A2.25 2.25 0 0 1 10 24Z"
        fill="currentColor"
      />
    </svg>
  ),
  delhivery: (
    <svg viewBox="0 0 48 48" className="w-7 h-7" aria-hidden>
      <path d="M8 18a2 2 0 0 1 2-2h19a2 2 0 0 1 1.6.8l7.4 9.2A2 2 0 0 1 36.4 30H10a2 2 0 0 1-2-2V18Z" fill="currentColor" />
      <rect x="12" y="12" width="8" height="4" rx="1" fill="currentColor" />
    </svg>
  ),
  myntra: (
    <svg viewBox="0 0 48 48" className="w-7 h-7" aria-hidden>
      <path d="M18.5 33.5 11 16.5c-.6-1.4.4-3 1.9-3h.2a2 2 0 0 1 1.8 1.2l5.9 13.7a.4.4 0 0 0 .74.02L30 14.7A2 2 0 0 1 31.8 13h.1c1.6 0 2.6 1.7 2 3.1l-7.6 16.5a2.2 2.2 0 0 1-4 0Z" fill="currentColor" />
    </svg>
  ),
  nykaa: (
    <svg viewBox="0 0 48 48" className="w-7 h-7" aria-hidden>
      <path d="M13 32.5V17.2c0-.66.54-1.2 1.2-1.2h.6c.45 0 .86.25 1.06.65l4.04 8.22c.18.36.7.36.88 0l4.16-8.45a1.2 1.2 0 0 1 1.07-.67h.79c.66 0 1.2.54 1.2 1.2v15.25a1 1 0 0 1-1 1H25a1 1 0 0 1-1-1v-5.14c0-.34-.44-.47-.63-.2l-2.06 3.05c-.2.3-.53.48-.89.48h-2.06a1 1 0 0 1-.88-.52l-1.5-2.83c-.13-.25-.48-.25-.61 0l-.2.39v4.77a1 1 0 0 1-1 1H14a1 1 0 0 1-1-1Z" fill="currentColor" />
    </svg>
  ),
};

const integrations = [
  { name: "Shopify", category: "E-commerce", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/shopify.svg" },
  { name: "Amazon", category: "Marketplace", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazon.svg" },
  { name: "Flipkart", category: "Marketplace", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/flipkart.svg" },
  { name: "Meta", category: "Marketing", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/meta.svg" },
  { name: "Google Ads", category: "Marketing", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googleads.svg" },
  { name: "Razorpay", category: "Payments", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/razorpay.svg" },
  { name: "Delhivery", category: "Logistics", logo: "https://logo.clearbit.com/delhivery.com" },
  { name: "Shiprocket", category: "Logistics", logo: "https://logo.clearbit.com/shiprocket.in" },
  { name: "WooCommerce", category: "E-commerce", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/woocommerce.svg" },
  { name: "Myntra", category: "Marketplace", logo: "https://logo.clearbit.com/myntra.com" },
  { name: "Nykaa", category: "Marketplace", logo: "https://logo.clearbit.com/nykaa.com" },
  { name: "Google Analytics", category: "Analytics", logo: "https://logo.clearbit.com/analytics.google.com" },
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
