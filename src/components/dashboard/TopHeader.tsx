import { Search, Bell } from "lucide-react";

export function TopHeader() {
  return (
    <header className="sticky top-0 z-50 bg-brand-navy text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-6 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 backdrop-blur">
            <span className="text-lg font-bold text-brand-cyan">P</span>
          </div>
          <span className="hidden text-lg font-semibold tracking-tight sm:inline">
            PayLite
          </span>
        </div>

        {/* Search */}
        <div className="relative mx-2 flex-1 max-w-xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
          <input
            type="text"
            placeholder="Search for bills, contacts, etc."
            className="w-full rounded-xl border border-white/10 bg-white/10 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/60 outline-none transition focus:border-brand-cyan focus:bg-white/15"
          />
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-white/10"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-brand-cyan ring-2 ring-brand-navy" />
          </button>
          <button
            aria-label="Profile"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-white/30 text-sm font-semibold text-brand-navy ring-2 ring-white/20 transition hover:ring-white/40"
          >
            AS
          </button>
        </div>
      </div>
    </header>
  );
}
