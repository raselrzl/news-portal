import LoadingSpinner from "@/components/general/LoadingSpinner";
import AllCountryNewsArticleList from "./countryNewsArticleList";
import { Suspense } from "react";
import { trackRoute } from "@/app/utils/routeTracker";
import { List } from "lucide-react";
import { UltimateOne } from "@/components/allAdvertisement/UltimateOne";
import { UltimateTwo } from "@/components/allAdvertisement/UltimateTwo";
import BagerhatNews from "./BagerhatNews";

type SearchParamsProps = {
  searchParams: Promise<{
    page?: string;
    jobTypes?: string;
    location?: string;
  }>;
};

export default async function Country({ searchParams }: SearchParamsProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  await trackRoute("country");
  return (
    <>
      <div className="grid grid-cols-3 mt-10">
        <div className="col-span-3 md:col-span-1">
          <div className="font-extrabold pl-2 mb-2 flex items-center">
            <List className="h-5 w-5 mr-2" />
            <p>দেশের সর্বশেষ খবর</p>
          </div>

          <div className="p-1 md:p-4">
            <Suspense key={currentPage} fallback={<LoadingSpinner />}>
              <AllCountryNewsArticleList currentPage={currentPage} />
            </Suspense>
          </div>
        </div>
        <div id="BelgiumNews" className="col-span-3 md:col-span-2">
          <div>
            <div className="flex items-center gap-2 pl-2 mb-2">
              <h1 className="font-extrabold text-xl">বাগেরহাট জেলার সাম্প্রতিক খবর</h1>
            </div>
            <BagerhatNews />
          </div>
            {" "}
            <div className="px-2">
              {" "}
              <UltimateTwo />
            </div>
        </div>
      </div>
    </>
  );
}
