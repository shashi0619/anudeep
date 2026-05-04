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

  useEffect(() => {
    setIsAsideOpen(false);
  }, [pathname]);

  return (
    <>
      <Sheet open={isAsideOpen} onOpenChange={setIsAsideOpen}>
        <SheetContent side="right" className="w-[350px] overflow-y-auto bg-gray-100 p-6 pt-10">
          <AsideContent data={{ latestPosts, categories }}/> 
        </SheetContent>
      </Sheet>

      <aside className="sticky top-0 hidden min-h-screen w-[350px] shrink-0 flex-col gap-y-5 border-l border-solid border-gray-300 p-6 pt-4 md:flex">
        <AsideContent data={{ latestPosts, categories }}/> 
      </aside>
    </>
  );
}