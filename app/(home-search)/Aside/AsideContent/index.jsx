"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import CategoryCard from "@/shared-components/cards/CategoryCard";

import LatestPostCard from "./components/LatestPostCard";
import SkeletonAside from "./components/SkeletonAside";

function AsideLabel({ label }) {
  return (
    <div className="mb-1 flex items-center gap-3">
      <p className="text-[9px] font-bold uppercase tracking-[0.25em]" style={{ color: "var(--text-3)" }}>
        {label}
      </p>
      <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.05)" }} />
    </div>
  );
}

export default function AsideContent({ data }) {
  const pathname = usePathname();

  if (!data.latestPosts || !data.categories) return <SkeletonAside />;

  return (
    <div className="flex flex-col gap-y-5">
      <AsideLabel label="Latest posts" />
      {data.latestPosts.map(post => (
        <LatestPostCard key={post._id} data={post} />
      ))}

      <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.05)" }} />

      <AsideLabel label="Topics" />
      <div className="flex w-full flex-wrap gap-2">
        {data.categories.map(category => (
          <Link key={category._id} href={`/category/${category.slug.current}`}>
            <CategoryCard
              categoryName={category.name}
              isActive={pathname === `/category/${category.slug.current}`}
              includeHover
              isSmaller
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
