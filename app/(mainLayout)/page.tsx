import React, { Suspense } from "react";
import { prisma } from "../utils/db";
import { EmptyState } from "@/components/general/EmptyState";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "@/components/general/socialLink";
import { Clock, Earth, Flame, Loader2 } from "lucide-react";
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
import LiveUpdate from "@/components/general/PublicSourceNewsLiveUpdate";
import InstagramPosts from "@/components/instagram/InstagramPosts";
import WarLatest from "@/components/general/WarLatest";
import NationalLatest from "@/components/general/nationalNews";
import InternationalLatest from "@/components/general/worldNews";
import PoliticalLatest from "@/components/general/politicsNews";

async function getData() {
  const [lastFeaturedArticle, latestUSANews, InternationalAll] =
    await Promise.all([
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
        take: 7,
      }),

      prisma.newsArticle.findMany({
        where: { newsCategory: "CRIME" },
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
    ]);

  return {
    lastFeaturedArticle,
    latestUSANews,
    InternationalAll,
  };
}
export default async function Home() {
  const { lastFeaturedArticle, latestUSANews, InternationalAll } =
    await getData();
  await trackRoute("Home");
  const session = await aauth();
  return (
    <>
      <div className=" dark:bg-black mb-2 grid grid-cols-3 items-center px-2">
        {/* Live Updates */}
        <div className="col-span-3 md:col-span-2">
          <LiveUpdate />
        </div>

        {/* Desktop-only Advertisement Banner */}
      {/*   <div className=" md:flex items-center col-span-3 md:col-span-1 justify-center gap-2 rounded-md border border-yellow-400 bg-linear-to-r from-yellow-50 via-white to-yellow-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 p-2 shadow-sm">
          <p className="text-xs md:text-sm text-gray-800 dark:text-gray-200 text-center leading-snug">
            <strong className="text-yellow-700 dark:text-yellow-400">
              বিজ্ঞপ্তি:
            </strong>{" "}
            আমরা স্থানীয়, কর্পোরেট, পণ্য এবং সামাজিক যোগাযোগ মাধ্যমের বিজ্ঞাপন
            প্রচার করি, সম্পূর্ণ স্বতন্ত্র এবং কোনো প্রতিষ্ঠান বা ব্যক্তির
            তহবিলের উপর নির্ভরশীল নয়। আমাদের পাঠকরা সারাবাংলায় ছড়িয়ে আছে।
            অংশীদারিত্ব বা বিজ্ঞাপনের জন্য যোগাযোগ করুন
            <span className="font-semibold underline hover:text-yellow-700 dark:hover:text-yellow-400 cursor-pointer">
              info@jagrotobarta.com
            </span>
          </p>
        </div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-4">
        <div className="order-3 md:order-1 md:col-span-1 p-2">
          <div className="w-full mb-4">
            <h2 className="w-full rounded-xs text-center bg-red-600 text-white py-2 text-lg font-semibold tracking-wide">
              অপরাধসংক্রান্ত
            </h2>
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
                    <h3 className="text-sm font-semibold ml-2 line-clamp-4">
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
                <Earth className="text-red-600 dark:text-amber-400 w-6 h-6" />
                <h1 className="font-extrabold text-lg md:text-xl uppercase text-gray-900 dark:text-gray-100 tracking-wide">
                  বিশ্ব
                </h1>
              </div>

              {/* Scrollable List */}
              <div className="relative h-64 md:h-92 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-400 scrollbar-track-transparent px-4 py-3">
                {InternationalAll && InternationalAll.length > 0 ? (
                  <div className="space-y-3">
                    {InternationalAll.slice(1).map((article) => (
                      <Link
                        href={`/newsDetails/${article.id}`}
                        key={article.id}
                      >
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
                <div className="absolute bottom-0 left-0 w-full h-10 bg-linear-to-t from-amber-100 dark:from-gray-700 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-300 animate-bounce">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-3 md:col-span-3">
          {/* 🔴 FIRST FEATURED NEWS */}
          {lastFeaturedArticle && lastFeaturedArticle.length > 0 ? (
            <div className="mb-6 md:border md:p-3 rounded-xl">
              <Link
                href={`/newsDetails/${lastFeaturedArticle[0].id}`}
                className="block"
              >
                <div className="flex flex-col px-2">
                  {/* 📝 Heading FIRST */}
                  <h2
                    className="text-lg md:text-2xl font-semibold mb-4 
                         line-clamp-2 md:line-clamp-3"
                  >
                    {lastFeaturedArticle[0].newsHeading}
                  </h2>

                  {/* 🖼️ Big Image */}
                  <div className="w-full h-[220px] md:h-80 border rounded-xl overflow-hidden">
                    <img
                      src={lastFeaturedArticle[0].newsPicture}
                      alt="picture"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            <EmptyState
              title="উফ! এখনো কিছু দেখানোর মতো নেই।"
              description="এখনো কিছুই যুক্ত হয়নি। চোখ রাখুন!"
              buttonText="প্রথম পৃষ্ঠায় যেতে ক্লিক করুন"
              href="/"
            />
          )}

          {/* 🔽 OTHER NEWS (UNCHANGED STYLE, JUST FIXED) */}
          {lastFeaturedArticle && lastFeaturedArticle.length > 1 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2 md:border mt-6 border-t-2">
              {lastFeaturedArticle.slice(1, 7).map((article) => (
                <Link href={`/newsDetails/${article.id}`} key={article.id}>
                  <div className="w-full mx-auto my-1">
                    {/* Image */}
                    <div className="w-full h-[110px] md:h-[150px] border rounded-xl overflow-hidden">
                      <img
                        src={article.newsPicture}
                        alt="picture"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Heading */}
                    <div className="pt-2">
                      <h2 className="text-[15px] md:text-[17px] font-semibold leading-snug px-1 line-clamp-3">
                        {article.newsHeading}
                      </h2>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex justify-center items-center pt-4">
        <DeluxeTwoAdvertise />
      </div>
      <div className="border-y-2 my-2 border-primary"></div>
      <WarLatest />
      <div className="border-y-2 my-2 border-primary"></div>
      <NationalLatest />
      {/*    <Videos /> */}

      <InstagramPosts />

      <InternationalLatest />
      <div className="border-y-2 my-2 border-primary"></div>
      {/*  tab section */}
      <div className="my-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Left: Sorbosesh / Jonoprio */}
          <div className="mx-4 md:mx-0 py-4">
            <PoliticalLatest />
          </div>

          {/* Right: Premium Ad */}
       {/*    <div className="py-4">
            <Suspense fallback={<Loader2 className="animate-spin" />}>
              <PremiarOne />
            </Suspense>
          </div> */}
          <div className="py-4">
            <LatestOpinions />
          </div>
        </div>
      </div>

      {/*  Science section */}
      <div className="border-y-4 my-10 py-6 border-primary">
        <div className="grid grid-cols-3 border-primary my-4">
          <div className="col-span-3 md:col-span-1 p-2 mt-2 flex flex-col justify-between w-full max-w-sm mx-auto md:mx-0">
            <ScienceNewsHeadPost />
          
          </div>

          <div className="col-span-3 md:col-span-2 mt-2 grid grid-cols-1 md:grid-cols-2  gap-2 p-2">
            <ScienceNews />
          </div>
        </div>
      </div>
        <PremiumTwoAdvertise />
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
