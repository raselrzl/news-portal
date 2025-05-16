import { prisma } from "@/app/utils/db";
import { EmptyState } from "../../../components/general/EmptyState";
import { NewsArticleCard } from "../../../components/general/NewsArticleCard";
import { PaginationComponent } from "@/components/general/PaginationComponent";

async function getAllnewsArticles(
  page:number=1,
  pageSize:number=8,
) {
  const skip=(page-1)*pageSize
  const [data, totalCount] = await Promise.all([
    prisma.newsArticle.findMany({
      where: { newsArticleStatus: "ACTIVE" },
      take: pageSize,
      skip:skip,
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
    prisma.newsArticle.count({ where:
      {
        newsArticleStatus: "ACTIVE"
      }
     }),
  ]);

  return {
    articles: data,
    totalPages: Math.ceil(totalCount / pageSize),
  };
}

export default async function AllNewsArticleList({currentPage}:{currentPage:number}) {
  const { articles, totalPages} = await getAllnewsArticles(currentPage);

  return (
    <>
      {articles.length > 0 ? (
        <div className="flex flex-col gap-6">
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
      <PaginationComponent totalPages={totalPages} currentPage={currentPage}/>
    </>
  );
}
