import AllArticleList from "@/components/general/homepageArticleList";
import LoadingSpinner from "@/components/general/LoadingSpinner";
import { Suspense } from "react";
import AllSportsArticles from "./AllSportsArticle";
import { trackRoute } from "@/app/utils/routeTracker";

type SearchParamsProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function Sports({ searchParams }: SearchParamsProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  await trackRoute("Sports");

  return (
    <div className="grid grid-cols-3 mt-10">
      <div className="col-span-3 md:col-span-1">
        <h1 className="font-extrabold pl-2 mb-2">{`>>>`}সর্বশেষ খেলার সংবাদ</h1>
        <div className="p-1 md:p-4">
          <Suspense key={currentPage} fallback={<LoadingSpinner />}>
            <AllSportsArticles currentPage={currentPage} />
          </Suspense>
        </div>
      </div>
      <div className="col-span-3 md:col-span-2">
        <AllArticleList />
      </div>
    </div>
  );
}
