import { ScanLine, Landmark, Users, ArrowLeftRight, type LucideIcon } from "lucide-react";

type Action = { icon: LucideIcon; label: string };

const actions: Action[] = [
  { icon: ScanLine, label: "Scan & Pay" },
  { icon: Landmark, label: "To Bank Account" },
  { icon: Users, label: "Pay Contacts" },
  { icon: ArrowLeftRight, label: "Self Transfer" },
];

export function QuickActions() {
  return (
    <section
      className="rounded-2xl bg-card p-6 md:p-8"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-base font-semibold text-foreground">Quick Actions</h2>
        <span className="text-xs text-muted-foreground">Tap to begin</span>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {actions.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="group flex flex-col items-center gap-3 rounded-xl p-3 text-center transition hover:bg-muted"
          >
            <span
              className="flex h-14 w-14 items-center justify-center rounded-full transition group-hover:scale-105"
              style={{ background: "var(--gradient-cyan-soft)" }}
            >
              <Icon className="h-6 w-6 text-brand-navy" strokeWidth={1.5} />
            </span>
            <span className="text-xs font-medium text-foreground sm:text-sm">
              {label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
