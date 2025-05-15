import AllNewsArticleList from "@/app/(mainLayout)/latest/AllNewsArticleList";

export default function Latest() {
    return (
      <div className="grid grid-cols-3 mt-10">
        <div className="col-span-3 md:col-span-1"><AllNewsArticleList /></div>
        <div className="col-span-3 md:col-span-1">three</div>
        <div className="col-span-3 md:col-span-1">one</div>
      </div>
    );
  }
  