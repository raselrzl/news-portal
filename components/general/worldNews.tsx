import { prisma } from "@/app/utils/db";
import Link from "next/link";
import { CrimeAndPopularTab } from "./CrimeAndPopularTab";

type Article = {
  id: string;
  newsHeading: string;
  newsDetails: string;
  newsPicture: string;
  newsPictureHeading: string;
  createdAt: Date;
};

async function getLatestInternationalNews(): Promise<Article[]> {
  const articles = await prisma.newsArticle.findMany({
    where: { newsArticleStatus: "ACTIVE", newsCategory: "INTERNATIONAL" },
    orderBy: { createdAt: "desc" },
    take: 6,
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

export default async function InternationalLatest() {
  const articles = await getLatestInternationalNews();

  if (!articles || articles.length === 0) return null;

  return (
    <section className="px-2 md:px-0 my-20">
      {/* Section Heading */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight relative">
          বিশ্ব
          <span className="absolute left-0 -bottom-2 w-16 h-1 bg-red-600 rounded-full md:w-24 lg:w-32"></span>
        </h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* News Grid - 2/3 of the width */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              href={`/newsDetails/${article.id}`}
              key={article.id}
              className="group rounded-xl overflow-hidden hover:shadow-md transition"
            >
              <img
                src={article.newsPicture}
                alt={article.newsPictureHeading}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h3 className="text-lg md:text-xl font-semibold group-hover:text-orange-500 transition line-clamp-1">
                  {article.newsHeading}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Column - Crime & Popular Tab */}
        <div className="mt-6 md:mt-0">
          <CrimeAndPopularTab />
        </div>
      </div>
    </section>
  );
}