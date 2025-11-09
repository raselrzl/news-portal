import { Suspense } from "react";
import LoadingSpinner from "@/components/general/LoadingSpinner";
import { trackRoute } from "@/app/utils/routeTracker";
import { List } from "lucide-react";
import AllWarNewsArticle from "./AllWarNewsArticle";
type SearchParamsProps = {
  searchParams: Promise<{
    page?: string;
    jobTypes?: string;
    location?: string;
  }>;
};
export default async function War({ searchParams }: SearchParamsProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  await trackRoute("War");

  return (
    <div className="mt-10">
      <div className="font-extrabold pl-2 mb-2 flex items-center">
        <List className="h-5 w-5 mr-2" />
        যুদ্ধ আপডেট
      </div>
      <div className="grid grid-cols-1 max-w-3xl mx-auto">
        <Suspense key={currentPage} fallback={<LoadingSpinner />}>
          <AllWarNewsArticle currentPage={currentPage} />
        </Suspense>
      </div>
    </div>
  );
}
