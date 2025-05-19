import AllNewsArticleList from "@/app/(mainLayout)/latest/AllNewsArticleList";
import { Suspense } from "react";
import LoadingSpinner from "@/components/general/LoadingSpinner";
import { ShirShoNewsHeadings } from "@/components/general/homepageArticleList";

type SearchParamsProps = {
  searchParams: Promise<{
    page?: string;
    jobTypes?: string;
    location?: string;
  }>;
};
export default async function Latest({ searchParams }: SearchParamsProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  return (
    <div className="grid grid-cols-3 mt-10">
      <div className="col-span-3 md:col-span-2">
      <h1 className="font-extrabold pl-2 mb-2"> {`>>>`}সর্বশেষ সকল সংবাদ</h1>
        <Suspense key={currentPage} fallback={<LoadingSpinner />}>
          <AllNewsArticleList currentPage={currentPage} />
        </Suspense>
      </div>
      <div className="col-span-3 md:col-span-1 mt-8">
      <img
          src="/shoe.gif"
          alt="gif image"
          className="w-full h-[250px] rounded-xl px-6 md:pt-0 pt-6"
        />
        <div className="p-6"><ShirShoNewsHeadings /></div>
      </div>
    </div>
  );
}
