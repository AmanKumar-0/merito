import { ArrowUpRight, Zap } from "lucide-react";

const metrics = [
  { label: "Revenue", value: "+22%", note: "vs last 30d" },
  { label: "Meta ROAS", value: "4.8x", note: "Scaled campaigns" },
  { label: "Google ROAS", value: "3.9x", note: "Performance Max" },
  { label: "CAC", value: "-9%", note: "Blended" },
];

const LiveSnapshot = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Zap className="w-4 h-4 text-primary" />
          Live snapshot — AI keeps this current
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((item) => (
            <div key={item.label} className="rounded-2xl bg-secondary/60 border border-border/60 p-5 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </div>
              <div className="text-2xl font-semibold text-foreground">{item.value}</div>
              <div className="text-xs text-muted-foreground">{item.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveSnapshot;
