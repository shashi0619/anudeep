import Link from "next/link";
import logo from "@/assets/img/logo.png";

import AsideProvider from "@/context/AsideContext";
import AsideOpener from "./components/AsideOpener";
import Searchbar from "./components/Searchbar";
import Aside from "./Aside";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import AnimatedOrbs from "./components/AnimatedOrbs";

export default function Layout({ children }) {
  return (
    <AsideProvider>
      {/* Fixed ambient elements */}
      <ScrollProgress />
      <AnimatedOrbs />

      <div className="mx-auto flex w-full max-w-[1600px] items-start">
        <div className="flex min-h-screen w-full min-w-0 flex-col">
          <main className="flex-1 p-4 pb-8 sm:p-6 lg:p-8" id="top">

            {/* ── Navbar ─────────────────────────────── */}
            <nav className="animate-slide-down glass sticky top-0 z-50 -mx-4 mb-0 flex w-[calc(100%+2rem)] items-center gap-x-4 px-4 py-3 sm:-mx-6 sm:w-[calc(100%+3rem)] sm:px-6 lg:-mx-8 lg:w-[calc(100%+4rem)] lg:px-8">
              <Link className="group flex shrink-0 items-center gap-2" href="/">
                <img
                  src={logo.src}
                  alt="Anudeep Gujeeti"
                  className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="flex flex-col leading-none">
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-amber-500 transition-colors group-hover:text-amber-400">
                    Anudeep
                  </span>
                  <span className="text-sm font-extrabold tracking-tight text-slate-100">
                    Gujeeti
                  </span>
                </div>
              </Link>

              <div className="mx-3 h-5 w-px shrink-0" style={{ background: "rgba(255,255,255,0.1)" }} />

              <Searchbar />
              <AsideOpener />
            </nav>

            {/* Animated hairline divider */}
            <div className="relative -mx-4 mb-8 mt-0 h-px overflow-hidden sm:-mx-6 lg:-mx-8">
              <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.5) 30%, rgba(139,92,246,0.4) 60%, transparent)" }}>
                <div
                  style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)",
                    animation: "shimmer 3s ease-in-out infinite",
                  }}
                />
              </div>
            </div>

            {children}
          </main>

          <Footer />
        </div>

        <Aside />
      </div>
    </AsideProvider>
  );
}
