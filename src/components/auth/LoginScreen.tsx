import { useState, type FormEvent } from "react";
import { Lock, Mail, KeyRound, ShieldCheck } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export function LoginScreen() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login("email");
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center px-4 py-10"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* soft blurred orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-brand-cyan/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative w-full max-w-md">
        {/* Brand */}
        <div className="mb-6 flex items-center justify-center gap-2 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
            <span className="text-lg font-bold text-brand-cyan">P</span>
          </div>
          <span className="text-xl font-semibold tracking-tight">PayLite</span>
        </div>

        <div
          className="rounded-2xl bg-card p-7 md:p-8"
          style={{ boxShadow: "var(--shadow-hero)" }}
        >
          <div className="mb-6 text-center">
            <h1 className="text-xl font-semibold text-foreground">
              Welcome back
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Secure login to your Financial Hub
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-foreground">
                Email Address
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-3 text-sm text-foreground outline-none transition focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20"
                />
              </div>
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label className="block text-xs font-medium text-foreground">
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs font-medium text-brand-navy hover:underline"
                >
                  Forgot?
                </button>
              </div>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-3 text-sm text-foreground outline-none transition focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-brand-navy py-3 text-sm font-medium text-white transition hover:bg-brand-navy-dark"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              or
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          {/* Google */}
          <button
            onClick={() => login("google")}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-card py-3 text-sm font-medium text-foreground transition hover:border-foreground/20 hover:bg-muted"
          >
            <GoogleIcon />
            Continue with Google
          </button>

          {/* GhostPass — premium dark button */}
          <button
            onClick={() => login("ghostpass")}
            className="group relative mt-3 flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#0b0b0f] py-3 text-sm font-medium text-white ring-1 ring-white/10 transition hover:ring-brand-cyan/50"
            style={{
              boxShadow:
                "0 0 0 1px oklch(0.76 0.145 220 / 0.15), 0 8px 24px -8px oklch(0.76 0.145 220 / 0.45)",
            }}
          >
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/10 to-brand-cyan/0 opacity-0 transition-opacity group-hover:opacity-100" />
            <ShieldCheck className="h-4 w-4 text-brand-cyan" />
            <div className="relative text-left">
              <p className="text-sm font-semibold leading-none">
                Login with GhostPass
              </p>
              <p className="mt-1 text-[11px] font-normal leading-none text-white/60">
                Zero-Knowledge Device Authentication
              </p>
            </div>
            <KeyRound className="h-4 w-4 text-white/40 transition group-hover:text-brand-cyan" />
          </button>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            New here?{" "}
            <button className="font-medium text-brand-navy hover:underline">
              Create an account
            </button>
          </p>
        </div>

        <p className="mt-5 text-center text-xs text-white/70">
          Protected by 256-bit encryption · RBI compliant
        </p>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.24 1.5-1.74 4.4-5.5 4.4-3.3 0-6-2.74-6-6.1s2.7-6.1 6-6.1c1.88 0 3.14.8 3.86 1.49l2.64-2.55C16.86 3.7 14.66 2.7 12 2.7 6.9 2.7 2.8 6.8 2.8 11.9S6.9 21.1 12 21.1c6.92 0 9.2-4.86 9.2-7.36 0-.5-.06-.88-.14-1.26H12z"
      />
      <path
        fill="#4285F4"
        d="M21.2 12.48c0-.5-.06-.88-.14-1.26H12v3.94h5.18c-.21.97-.85 1.84-1.78 2.42v2.01h2.88c1.69-1.55 2.92-3.83 2.92-7.11z"
      />
    </svg>
  );
}
