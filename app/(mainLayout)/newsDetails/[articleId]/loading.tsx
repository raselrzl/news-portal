import { Skeleton } from "@/components/ui/skeleton";

export default function NewsDetailsSkeleton() {
  return (
    <div className="grid grid-cols-5 gap-4 my-10 items-center">
      <div className="col-span-5 md:col-span-4 grid grid-cols-4 gap-2">
        <div className="col-span-4 md:col-span-1 flex">
          <div className="relative w-full h-[100px] md:h-[200px] px-10">
            <Skeleton className="w-full h-full rounded-xl" />
          </div>
        </div>

        <div className="col-span-4 md:col-span-3">
          <Skeleton className="h-10 w-3/4 mb-4 ml-4" />

          <div className="flex flex-row font-bold mb-1 space-x-4 ml-4">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-32" />
          </div>

          <div className="w-full mt-4">
            <Skeleton className="w-full h-[300px] md:h-[400px] rounded-3xl" />

            <div className="flex justify-center mt-2 px-2 mb-10 text-sm space-x-4">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-1/3" />
            </div>

            <div className="px-6">
              <div className="flex items-center space-x-4 mb-4">
                <Skeleton className="h-6 w-28" />
                <Skeleton className="h-6 w-28" />
              </div>
              <Skeleton className="h-32 w-full mb-4" />
              <Skeleton className="h-6 w-1/2" />
            </div>
          </div>

          <div className="mt-6 px-4 space-y-4">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="relative border-l-4 border-primary pl-4 bg-accent-foreground/5 p-4 rounded-3xl min-h-[100px]"
              >
                <Skeleton className="h-16 w-full mb-4" />
                <Skeleton className="h-4 w-24 absolute bottom-2 right-4" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-5 md:col-span-1 grid-cols-1">
        <div className="w-[350px] h-[100px] md:w-full md:h-[200px] flex items-start justify-center rounded-2xl mx-auto">
          <Skeleton className="w-[350px] h-[100px] md:h-[200px] rounded-xl" />
        </div>
      </div>
    </div>
  );
}
