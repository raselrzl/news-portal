import { prisma } from "@/app/utils/db";
import Link from "next/link";

type Article = {
  id: string;
  newsHeading: string;
  newsDetails: string;
  newsPicture: string;
  newsPictureHeading: string;
  createdAt: Date;
};

async function getLatestPoliticalNews(): Promise<Article[]> {
  const articles = await prisma.newsArticle.findMany({
    where: { newsArticleStatus: "ACTIVE", newsCategory: "POLITICS" },
    orderBy: { createdAt: "desc" },
    take: 4,
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

export default async function PoliticalLatest() {
  const articles = await getLatestPoliticalNews();

  return (
    <section className="px-2 md:px-0 my-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight relative">
          রাজনীতি
          <span className="absolute left-0 -bottom-2 w-16 h-1 bg-red-600 rounded-full md:w-24 lg:w-32"></span>
        </h2>
        <Link
          href="/politics"
          className="text-xs px-3 py-1 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-all"
        >
          আরও দেখুন →
        </Link>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Link
            href={`/newsDetails/${article.id}`}
            key={article.id}
            className="group overflow-hidden rounded-xs shadow-lg hover:shadow-xl transition-all"
          >
            {/* Image */}
            <div className="relative w-full h-48 md:h-56 lg:h-56 overflow-hidden rounded-xs">
              <img
                src={article.newsPicture}
                alt={article.newsPictureHeading}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Heading */}
            <div className="p-3">
              <h3 className="text-sm md:text-base lg:text-lg font-semibold line-clamp-2 group-hover:text-red-600 transition-colors">
                {article.newsHeading}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}