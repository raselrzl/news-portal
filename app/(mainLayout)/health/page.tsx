import AllNewsArticleList from "@/app/(mainLayout)/latest/AllNewsArticleList";
import AllHealthArticles from "./AllHealthArticles";

export default function Health() {
    return (
      <div className="grid grid-cols-3 mt-10">
        <div className="col-span-3 md:col-span-1"><AllHealthArticles /></div>
        <div className="col-span-3 md:col-span-1">three</div>
        <div className="col-span-3 md:col-span-1">one</div>
      </div>
    );
  }
  