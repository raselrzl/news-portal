import AllArticleList from "@/components/general/homepageArticleList";
import AllNationalArticles from "./AllNationalArticles";
import LoadingSpinner from "@/components/general/LoadingSpinner";
import { Suspense } from "react";


type SearchParamsProps = {
  searchParams: Promise<{
    page?: string;
    jobTypes?: string;
    location?: string;
  }>;
};
export default async function National({ searchParams }: SearchParamsProps) {
  const params = await searchParams;
const currentPage = Number(params.page) || 1;
  return (
    
    <div className="grid grid-cols-3 my-10">
      <div className="col-span-3 md:col-span-1">
        <h1 className="font-extrabold pl-2 mb-2">
          {`>>>`}সর্বশেষ সকল জাতীয় সংবাদ
        </h1>
        <div className="p-1 md:p-4">

        <Suspense key={currentPage} fallback={<LoadingSpinner />}>
              <AllNationalArticles currentPage={currentPage} />
        </Suspense>
        
        </div>

        
      </div>
      <div className="col-span-3 md:col-span-2"><AllArticleList /></div>
    </div>
  );
}
