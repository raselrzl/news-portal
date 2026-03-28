import { prisma } from "@/app/utils/db";
import Link from "next/link";
import { isJson } from "@/app/utils/isJson";
import { JsonToHtml } from "@/components/richTextEditor/JsonToHtml";
import { BesicOneAdvertise } from "../allAdvertisement/BesicOne";

type Article = {
  id: string;
  newsHeading: string;
  newsDetails: string;
  newsPicture: string;
  newsPictureHeading: string;
  createdAt: Date;
};

async function getLatestWarNews(): Promise<Article[]> {
  const articles = await prisma.newsArticle.findMany({
    where: { newsArticleStatus: "ACTIVE", newsCategory: "WAR" },
    orderBy: { createdAt: "desc" },
    take: 9,
    select: {
      id: true,
      newsHeading: true,
      newsDetails: true,
      newsPicture: true,
      newsPictureHeading: true,
      createdAt: true,
    },
  });
  return articles;
}

export default async function WarLatest() {
  const articles = await getLatestWarNews();

  if (articles.length === 0) return null;

  const featured = articles[0];
  const others = articles.slice(1);

  const leftArticles = others.slice(0, 4);
  const rightArticles = others.slice(4, 8);

  return (
    <section className="px-2 md:px-0 my-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4 relative">
          যুদ্ধ ও সংকট
          <span className="absolute left-0 -bottom-2 w-16 h-1 bg-red-600 rounded-full md:w-24 lg:w-32"></span>
        </h2>

        <Link
          href="/war"
          className="text-xs px-3 py-1 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-all whitespace-nowrap"
        >
          আরো দেখুন →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* ✅ Left side - 5 small cards */}
        <div className="flex flex-col gap-4">
          {leftArticles.map((article) => (
            <Link
              href={`/newsDetails/${article.id}`}
              key={article.id}
              className="flex items-center gap-3 group border-t border-gray-950/10"
            >
              <img
                src={article.newsPicture}
                alt={article.newsPictureHeading}
                className="w-24 h-20 object-cover rounded-md"
              />
              <p className="font-semibold text-sm group-hover:underline line-clamp-3">
                {article.newsHeading}
              </p>
            </Link>
          ))}
        </div>

        {/* ✅ Middle featured article */}
        <div className="overflow-hidden">
          <Link href={`/newsDetails/${featured.id}`}>
            <img
              src={featured.newsPicture}
              alt={featured.newsPictureHeading}
              className="w-full h-64 object-cover"
            />
          </Link>
          <div className="p-2 border">
            <Link href={`/newsDetails/${featured.id}`}>
              <h3 className="text-xl md:text-xl font-bold hover:underline">
                {featured.newsHeading}
              </h3>
            </Link>

            <img
              src="/jewish.webp"
              alt="JEwish"
              className="w-full h-full object-cover rounded-md border shadow-2xl mt-6"
            />
          </div>
        </div>

        {/* ✅ Right side - 5 small cards */}
        <div className="flex flex-col gap-4">
          {rightArticles.map((article) => (
            <Link
              href={`/newsDetails/${article.id}`}
              key={article.id}
              className="flex items-center gap-3 group border-t border-gray-950/10"
            >
              <p className="font-semibold text-md group-hover:underline line-clamp-2">
                {article.newsHeading}
              </p>
              <img
                src={article.newsPicture}
                alt={article.newsPictureHeading}
                className="w-24 h-20 object-cover rounded-md"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
