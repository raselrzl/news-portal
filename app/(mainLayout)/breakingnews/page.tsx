import LiveUpdateComponent from "./LiveUpdateComponent";


type SearchParamsProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function NewsPage({ searchParams }: SearchParamsProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  return (
    <div className="pt-2">
      <LiveUpdateComponent currentPage={currentPage} />
    </div>
  );
}
