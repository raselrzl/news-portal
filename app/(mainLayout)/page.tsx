import React, { Suspense } from "react";
import { after } from "next/server";
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
import SportsNews from "@/components/general/SportsNews";
import RegionalNews from "@/components/general/RegionalNews";
import BanglaDistrictNewsSlider from "@/components/general/BanglaDistrictNewsSlider";
import PoolPopupComponent from "@/components/general/PoolPopupComponent";

async function getData() {
  const [lastFeaturedArticle, latestUSANews, InternationalAll] =
    await Promise.all([
      // Featured articles: fetch only fields used on this page.
      prisma.newsArticle.findMany({
        where: {
          newsArticleStatus: "ACTIVE",
          isFeatured: true,
        },
        select: {
          id: true,
          newsHeading: true,
          newsPicture: true,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 7,
      }),

      // Crime articles: preserve the original category filter.
      prisma.newsArticle.findMany({
        where: {
          newsCategory: "CRIME",
        },
        select: {
          id: true,
          newsHeading: true,
          newsPicture: true,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 7,
      }),

      // International articles: preserve the original category filter.
      prisma.newsArticle.findMany({
        where: {
          newsCategory: "INTERNATIONAL",
        },
        select: {
          id: true,
          newsHeading: true,
          newsPicture: true,
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
  // Run the homepage queries and authentication concurrently.
  // Keep aauth() because it may perform authentication-related side effects.
  const [data] = await Promise.all([getData(), aauth()]);

  const { lastFeaturedArticle, latestUSANews, InternationalAll } = data;

  // Route tracking no longer blocks the homepage response.
  after(async () => {
    try {
      await trackRoute("Home");
    } catch (error) {
      console.error("Failed to track homepage visit:", error);
    }
  });

  return (
    <>
      {/* Live Updates */}
      <div className="dark:bg-black mb-2 grid grid-cols-3 items-center px-2">
        <div className="col-span-3 md:col-span-2">
          <LiveUpdate />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-4">
        {/* LEFT COLUMN */}
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

          {/* Advertisement */}
          <Suspense
            fallback={
              <div className="flex justify-center py-4">
                <Loader2 className="h-5 w-5 animate-spin" />
              </div>
            }
          >
            <ProOneAdvertise />
          </Suspense>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="order-2 md:order-2 md:col-span-1">
          <div className="grid grid-cols-1">
            <div>
              {/* Advertisement */}
              <Suspense
                fallback={
                  <div className="flex justify-center py-4">
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </div>
                }
              >
                <PremiumOneAdvertise />
              </Suspense>
            </div>

            {/* Main international article */}
            {InternationalAll && InternationalAll.length > 0 ? (
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

            {/* International scrollable list */}
            <div className="bg-primary/55 dark:bg-gray-700 mt-6 rounded-xl border border-primary/55 dark:border-gray-600 shadow-md mx-2 md:mx-0">
              <div className="flex items-center justify-center py-3 gap-2 border-b border-primary/55 dark:border-gray-600">
                <Earth className="text-red-600 dark:text-amber-400 w-6 h-6" />
                <h1 className="font-extrabold text-lg md:text-xl uppercase text-gray-900 dark:text-gray-100 tracking-wide">
                  বিশ্ব
                </h1>
              </div>

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

        {/* RIGHT / FEATURED COLUMN */}
        <div className="order-1 md:order-3 md:col-span-3">
          {/* FIRST FEATURED NEWS */}
          {lastFeaturedArticle && lastFeaturedArticle.length > 0 ? (
            <div className="mb-6 md:border md:p-3 rounded-xl">
              <Link
                href={`/newsDetails/${lastFeaturedArticle[0].id}`}
                className="block"
              >
                <div className="flex flex-col px-2">
                  <h2
                    className="text-xl md:text-4xl font-semibold mb-4 text-center
                         line-clamp-2 p-4"
                  >
                    {lastFeaturedArticle[0].newsHeading}
                  </h2>

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

          {/* OTHER FEATURED NEWS */}
          {lastFeaturedArticle && lastFeaturedArticle.length > 1 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2 md:border mt-6 border-t-2">
              {lastFeaturedArticle.slice(1, 7).map((article) => (
                <Link
                  href={`/newsDetails/${article.id}`}
                  key={article.id}
                >
                  <div className="w-full mx-auto my-1">
                    <div className="w-full h-[110px] md:h-[150px] border rounded-xl overflow-hidden">
                      <img
                        src={article.newsPicture}
                        alt="picture"
                        className="w-full h-full object-cover"
                      />
                    </div>

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

      {/* ADVERTISEMENT */}
      <div className="flex justify-center items-center pt-4">
        <Suspense
          fallback={
            <div className="flex justify-center py-4">
              <Loader2 className="h-5 w-5 animate-spin" />
            </div>
          }
        >
          <DeluxeTwoAdvertise />
        </Suspense>
      </div>

      <PoolPopupComponent />

      {/* BELOW-FOLD NEWS SECTIONS */}
      <Suspense fallback={<div className="min-h-24" />}>
        <BanglaDistrictNewsSlider />
      </Suspense>

      <Suspense fallback={<div className="min-h-48" />}>
        <InternationalLatest />
      </Suspense>

      <Suspense fallback={<div className="min-h-48" />}>
        <WarLatest />
      </Suspense>

      <Suspense fallback={<div className="min-h-48" />}>
        <NationalLatest />
      </Suspense>

      {/* Videos intentionally remain disabled, as in your original code. */}
      {/* <Videos /> */}

      <Suspense fallback={<div className="min-h-24" />}>
        <InstagramPosts />
      </Suspense>

      <div className="my-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Left: Sorbosesh / Jonoprio */}
          <div className="mx-4 md:mx-0 py-4">
            <Suspense fallback={<div className="min-h-32" />}>
              <PoliticalLatest />
            </Suspense>
          </div>

          <div className="py-4">
            <Suspense fallback={<div className="min-h-32" />}>
              <LatestOpinions />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Premium Advertisement */}
      <div className="py-4">
        <Suspense
          fallback={
            <div className="flex justify-center py-4">
              <Loader2 className="h-5 w-5 animate-spin" />
            </div>
          }
        >
          <PremiarOne />
        </Suspense>
      </div>

      <div className="p-2">
        <Suspense fallback={<div className="min-h-48" />}>
          <SportsNews />
        </Suspense>
      </div>

      {/* Science section */}
      <div className="my-10 py-6">
        <div className="grid grid-cols-3 border-primary my-4">
          <div className="col-span-3 md:col-span-1 p-2 mt-2 flex flex-col justify-between w-full max-w-sm mx-auto md:mx-0">
            <Suspense fallback={<div className="min-h-32" />}>
              <ScienceNewsHeadPost />
            </Suspense>
          </div>

          <div className="col-span-3 md:col-span-2 mt-2 grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
            <Suspense fallback={<div className="min-h-48" />}>
              <ScienceNews />
            </Suspense>
          </div>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="flex justify-center py-4">
            <Loader2 className="h-5 w-5 animate-spin" />
          </div>
        }
      >
        <PremiumTwoAdvertise />
      </Suspense>

      {/* Entertainment section */}
      <div className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-3 md:col-span-2">
            <Suspense fallback={<div className="min-h-24" />}>
              <PopupOnViewServer />
            </Suspense>

            <Suspense fallback={<div className="min-h-48" />}>
              <Binodon />
            </Suspense>
          </div>

          <div className="col-span-3 md:col-span-1 md:mt-12">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}