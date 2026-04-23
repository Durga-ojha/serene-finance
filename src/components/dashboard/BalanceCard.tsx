import { Plus, Send, ShieldCheck, Sparkles } from "lucide-react";

export function BalanceCard() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl p-6 text-white md:p-8"
      style={{
        background: "var(--gradient-hero)",
        boxShadow: "var(--shadow-hero)",
      }}
    >
      {/* decorative blurred accents */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-cyan/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

      <div className="relative">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/85 backdrop-blur">
          <ShieldCheck className="h-3 w-3 text-brand-cyan" />
          Privacy-First Banking
        </span>

        <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
          Smarter money, <span className="text-brand-cyan">safer hands.</span>
        </h2>
        <p className="mt-2 max-w-xl text-sm text-white/70 md:text-base">
          Send, receive and track your finances with bank-grade encryption.
          Every rupee, every transaction — protected end-to-end.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/70">
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-brand-cyan" />
            Zero hidden fees
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-cyan" />
            RBI compliant
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-brand-cyan" />
            Instant settlements
          </span>
        </div>

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
