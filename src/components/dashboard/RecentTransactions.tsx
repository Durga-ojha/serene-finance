import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

type Tx = {
  name: string;
  date: string;
  amount: number;
  type: "received" | "sent";
  initials: string;
};

const txs: Tx[] = [
  { name: "Rohan Mehta", date: "Today, 2:14 PM", amount: 1200, type: "received", initials: "RM" },
  { name: "Swiggy Order", date: "Today, 1:02 PM", amount: 348, type: "sent", initials: "SW" },
  { name: "Priya Sharma", date: "Yesterday, 8:45 PM", amount: 5000, type: "received", initials: "PS" },
  { name: "Electricity Bill", date: "Yesterday, 11:20 AM", amount: 1820, type: "sent", initials: "EB" },
  { name: "Amazon Refund", date: "22 Apr, 4:30 PM", amount: 799, type: "received", initials: "AM" },
];

const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export function RecentTransactions() {
  return (
    <section
      className="rounded-2xl bg-card p-6 md:p-8"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-foreground">
          Recent Transactions
        </h2>
        <button className="text-xs font-medium text-brand-navy hover:underline">
          See history
        </button>
      </div>

      <ul className="divide-y divide-border/60">
        {txs.map((tx, i) => {
          const isReceived = tx.type === "received";
          const Icon = isReceived ? ArrowDownLeft : ArrowUpRight;
          return (
            <li
              key={i}
              className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
            >
              <div className="relative">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold text-brand-navy"
                  style={{ background: "var(--gradient-cyan-soft)" }}
                >
                  {tx.initials}
                </div>
                <span
                  className={`absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full ring-2 ring-card ${
                    isReceived ? "bg-success" : "bg-brand-navy"
                  }`}
                >
                  <Icon className="h-3 w-3 text-white" strokeWidth={2.5} />
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-foreground">
                  {tx.name}
                </p>
                <p className="text-xs text-muted-foreground">{tx.date}</p>
              </div>

              <div className="text-right">
                <p
                  className={`text-sm font-semibold ${
                    isReceived ? "text-success" : "text-foreground"
                  }`}
                >
                  {isReceived ? "+" : "−"} {fmt(tx.amount)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {isReceived ? "Received" : "Sent"}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
