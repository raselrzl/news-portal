import { prisma } from "@/app/utils/db";
import Image from "next/image";
import { EmptyState } from "./EmptyState";
import SocialLinks from "./socialLink";
import Link from "next/link";

async function getData() {
  const [allArticles, lastFeaturedArticle, latestNews, Environment, Politics] =
    await Promise.all([
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
          createdAt: "desc",
        },
        take: 7,
      }),

      prisma.newsArticle.findFirst({
        where: {
          newsArticleStatus: "ACTIVE",
          isFeatured: true,
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
      }),

      prisma.newsArticle.findMany({
        where: { newsCategory: "EDUCATION" },
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
        take: 7,
      }),

      prisma.newsArticle.findFirst({
        where: {
          newsCategory: "EDUCATION",
          isFeatured: true,
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
      }),

      prisma.newsArticle.findMany({
        where: { newsCategory: "EDUCATION" },
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
        take: 10,
      }),
    ]);

  return {
    allArticles,
    lastFeaturedArticle,
    latestNews,
    Environment,
    Politics,
  };
}

export default async function AllArticleList() {
  const { allArticles, lastFeaturedArticle } = await getData();

  return (
    <>
      {lastFeaturedArticle && Object.keys(lastFeaturedArticle).length > 0 ? (
        <div className="mb-6 max-h-[320px] md:border-1 md:p-2 ">
          {lastFeaturedArticle && (
            <Link href={`/newsDetails/${lastFeaturedArticle.id}`} className="mb-10">
              <div className="grid grid-cols-5">
                <div className="w-full max-h-[240px] md:max-h-[270px] border md:rounded-xl overflow-hidden col-span-5 md:col-span-3 mt-10 md:mt-0">
                  <Image
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
                    <span className="md:hidden sm:block">বিস্তরিত....</span>
                  </h2>
                  <p className="text-sm md:text-lg text-accent-foreground/80 mb-2 md:mt-2 line-clamp-1 md:line-clamp-3 pl-2 md:p">
                    {lastFeaturedArticle.newsDetails}
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>
      ) : (
        <EmptyState
          title="উফ! এখনো কিছু দেখানোর মতো নেই।"
          description="এখনো কিছুই যুক্ত হয়নি। চোখ রাখুন!"
          buttonText="প্রথম পৃষ্ঠায় যেতে ক্লিক করুন"
          href="/"
        />
      )}
     <div className="flex justify-center items-center my-16 md:mt-0">
       <img
          src="/shoe.gif"
          alt="gif image"
          className="w-[350px] h-[100px] md:h-[150px] rounded-xl md:pt-0 py-2 mt-5"
        />

     </div>

      {allArticles && Object.keys(allArticles).length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-6 border-y-1 md:border-1 my-10">
          {allArticles.slice(1, 7).map((article) => (
            <Link href={`/newsDetails/${article.id}`} key={article.id}>
              <div className="max-w-md w-full mx-auto my-1 sm:max-w-xs md:max-w-md lg:max-w-lg">
                <div className="w-auto h-[110px] md:h-[150px] border-1 rounded-xl overflow-hidden">
                  <Image
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
          title="উফ! এখনো কিছু দেখানোর মতো নেই।"
          description="এখনো কিছুই যুক্ত হয়নি। চোখ রাখুন!"
          buttonText="প্রথম পৃষ্ঠায় যেতে ক্লিক করুন"
          href="/"
        />
      )}
    </>
  );
}

export async function SirshoNewsList() {
  const { latestNews } = await getData();

  return (
    <>
      <div className="order-3 md:order-1 md:col-span-1 p-2 border-1">
        {latestNews && latestNews.length > 0 ? (
          latestNews.map((item) => (
            <Link key={item.id} href={`/newsDetails/${item.id}`}>
              <div className="grid grid-cols-3 border-b py-2">
                <div className="col-span-1">
                  <img
                    src={item.newsPicture}
                    alt="Card Image"
                    className="w-32 h-16 object-cover border"
                  />
                </div>
                <div className="col-span-2">
                  <h3 className="text-lg font-semibold ml-2">
                    {item.newsHeading}
                  </h3>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <EmptyState
            title="উফ! এখনো কিছু দেখানোর মতো নেই।"
            description="এখনো কিছুই যুক্ত হয়নি। চোখ রাখুন!"
            buttonText="প্রথম পৃষ্ঠায় যেতে ক্লিক করুন"
            href="/"
          />
        )}

        <img
          src="/shoe.gif"
          alt="gif image"
          className="w-full h-[100px] rounded-xl mt-2"
        />
        <div className="mt-10 text-left flex-col hidden sm:block">
          <p className="text-sm font-semibold text-primary text-justify">
            সর্বশেষ আপডেট এবং এক্সক্লুসিভ কন্টেন্টের জন্য আমাদের সোশ্যাল মিডিয়া
            একাউন্টে ফলো করুন।
          </p>
          <SocialLinks />
        </div>
      </div>
    </>
  );
}

export async function CrimeHEadings() {
  const { Environment } = await getData();

  return (
    <>
      {Environment && Object.keys(Environment).length > 0 ? (
        <Link href={`/newsDetails/${Environment.id}`}>
          <div className="max-w-sm rounded-lg overflow-hidden shadow-md border mt-2">
            <div className="p-1">
              <h2 className="text-lg font-semibold ">
                {Environment.newsHeading}
              </h2>
            </div>
            <img
              src={Environment.newsPicture}
              alt="Card image"
              className="w-full h-40 object-cover"
            />
          </div>
        </Link>
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

export async function ShirShoNewsHeadings() {
  const { Politics } = await getData();

  return (
    <>
      {Politics && Object.keys(Politics).length > 0 ? (
        <>
        <h1 className="font-extrabold pl-2 mb-2"> {`>>>`}গুরুত্বপূর্ণ ও আলোচিত</h1>
        <div className="rounded-xl">
          {Politics.map((article) => (
            <Link href={`/newsDetails/${article.id}`} key={article.id}>
              <div className="max-w-sm rounded-lg overflow-hidden shadow-md border m-2 px-2 py-1 hover:bg-accent-foreground/5 transition-opacity">
                <div className="p-1">
                  <h2 className="text-lg text-accent-foreground font-semibold line-clamp-1">
                    {article.newsHeading}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
        </>) : (
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
