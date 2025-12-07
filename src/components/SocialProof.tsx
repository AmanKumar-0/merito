import type { SyntheticEvent } from "react";

const logos = [
  { name: "boAt", src: "https://logo.clearbit.com/boat-lifestyle.com" },
  { name: "Mamaearth", src: "https://logo.clearbit.com/mamaearth.in" },
  { name: "Mensa Brands", src: "https://logo.clearbit.com/mensabrands.com" },
  { name: "Lenskart", src: "https://logo.clearbit.com/lenskart.com" },
  { name: "Wakefit", src: "https://logo.clearbit.com/wakefit.co" },
  { name: "Sugar Cosmetics", src: "https://logo.clearbit.com/sugarcosmetics.com" },
  { name: "WOW Skin Science", src: "https://logo.clearbit.com/buywow.in" },
  { name: "Noise", src: "https://logo.clearbit.com/gonoise.com" },
  { name: "The Man Company", src: "https://logo.clearbit.com/themancompany.com" },
  { name: "Beardo", src: "https://logo.clearbit.com/beardo.in" },
  { name: "Bombay Shaving Company", src: "https://logo.clearbit.com/bombayshavingcompany.com" },
  { name: "Sleepy Owl", src: "https://logo.clearbit.com/sleepyowl.co" },
  { name: "Plum", src: "https://logo.clearbit.com/plumgoodness.com" },
  { name: "Mama & Peaches", src: "https://logo.clearbit.com/mamaandpeaches.com" },
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
