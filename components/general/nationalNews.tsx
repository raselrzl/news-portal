import { prisma } from "@/app/utils/db";
import Link from "next/link";
import Image from "next/image";

type Article = {
  id: string;
  newsHeading: string;
  newsDetails: string;
  newsPicture: string;
  newsPictureHeading: string;
  createdAt: Date;
};

async function getLatestNationalNews(): Promise<Article[]> {
  return await prisma.newsArticle.findMany({
    where: { newsArticleStatus: "ACTIVE", newsCategory: "NATIONAL" },
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
}

export default async function NationalLatest() {
  const articles = await getLatestNationalNews();
  if (articles.length === 0) return null;

  const featured = articles[0];
  const others = articles.slice(1);

  return (
    <section className="px-3 md:px-0 my-16 max-w-7xl mx-auto">
      {/* 🟥 Header */}
      <div className="flex justify-between items-end pb-3 mb-8">
        <h2 className="text-2xl  md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight relative">
          জাতীয়
          <span className="absolute left-0 -bottom-2 w-16 h-1 bg-red-600 rounded-full md:w-24 lg:w-32"></span>
        </h2>
        <Link
          href="/national"
          className="text-xs px-3 py-1 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-all"
        >
          আরও পড়ুন →
        </Link>
      </div>

      {/* 🟡 FEATURED (Text Left, Image Right) */}
      <Link href={`/newsDetails/${featured.id}`}>
        <div className="grid md:grid-cols-2 gap-6 mb-10 group">
          {/* 📝 Text */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold leading-snug group-hover:text-red-600 transition">
              {featured.newsHeading}
            </h3>

            <span className="text-xs text-gray-400 mt-4">
              {new Date(featured.createdAt).toLocaleDateString("bn-BD")}
            </span>
          </div>

          {/* 🖼️ Image */}
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src={featured.newsPicture}
              alt={featured.newsPictureHeading}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </Link>

      {/* 🟢 GRID NEWS (Magazine Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {others.map((article) => (
          <Link key={article.id} href={`/newsDetails/${article.id}`}>
            <div className="group border-b pb-4">
              {/* Image */}
              <div className="relative h-40 mb-3 overflow-hidden rounded-md">
                <Image
                  src={article.newsPicture}
                  alt={article.newsPictureHeading}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Heading */}
              <h4 className="text-sm md:text-base font-semibold leading-snug line-clamp-3 group-hover:text-red-600 transition">
                {article.newsHeading}
              </h4>

              {/* Date */}
              <p className="text-xs text-gray-400 mt-2">
                {new Date(article.createdAt).toLocaleDateString("bn-BD")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
