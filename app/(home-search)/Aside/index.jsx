"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useAside } from "@/context/AsideContext";
import { mockCategories, mockPosts } from "@/lib/mockData";

import AsideContent from "./AsideContent";

export default function Aside() {
  const latestPosts = [...mockPosts].sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt)).slice(0, 2);
  const categories = mockCategories.slice(0, 8);
  const { isAsideOpen, setIsAsideOpen } = useAside();
  const pathname = usePathname();

  useEffect(() => { setIsAsideOpen(false); }, [pathname]);

  const sidebarStyle = { background: "rgba(2,11,24,0.95)", borderLeft: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(24px)" };

  return (
    <>
      <Sheet open={isAsideOpen} onOpenChange={setIsAsideOpen}>
        <SheetContent side="right" className="w-[340px] overflow-y-auto p-6 pt-10" style={sidebarStyle}>
          <AsideContent data={{ latestPosts, categories }} />
        </SheetContent>
      </Sheet>

      <aside className="sticky top-0 hidden min-h-screen w-[340px] shrink-0 flex-col gap-y-6 p-6 pt-6 md:flex" style={sidebarStyle}>
        <AsideContent data={{ latestPosts, categories }} />
      </aside>
    </>
  );
}
