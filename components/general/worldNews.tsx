import { prisma } from "@/app/utils/db";
import Link from "next/link";
import { isJson } from "@/app/utils/isJson";
import { JsonToHtml } from "@/components/richTextEditor/JsonToHtml";
import { CrimeAndPopularTab } from "./CrimeAndPopularTab";
import { PremiarOne } from "../allAdvertisement/PremiarOne";

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

export default async function InternationalLatest() {
  const articles = await getLatestInternationalNews();

  if (articles.length === 0) return null;

  const featured = articles[0];
  const others = articles.slice(1);

  const leftArticles = others.slice(0, 6);
  return (
    <section className="px-2 md:px-0 my-10">
      <div className="flex justify-between">
        <h2 className="text-xl font-extrabold mb-4 flex items-center">বিশ্ব</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="overflow-hidden">
          <Link href={`/newsDetails/${featured.id}`}>
            <img
              src={featured.newsPicture}
              alt={featured.newsPictureHeading}
              className="w-full h-64 object-cover rounded-xl"
            />
          </Link>
          <div className="p-2">
            <Link href={`/newsDetails/${featured.id}`}>
              <h3 className="text-xl md:text-xl font-bold hover:underline">
                {featured.newsHeading}
              </h3>
            </Link>
            <PremiarOne />

            {/* ✅ JSON parse condition (from your example) */}
       {/*      {isJson(featured.newsDetails) ? (
              <div className="text-sm md:text-md text-accent-foreground/80 mt-2 line-clamp-1 md:line-clamp-12">
                <JsonToHtml json={JSON.parse(featured.newsDetails)} />
              </div>
            ) : (
              <p className="text-sm md:text-md text-accent-foreground/80 mt-2 line-clamp-1 md:line-clamp-12">
                {featured.newsDetails}
              </p>
            )} */}
          </div>
        </div>
        {/* ✅ Left side - 5 small cards */}
        <div className="flex flex-col gap-4">
          {leftArticles.map((article) => (
            <Link
              href={`/newsDetails/${article.id}`}
              key={article.id}
              className="flex items-center gap-3 group border border-gray-950/10"
            >
           
              <p className="font-semibold text-sm group-hover:underline line-clamp-3 pl-2">
                {article.newsHeading}
              </p>
                 <img
                src={article.newsPicture}
                alt={article.newsPictureHeading}
                className="w-24 h-20 object-cover rounded-xl"
              />
            </Link>
          ))}
        </div>

        {/* ✅ Right side - 5 small cards */}
        <div className="flex flex-col gap-4">
        <CrimeAndPopularTab />
        </div>
      </div>
    </section>
  );
}
