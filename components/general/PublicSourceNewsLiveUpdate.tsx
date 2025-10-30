// components/LiveUpdate.tsx
import { prisma } from "@/app/utils/db";
import Link from "next/link";

type NewsItem = {
  id: string;
  headings: string;
  sourceIdName: string;
  link: string;
  createdAt: Date;
};

// Fetch latest 4 news
async function getLatestNews(): Promise<NewsItem[]> {
  return prisma.publicSourceNews.findMany({
    orderBy: { createdAt: "desc" },
    take: 4,
  });
}

// Dot sizes
const outerSizes = [16, 16, 16, 16];
const innerSizes = [8, 8, 8, 8];

export default async function LiveUpdate() {
  const news = await getLatestNews();
  const now = new Date();

  return (
    <div className="mt-4 px-6 py-3">
      <h1 className="text-sm uppercase font-bold mb-2">Live updates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
        {news.map((item, index) => {
          const created = new Date(item.createdAt);
          const diffMinutes = Math.floor((now.getTime() - created.getTime()) / 60000);
          const isLast = index === news.length - 1;

          return (
            <div key={item.id} className="flex items-start gap-2 relative">
              {/* Dot + connecting line */}
              <div className="flex flex-col items-center relative">
                {/* Dot */}
                <div
                  className="rounded-full bg-yellow-500 flex items-center justify-center z-10 flex-shrink-0"
                  style={{
                    width: outerSizes[index],
                    height: outerSizes[index],
                  }}
                >
                  <div
                    className="bg-primary rounded-full animate-ping"
                    style={{
                      width: innerSizes[index],
                      height: innerSizes[index],
                    }}
                  ></div>
                </div>

                {/* Connecting line to next dot */}
                {!isLast && (
                  <div
                    className="w-[2px] bg-black"
                    style={{ flexGrow: 1, minHeight: "16px", marginTop: "4px" }}
                  ></div>
                )}
              </div>

              {/* News heading with minutes */}
              <div className="flex-1 flex flex-col">
                <span className="text-xs text-gray-500 italic">
                  {diffMinutes} {diffMinutes === 1 ? "m" : "m"} ago
                </span>
                <span className="font-medium text-sm">{item.headings}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
