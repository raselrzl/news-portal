import { prisma } from "@/app/utils/db";
import Link from "next/link";
import { isJson } from "@/app/utils/isJson";
import { JsonToHtml } from "@/components/richTextEditor/JsonToHtml";

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
    take: 11,
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

  const leftArticles = others.slice(0, 5);
  const rightArticles = others.slice(5, 10);

  return (
    <section className="px-2 md:px-0 my-10">
      <div className="flex justify-between">
        <h2 className="text-xl font-extrabold mb-4 flex items-center">
          যুদ্ধ ও সংকট
        </h2>
        <Link href="/war" className="text-sm font-bold hover:underline">সবগুলো দেখুন</Link>
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
        <div className="overflow-hidden md:border-l md:border-r md:px-4">
          <Link href={`/newsDetails/${featured.id}`}>
            <img
              src={featured.newsPicture}
              alt={featured.newsPictureHeading}
              className="w-full h-64 object-cover"
            />
          </Link>
          <div className="p-2">
            <Link href={`/newsDetails/${featured.id}`}>
              <h3 className="text-xl md:text-xl font-bold hover:underline">
                {featured.newsHeading}
              </h3>
            </Link>

            {/* ✅ JSON parse condition (from your example) */}
            {isJson(featured.newsDetails) ? (
              <div className="text-sm md:text-md text-accent-foreground/80 mt-2 line-clamp-1 md:line-clamp-6">
                <JsonToHtml json={JSON.parse(featured.newsDetails)} />
              </div>
            ) : (
              <p className="text-sm md:text-md text-accent-foreground/80 mt-2 line-clamp-1 md:line-clamp-6">
                {featured.newsDetails}
              </p>
            )}
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
              <img
                src={article.newsPicture}
                alt={article.newsPictureHeading}
                className="w-24 h-20 object-cover rounded-md"
              />
              <p className="font-semibold text-md group-hover:underline line-clamp-2">
                {article.newsHeading}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
