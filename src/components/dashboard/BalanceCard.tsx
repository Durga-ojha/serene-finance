import { Plus, Send, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function BalanceCard() {
  const [hidden, setHidden] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-card p-6 md:p-8"
      style={{ boxShadow: "var(--shadow-hero)" }}
    >
      {/* subtle gradient accent */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-muted-foreground">
            Total Balance
          </p>
          <button
            onClick={() => setHidden((h) => !h)}
            className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted"
            aria-label="Toggle balance visibility"
          >
            {hidden ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {hidden ? "₹ ••••••" : "₹ 1,24,580"}
          </span>
          <span className="text-sm text-muted-foreground">.50</span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          Available across linked accounts
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-navy px-5 py-3 text-sm font-medium text-white transition hover:bg-brand-navy-dark">
            <Plus className="h-4 w-4" />
            Add Money
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition hover:border-brand-navy hover:text-brand-navy">
            <Send className="h-4 w-4" />
            Send Money
          </button>
        </div>
      </div>
    </div>
  );
}
