"use client";

import { useRouter } from "next/navigation";
import { HiArrowLeft } from "react-icons/hi";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="btn-glow glass group flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-slate-400 transition-all duration-200 hover:-translate-x-0.5 hover:text-amber-300"
    >
      <HiArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
      Back
    </button>
  );
}
