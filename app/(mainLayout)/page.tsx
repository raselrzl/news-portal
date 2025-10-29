import React, { Suspense } from "react";
import { prisma } from "../utils/db";
import { EmptyState } from "@/components/general/EmptyState";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "@/components/general/socialLink";
import { Clock, Flame, Loader2 } from "lucide-react";
import { aauth } from "../actions";
import { Contact } from "@/components/general/Contact";
import {
  Binodon,
  ScienceNews,
  ScienceNewsHeadPost,
} from "@/components/general/homepageArticleList";
import { JsonToHtml } from "@/components/richTextEditor/JsonToHtml";
import { isJson } from "../utils/isJson";
import Videos from "@/components/general/Videos";
import { trackRoute } from "../utils/routeTracker";
import { ProOneAdvertise } from "@/components/allAdvertisement/ProOne";
import { DeluxeTwoAdvertise } from "@/components/allAdvertisement/DeluxeTwo";
import { PremiumOneAdvertise } from "@/components/allAdvertisement/PremiumOne";
import { PremiumTwoAdvertise } from "@/components/allAdvertisement/PremiumTwo";
import PopupOnViewServer from "@/components/PopupAd/PopupOnViewServer";
import { PremiarOne } from "@/components/allAdvertisement/PremiarOne";
import LatestOpinions from "@/components/general/LatestOpinions";
import { SorboseshAndJonoprioTab } from "@/components/general/SorboseshAndJonoprioTab";
import { CrimeAndPopularTab } from "@/components/general/CrimeAndPopularTab";

async function getData() {
  const [lastFeaturedArticle, latestUSANews, InternationalAll] = await Promise.all(
    [
      prisma.newsArticle.findMany({
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
        take: 10,
      }),

      prisma.newsArticle.findMany({
        where: { newsLocation: "dhaka" },
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

      prisma.newsArticle.findMany({
        where: { newsCategory: "INTERNATIONAL" },
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
    ]
  );

  return {
    lastFeaturedArticle,
    latestUSANews,
    InternationalAll,
  };
}
export default async function Home() {
  const { lastFeaturedArticle, latestUSANews, InternationalAll } = await getData();
  await trackRoute("Home");
  const session = await aauth();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-10">
        <div className="order-3 md:order-1 md:col-span-1 p-2 border-1">
          <div className="flex flex-row gap-2 text-center items-center justify-center">
            <Clock />
            <h1 className="text-xl font-bold pt-2 uppercase">অপরাধমূলক</h1>
          </div>
          {latestUSANews && latestUSANews.length > 0 ? (
            latestUSANews.map((item) => (
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
                    <h3 className="text-md font-semibold ml-2 line-clamp-3">
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

          {/*  font page first col first section add */}
          <Suspense fallback={<Loader2 className="mx-auto animate-spin" />}>
            <ProOneAdvertise />
          </Suspense>

          <div className="mt-10 text-left flex-col hidden sm:block">
            <p className="text-sm font-semibold text-justify">
              সর্বশেষ আপডেট এবং এক্সক্লুসিভ কন্টেন্টের জন্য আমাদের সোশ্যাল মিডিয়া একাউন্টে ফলো করুন।
            </p>

            <SocialLinks />
          </div>
        </div>
        <div className="order-2 md:order-2 md:col-span-1">
          <div className=" grid grid-cols-1">
            <div>
              {/*  font page second col first section first add */}
              <Suspense fallback={<Loader2 />}>
                <PremiumOneAdvertise />
              </Suspense>
            </div>

            {InternationalAll && Object.keys(InternationalAll).length > 0 ? (
              <Link
                href={`/newsDetails/${InternationalAll[0].id}`}
                className="block"
              >
                <div className="max-w-sm w-full mx-auto md:mx-0 rounded-lg overflow-hidden shadow-md border mt-2 p-2 items-center">
                  <div className="p-1">
                    <h2 className="text-lg font-semibold text-center">
                      {InternationalAll[0].newsHeading}
                    </h2>
                  </div>
                  <img
                    src={InternationalAll[0].newsPicture}
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
       <div className="bg-primary/55 dark:bg-gray-700 mt-6 rounded-xl border border-primary/55 dark:border-gray-600 shadow-md mx-2 md:mx-0">
      {/* Header */}
      <div className="flex items-center justify-center py-3 gap-2 border-b border-primary/55 dark:border-gray-600">
        <Flame className="text-red-600 dark:text-amber-400 w-6 h-6" />
        <h1 className="font-bold text-lg md:text-xl uppercase text-gray-900 dark:text-gray-100 tracking-wide">
          যুদ্ধবিগ্রহ
        </h1>
      </div>

      {/* Scrollable List */}
      <div className="relative h-64 md:h-92 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-400 scrollbar-track-transparent px-4 py-3">
        {InternationalAll && InternationalAll.length > 0 ? (
          <div className="space-y-3">
            {InternationalAll.slice(1).map((article) => (
              <Link href={`/newsDetails/${article.id}`} key={article.id}>
                <div className="rounded-lg bg-amber-50 dark:bg-gray-800 hover:bg-amber-200 dark:hover:bg-gray-700 border border-primary/55 dark:border-gray-600 transition-all shadow-sm hover:shadow-md p-3">
                  <h2 className="text-base font-semibold line-clamp-1 text-gray-800 dark:text-gray-100">
                    {article.newsHeading}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-8">
            <EmptyState
               title="উফ! এখনো কিছু দেখানোর মতো নেই।"
                  description="এখনো কিছুই যুক্ত হয়নি। চোখ রাখুন!"
                  buttonText="প্রথম পৃষ্ঠায় যেতে ক্লিক করুন"
                  href="/"
            />
          </div>
        )}

        {/* Gradient & Scroll Hint */}
        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-amber-100 dark:from-gray-700 to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-300 animate-bounce">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
          </div>
          <div className="flex justify-center items-center pt-4 border-t-1">
            <DeluxeTwoAdvertise />
          </div>
        </div>
        <div className="order-1 md:order-3 md:col-span-3">
          {lastFeaturedArticle &&
          Object.keys(lastFeaturedArticle).length > 0 ? (
            <div className="mb-6 max-h-[250px] md:max-h-[290px] md:border-1 md:p-2">
              {lastFeaturedArticle && (
                <Link href={`/newsDetails/${lastFeaturedArticle[0].id}`}>
                  <div className="grid grid-cols-5 px-2">
                    <div className="w-full max-h-[240px] md:max-h-[270px] border md:rounded-xl overflow-hidden col-span-5 md:col-span-3">
                      <img
                        src={lastFeaturedArticle[0].newsPicture}
                        alt="picture"
                        width={500}
                        height={270}
                        className="w-full h-full object-fill"
                      />
                    </div>
                    <div className="pl-1 md:pl-4 col-span-5 md:col-span-2">
                      <h2 className="text-lg md:text-2xl font-semibold mt-2 pl-2 md:pl-0 line-clamp-2 md:line-clamp-5">
                        {lastFeaturedArticle[0].newsHeading}
                      </h2>
                      {isJson(lastFeaturedArticle[0].newsDetails) ? (
                        <div className="text-sm md:text-md text-accent-foreground/80 mb-2 md:mt-2 line-clamp-1 md:line-clamp-5 pl-2 md:pl-1">
                          <JsonToHtml
                            json={JSON.parse(
                              lastFeaturedArticle[0].newsDetails
                            )}
                          />
                        </div>
                      ) : (
                        <p className="text-sm md:text-md text-accent-foreground/80 mb-2 md:mt-2 line-clamp-1 md:line-clamp-5 pl-2 md:pl-1">
                         {lastFeaturedArticle[0].newsDetails}
                        </p>
                      )}
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

          {/* <DeluxeTwoAdvertise /> */}

          {lastFeaturedArticle &&
          Object.keys(lastFeaturedArticle).length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2 md:border-1 mt-23 md:mt-4 border-t-2">
              {lastFeaturedArticle.slice(1, 10).map((article) => (
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
               title="উফ! এখনো কিছু দেখানোর মতো নেই।"
                  description="এখনো কিছুই যুক্ত হয়নি। চোখ রাখুন!"
                  buttonText="প্রথম পৃষ্ঠায় যেতে ক্লিক করুন"
                  href="/"
            />
          )}
        </div>
      </div>

      <div className="border-y-2 my-2 border-primary"></div>

      <Videos />

      {/*  tab section */}
      <div className="my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* Left: Sorbosesh / Jonoprio */}
          <div className="mx-4 md:mx-0 py-4">
            <CrimeAndPopularTab />
          </div>

          {/* Right: Premium Ad */}
          <div className="py-4">
            <Suspense fallback={<Loader2 className="animate-spin" />}>
              <PremiarOne />
            </Suspense>          
         
          </div>
          <div className="py-4"><LatestOpinions /></div>
           
        </div>
      </div>

      {/*  Science section */}
      <div className="border-y-4 my-2 py-6 border-primary">
        <div className="grid grid-cols-3 border-primary my-4">
          <div className="col-span-3 md:col-span-1 p-2 mt-2 flex flex-col justify-between w-full max-w-sm mx-auto md:mx-0">
            <ScienceNewsHeadPost />
             <PremiumTwoAdvertise />
          </div>

          <div className="col-span-3 md:col-span-2 mt-2 grid grid-cols-1 md:grid-cols-2  gap-2 p-2">
            <ScienceNews />
          </div>
        </div>
      </div>
      {/* binodonsection */}
      <div className="mb-4">
        <div className=" grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-3 md:col-span-2">
            <PopupOnViewServer />
            <Binodon />
          </div>
          <div className="col-span-3 md:col-span-1 md:mt-12">
            <Contact />
          </div>
        </div>
      </div>

 
    </>
  );
}
