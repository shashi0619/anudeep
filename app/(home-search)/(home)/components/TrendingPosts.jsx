import Link from "next/link";

import { getMostVisitedPosts } from "@/services";
import FHSlider from "@/shared-components/ui/FHSlider";

function TrendingPostCard({ data, index }) {
  return (
    <article
      className="group relative aspect-[3/5] w-[195px] shrink-0 overflow-hidden rounded-2xl bg-cover bg-center"
      style={{
        backgroundImage: `url(${data.mainImage})`,
        animationDelay: `${index * 60}ms`,
      }}
    >
      {/* Overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020b18] via-[#020b18]/50 to-transparent transition-all duration-500 group-hover:via-[#020b18]/30" />

      {/* Glow border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 ring-1 ring-amber-400/40 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-[inset_0_0_40px_rgba(245,158,11,0.06)]" />

      {/* Scale effect overlay */}
      <div className="absolute inset-0 scale-100 transition-transform duration-500 group-hover:scale-105" />

      <div className="relative flex h-full flex-col justify-between p-4">
        {/* Index number */}
        <div className="flex items-start justify-between">
          <span className="glass rounded-lg px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            {data.category.name}
          </span>
          <span className="text-gradient-gold text-2xl font-black opacity-30">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-bold leading-snug text-white transition-colors group-hover:text-amber-50 sm:text-base">
            {data.title}
          </h2>
          <Link
            className="btn-glow glass-gold inline-flex items-center gap-1.5 rounded-xl px-4 py-1.5 text-xs font-bold text-amber-300 backdrop-blur-sm transition-all hover:bg-amber-500 hover:text-white"
            href={`/${data.slug.current}`}
          >
            Read
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default async function TrendingPosts() {
  const trendingPosts = await getMostVisitedPosts();

  return (
    <FHSlider>
      {trendingPosts.map((post, i) => (
        <TrendingPostCard key={post._id} data={post} index={i} />
      ))}
    </FHSlider>
  );
}
