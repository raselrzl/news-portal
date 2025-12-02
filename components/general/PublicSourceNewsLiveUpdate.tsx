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
    <div className="mt-4 px-6 py-1">
      <h1 className="text-sm uppercase font-bold mb-4 text-red-800">
         🚨 Breaking News
      </h1>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-5 w-[2px] bg-black"></div>

      <div className="flex flex-col">
          {news.map((item, index) => (
            <div key={item.id} className="flex items-start relative">
              {/* Dot aligned with date */}
              <div className="flex-shrink-0 w-10 flex justify-center relative z-10">
                <div className="rounded-full bg-yellow-500 w-4 h-4 flex items-center justify-center mt-[3.5px]">
                  <div className="bg-primary rounded-full animate-ping w-2 h-2"></div>
                </div>
              </div>

              {/* News content */}
              <div className="flex-1">
                <span className="text-xs text-gray-500 italic">
                  {formatTimeAgo(new Date(item.createdAt))}
                </span>

                <div className="font-medium text-sm">{item.headings}</div>

                {/** ONLY show image for the newest news item */}
                {index === 0 && item.newsPicture && (
                  <div className="md:w-50 md:flex-shrink-0">
                    {item.newsPicture && (
                      <div className="md:w-50 md:flex-shrink-0">
                        <NewsImageModal src={item.newsPicture} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-1">
        <Link
          href="/breakingnews"
          className="text-sm font-semibold text-black hover:underline"
        >
          আরো দেখুন →
        </Link>
      </div>
    </div>
  );
}
