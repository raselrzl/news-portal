import { prisma } from "@/app/utils/db";
import { EmptyState } from "../../../components/general/EmptyState";
import { PaginationComponent } from "@/components/general/PaginationComponent";
import { WarnewsCard } from "@/components/general/WarnewsCard";

type Article = {
  id: string;
  createdAt: Date;
  isFeatured: boolean;
  newsCategory: string;
  newsDetails: string;
  newsHeading: string;
  newsPicture: string;
  quotes: { speakerInfo: string; text: string }[];
  newsResource: string;
  newsPictureHeading: string;
  newsPictureCredit: string;
  newsLocation: string | null;
  newsReporter: any;
  newsArticleStatus: string;
};

async function getAllWarnewsArticles(
  page: number = 1,
  pageSize: number = 8
): Promise<{ articles: Article[]; totalPages: number }> {
  const skip = (page - 1) * pageSize;

  const [data, totalCount] = await Promise.all([
    prisma.newsArticle.findMany({
      where: { newsArticleStatus: "ACTIVE", newsCategory: "WAR" },
      take: pageSize,
      skip,
      select: {
        id: true,
        createdAt: true,
        isFeatured: true,
        newsCategory: true,
        newsDetails: true,
        newsHeading: true,
        newsPicture: true,
        quotes: { select: { speakerInfo: true, text: true } },
        newsResource: true,
        newsPictureHeading: true,
        newsPictureCredit: true,
        newsLocation: true,
        newsReporter: true,
        newsArticleStatus: true,
      },
      orderBy: { createdAt: "desc" },
    }),
    // ✅ Fixed: Count only CRIME articles
    prisma.newsArticle.count({
      where: { newsArticleStatus: "ACTIVE", newsCategory: "WAR" },
    }),
  ]);

  return {
    articles: data,
    totalPages: Math.ceil(totalCount / pageSize),
  };
}

export default async function AllWarNewsArticle({
  currentPage,
}: {
  currentPage: number;
}) {
  const { articles, totalPages } = await getAllWarnewsArticles(currentPage);

  return (
    <>
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 px-2">
          {articles.map((article: Article, index) => (
            <WarnewsCard article={article} key={index} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="ওহ! দেখানোর জন্য কিছুই নেই।"
description="এখনও কিছু যোগ করা হয়নি। একটু অপেক্ষা করুন!"
buttonText="হোমপেজ"
href="/"

        />
      )}
      <PaginationComponent totalPages={totalPages} currentPage={currentPage} />
    </>
  );
}
