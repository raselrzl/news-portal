import { trackRoute } from "@/app/utils/routeTracker";
import AllLawAndJusticeArticles from "./AllLawAndJusticeArticles";
import LoadingSpinner from "@/components/general/LoadingSpinner";
import { Suspense } from "react";
import { List } from "lucide-react";
import { UltimateTwo } from "@/components/allAdvertisement/UltimateTwo";
import ChapainawabganjNews from "./ChapainawabganjNews";
type SearchParamsProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function LawAndJustice({
  searchParams,
}: SearchParamsProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  await trackRoute("LawAndJustice");

  return (
    <>
      <div className="grid grid-cols-3 mt-10">
        <div className="col-span-3 md:col-span-1">
          <div className="font-extrabold pl-2 mb-2 flex items-center">
            <List className="h-5 w-5 mr-2" />আইন ও আদালত

          </div>
          <div className="p-1 md:p-4">
            <Suspense key={currentPage} fallback={<LoadingSpinner />}>
              <AllLawAndJusticeArticles currentPage={currentPage} />
            </Suspense>
          </div>
        </div>
        <div id="LuxembourgNews" className="col-span-3 md:col-span-2">
          <div>
            <div className="flex items-center gap-2 pl-2 mb-2">

              <h1 className="font-extrabold">চাপাইনবাবগঞ্জ খবর
</h1>
            </div>
            <ChapainawabganjNews />
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
