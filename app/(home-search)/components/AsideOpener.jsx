"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { useAside } from "@/context/AsideContext";

export default function AsideOpener() {
  const { setIsAsideOpen } = useAside();
  return (
    <button
      type="button"
      className="btn-glow glass ml-auto block shrink-0 rounded-xl p-2 text-slate-500 transition-all hover:text-amber-400 md:hidden"
      onClick={() => setIsAsideOpen(true)}
    >
      <span className="sr-only">Open Aside</span>
      <GiHamburgerMenu size={18} />
    </button>
  );
}
