import AllNewsArticleList from "@/app/(mainLayout)/latest/AllNewsArticleList";
import AllRelegionArticles from "./AllRelegionArticles";

export default function Religion() {
    return (
      <div className="grid grid-cols-3 mt-10">
        <div className="col-span-3 md:col-span-1"><AllRelegionArticles /></div>
        <div className="col-span-3 md:col-span-1">three</div>
        <div className="col-span-3 md:col-span-1">one</div>
      </div>
    );
  }
  