import AllArticleList from "@/components/general/AllArticleList";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-10">
      <div className="order-3 md:order-1 md:col-span-1">4 news</div>
      <div className="order-2 md:order-2 md:col-span-1">advertisement</div>
      <div className="order-1 md:order-3 md:col-span-3">
        <AllArticleList />
      </div>
    </div>
  );
}
