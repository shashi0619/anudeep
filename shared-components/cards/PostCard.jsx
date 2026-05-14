import Link from "next/link";
import { MdDateRange } from "react-icons/md";

export default function PostCard({ data }) {
  return (
    <Link
      className="card-hover grad-border group flex w-full flex-col gap-y-3 rounded-2xl p-3"
      style={{ background: "rgba(6,15,31,0.85)" }}
      href={`/${data.slug.current}`}
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={data.mainImage}
          alt="Post cover"
          className="aspect-[3/2] w-full bg-[#0c1e35] object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h2 className="text-sm font-bold leading-snug text-slate-100 transition-colors group-hover:text-amber-300 md:text-base">
        {data.title}
      </h2>

      <p className="line-clamp-2 text-xs leading-relaxed" style={{ color: "var(--text-3)" }}>
        {data.description || (data.content && data.content[0]?.children[0]?.text)}
      </p>

      <div className="flex items-center gap-1.5 text-[10px]" style={{ color: "var(--text-3)" }}>
        <MdDateRange size={12} className="text-amber-500/50" />
        {new Date(data._createdAt).toLocaleDateString("en-US", {
          year: "numeric", month: "short", day: "numeric",
        })}
      </div>
    </Link>
  );
}
