"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { mockPosts } from "@/lib/mockData";

import PostResultCard from "./components/PostResultCard";

export default function Search() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setLoading(true);
    const searchTerm = (searchParams.get("q") || "").toLowerCase();

    setTimeout(() => {
      if (!searchTerm) {
        setResults(mockPosts);
      } else {
        const filtered = mockPosts.filter(p => 
          p.title.toLowerCase().includes(searchTerm) || 
          p.description.toLowerCase().includes(searchTerm)
        );
        setResults(filtered);
      }
      setLoading(false);
    }, 400);

  }, [searchParams]);

  if(loading) {
    return (
      <section className="flex w-full flex-col gap-y-5">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="flex h-32 w-full flex-col gap-4 sm:flex-row">
            <Skeleton className="h-full w-full shrink-0 rounded-xl sm:w-48" />
            <div className="flex w-full flex-col gap-2 py-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        ))}
      </section>
    );
  } else {
    return (
      <div className="flex w-full flex-col gap-y-5">
        {
          results.length === 0 ?
            <p className="mb-4 w-full font-mono text-sm text-zinc-500">
              No results for &quot;<span className="text-zinc-300">{searchParams.get("q")}</span>&quot;
            </p>
            :
            <>
              <p className="-mb-2 w-full font-mono text-sm text-zinc-500">
                <span className="text-emerald-400">{results.length}</span> results for &quot;<span className="text-zinc-300">{searchParams.get("q")}</span>&quot;
              </p> 

              {results.map((result) => (
                <PostResultCard key={result._id} data={result} />
              ))}
            </>
        }
      </div>
    );
  }

}