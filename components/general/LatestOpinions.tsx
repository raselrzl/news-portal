import Link from "next/link";
import { prisma } from "@/app/utils/db";
import { ChevronRight } from "lucide-react";

async function getLatestOpinions() {
  const articles = await prisma.newsArticle.findMany({
    where: {
      newsCategory: "OPINION",
      newsArticleStatus: "ACTIVE",
    },
    take: 5,
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      newsHeading: true,
      reporterPublicName: true,
      newsPicture: true,
    },
  });

  return articles;
}

export default async function LatestOpinions() {
  const opinions = await getLatestOpinions();

  if (!opinions || opinions.length === 0) return null;

  return (
    <section className="md:rounded-xs py-8 md:py-2">
      {/* Header */}
      <div className="flex items-center justify-between mx-2 mb-9">
        <div className="w-full mb-4">
          <h2 className="w-full rounded-xs text-center bg-red-600 text-white py-2 text-lg font-semibold tracking-wide">
            মতামত ও বিশ্লেষণ
          </h2>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:grid grid-cols-1 gap-2 px-2">
        {opinions.map((item) => (
          <Link
            key={item.id}
            href={`/newsDetails/${item.id}`}
            className="block relative border-l-4 border-primary pl-4 bg-accent-foreground/5 p-4 min-h-[120px] shadow-sm hover:shadow-md hover:border-primary/70 transition-all duration-300"
          >
            {/* Heading instead of quote */}
            <p className="mb-10 text-justify font-medium text-sm md:text-base">
              {item.newsHeading}
            </p>

            {/* Bottom right */}
            <div className="absolute bottom-3 right-4 flex items-center gap-3">
              {item.newsPicture && (
                <div className="w-10 h-10 rounded-full overflow-hidden border border-primary">
                  <img
                    src={item.newsPicture}
                    alt={item.newsHeading}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}

              <p className="text-sm text-accent-foreground/80 font-medium">
                — {item.reporterPublicName || "অজ্ঞাত"}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden flex gap-4 px-4 overflow-x-auto snap-x snap-mandatory">
        {opinions.map((item) => (
          <Link
            key={item.id}
            href={`/newsDetails/${item.id}`}
            className="shrink-0 w-80 snap-center relative border-l-4 border-primary pl-4 bg-accent-foreground/5 p-4 rounded-3xl min-h-[140px] shadow-sm hover:shadow-md hover:border-primary/70 transition-all duration-300"
          >
            <p className="mb-10 text-justify text-gray-800 font-medium">
              {item.newsHeading}
            </p>

            <div className="absolute bottom-3 right-4 flex items-center gap-3">
              {item.newsPicture && (
                <div className="w-10 h-10 rounded-full overflow-hidden border border-primary">
                  <img
                    src={item.newsPicture}
                    alt={item.newsHeading}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}

              <p className="text-sm text-accent-foreground/80 font-medium">
                — {item.reporterPublicName || "অজ্ঞাত"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
