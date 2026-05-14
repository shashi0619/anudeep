import { notFound } from "next/navigation";
import { MdDateRange } from "react-icons/md";
import { getPostBySlug } from "@/services";

import ArticleBody from "./components/ArticleBody";
import RegisterVisit from "./components/RegisterVisit";
import SocialsButtons from "./components/SocialButtons";
import Comments from "./Comments";
import BackButton from "./components/BackButton";

export default async function Page({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div className="min-h-screen w-full" style={{ background: "#020b18" }}>
      <RegisterVisit postId={post._id} />

      {/* Hero image */}
      <header className="relative h-[440px] w-full overflow-hidden">
        <img
          src={post.mainImage}
          alt="Post cover"
          className="h-full w-full object-cover object-center scale-105"
          style={{ filter: "brightness(0.7)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #020b18 0%, rgba(2,11,24,0.6) 40%, transparent 100%)" }} />

        {/* Overlay badge */}
        <div className="absolute bottom-8 left-0 right-0 mx-auto max-w-[820px] px-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="glass-gold rounded-xl px-3 py-1.5 text-xs font-bold text-amber-400">
              {post.category.name}
            </span>
            <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-3)" }}>
              <MdDateRange size={13} className="text-amber-500/50" />
              {new Date(post._createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[820px] px-5 py-10">
        <div className="mb-6">
          <BackButton />
        </div>

        <h1 className="mb-8 text-3xl font-black leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        {/* Divider with social */}
        <div className="mb-10 flex w-full items-center gap-4">
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(245,158,11,0.4), transparent)" }} />
          <SocialsButtons data={post} />
        </div>

        <ArticleBody data={post} />

        <div className="mt-16 pt-12" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <Comments initialComments={post.comments} id={post._id} />
        </div>
      </main>
    </div>
  );
}
