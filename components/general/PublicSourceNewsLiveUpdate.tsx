// components/LiveUpdate.tsx
import { prisma } from "@/app/utils/db";
import Link from "next/link";
import NewsImageModal from "./NewsImageModal";

type NewsItem = {
  id: string;
  headings: string;
  sourceIdName: string;
  link: string;
  createdAt: Date;
  newsPicture: string | null;
};

async function getLatestNews(): Promise<NewsItem[]> {
  return prisma.publicSourceNews.findMany({
    orderBy: { createdAt: "desc" },
    take: 4,
  });
}

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  if (diffSec < 60) return `${diffSec}s ago`;
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHr < 24) return `${diffHr}h ago`;
  if (diffDay < 30) return `${diffDay}d ago`;

  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

export default async function LiveUpdate() {
  const news = await getLatestNews();

  return (
    <div className="py-3 rounded-md mx-auto max-w-[720px]">
      <h1 className="uppercase font-bold text-white text-xl py-2 bg-red-600 max-w-[720px] ml-2 pl-4 md:mx-0">
        ব্রেকিং নিউজ
      </h1>

      {/* ========== FEATURED FIRST NEWS ========== */}
      {news.length > 0 && (
        <div className="relative mb-14 flex flex-col items-center px-2 md:px-0">
          {news[0].newsPicture ? (
            /* ---- IF IMAGE EXISTS ---- */
            <div className="relative w-full max-w-[720px]">
              <img
                src={news[0].newsPicture}
                className="w-full h-[300px] md:h-[360px] object-cover"
                alt=""
              />

              {/* Overlay box */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 w-[85%]">
                <div className="bg-white dark:bg-gray-900 shadow-xl rounded-md p-4 border text-center">
                  <div className="flex items-start gap-2">
                    <div className="rounded-full bg-yellow-500 w-4 h-4 flex items-center justify-center mt-[3.5px]">
                      <div className="bg-primary rounded-full animate-ping w-4 h-4"></div>
                    </div>
                    <span className="text-xs text-gray-500 italic pt-1.5 block text-left">
                      {/* {formatTimeAgo(new Date(news[0].createdAt))} */}
                    </span>
                  </div>

                  <div className="font-bold text-lg text-primary leading-tight mt-1">
                    {news[0].headings}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ---- IF NO IMAGE → SHOW ONLY THE TEXT BOX ---- */
            <div className="w-full max-w-[720px] mt-4">
              <div className="bg-white dark:bg-gray-900 shadow-xl rounded-md p-4 border text-center">
                <div className="flex items-start gap-2">
                  <div className="rounded-full bg-yellow-500 w-4 h-4 flex items-center justify-center mt-[3.5px]">
                    <div className="bg-primary rounded-full animate-ping w-4 h-4"></div>
                  </div>
                  <span className="text-xs text-gray-500 italic pt-1.5 block text-left">
                    {formatTimeAgo(new Date(news[0].createdAt))}
                  </span>
                </div>

                <div className="font-bold text-lg text-primary leading-tight mt-1">
                  {news[0].headings}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========== TIMELINE FOR NEXT 3 NEWS ITEMS ========== */}
      <div className="relative max-w-2xl mx-auto mt-12">
        <div className="absolute top-0 bottom-0 left-5 w-0.5 bg-black"></div>

        <div className="flex flex-col">
          {news.slice(1).map((item) => (
            <div key={item.id} className="flex items-start relative mb-3">
              {/* Dot */}
              <div className="shrink-0 w-10 flex justify-center relative z-10">
                <div className="rounded-full bg-yellow-500 w-4 h-4 flex items-center justify-center mt-[3.5px]">
                  <div className="bg-primary rounded-full animate-ping w-2 h-2"></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <span className="text-xs text-gray-500 italic">
                  {/* {formatTimeAgo(new Date(item.createdAt))} */}
                </span>

                <div className="font-medium text-sm mt-1">{item.headings}</div>
                {/* 
                {item.newsPicture && (
                  <div className="md:w-50 md:flex-shrink-0 mt-2">
                    <NewsImageModal src={item.newsPicture} />
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-right mt-4 pr-2">
        <Link
          href="/breakingnews"
          className="text-primary font-semibold underline"
        >
          আরো দেখুন →
        </Link>
      </div>
    </div>
  );
}
