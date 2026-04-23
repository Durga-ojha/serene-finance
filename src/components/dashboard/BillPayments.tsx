import { Smartphone, Tv, Zap, CreditCard, type LucideIcon } from "lucide-react";

type Bill = { icon: LucideIcon; label: string; sub: string };

const bills: Bill[] = [
  { icon: Smartphone, label: "Mobile Recharge", sub: "Prepaid & Postpaid" },
  { icon: Tv, label: "DTH", sub: "All operators" },
  { icon: Zap, label: "Electricity", sub: "Pay your bill" },
  { icon: CreditCard, label: "Credit Card Bill", sub: "Any bank" },
];

export function BillPayments() {
  return (
    <section
      className="rounded-2xl bg-card p-6 md:p-8"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-base font-semibold text-foreground">
          Recharge & Bill Payments
        </h2>
        <button className="text-xs font-medium text-brand-navy hover:underline">
          View all
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {bills.map(({ icon: Icon, label, sub }) => (
          <button
            key={label}
            className="flex flex-col items-start gap-3 rounded-xl border border-border/60 p-4 text-left transition hover:border-brand-cyan hover:shadow-sm"
          >
            <span
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{ background: "var(--gradient-cyan-soft)" }}
            >
              <Icon className="h-5 w-5 text-brand-navy" strokeWidth={1.5} />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">{label}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
