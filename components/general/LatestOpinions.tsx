import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/app/utils/db";
import { ChevronRight, Newspaper } from "lucide-react";

async function getLatestOpinions() {
  const articles = await prisma.newsArticle.findMany({
    where: { newsCategory: "OPINION" },
    take: 3,
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      newsPicture: true,
      quotes: {
        select: {
          text: true,
          speakerInfo: true,
        },
      },
    },
  });
  return articles;
}

export default async function LatestOpinions() {
  const opinions = (await getLatestOpinions()).filter(
    (item) => item.quotes && item.quotes.length > 0 && item.quotes[0].text
  );

  if (!opinions || opinions.length === 0) {
    return null; // hide the whole section if no quotes
  }

  return (
    <section className="md:rounded-xs dark:bg-gray-600">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-2 bg-amber-800 px-4 md:rounded-xl py-1">
        <h1 className="font-bold py-1 flex"> <Newspaper className="mr-4"/> OPINIONS</h1>
        <ChevronRight className="block md:hidden" />
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 gap-2 px-2">
        {opinions.map((item) => (
          <Link
            key={item.id}
            href={`/newsDetails/${item.id}`}
            className="block relative border-l-4 border-primary pl-4 bg-accent-foreground/5 p-4 rounded-3xl min-h-[120px] shadow-sm hover:shadow-md hover:border-primary/70 transition-all duration-300"
          >
            <p className="italic mb-10 text-justify">“{item.quotes[0].text}”</p>
            <div className="absolute bottom-3 right-4 flex items-center gap-3">
              {item.newsPicture && (
                <div className="w-10 h-10 rounded-full overflow-hidden border border-primary">
                  <img
                    src={item.newsPicture}
                    alt={item.quotes[0].speakerInfo || "Speaker"}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <p className="text-sm text-accent-foreground/80 font-medium">
                — {item.quotes[0].speakerInfo}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="md:hidden flex gap-4 px-4 overflow-x-auto snap-x snap-mandatory">
        {opinions.map((item) => (
          <Link
            key={item.id}
            href={`/newsDetails/${item.id}`}
            className="flex-shrink-0 w-80 snap-center relative border-l-4 border-primary pl-4 bg-accent-foreground/5 p-4 rounded-3xl min-h-[140px] shadow-sm hover:shadow-md hover:border-primary/70 transition-all duration-300"
          >
            <p className="italic mb-10 text-justify text-gray-800">“{item.quotes[0].text}”</p>
            <div className="absolute bottom-3 right-4 flex items-center gap-3">
              {item.newsPicture && (
                <div className="w-10 h-10 rounded-full overflow-hidden border border-primary">
                  <img
                    src={item.newsPicture}
                    alt={item.quotes[0].speakerInfo || "Speaker"}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <p className="text-sm text-accent-foreground/80 font-medium">
                — {item.quotes[0].speakerInfo}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
