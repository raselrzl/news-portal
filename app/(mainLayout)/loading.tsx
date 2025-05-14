import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function LoadingPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-10">
      <div className="order-3 md:order-1 md:col-span-1 p-2 border-1">
        <div className="grid grid-cols-3 border-b-1 py-2">
          <div className="col-span-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="col-span-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>

        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <div className="mt-10 text-left flex-col hidden sm:block">
          <p className="text-sm font-semibold text-primary text-justify">
            সর্বশেষ আপডেট এবং এক্সক্লুসিভ কন্টেন্টের জন্য আমাদের সোশ্যাল মিডিয়া
            একাউন্টে ফলো করুন।
          </p>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
      <div className="order-2 md:order-2 md:col-span-1">
        <div className=" grid grid-cols-1">
          <div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>

          <div className="max-w-sm rounded-lg overflow-hidden shadow-md border mt-2">
            <div className="p-1">
              <h2 className="text-lg font-semibold line-clamp-1">
                <Skeleton className="h-4 w-full" />
              </h2>
            </div>

            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="bg-primary-foreground mt-4 pt-2 border-1">
            <Skeleton className="h-4 w-full" />
            <div className="relative h-56 overflow-y-scroll mx-4 md:mx-0 md:px-1  mb-6 px-4">
              <div className="rounded-xl">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-4 border-t-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />

            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
        <div className="order-1 md:order-3 md:col-span-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </div>
  );
}
