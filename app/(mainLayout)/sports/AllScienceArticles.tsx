import { prisma } from "@/app/utils/db";
import { EmptyState } from "../../../components/general/EmptyState";
import { NewsArticleCard } from "../../../components/general/NewsArticleCard";

async function getAllSportsArticles() {
  const [data] = await Promise.all([
    prisma.newsArticle.findMany({
      where: { newsCategory: "SPORTS" },
      select: {
        id: true,
        createdAt: true,
        isFeatured: true,
        newsCategory: true,
        newsDetails: true,
        newsHeading: true,
        newsPicture: true,
        quotes: {
          select: {
            speakerInfo: true,
            text: true,
          },
        },
        newsResource: true,
        newsPictureHeading: true,
        newsPictureCredit: true,
        newsLocation: true,
        newsReporter: true,
        newsArticleStatus: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    }),
  ]);

  return {
    articles: data,
  };
}

export default async function AllSportsArticles() {
  const { articles } = await getAllSportsArticles();

  return (
    <>
      {articles.length > 0 ? (
        <div className="flex flex-col gap-6 px-2">
          {articles.map((article, index) => (
            <NewsArticleCard article={article} key={index} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="উফ! এখনো কিছু দেখানোর মতো নেই।"
          description="এখনো কিছুই যুক্ত হয়নি। চোখ রাখুন!"
          buttonText="প্রথম পৃষ্ঠায় যেতে ক্লিক করুন"
          href="/"
        />
      )}
    </>
  );
}
