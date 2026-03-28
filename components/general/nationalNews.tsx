import { prisma } from "@/app/utils/db";
import Link from "next/link";
import { isJson } from "@/app/utils/isJson";
import { JsonToHtml } from "@/components/richTextEditor/JsonToHtml";
import { PremiarOne } from "../allAdvertisement/PremiarOne";

type Article = {
  id: string;
  newsHeading: string;
  newsDetails: string;
  newsPicture: string;
  newsPictureHeading: string;
  createdAt: Date;
};

async function getLatestNationalNews(): Promise<Article[]> {
  const articles = await prisma.newsArticle.findMany({
    where: { newsArticleStatus: "ACTIVE", newsCategory: "NATIONAL" },
    orderBy: { createdAt: "desc" },
    take: 13,
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

export default async function NationalLatest() {
  const articles = await getLatestNationalNews();

  if (articles.length === 0) return null;

  const featured = articles[0];
  const others = articles.slice(1);

  const leftArticles = others.slice(0, 6);
  const rightArticles = others.slice(6, 12);

  return (
    <section className="px-2 md:px-0 my-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight relative">
          জাতীয়
          <span className="absolute left-0 -bottom-2 w-12 h-1 bg-red-600 rounded-full md:w-20"></span>
        </h2>
        <Link
          href="/national"
          className="text-sm md:text-base px-3 py-1 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-all"
        >
          আরও দেখুন →
        </Link>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Featured Article */}
        <div className="overflow-hidden rounded-xl shadow-lg group">
          <Link href={`/newsDetails/${featured.id}`}>
            <div className="relative overflow-hidden">
              <img
                src={featured.newsPicture}
                alt={featured.newsPictureHeading}
                className="w-full h-64 md:h-72 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-lg md:text-2xl font-bold text-white line-clamp-2">
                  {featured.newsHeading}
                </h3>
              </div>
            </div>
          </Link>
          <div className="p-2">
            <PremiarOne />
          </div>
        </div>

        {/* Left Side Small Articles */}
        <div className="flex flex-col gap-4">
          {leftArticles.map((article) => (
            <Link
              href={`/newsDetails/${article.id}`}
              key={article.id}
              className="flex items-center gap-3 group overflow-hidden rounded-lg shadow hover:shadow-md transition-all"
            >
              <img
                src={article.newsPicture}
                alt={article.newsPictureHeading}
                className="w-24 h-20 object-cover rounded-lg flex-shrink-0"
              />
              <p className="font-semibold text-sm md:text-base line-clamp-3 group-hover:text-red-600 transition-colors">
                {article.newsHeading}
              </p>
            </Link>
          ))}
        </div>

        {/* Right Side Small Articles */}
        <div className="flex flex-col gap-4">
          {rightArticles.map((article) => (
            <Link
              href={`/newsDetails/${article.id}`}
              key={article.id}
              className="flex items-center gap-3 group overflow-hidden rounded-lg shadow hover:shadow-md transition-all"
            >
              <img
                src={article.newsPicture}
                alt={article.newsPictureHeading}
                className="w-24 h-20 object-cover rounded-lg flex-shrink-0"
              />
              <p className="font-semibold text-sm md:text-base line-clamp-2 group-hover:text-red-600 transition-colors">
                {article.newsHeading}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
