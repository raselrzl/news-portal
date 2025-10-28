'use client';

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LatestSkeleton() {
  return (
    <div className="grid grid-cols-3 mt-10 gap-4">
      <div className="col-span-3 md:col-span-1 space-y-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Card className="relative grid grid-cols-3 border-0 px-2 py-2 animate-pulse" key={i}>
          <div className="col-span-1">
            <Skeleton className="h-[60px] w-full rounded-xl" />
          </div>
          <div className="col-span-2 space-y-2 pl-3">
            <Skeleton className="h-5 w-4/5" />
            <Skeleton className="h-3 w-1/3 ml-auto" />
          </div>
        </Card>
        ))}
      </div>

      {/* Column 2: Placeholder for 'three' */}
      <div className="col-span-3 md:col-span-1 space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-40 w-full rounded-md" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-2/3" />
      </div>

      {/* Column 3: Placeholder for 'one' */}
      <div className="col-span-3 md:col-span-1 space-y-4">
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-32 w-full rounded-md" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}
