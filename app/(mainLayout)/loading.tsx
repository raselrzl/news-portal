import { Skeleton } from "@/components/ui/skeleton";
import { Clock } from "lucide-react";
import React from "react";

export default function HomeSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-10">
      {/* Left Sidebar */}
      <div className="order-3 md:order-1 md:col-span-1 p-2 border-1">
      <div className="flex flex-row gap-2 justify-center"><Clock /><h1 className="text-2xl font-bold">সাম্প্রতিক</h1></div>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-3 border-b-1 py-2 space-x-2"
          >
            <div className="col-span-1">
              <Skeleton className="w-32 h-16 rounded object-cover" />
            </div>
            <div className="col-span-2 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        ))}

        <Skeleton className="w-full h-[100px] rounded-xl mt-4" />

        <div className="mt-10 hidden sm:block space-y-2">
          <Skeleton className="h-4 w-full" />
          <div className="flex gap-3 mt-2">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-6 w-6 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      {/* Middle Column */}
      <div className="order-2 md:order-2 md:col-span-1">
        <Skeleton className="w-full h-[150px] rounded-xl" />

        <div className="max-w-sm rounded-lg overflow-hidden shadow-md border mt-2 p-2 space-y-2">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="w-full h-40" />
        </div>

        <div className="bg-primary-foreground mt-4 pt-2 border-1">
          <h1 className="font-bold text-primary text-center text-2xl mb-2">
            "শীর্ষ খবর"
          </h1>
          <div className="relative h-56 overflow-y-scroll mx-4 px-4 mb-6">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="max-w-sm rounded-lg overflow-hidden shadow-md border m-2 p-2"
              >
                <Skeleton className="h-4 w-4/5" />
              </div>
            ))}

            {/* Fade & Scroll Hint */}
            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-accent-foreground/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
              <svg
                className="w-5 h-5 text-gray-400 animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center pt-4 border-t-1">
          <Skeleton className="w-[300px] h-[100px] md:h-[150px] rounded-xl" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="order-1 md:order-3 md:col-span-3 space-y-4">
      <div className="mb-6 max-h-[290px] md:border p-2">
        <div className="grid grid-cols-5 gap-2">
          <div className="col-span-5 md:col-span-3 w-full h-[240px] md:h-[270px] overflow-hidden rounded-xl">
            <Skeleton className="w-full h-full" />
          </div>

          <div className="col-span-5 md:col-span-2 pl-1 md:pl-4 flex flex-col justify-between">
            <Skeleton className="h-6 w-3/4 mt-2" />
            <div className="space-y-2 mt-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </div>
      </div>

      {/* Grid Articles Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2 md:border">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="max-w-md w-full mx-auto my-1 sm:max-w-xs md:max-w-md lg:max-w-lg"
          >
            <div className="w-auto h-[110px] md:h-[150px] rounded-xl overflow-hidden">
              <Skeleton className="w-full h-full" />
            </div>

            <div className="pt-4 space-y-2">
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
