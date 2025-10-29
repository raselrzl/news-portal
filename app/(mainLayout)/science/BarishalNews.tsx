import { prisma } from "@/app/utils/db";
import { isJson } from "@/app/utils/isJson";
import { SuperOne } from "@/components/allAdvertisement/SuperOne";
import { UltimateOne } from "@/components/allAdvertisement/UltimateOne";
import { EmptyState } from "@/components/general/EmptyState";
import { JsonToHtml } from "@/components/richTextEditor/JsonToHtml";
import Image from "next/image";
import Link from "next/link";

// ✅ Get all ACTIVE Natherlands articles
export async function getAllArticles() {
  return await prisma.newsArticle.findMany({
    where: {
      newsArticleStatus: "ACTIVE",
      newsLocation: "barishal",
    },
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
    take: 9,
  });
}

// ✅ Get last featured article from Natherlands
export async function getLastFeaturedArticle() {
  return await prisma.newsArticle.findFirst({
    where: {
      newsArticleStatus: "ACTIVE",
      isFeatured: true,
      newsLocation: "barishal",
    },
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
  });
}

export default async function BarishalNews() {
  const allArticles = await getAllArticles();
  const lastFeaturedArticle = await getLastFeaturedArticle();

  return (
    <>
      {/* ✅ Featured Natherlands article */}
      {lastFeaturedArticle && Object.keys(lastFeaturedArticle).length > 0 ? (
        <div className="mb-6 max-h-[320px] md:border-1 md:p-2">
          <Link
            href={`/newsDetails/${lastFeaturedArticle.id}`}
            className="mb-10"
          >
            <div className="grid grid-cols-5">
              <div className="w-full max-h-[240px] md:max-h-[270px] border md:rounded-xl overflow-hidden col-span-5 md:col-span-3 mt-10 md:mt-0">
                <img
                  src={lastFeaturedArticle.newsPicture}
                  alt="picture"
                  width={500}
                  height={270}
                  className="w-full h-full object-fit"
                />
              </div>
              <div className="pl-1 md:pl-4 col-span-5 md:col-span-2">
                <h2 className="text-lg md:text-2xl font-semibold mt-2 pl-2 md:pl-0">
                  {lastFeaturedArticle.newsHeading}
                  <span className="md:hidden sm:block">Details....</span>
                </h2>

                {isJson(lastFeaturedArticle.newsDetails) ? (
                  <div className="text-sm md:text-lg text-accent-foreground/80 mb-2 md:mt-2 line-clamp-1 md:line-clamp-3 pl-2 md:p">
                    <JsonToHtml
                      json={JSON.parse(lastFeaturedArticle.newsDetails)}
                    />
                  </div>
                ) : (
                  <p className="text-sm md:text-lg text-accent-foreground/80 mb-2 md:mt-2 line-clamp-1 md:line-clamp-3 pl-2 md:p">
                    {lastFeaturedArticle.newsDetails}
                  </p>
                )}
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <EmptyState
          title="Oops! There's nothing to show yet."
          description="No featured article available yet."
          buttonText="Homepage"
          href="/"
        />
      )}

      <div className="px-2 md:px-0">
        <UltimateOne  />
      </div>

      {/* ✅ All Austrian articles */}
      {allArticles && allArticles.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 py-6 px-2 border-y-1 md:border-1 my-10">
          {allArticles
            .filter((a) => a.id !== lastFeaturedArticle?.id)
            .map((article) => (
              <Link href={`/newsDetails/${article.id}`} key={article.id}>
                <div className="max-w-md w-full mx-auto my-1 sm:max-w-xs md:max-w-md lg:max-w-lg">
                  <div className="w-auto h-[110px] md:h-[150px] border-1 rounded-xl overflow-hidden">
                    <img
                      src={article.newsPicture}
                      alt="picture"
                      width={190}
                      height={140}
                      className="w-full h-full md:h-[150px] object-fit"
                    />
                  </div>
                  <div className="pt-4">
                    <h2 className="text-[17px] font-semibold leading-[1.5] px-1 font-stretch-extra-condensed">
                      {article.newsHeading}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      ) : (
        <EmptyState
          title="Oops! There's nothing to show yet."
          description="No article available yet. Stay tuned!"
          buttonText="Homepage"
          href="/"
        />
      )}
    </>
  );
}
