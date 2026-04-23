import { createFileRoute } from "@tanstack/react-router";
import { TopHeader } from "@/components/dashboard/TopHeader";
import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { MonthlyOverview } from "@/components/dashboard/MonthlyOverview";
import { BillPayments } from "@/components/dashboard/BillPayments";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { LoginScreen } from "@/components/auth/LoginScreen";
import { AuthProvider, useAuth } from "@/context/AuthContext";

export const Route = createFileRoute("/")({
  component: AppRoot,
  head: () => ({
    meta: [
      { title: "PayLite — Secure Finance Hub" },
      {
        name: "description",
        content:
          "Premium fintech dashboard with privacy-first balance, GhostPass auth, quick actions, monthly insights and transactions.",
      },
    ],
  }),
});

function AppRoot() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

function AppContent() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <LoginScreen />;

  return (
    <div className="min-h-screen bg-background font-sans">
      <TopHeader />
      <main className="mx-auto max-w-7xl space-y-6 px-4 py-6 md:px-6 md:py-8">
        <h1 className="sr-only">Finance Dashboard</h1>
        <BalanceCard />
        <QuickActions />
        <MonthlyOverview />
        <BillPayments />
        <RecentTransactions />
      </main>
    </div>
  );
}
