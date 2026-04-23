import { ArrowDownLeft, ArrowUpRight, TrendingUp } from "lucide-react";

export function MonthlyOverview() {
  const moneyIn = 84250;
  const moneyOut = 51380;
  const total = moneyIn + moneyOut;
  const inPct = Math.round((moneyIn / total) * 100);
  const outPct = 100 - inPct;
  const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

  // tiny mock bar chart data
  const bars = [40, 65, 35, 80, 55, 72, 48];
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <section
      className="rounded-2xl bg-card p-6 md:p-8"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Monthly Overview
          </h2>
          <p className="mt-0.5 text-xs text-muted-foreground">
            April 2026 · Last 7 days trend
          </p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-1 text-[11px] font-medium text-success">
          <TrendingUp className="h-3 w-3" />
          +12.4%
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* In vs Out */}
        <div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-border/60 p-4">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-success/15">
                  <ArrowDownLeft
                    className="h-3.5 w-3.5 text-success"
                    strokeWidth={2.5}
                  />
                </span>
                <p className="text-xs font-medium text-muted-foreground">
                  Money In
                </p>
              </div>
              <p className="mt-3 text-lg font-semibold text-foreground">
                {fmt(moneyIn)}
              </p>
            </div>
            <div className="rounded-xl border border-border/60 p-4">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-navy/10">
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-brand-navy"
                    strokeWidth={2.5}
                  />
                </span>
                <p className="text-xs font-medium text-muted-foreground">
                  Money Out
                </p>
              </div>
              <p className="mt-3 text-lg font-semibold text-foreground">
                {fmt(moneyOut)}
              </p>
            </div>
          </div>

          {/* Stacked progress bar */}
          <div className="mt-4">
            <div className="flex h-2.5 overflow-hidden rounded-full bg-muted">
              <div
                className="bg-success transition-all"
                style={{ width: `${inPct}%` }}
              />
              <div
                className="bg-brand-navy transition-all"
                style={{ width: `${outPct}%` }}
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>In · {inPct}%</span>
              <span>Out · {outPct}%</span>
            </div>
          </div>
        </div>

        {/* Mini bar chart */}
        <div className="rounded-xl border border-border/60 p-4">
          <p className="text-xs font-medium text-muted-foreground">
            Daily Spending
          </p>
          <div className="mt-4 flex h-24 items-end justify-between gap-2">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex flex-1 flex-col items-center gap-1.5"
              >
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-brand-navy to-brand-cyan transition-all hover:opacity-80"
                  style={{ height: `${h}%` }}
                />
                <span className="text-[10px] text-muted-foreground">
                  {days[i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
