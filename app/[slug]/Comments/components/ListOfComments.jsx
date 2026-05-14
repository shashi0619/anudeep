"use client";

function CommentCard({ data }) {
  return (
    <div className="flex w-full items-start gap-x-3 pb-5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 font-bold text-sm text-amber-400">
        {data.name[0].toUpperCase()}
      </div>

      <div className="w-full">
        <p className="flex items-center gap-1.5 text-xs text-slate-500">
          <span className="font-semibold text-slate-300">{data.name}</span>
          <span>·</span>
          {new Date(data._createdAt).toLocaleDateString("en-US", {
            year: "numeric", month: "short", day: "numeric",
          })}
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
          {data.comment || data.message}
        </p>
      </div>
    </div>
  );
}

export default function ListOfComments({ comments }) {
  return (
    <div className="w-full rounded-2xl border border-[#1e3a5f] bg-[#0a1628] p-5 pb-3">
      <p className="text-sm font-semibold text-slate-200">
        {comments.length} comment{comments.length !== 1 ? "s" : ""}
      </p>
      <div className="my-4 h-px w-full bg-[#1e3a5f]" />

      {comments.map((comment) => (
        <CommentCard data={comment} key={comment._id} />
      ))}

      {comments.length === 0 && (
        <p className="pb-2 text-xs text-slate-600">No comments yet. Be the first.</p>
      )}
    </div>
  );
}
