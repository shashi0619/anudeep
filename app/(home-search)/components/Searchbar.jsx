"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Searchbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [q, setQ] = useState(searchParams.get("q") || "");

  function onSubmit(e) {
    e.preventDefault();
    router.push(`/search?q=${q}`);
  }

  useEffect(() => {
    if (searchParams.get("q")) setQ(searchParams.get("q"));
  }, [searchParams]);

  return (
    <form
      onSubmit={onSubmit}
      className="group flex w-full max-w-[480px] items-center gap-x-2 rounded-xl px-1 transition-all duration-200"
      style={{
        background: "rgba(8,22,42,0.7)",
        border: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(16px)",
      }}
    >
      <input
        type="text"
        className="w-full border-none bg-transparent py-2 pl-3 text-sm text-slate-300 placeholder-slate-600 outline-none"
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search articles..."
        autoComplete="off"
        required
      />
      <button
        type="submit"
        className="shrink-0 rounded-lg p-1.5 text-slate-600 transition-all hover:bg-amber-500/10 hover:text-amber-400"
      >
        <BsSearch size={15} />
      </button>
    </form>
  );
}
