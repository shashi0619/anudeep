import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiOutlineAcademicCap, HiOutlineGlobe, HiOutlineLocationMarker } from "react-icons/hi";
import { MdVerified } from "react-icons/md";

const credentials = [
  { icon: HiOutlineAcademicCap, text: "Assistant Professor · Symbiosis Law School, Pune", color: "text-amber-400" },
  { icon: HiOutlineAcademicCap, text: "Ph.D. Scholar · University of Hyderabad",          color: "text-violet-400" },
  { icon: HiOutlineGlobe,       text: "Young Leader · Pacific Forum",                       color: "text-sky-400"   },
];

const tags = ["India–Japan Relations", "Indo-Pacific", "East Asia", "Foreign Policy", "International Law", "Strategic Affairs"];

const stats = [
  { top: "Ph.D",       btm: "University of Hyderabad" },
  { top: "Indo-Pacific", btm: "Research Focus" },
  { top: "Pacific",    btm: "Forum Young Leader" },
];

const socials = [
  {
    href: "https://www.linkedin.com/in/anudeepgujjeti/",
    icon: FaLinkedin,
    label: "LinkedIn",
    hover: "hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-blue-900/30",
  },
  {
    href: "https://twitter.com",
    icon: FaTwitter,
    label: "Twitter",
    hover: "hover:border-sky-400/50 hover:bg-sky-400/10 hover:text-sky-400 hover:shadow-sky-900/30",
  },
  {
    href: "mailto:anudeep@symlaw.ac.in",
    icon: FaEnvelope,
    label: "Get in touch",
    hover: "hover:border-amber-400/60 hover:bg-amber-400/10 hover:text-amber-300 hover:shadow-amber-900/30",
    primary: true,
  },
];

export default function HeroSection() {
  return (
    <section className="noise grad-border relative mb-16 mt-2 overflow-hidden rounded-3xl" style={{ background: "rgba(6,15,31,0.9)" }}>

      {/* ── Radial glow spots ── */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute -bottom-16 left-1/3 h-60 w-60 rounded-full" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-48 w-48 rounded-full" style={{ background: "radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)" }} />

      {/* ── Top accent line ── */}
      <div className="absolute left-0 top-0 h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.6) 30%, rgba(139,92,246,0.5) 70%, transparent)" }}>
        <div className="animate-border-pulse h-full w-full" style={{ background: "inherit" }} />
      </div>

      {/* ── Dot grid ── */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #f59e0b 1px, transparent 0)", backgroundSize: "30px 30px" }} />

      <div className="relative px-8 py-12 md:px-14 md:py-16">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start lg:gap-16">

          {/* ── Left: Avatar ── */}
          <div className="animate-fade-in-left flex shrink-0 flex-col items-center gap-5">
            <div className="animate-float">
              <div className="avatar-ring-wrapper animate-pulse-glow rounded-[1.35rem]">
                <div className="avatar-inner" style={{ width: 160, height: 160 }}>
                  <img
                    src="/1621063207415.jpeg"
                    alt="Anudeep Gujeeti"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  />
                </div>
              </div>
            </div>

            {/* Verified badge */}
            <div className="glass-gold flex items-center gap-1.5 rounded-full px-3 py-1.5">
              <MdVerified className="text-amber-400" size={14} />
              <span className="text-xs font-semibold text-amber-300">Scholar · Analyst</span>
            </div>

            {/* Location */}
            <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-3)" }}>
              <HiOutlineLocationMarker size={12} className="text-amber-500/60" />
              Pune, India
            </span>
          </div>

          {/* ── Right: Content ── */}
          <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">

            {/* Live indicator */}
            <div className="animate-fade-in-up delay-75 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
              </span>
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--text-3)" }}>
                Foreign Policy · International Relations · Law
              </span>
            </div>

            {/* Name */}
            <div className="animate-fade-in-up delay-150">
              <h1 className="text-5xl font-black tracking-tight text-slate-50 sm:text-6xl lg:text-7xl">
                Anudeep
              </h1>
              <h1 className="text-gradient-gold text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                Gujeeti
              </h1>
            </div>

            {/* Credential chips */}
            <div className="animate-fade-in-up delay-200 flex flex-col gap-2">
              {credentials.map(({ icon: Icon, text, color }) => (
                <div key={text} className="glass flex items-center gap-2 rounded-xl px-4 py-2.5">
                  <Icon size={15} className={`${color} shrink-0`} />
                  <span className="text-sm text-slate-300">{text}</span>
                </div>
              ))}
            </div>

            {/* Bio */}
            <p className="animate-fade-in-up delay-300 max-w-xl text-sm leading-relaxed md:text-base" style={{ color: "var(--text-2)" }}>
              Scholar and analyst at the intersection of international law, strategic affairs, and
              Indo-Pacific security. Writing on India–Japan ties, East Asian dynamics, and
              South Asia's foreign policy — from an academic lens, without the noise.
            </p>

            {/* Topic pills */}
            <div className="animate-fade-in-up delay-300 flex flex-wrap justify-center gap-2 md:justify-start">
              {tags.map((tag, i) => (
                <span
                  key={tag}
                  className="glass rounded-full px-3 py-1 text-xs font-medium text-slate-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-500/30 hover:text-amber-300"
                  style={{ animationDelay: `${300 + i * 50}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="animate-fade-in-up delay-400 grid w-full grid-cols-3 gap-3">
              {stats.map(({ top, btm }) => (
                <div key={btm} className="card-hover glass-2 rounded-2xl p-4 text-center">
                  <p className="text-gradient-gold text-base font-bold sm:text-lg">{top}</p>
                  <p className="mt-1 text-[10px] leading-tight" style={{ color: "var(--text-3)" }}>{btm}</p>
                </div>
              ))}
            </div>

            {/* Social buttons */}
            <div className="animate-fade-in-up delay-500 flex flex-wrap justify-center gap-2.5 md:justify-start">
              {socials.map(({ href, icon: Icon, label, hover, primary }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className={`btn-glow glass flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:shadow-lg ${hover} ${primary ? "glass-gold !text-amber-300" : ""}`}
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
