import LoadingSpinner from "@/components/general/LoadingSpinner";
import AllCountryNewsArticleList from "./countryNewsArticleList";
import AllArticleList from "@/components/general/homepageArticleList";
import { Suspense } from "react";


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
  return (
    <div className="grid grid-cols-3 mt-10">
      <div className="col-span-3 md:col-span-1">
        <h1 className="font-extrabold pl-2 mb-2">
          {`>>>`}
          সারাদেশ সংবাদ
        </h1>

        <Suspense key={currentPage} fallback={<LoadingSpinner />}>
              <AllCountryNewsArticleList currentPage={currentPage} />
        </Suspense>
      </div>
      <div className="col-span-3 md:col-span-2">
        <AllArticleList />
      </div>
    </div> 
  );
}
