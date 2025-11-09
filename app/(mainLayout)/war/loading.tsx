"use client";

import { List } from "lucide-react";

export default function Loading() {
  return (
    <div className="mt-10 animate-pulse">
      {/* Header */}
      <div className="font-extrabold pl-2 mb-4 flex items-center">
        <List className="h-5 w-5 mr-2 text-gray-400" />
        <span className="bg-gray-300 dark:bg-gray-700 rounded-md px-8 py-2"></span>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 max-w-3xl mx-auto gap-6 px-2">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm"
          >
            {/* Image skeleton */}
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-800"></div>

            {/* Text content skeleton */}
            <div className="p-4 space-y-3">
              <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="flex justify-center gap-2 mt-10">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-lg"
          ></div>
        ))}
      </div>
    </div>
  );
}
