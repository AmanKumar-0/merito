import { ArrowUpRight, BarChart2, Brain, CheckCircle2, TrendingUp } from "lucide-react";

const kpis = [
  { label: "Net Revenue", value: "₹12.4Cr", delta: "+18%" },
  { label: "ROAS", value: "4.3x", delta: "+0.4x" },
  { label: "CAC", value: "₹512", delta: "-9%" },
  { label: "Margin", value: "31.8%", delta: "+3.2%" },
];

const DashboardPreview = () => {
  return (
    <section id="dashboard" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              <Brain className="w-4 h-4" /> Live Dashboard Preview
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight">
              Unified overview without the clutter.
            </h2>
            <p className="text-lg text-muted-foreground">
              One elegant view that surfaces what matters. AI annotates movements and suggests the next move—no spreadsheet detective work.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                <span>Auto-refreshing metrics from every channel with anomaly highlights.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                <span>SKU, cohort, and campaign level drill-downs without building reports.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                <span>Actionable AI cards: “High ROAS on Meta — scale 20%" and “CAC spike on Google — pause 2 ad sets.”</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-strong rounded-[26px] p-6 md:p-10 shadow-2xl border border-border/60 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8" />
              <div className="relative z-10 space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {kpis.map((kpi) => (
                    <div key={kpi.label} className="rounded-xl bg-secondary/50 border border-border/60 p-4">
                      <p className="text-xs text-muted-foreground">{kpi.label}</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-lg font-semibold text-foreground">{kpi.value}</p>
                        <span className="text-[11px] px-2 py-1 rounded-full bg-primary/15 text-primary font-semibold">{kpi.delta}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-secondary/50 border border-border/60 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Unified board</p>
                      <p className="text-xl font-semibold">Performance overview</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-primary/15 text-primary font-semibold">
                      <TrendingUp className="w-4 h-4" />
                      Forecast +9.5%
                    </div>
                  </div>
                  <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-4">
                    <div className="rounded-xl bg-card/70 border border-border/60 p-4 space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Top channels</span>
                        <ArrowUpRight className="w-4 h-4 text-primary" />
                      </div>
                      {["Meta", "Google Ads", "Amazon"].map((channel, idx) => (
                        <div key={channel} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{channel}</span>
                          <span className="font-semibold text-foreground">{idx === 0 ? "4.8x" : idx === 1 ? "3.9x" : "3.1x"}</span>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl bg-card/70 border border-border/60 p-4 space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">AI callouts</span>
                        <BarChart2 className="w-4 h-4 text-primary" />
                      </div>
                      <div className="space-y-2 text-sm text-foreground/85">
                        <p className="glass rounded-lg px-3 py-2 border border-primary/20 flex items-start gap-2 text-left">
                          <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-primary" />
                          High ROAS on Meta for Athleisure Set — scale 20% and mirror to PMax.
                        </p>
                        <p className="glass rounded-lg px-3 py-2 border border-accent/20 flex items-start gap-2 text-left">
                          <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-accent" />
                          CAC spike on Google — pause 2 ad sets and shift ₹40k to PMax.
                        </p>
                      </div>
                      <p className="text-xs text-primary inline-flex items-center gap-1">View playbook <ArrowUpRight className="w-3 h-3" /></p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-secondary/50 border border-border/60 p-4 text-sm text-muted-foreground">
                  AI annotates every metric shift so the team aligns in seconds—not after downloading CSVs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
