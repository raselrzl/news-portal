import AllNewsArticleList from "@/app/(mainLayout)/latest/AllNewsArticleList";
import AllPoliticalArticles from "./AllPoliticalArticles";
import AllArticleList from "@/components/general/homepageArticleList";

export default function Politics() {
  return (
    <div className="grid grid-cols-3 mt-10">
      <div className="col-span-3 md:col-span-1">
        <h1 className="font-extrabold pl-2 mb-2">
          {`>>>`}সর্বশেষ রাজনৈতিক সংবাদ
        </h1>
        <AllPoliticalArticles />
      </div>
      <div className="col-span-3 md:col-span-2">
        <AllArticleList />
      </div>
    </div>
  );
}
