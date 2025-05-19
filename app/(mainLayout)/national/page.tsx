import AllArticleList from "@/components/general/homepageArticleList";
import AllNationalArticles from "./AllNationalArticles";

export default function National() {
  return (
    <div className="grid grid-cols-3 my-10">
      <div className="col-span-3 md:col-span-1">
        <h1 className="font-extrabold pl-2 mb-2">
          {`>>>`}সর্বশেষ সকল জাতীয় সংবাদ
        </h1>
        <div className="p-1 md:p-4"><AllNationalArticles /></div>
      </div>
      <div className="col-span-3 md:col-span-2"><AllArticleList /></div>
    </div>
  );
}
