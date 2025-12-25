import LoadingSpinner from "@/components/general/LoadingSpinner";
import { Suspense } from "react";
import { trackRoute } from "@/app/utils/routeTracker";
import { List } from "lucide-react";
import { UltimateTwo } from "@/components/allAdvertisement/UltimateTwo";
import MoulvibazarNews from "./Moulvibazar";
import AllSocialMediaArticles from "./AllSocialMediaArticle";
type SearchParamsProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function SocialMedia({ searchParams }: SearchParamsProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  await trackRoute("SocialMedia");

  return (
    <>
      <div className="grid grid-cols-3 mt-10">
        <div className="col-span-3 md:col-span-1">
          <div className="font-extrabold pl-2 mb-2 flex items-center">
            <List className="h-5 w-5 mr-2" /> সোশ্যাল মিডিয়া
          </div>

          <div className="p-1 md:p-4">
            <Suspense key={currentPage} fallback={<LoadingSpinner />}>
              <AllSocialMediaArticles currentPage={currentPage} />
            </Suspense>
          </div>
        </div>
        <div id="ItalyNews" className="col-span-3 md:col-span-2">
          <div>
            <div className="flex items-center gap-2 pl-2 mb-2">
              <h1 className="font-extrabold">মৌলভীবাজার খবর</h1>
            </div>
            <MoulvibazarNews />
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
