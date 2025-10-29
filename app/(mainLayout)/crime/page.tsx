import LoadingSpinner from "@/components/general/LoadingSpinner";
import AllCrimeNewsArticleList from "./AllCrimeNewsArticleList";
import { Suspense } from "react";
import { trackRoute } from "@/app/utils/routeTracker";
import { List } from "lucide-react";
import { UltimateTwo } from "@/components/allAdvertisement/UltimateTwo";
import BandarbanNews from "./BandarbanNews";

type SearchParamsProps = {
  searchParams: Promise<{
    page?: string;
    jobTypes?: string;
    location?: string;
  }>;
};

export default async function Crime({ searchParams }: SearchParamsProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  await trackRoute("Crime");

  return (
    <>
      <div className="grid grid-cols-3 mt-10">
        <div className="col-span-3 md:col-span-1">
          <div className="font-extrabold pl-2 mb-2 flex items-center">
            <List className="h-5 w-5 mr-2" /> সর্বশেষ সব ধরনের অবৈধ কাজ
          </div>

          <div className="p-1 md:p-4">
            <Suspense key={currentPage} fallback={<LoadingSpinner />}>
              <AllCrimeNewsArticleList currentPage={currentPage} />
            </Suspense>
          </div>
        </div>
        <div id="BulgariaNews" className="col-span-3 md:col-span-2">
          <div>
            <div className="flex items-center gap-2 pl-2 mb-2">

              <h1 className="font-extrabold text-xl">বান্দরবন‑এর সাম্প্রতিক খবর</h1>
            </div>
            <BandarbanNews />
          </div>{" "}
          <div className="px-2">
            {" "}
            <UltimateTwo />
          </div>
        </div>
      </div>
    </>
  );
}
