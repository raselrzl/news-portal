import { trackRoute } from "@/app/utils/routeTracker";
import AllHealthArticles from "./AllHealthArticles";
import LoadingSpinner from "@/components/general/LoadingSpinner";
import { Suspense } from "react";
import { List } from "lucide-react";
import { UltimateTwo } from "@/components/allAdvertisement/UltimateTwo";
import BrahmanbariaNews from "./BrahmanbariaNews";
type SearchParamsProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function Health({ searchParams }: SearchParamsProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  await trackRoute("Health");

  return (
    <>
      <div className="grid grid-cols-3 mt-10">
        <div className="col-span-3 md:col-span-1">
          <div className="font-extrabold pl-2 mb-2 flex items-center">
            <List className="h-5 w-5 mr-2" /> Latest Health News
          </div>

          <div className="p-1 md:p-4">
            <Suspense key={currentPage} fallback={<LoadingSpinner />}>
              <AllHealthArticles currentPage={currentPage} />
            </Suspense>
          </div>
        </div>
        <div id="FinlandNews" className="col-span-3 md:col-span-2">
          <div>
            <div className="flex items-center gap-2 pl-2 mb-2">
              <img
                src="/flags/finland.jpg"
                alt="Finland flag"
                width={28}
                height={18}
                className="rounded-sm"
              />
              <h1 className="font-extrabold">Finland Latest</h1>
            </div>
            <BrahmanbariaNews />
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
