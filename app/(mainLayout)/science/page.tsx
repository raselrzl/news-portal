import AllNewsArticleList from "@/app/(mainLayout)/latest/AllNewsArticleList";
import AllScienceArticles from "./AllScienceArticles";
import AllArticleList from "@/components/general/homepageArticleList";

export default function Science() {
  return (
    <div className="grid grid-cols-3 mt-10">
      <div className="col-span-3 md:col-span-1">
        <h1 className="font-extrabold pl-2 mb-2">
          {`>>>`}
          বিজ্ঞান সংবাদ
        </h1>
        <AllScienceArticles />
      </div>
      <div className="col-span-3 md:col-span-2">
        <AllArticleList />
      </div>
    </div>
  );
}
