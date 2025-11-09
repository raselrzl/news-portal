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

export default async function LiveUpdate() {
  const news = await getLatestNews();

  return (
    <div className="mt-4 px-6 py-3">
      <h1 className="text-sm uppercase font-bold mb-2">লাইভ আপডেট</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
        {news.map((item, index) => {
          const created = new Date(item.createdAt);
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

              {/* News heading with time ago */}
              <div className="flex-1 flex flex-col">
                <span className="text-xs text-gray-500 italic">
                  {formatTimeAgo(created)}
                </span>
                <span className="font-medium text-sm">{item.headings}</span>
              </div>
            </div>
          );
        })}
      </div>
       <div className="flex justify-end mt-4">
        <Link href="/breakingnews" className="text-xs text-primary hover:underline font-bold">
  আরো দেখুন →
</Link>
      </div>
    </div>
  );
}
