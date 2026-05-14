"use client";

import Link from "next/link";
import CategoryCard from "@/shared-components/cards/CategoryCard";

export default function LatestPostCard({ data }) {
  return (
    <article className="card-hover group flex gap-x-3 rounded-2xl p-3 transition-all duration-300" style={{ background: "rgba(8,22,42,0.7)", border: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="h-16 w-20 shrink-0 overflow-hidden rounded-xl">
        <img
          src={data.mainImage}
          alt="Post Cover"
          className="h-full w-full bg-[#0c1e35] object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex min-w-0 flex-col justify-between">
        <h2 className="line-clamp-2 text-xs font-semibold leading-snug text-slate-300 transition-colors group-hover:text-amber-300 sm:text-sm">
          {data.title}
        </h2>
        <div className="mt-2 flex items-center gap-x-2">
          <CategoryCard categoryName={data.category.name} isSmaller />
          <Link className="text-[10px] transition hover:text-amber-400" style={{ color: "var(--text-3)" }} href={`/${data.slug.current}`}>
            read →
          </Link>
        </div>
      </div>
    </article>
  );
}
