import clsx from "clsx";
import Link from "next/link";

import { getArticleOfTheDay } from "@/services";

export default async function ArticleOfTheDay() {
  const articleOfTheDay = await getArticleOfTheDay();

  return (
    <article className="grad-border card-hover group relative flex w-full flex-col overflow-hidden rounded-3xl lg:flex-row" style={{ background: "rgba(6,15,31,0.85)" }}>

      {/* Content */}
      <div className="order-2 flex w-full flex-col justify-between p-8 lg:order-none lg:max-w-[52%] lg:p-12">
        <div>
          {/* Badge */}
          <div className="glass-gold mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Featured</span>
          </div>

          <h2 className="mb-5 text-2xl font-bold leading-tight text-slate-50 transition-colors group-hover:text-amber-50 lg:text-3xl">
            {articleOfTheDay.post.title}
          </h2>
          <p className="mb-8 text-sm leading-relaxed lg:text-base" style={{ color: "var(--text-2)" }}>
            {articleOfTheDay.description}
          </p>
        </div>

        <Link
          className="btn-glow glass-gold group/btn inline-flex w-fit items-center gap-2.5 rounded-xl px-6 py-3 text-sm font-bold text-amber-300 transition-all hover:bg-amber-500 hover:text-white hover:shadow-xl hover:shadow-amber-900/30"
          href={`/${articleOfTheDay.post.slug.current}`}
        >
          Read article
          <svg className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Image */}
      <div className="relative min-h-[230px] w-full overflow-hidden lg:min-h-full">
        <img
          src={articleOfTheDay.post.mainImage}
          alt="Article"
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className={clsx(
          "absolute inset-0",
          "bg-gradient-to-t from-[#060f1f] via-[#060f1f]/20 to-transparent",
          "lg:via-[#060f1f]/15 lg:bg-gradient-to-r lg:from-[#060f1f] lg:to-transparent"
        )} />
      </div>
    </article>
  );
}
