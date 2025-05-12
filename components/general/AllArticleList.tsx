import { prisma } from "@/app/utils/db";
import Image from "next/image";

async function getData() {
  const [allArticles, lastFeaturedArticle] = await Promise.all([
    prisma.newsArticle.findMany({
      where: { newsArticleStatus: "ACTIVE" },
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
        createdAt: "asc",
      },
      take: 6,
    }),

    prisma.newsArticle.findFirst({
      where: {
        newsArticleStatus: "ACTIVE",
        isFeatured: true,
      },
      select: {
        id: true,
        newsHeading: true,
        newsPicture: true,
        newsPictureHeading: true,
        createdAt: true,
        newsDetails: true,
      },

      orderBy: {
        createdAt: "asc",
      },
    }),
  ]);

  return { allArticles, lastFeaturedArticle };
}

export default async function AllArticleList() {
  const { allArticles, lastFeaturedArticle } = await getData();
  return (
    <>
      <div className="mb-6 max-h-[290px] md:border-1 md:p-2">
        {lastFeaturedArticle && (
          <div className="grid grid-cols-5">
            <div className="w-full max-h-[240px] md:max-h-[270px] border md:rounded-xl overflow-hidden col-span-5 md:col-span-3">
              <Image
                src={lastFeaturedArticle.newsPicture}
                alt="picture"
                width={500}
                height={270}
                className="w-full h-full object-fit"
              />
            </div>
            <div className="pl-1 md:pl-4 col-span-5 md:col-span-2">
              <h2 className="text-lg md:text-2xl font-semibold mt-2">
                {lastFeaturedArticle.newsPictureHeading}নিশুতি রাতের নিস্তব্ধতায়
                হঠাৎ এক পশুপাখির ডাক শোনা গেল। <span className="md:hidden sm:block">বিস্তরিত....</span>
              </h2>
              <p className="text-sm md:text-lg text-accent-foreground/80 mb-2 md:mt-2 line-clamp-1 md:line-clamp-3">
                {lastFeaturedArticle.newsDetails}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2 md:border-1">
        {allArticles.map((article) => (
          <div
            key={article.id}
            className="max-w-md w-full mx-auto my-1 sm:max-w-xs md:max-w-md lg:max-w-lg"
          >
            <div className="w-auto h-[140px] md:h-[170px] border-1 rounded-xl overflow-hidden">
              <Image
                src={article.newsPicture}
                alt="picture"
                width={190}
                height={150}
                className="w-full h-full object-fit"
              />
            </div>

            <div className="pt-2">
              <h2 className="text-[17px] font-semibold text-foreground/80 leading-[1.5] px-1 font-stretch-extra-condensed">
                {article.newsPictureHeading}নিশুতি রাতের নিস্তব্ধতায় হঠাৎ এক
                পশুপাখির ডাক শোনা গেল।
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
