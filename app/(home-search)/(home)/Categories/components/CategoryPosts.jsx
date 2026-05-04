"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { mockPosts } from "@/lib/mockData";
import PostCard from "@/shared-components/cards/PostCard";

export default function CategoryPosts() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const categorySlug = searchParams.get("category");
    
    // Simulate network delay
    setTimeout(() => {
      if (categorySlug) {
        setPosts(mockPosts.filter(p => p.category.slug.current === categorySlug));
      } else {
        setPosts(mockPosts.slice(0, 11));
      }
      setLoading(false);
    }, 400);
  }, [searchParams]);

  if(loading) {
    return (
      <div className="grid w-full grid-cols-2 gap-x-3 gap-y-6 lg:grid-cols-3 lg:gap-x-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="flex flex-col gap-2">
            <Skeleton className="h-48 w-full rounded-xl" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="grid w-full grid-cols-2 gap-x-3 gap-y-6 lg:grid-cols-3 lg:gap-x-6">
        {posts.map(post => (
          <PostCard key={post._id} data={post} />
        ))}
      </div>
    );
  }
}