import AllArticleList from "@/components/general/homepageArticleList";
import AllCrimeNewsArticleList from "./AllCrimeNewsArticleList";

export default function Crime() {
  return (
    <div className="grid grid-cols-3 mt-10">
      <div className="col-span-3 md:col-span-1">
        <h1 className="font-extrabold pl-2 mb-2">
          {`>>>`}সর্বশেষ সকল অপরাধের সংবাদ
        </h1>
        <AllCrimeNewsArticleList />
      </div>
      <div className="col-span-3 md:col-span-2">
        <AllArticleList />
      </div>
    </div>
  );
}
