import { Plus, Send, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function BalanceCard() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl p-6 text-white md:p-8"
      style={{
        background: "var(--gradient-hero)",
        boxShadow: "var(--shadow-hero)",
      }}
    >
      {/* decorative blurred accent */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-cyan/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-white/70">Total Balance</p>
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/80 backdrop-blur">
            Privacy On
          </span>
        </div>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-4xl font-semibold tracking-tight md:text-5xl">
            {isBalanceVisible ? "₹ 1,24,500" : "₹ ********"}
          </span>
          {isBalanceVisible && (
            <span className="text-sm text-white/70">.00</span>
          )}
        </div>
        <p className="mt-1 text-xs text-white/60">
          Available across linked accounts
        </p>

        <button
          onClick={() => setIsBalanceVisible((v) => !v)}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur transition hover:border-brand-cyan hover:bg-white/15"
        >
          {isBalanceVisible ? (
            <EyeOff className="h-3.5 w-3.5" />
          ) : (
            <Eye className="h-3.5 w-3.5" />
          )}
          {isBalanceVisible ? "Hide Balance" : "Check Balance"}
        </button>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-cyan px-5 py-3 text-sm font-semibold text-brand-navy transition hover:brightness-110">
            <Plus className="h-4 w-4" />
            Add Money
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">
            <Send className="h-4 w-4" />
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
}
