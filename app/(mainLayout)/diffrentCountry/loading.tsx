import { Skeleton } from "@/components/ui/skeleton";
import { SuperOne } from "@/components/allAdvertisement/SuperOne";
import Image from "next/image";

const locations = [
  { name: "dhaka",},
  { name: "sylhet",},
  { name: "moulvibazar", },
];

export default function Loading() {
  return (
    <>
      <div className="grid grid-cols-5 mt-4 md:mt-8 animate-pulse">
        {/* 🌍 Country Tabs */}
        <div className="col-span-5 md:col-span-1">
          <div className="hidden md:block pb-2 mb-6 overflow-x-auto pt-4">
            <div className="flex flex-wrap gap-3 px-2">
              {locations.slice(0, 6).map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-2 border rounded-lg px-3 py-1"
                >
                  <Skeleton className="h-4 w-16" />
                </div>
              ))}
            </div>
          </div>
          <div className="px-2 pt-3">
            <SuperOne country="Sweden" />
          </div>
        </div>

        {/* 📰 Main Content */}
        <div className="col-span-5 md:col-span-3">
          {/* Featured Article Skeleton */}
          <div className="flex items-center gap-2 pl-2 mb-2">
            <Skeleton className="h-5 w-8 rounded-sm" />
            <Skeleton className="h-5 w-32" />
          </div>

          <div className="mb-6 max-h-[320px] md:border-1 md:p-2">
            <div className="grid grid-cols-5">
              <div className="col-span-5 md:col-span-3 mt-10 md:mt-0">
                <Skeleton className="w-full h-[240px] md:h-[270px] rounded-xl" />
              </div>
              <div className="pl-1 md:pl-4 col-span-5 md:col-span-2 mt-2">
                <Skeleton className="h-6 w-64 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-5/6 mb-1" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </div>

          <div className="px-2 md:px-0">
            <SuperOne country="Swedenn" />
          </div>

          {/* Grid Articles Skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 py-6 px-2 border-y-1 md:border-1 my-10">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="max-w-md w-full mx-auto my-1 sm:max-w-xs md:max-w-md lg:max-w-lg"
              >
                <Skeleton className="w-auto h-[110px] md:h-[150px] rounded-xl mb-2" />
                <Skeleton className="h-5 w-48 mx-auto" />
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Ads */}
        <div className="col-span-5 md:col-span-1 px-2 pt-3">
          <SuperOne country="Swedenn" />
          <SuperOne country="Swedenn" />
        </div>
      </div>

      <SuperOne country="Swedenn" />
    </>
  );
}
