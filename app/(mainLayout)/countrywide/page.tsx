import AllCountryNewsArticleList from "./countryNewsArticleList";
import AllArticleList from "@/components/general/homepageArticleList";

export default function Country() {
  return (
    <div className="grid grid-cols-3 mt-10">
      <div className="col-span-3 md:col-span-1">
        <h1 className="font-extrabold pl-2 mb-2">
          {`>>>`}
          সারাদেশ সংবাদ
        </h1>
        <AllCountryNewsArticleList />
      </div>
      <div className="col-span-3 md:col-span-2">
        <AllArticleList />
      </div>
    </div>
  );
}
