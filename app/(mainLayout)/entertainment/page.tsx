import LoadingSpinner from "@/components/general/LoadingSpinner";
import AllEntertainmentArticles from "./AllEntertainmentArticles";
import { Suspense } from "react";
import { trackRoute } from "@/app/utils/routeTracker";
import { List } from "lucide-react";
import { UltimateTwo } from "@/components/allAdvertisement/UltimateTwo";
import BholaNews from "./BholaNews";
type SearchParamsProps = {
  searchParams: Promise<{
    page?: string;
    jobTypes?: string;
    location?: string;
  }>;
};

export default async function Entertainment({
  searchParams,
}: SearchParamsProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  await trackRoute("Entertainment");
  return (
    <>
      <div className="grid grid-cols-3 mt-10">
        <div className="col-span-3 md:col-span-1">
          <div className="font-extrabold pl-2 mb-2 flex items-center">
            <List className="h-5 w-5 mr-2" />বিনোদন সংক্রান্ত খবর

          </div>

          <div className="p-1 md:p-4">
            <Suspense key={currentPage} fallback={<LoadingSpinner />}>
              <AllEntertainmentArticles currentPage={currentPage} />
            </Suspense>
          </div>
        </div>
        <div id="SpainNews" className="col-span-3 md:col-span-2">
          <div>
            <div className="flex items-center gap-2 pl-2 mb-2">
              <img
                src="/flags/spain.svg"
                alt="Spain flag"
                width={28}
                height={18}
                className="rounded-sm"
              />
              <h1 className="font-extrabold">ভোলা সর্বশেষ খবর</h1>
            </div>
            <BholaNews />
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
