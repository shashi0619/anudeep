import { HiOutlineLightningBolt, HiOutlineFire } from "react-icons/hi";
import { BiCategoryAlt } from "react-icons/bi";

import ArticleOfTheDay from "./components/ArticleOfTheDay";
import TrendingPosts from "./components/TrendingPosts";
import Categories from "./Categories";
import HeroSection from "./components/HeroSection";
import SectionReveal from "@/app/(home-search)/components/SectionReveal";

function SectionHeading({ icon: Icon, label, accent, sub }) {
  return (
    <div className="mb-6 flex items-end justify-between">
      <div className="flex items-center gap-3">
        <div className="glass-2 rounded-xl p-2">
          <Icon size={17} className={accent} />
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--text-3)" }}>
            {label}
          </h2>
          {sub && <p className="mt-0.5 text-xs" style={{ color: "var(--text-3)" }}>{sub}</p>}
        </div>
      </div>
      <div className="flex-1 mx-4 h-px" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.06), transparent)" }} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />

      <SectionReveal delay={0}>
        <section className="w-full">
          <SectionHeading
            icon={HiOutlineLightningBolt}
            label="Featured article"
            accent="text-amber-400"
            sub="Editor's pick"
          />
          <ArticleOfTheDay />
        </section>
      </SectionReveal>

      <SectionReveal delay={100}>
        <section className="mt-16 w-full">
          <SectionHeading
            icon={HiOutlineFire}
            label="Trending"
            accent="text-orange-400"
            sub="Most read this week"
          />
          <TrendingPosts />
        </section>
      </SectionReveal>

      <SectionReveal delay={150}>
        <section className="mt-16 w-full">
          <SectionHeading
            icon={BiCategoryAlt}
            label="Browse by topic"
            accent="text-sky-400"
            sub="Explore all research areas"
          />
          <Categories />
        </section>
      </SectionReveal>
    </>
  );
}
