import { prisma } from "@/app/utils/db";
import NewsImageModal from "@/components/general/NewsImageModal";
import { PaginationComponent } from "@/components/general/PaginationComponent";

type NewsItem = {
  id: string;
  headings: string;
  sourceIdName: string;
  link: string;
  createdAt: Date;
  newsPicture: string | null;
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
      select: {
        id: true,
        headings: true,
        sourceIdName: true,
        link: true,
        createdAt: true,
        newsPicture: true,
      },
    }),
    prisma.publicSourceNews.count(),
  ]);

  return {
    news: data,
    totalPages: Math.ceil(totalCount / pageSize),
  };
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

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });
}

export default async function LiveUpdateComponent({
  currentPage,
}: {
  currentPage: number;
}) {
  const pageSize = 10;
  const { news, totalPages } = await getPaginatedNews(currentPage, pageSize);

  return (
    <div className="px-6 py-3 bg-red-50 dark:bg-black rounded-md mx-auto max-w-7xl">
      <h1 className="text-sm uppercase font-bold mb-4 text-red-800">
        🚨 ব্রেকিং নিউজ
      </h1>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-5 w-[2px] bg-black"></div>

        <div className="flex flex-col">
          {news.map((item) => (
            <div key={item.id} className="flex items-start relative mb-3">
              {/* Dot */}
              <div className="flex-shrink-0 w-10 flex justify-center relative z-10">
                <div className="rounded-full bg-yellow-500 w-4 h-4 flex items-center justify-center mt-[3.5px]">
                  <div className="bg-primary rounded-full animate-ping w-2 h-2"></div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
                {/* TEXT */}
                <div className="flex-1">
                  <span className="text-xs text-gray-500 italic">
                    {formatTimeAgo(new Date(item.createdAt))}
                  </span>

                  <div className="font-medium text-sm mt-1">
                    {item.headings}
                  </div>
                </div>

                {/* IMAGE */}
                {item.newsPicture && (
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

      <PaginationComponent totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}
