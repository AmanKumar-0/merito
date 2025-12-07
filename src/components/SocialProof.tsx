import type { SyntheticEvent } from "react";

const logos = [
  { name: "boAt", src: "/logos/brands/boat.png" },
  { name: "Mamaearth", src: "/logos/brands/mamaearth.png" },
  { name: "Mensa Brands", src: "/logos/brands/mensa-brands.png" },
  { name: "Lenskart", src: "/logos/brands/lenskart.png" },
  { name: "Wakefit", src: "/logos/brands/wakefit.png" },
  { name: "Sugar Cosmetics", src: "/logos/brands/sugar-cosmetics.png" },
  { name: "WOW Skin Science", src: "/logos/brands/wow-skin-science.png" },
  { name: "Noise", src: "/logos/brands/noise.png" },
  { name: "The Man Company", src: "/logos/brands/the-man-company.png" },
  { name: "Beardo", src: "/logos/brands/beardo.png" },
  { name: "Bombay Shaving Company", src: "/logos/brands/bombay-shaving-company.png" },
  { name: "Sleepy Owl", src: "/logos/brands/sleepy-owl.png" },
  { name: "Plum", src: "/logos/brands/plum.png" },
  { name: "Mama & Peaches", src: "/logos/brands/mama-and-peaches.png" },
];

const buildFallback = (name: string) =>
  `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='120' viewBox='0 0 320 120' fill='none'><rect width='320' height='120' rx='18' fill='%23121A26'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' fill='%238DA2C1' font-family='Inter, Arial, sans-serif' font-size='18' font-weight='600' letter-spacing='0.5'>${encodeURIComponent(
    name
  )}</text></svg>`;

const handleLogoError = (event: SyntheticEvent<HTMLImageElement, Event>, name: string) => {
  const target = event.currentTarget;
  if (target.dataset.fallbackApplied === "true") return;
  target.dataset.fallbackApplied = "true";
  target.src = buildFallback(name);
  target.style.filter = "grayscale(1) brightness(1.1) contrast(1.1)";
  target.style.mixBlendMode = "normal";
};

const SocialProof = () => {
  return (
    <section className="py-16 border-b border-border/60 bg-gradient-to-b from-background to-background/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 space-y-2">
          <p className="text-xl font-semibold text-foreground">Loved by 750+ brands</p>
          <p className="text-sm text-muted-foreground">Trusted by modern operators across consumer, lifestyle, and home brands.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="w-[120px] h-[72px] sm:w-[140px] sm:h-[80px] flex items-center justify-center rounded-lg border border-white/10 bg-card/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-[60%] max-w-[70%] object-contain filter grayscale brightness-110 contrast-110 transition duration-200 hover:grayscale-0"
                loading="lazy"
                onError={(event) => handleLogoError(event, logo.name)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
