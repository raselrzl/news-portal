import AllHealthArticles from "./AllHealthArticles";
import AllArticleList from "@/components/general/homepageArticleList";

export default function Health() {
  return (
    <div className="grid grid-cols-3 mt-10">
      <div className="col-span-3 md:col-span-1">
        <h1 className="font-extrabold pl-2 mb-2">
          {`>>>`}সর্বশেষ স্বাস্থ্য সংবাদ
        </h1>
        <AllHealthArticles />
      </div>
      <div className="col-span-3 md:col-span-2">
        <AllArticleList />
      </div>
    </div>
  );
}
