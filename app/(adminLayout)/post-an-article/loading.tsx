'use client';

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingMyArticles() {
  return (
    <div className="max-w-6xl mx-auto mt-10 space-y-6 animate-pulse">
      {/* Card Table Skeleton */}
      <Card className="border border-gray-200 shadow-sm">
        <CardHeader>
          <Skeleton className="h-6 w-1/4 mb-2" />
          <Skeleton className="h-4 w-1/3" />
        </CardHeader>
        <CardContent>
          {/* Table Header */}
          <div className="grid grid-cols-7 gap-4 mb-3">
            {Array.from({ length: 7 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-full" />
            ))}
          </div>

          {/* Table Rows */}
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-7 gap-4 items-center border-b border-gray-100 pb-2"
              >
                {/* Image */}
                <Skeleton className="h-[50px] w-[80px] rounded-md" />
                {/* Heading */}
                <Skeleton className="h-4 w-4/5" />
                {/* Category */}
                <Skeleton className="h-4 w-2/3" />
                {/* Status */}
                <Skeleton className="h-4 w-1/2" />
                {/* Reporter */}
                <Skeleton className="h-4 w-2/3" />
                {/* Date */}
                <Skeleton className="h-4 w-1/2" />
                {/* Actions */}
                <Skeleton className="h-8 w-10 rounded-md" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
