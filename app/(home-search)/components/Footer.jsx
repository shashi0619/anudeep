import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowUp, HiOutlineAcademicCap, HiOutlineLocationMarker } from "react-icons/hi";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anudeepgujjeti/", icon: FaLinkedin, hover: "hover:border-blue-500/40 hover:text-blue-400 hover:shadow-blue-900/20" },
  { label: "Twitter",  href: "https://twitter.com",                         icon: FaTwitter,  hover: "hover:border-sky-400/40 hover:text-sky-400 hover:shadow-sky-900/20"  },
  { label: "Email",    href: "mailto:anudeep@symlaw.ac.in",                  icon: FaEnvelope, hover: "hover:border-amber-400/50 hover:text-amber-300 hover:shadow-amber-900/20", primary: true },
];

const topics = ["India–Japan Relations", "Indo-Pacific", "East Asia", "Foreign Policy", "International Law", "Strategic Affairs", "Law & IR"];

const navLinks = [
  { label: "Home",         href: "/" },
  { label: "All Articles", href: "/search?q=" },
  { label: "Indo-Pacific", href: "/category/indo-pacific" },
  { label: "East Asia",    href: "/category/east-asia" },
  { label: "Foreign Policy", href: "/category/foreign-policy" },
];

export default function Footer() {
  return (
    <footer className="noise relative mt-20 overflow-hidden" style={{ background: "rgba(2,8,20,0.98)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>

      {/* Top glow */}
      <div className="absolute left-0 top-0 h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.5) 30%, rgba(139,92,246,0.4) 70%, transparent)" }} />

      {/* Orbs */}
      <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)" }} />

      <div className="relative mx-auto max-w-[1200px] px-6 py-16 lg:px-12">

        {/* ── Main grid ── */}
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_0.7fr]">

          {/* Col 1 — Identity + contact */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.3em] text-amber-500">
                Get in touch
              </p>
              <h2 className="text-4xl font-black tracking-tight text-slate-50">
                Anudeep
                <br />
                <span className="text-gradient-gold">Gujeeti</span>
              </h2>
            </div>

            <div className="flex flex-col gap-2 text-sm" style={{ color: "var(--text-2)" }}>
              <span className="flex items-center gap-2">
                <HiOutlineAcademicCap size={14} className="shrink-0 text-amber-400" />
                Assistant Professor · Symbiosis Law School, Pune
              </span>
              <span className="flex items-center gap-2">
                <HiOutlineAcademicCap size={14} className="shrink-0 text-violet-400" />
                Ph.D. Scholar · University of Hyderabad
              </span>
              <span className="flex items-center gap-2">
                <HiOutlineLocationMarker size={14} className="shrink-0 text-slate-500" />
                Pune, Maharashtra, India
              </span>
            </div>

            <p className="max-w-sm text-sm leading-relaxed" style={{ color: "var(--text-3)" }}>
              Open to academic collaborations, conference invitations, media commentary,
              and policy discussions on Indo-Pacific and East Asian affairs.
            </p>

            <div className="flex flex-wrap gap-2">
              {socials.map(({ label, href, icon: Icon, hover, primary }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className={`btn-glow flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${hover} ${primary ? "glass-gold !text-amber-300" : "glass"}`}
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Research areas */}
          <div>
            <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.3em]" style={{ color: "var(--text-3)" }}>
              Research Areas
            </p>
            <div className="flex flex-wrap gap-2">
              {topics.map(t => (
                <span
                  key={t}
                  className="glass cursor-default rounded-xl px-3 py-1.5 text-xs text-slate-400 transition-all hover:-translate-y-0.5 hover:border-amber-500/25 hover:text-amber-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Col 3 — Navigation */}
          <div>
            <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.3em]" style={{ color: "var(--text-3)" }}>
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-2 text-sm transition-all hover:translate-x-1 hover:text-amber-400"
                  style={{ color: "var(--text-3)" }}
                >
                  <span className="h-px w-4 bg-current opacity-40 transition-all group-hover:w-6" />
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="my-12 h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 50%, transparent)" }} />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p className="text-xs" style={{ color: "var(--text-3)" }}>
              © {new Date().getFullYear()} Anudeep Gujeeti. All views expressed are personal.
            </p>
            <p className="text-[10px]" style={{ color: "var(--text-3)" }}>
              Assistant Professor · Symbiosis Law School · Pune, India
            </p>
          </div>

          <a
            href="#top"
            className="btn-glow glass flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-medium transition-all hover:text-amber-400"
            style={{ color: "var(--text-3)" }}
          >
            <HiArrowUp size={13} />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
