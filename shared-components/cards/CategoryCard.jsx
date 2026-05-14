"use client";

import clsx from "clsx";

export default function CategoryCard({ categoryName, isSmaller, isActive, includeHover }) {
  return (
    <div className={clsx(
      "w-fit shrink-0 rounded-xl font-medium transition-all duration-200",
      isSmaller ? "px-2.5 py-1 text-[10px] uppercase tracking-wider" : "px-3 py-1.5 text-xs uppercase tracking-wider",
      isActive
        ? "glass-gold text-amber-300"
        : "glass text-slate-400",
      includeHover && !isActive && "cursor-pointer hover:-translate-y-0.5 hover:border-amber-500/30 hover:text-amber-300"
    )}>
      {categoryName}
    </div>
  );
}
