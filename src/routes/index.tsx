import { createFileRoute } from "@tanstack/react-router";
import { TopHeader } from "@/components/dashboard/TopHeader";
import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { BillPayments } from "@/components/dashboard/BillPayments";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";

export const Route = createFileRoute("/")({
  component: Dashboard,
  head: () => ({
    meta: [
      { title: "PayLite — Your Finance Dashboard" },
      {
        name: "description",
        content:
          "Manage balance, send money, recharge mobiles, pay bills and track transactions in one clean dashboard.",
      },
    ],
  }),
});

function Dashboard() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <TopHeader />
      <main className="mx-auto max-w-7xl space-y-6 px-4 py-6 md:px-6 md:py-8">
        <h1 className="sr-only">Finance Dashboard</h1>
        <BalanceCard />
        <QuickActions />
        <BillPayments />
        <RecentTransactions />
      </main>
    </div>
  );
}
