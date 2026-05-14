import Link from "next/link";
import { MdDateRange } from "react-icons/md";

export default function PostResultCard({ data }) {
  return (
    <Link
      className="card-hover grad-border group flex w-full items-center gap-x-4 rounded-2xl p-3 md:gap-x-5"
      style={{ background: "rgba(6,15,31,0.85)" }}
      href={`/${data.slug.current}`}
    >
      <div className="aspect-square w-[120px] shrink-0 overflow-hidden rounded-xl md:w-[160px] lg:w-[190px]">
        <img
          src={data.mainImage}
          alt="Post Result"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex w-full flex-col gap-y-2">
        <p className="flex items-center gap-1.5 text-[10px]" style={{ color: "var(--text-3)" }}>
          <MdDateRange size={12} className="text-amber-500/50" />
          {new Date(data._createdAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
        </p>

        <h2 className="text-sm font-bold leading-snug text-slate-100 transition-colors group-hover:text-amber-300 sm:text-base md:text-xl">
          {data.title}
        </h2>

        <p className="line-clamp-2 text-xs leading-relaxed md:text-sm" style={{ color: "var(--text-3)" }}>
          {data.description || (data.content && data.content[0]?.children[0]?.text)}
        </p>

        <span className="glass mt-1 w-fit rounded-xl px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-slate-500">
          {data.category?.name || "Unknown"}
        </span>
      </div>
    </Link>
  );
}
