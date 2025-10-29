import { trackRoute } from "@/app/utils/routeTracker";
import AllInternationalArticles from "./AllInternationalArticles";
import LoadingSpinner from "@/components/general/LoadingSpinner";
import { Suspense } from "react";
import { List } from "lucide-react";
import { UltimateTwo } from "@/components/allAdvertisement/UltimateTwo";
import ChandpurNews from "./ChandpurNews";
type SearchParamsProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function International({
  searchParams,
}: SearchParamsProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  await trackRoute("International");

  return (
    <>
      <div className="grid grid-cols-3 mt-10">
        <div className="col-span-3 md:col-span-1">
          <div className="font-extrabold pl-2 mb-2 flex items-center">
            <List className="h-5 w-5 mr-2" /> বর্তমান বিশ্বসংবাদ
          </div>
          <div className="p-1 md:p-4">
            <Suspense key={currentPage} fallback={<LoadingSpinner />}>
              <AllInternationalArticles currentPage={currentPage} />
            </Suspense>
          </div>
        </div>
        <div id="AustriaNews" className="col-span-3 md:col-span-2">
          <div>
            <div className="flex items-center gap-2 pl-2 mb-2">

              <h1 className="font-extrabold text-xl">চাঁদপুর খবর
</h1>
            </div>
            <ChandpurNews />
          </div>

          <div className="px-2">
            {" "}
            <UltimateTwo />
          </div>
        </div>
      </div>
    </>
  );
}
