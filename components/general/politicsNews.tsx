import { prisma } from "@/app/utils/db";
import Link from "next/link";
import { isJson } from "@/app/utils/isJson";
import { JsonToHtml } from "@/components/richTextEditor/JsonToHtml";
import { CrimeAndPopularTab } from "./CrimeAndPopularTab";

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
    take: 5,
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
    <section className="px-2">
      <div className="flex justify-between">
        <h2 className="text-xl font-extrabold mb-4 flex items-center">
          রাজনীতি
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {articles.map((article) => (
          <Link
            href={`/newsDetails/${article.id}`}
            key={article.id}
            className="flex items-center gap-3 group border-b border-gray-950/10 pb-3"
          >
            <img
              src={article.newsPicture}
              alt={article.newsPictureHeading}
              className="w-24 h-20 object-cover rounded-xl"
            />
            <div>
              <p className="font-semibold text-sm group-hover:underline line-clamp-2">
                {article.newsHeading}
              </p>

              {isJson(article.newsDetails) ? (
                <div className="text-sm text-accent-foreground/80 mt-3 overflow-hidden line-clamp-1 md:line-clamp-2">
                  <JsonToHtml json={JSON.parse(article.newsDetails)} />
                </div>
              ) : (
                <p className="text-sm text-accent-foreground/80 mt-3 overflow-hidden  line-clamp-1 md:line-clamp-2">
                  {article.newsDetails}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
