import AllNewsArticleList from "@/app/(mainLayout)/latest/AllNewsArticleList";
import { PaginationComponent } from "@/components/general/PaginationComponent";
import { Suspense } from "react";
import LatestSkeleton from "./loading";
import LoadingSpinner from "@/components/general/LoadingSpinner";

type SearchParamsProps = {
  searchParams: Promise<{
    page?: string;
    jobTypes?: string;
    location?: string;
  }>;
};
export default async function Latest({searchParams}:SearchParamsProps) {
  const params=await searchParams;
  const currentPage = Number(params.page) || 1;

  return (
    <div className="grid grid-cols-3 mt-10">
      <div className="col-span-3 md:col-span-1">
        

        <Suspense key={currentPage} fallback={<LoadingSpinner />}>
        <AllNewsArticleList currentPage={currentPage}/>
          </Suspense>
        
      </div>
      <div className="col-span-3 md:col-span-1">three</div>
      <div className="col-span-3 md:col-span-1">one</div>
    </div>
  );
}
