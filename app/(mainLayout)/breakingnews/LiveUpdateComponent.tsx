// components/LiveUpdate.tsx
import { prisma } from "@/app/utils/db";
import { PaginationComponent } from "@/components/general/PaginationComponent";

type NewsItem = {
  id: string;
  headings: string;
  sourceIdName: string;
  link: string;
  createdAt: Date;
};

async function getPaginatedNews(
  page: number = 1,
  pageSize: number = 20
): Promise<{ news: NewsItem[]; totalPages: number }> {
  const skip = (page - 1) * pageSize;

  const [data, totalCount] = await Promise.all([
    prisma.publicSourceNews.findMany({
      orderBy: { createdAt: "desc" },
      skip,
      take: pageSize,
    }),
    prisma.publicSourceNews.count(),
  ]);

  return {
    news: data,
    totalPages: Math.ceil(totalCount / pageSize),
  };
}

const outerSize = 16;
const innerSize = 8;

// Convert English digits to Bangla
function toBanglaNumber(num: number | string) {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num
    .toString()
    .split("")
    .map((d) => (/[0-9]/.test(d) ? banglaDigits[+d] : d))
    .join("");
}

// Format time ago in Bangla
function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  if (diffSec < 60) return `${toBanglaNumber(diffSec)} সেকেন্ড আগে`;
  if (diffMin < 60) return `${toBanglaNumber(diffMin)} মিনিট আগে`;
  if (diffHr < 24) return `${toBanglaNumber(diffHr)} ঘন্টা আগে`;
  if (diffDay < 30) return `${toBanglaNumber(diffDay)} দিন আগে`;

  return date.toLocaleDateString("bn-BD", {
    day: "numeric",
    month: "short",
  });
}

export default async function LiveUpdateComponent({
  currentPage,
}: {
  currentPage: number;
}) {
  const pageSize = 20;
  const { news, totalPages } = await getPaginatedNews(currentPage, pageSize);

  return (
    <div className="px-6 py-3 bg-red-50 dark:bg-black rounded-md mx-auto max-w-7xl grid grid-cols-5">
      <div className="col-span-5 md:col-span-1"></div>
      <div className="col-span-5 md:col-span-3 px-4">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-sm uppercase font-bold text-red-800">Breaking News</h1>
        </div>

        {news.length > 0 ? (
          <div className="flex flex-col gap-4 relative">
            {news.map((item, index) => {
              const created = new Date(item.createdAt);
              const isLast = index === news.length - 1;
              return (
                <div key={item.id} className="flex items-start gap-2 relative">
                  <div className="flex flex-col items-center relative">
                    <div
                      className="rounded-full bg-yellow-500 flex items-center justify-center z-10 flex-shrink-0"
                      style={{ width: outerSize, height: outerSize }}
                    >
                      <div
                        className="bg-primary rounded-full animate-ping"
                        style={{ width: innerSize, height: innerSize }}
                      ></div>
                    </div>
                    {!isLast && (
                      <div
                        className="w-[2px] bg-black"
                        style={{
                          flexGrow: 1,
                          minHeight: "16px",
                          marginTop: "4px",
                        }}
                      ></div>
                    )}
                  </div>

                  <div className="flex-1 flex flex-col">
                    <span className="text-xs text-gray-500 italic">
                      {formatTimeAgo(created)}
                    </span>
                    <span className="font-medium text-sm leading-snug">
                      {item.headings}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-4 text-gray-600 text-sm">
            কোনো ব্রেকিং নিউজ পাওয়া যায়নি।
          </div>
        )}

        {/* Pagination */}
        <PaginationComponent totalPages={totalPages} currentPage={currentPage} />
      </div>
      <div className="col-span-5 md:col-span-1"></div>
    </div>
  );
}
