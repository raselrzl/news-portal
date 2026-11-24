
import React, { Suspense } from "react";
import { after } from "next/server";
import Link from "next/link";
import { prisma } from "../utils/db";

import { EmptyState } from "@/components/general/EmptyState";
import { Earth } from "lucide-react";

import { aauth } from "../actions";
import { Contact } from "@/components/general/Contact";

import {
  Binodon,
  ScienceNews,
  ScienceNewsHeadPost,
} from "@/components/general/homepageArticleList";

import { trackRoute } from "../utils/routeTracker";

import { ProOneAdvertise } from "@/components/allAdvertisement/ProOne";
import { DeluxeTwoAdvertise } from "@/components/allAdvertisement/DeluxeTwo";
import { PremiumOneAdvertise } from "@/components/allAdvertisement/PremiumOne";
import { PremiumTwoAdvertise } from "@/components/allAdvertisement/PremiumTwo";
import { PremiarOne } from "@/components/allAdvertisement/PremiarOne";

import PopupOnViewServer from "@/components/PopupAd/PopupOnViewServer";
import LatestOpinions from "@/components/general/LatestOpinions";
import LiveUpdate from "@/components/general/PublicSourceNewsLiveUpdate";

import InstagramPosts from "@/components/instagram/InstagramPosts";
import WarLatest from "@/components/general/WarLatest";
import NationalLatest from "@/components/general/nationalNews";
import InternationalLatest from "@/components/general/worldNews";
import PoliticalLatest from "@/components/general/politicsNews";
import SportsNews from "@/components/general/SportsNews";
import BanglaDistrictNewsSlider from "@/components/general/BanglaDistrictNewsSlider";
import PoolPopupComponent from "@/components/general/PoolPopupComponent";

// --------------------------------------------------
// Shared loading fallback
// --------------------------------------------------

function SectionFallback({
  height = "min-h-32",
}: {
  height?: string;
}) {
  return <div className={`${height} w-full`} aria-hidden="true" />;
}

// --------------------------------------------------
// Database queries
// --------------------------------------------------

async function getHomeData() {
  const [
    featuredArticles,
    crimeArticles,
    internationalArticles,
  ] = await Promise.all([
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
    featuredArticles,
    crimeArticles,
    internationalArticles,
  };
}

// --------------------------------------------------
// Loading component for the top homepage content
// --------------------------------------------------

function HomeTopFallback() {
  return (
    <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-5">
      <div className="order-3 space-y-3 p-2 md:order-1 md:col-span-1">
        <div className="h-10 animate-pulse bg-muted" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex gap-2">
            <div className="h-16 w-24 shrink-0 animate-pulse bg-muted" />
            <div className="h-12 flex-1 animate-pulse bg-muted" />
          </div>
        ))}
      </div>

      <div className="order-2 space-y-4 md:col-span-1">
        <div className="h-40 animate-pulse bg-muted" />
        <div className="h-72 animate-pulse bg-muted" />
      </div>

      <div className="order-1 space-y-4 md:order-3 md:col-span-3">
        <div className="h-80 animate-pulse bg-muted" />
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-36 animate-pulse bg-muted" />
          ))}
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------------
// Main homepage news section
// --------------------------------------------------

async function HomeTopContent() {
  // Run authentication and all database queries concurrently.
  const [data] = await Promise.all([
    getHomeData(),
    aauth(),
  ]);

  const {
    featuredArticles,
    crimeArticles,
    internationalArticles,
  } = data;

  const mainInternational = internationalArticles[0];
  const otherInternational = internationalArticles.slice(1);

  const mainFeatured = featuredArticles[0];
  const otherFeatured = featuredArticles.slice(1);

  return (
    <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-5">

      {/* LEFT COLUMN: CRIME */}
      <aside className="order-3 min-w-0 p-2 md:order-1 md:col-span-1">
        <div className="mb-4 w-full">
          <h2 className="w-full bg-red-600 py-2 text-center text-lg font-semibold tracking-wide text-white">
            অপরাধসংক্রান্ত
          </h2>
        </div>

        {crimeArticles.length > 0 ? (
          <div>
            {crimeArticles.map((item) => (
              <Link
                key={item.id}
                href={`/newsDetails/${item.id}`}
                className="group grid grid-cols-3 border-b py-2"
              >
                <div className="col-span-1 overflow-hidden">
                  <img
                    src={item.newsPicture}
                    alt=""
                    width={128}
                    height={64}
                    loading="lazy"
                    decoding="async"
                    className="h-16 w-full border object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="col-span-2 min-w-0">
                  <h3 className="ml-2 line-clamp-4 text-sm font-semibold transition-colors group-hover:text-red-700 dark:group-hover:text-red-400">
                    {item.newsHeading}
                  </h3>
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

        <Suspense fallback={<SectionFallback />}>
          <ProOneAdvertise />
        </Suspense>
      </aside>

      {/* MIDDLE COLUMN: INTERNATIONAL */}
      <aside className="order-2 min-w-0 md:col-span-1">
        <Suspense fallback={<SectionFallback />}>
          <PremiumOneAdvertise />
        </Suspense>

        {mainInternational ? (
          <Link
            href={`/newsDetails/${mainInternational.id}`}
            className="group mx-auto mt-2 block w-full max-w-sm overflow-hidden border p-2 shadow-sm transition-shadow hover:shadow-md md:mx-0"
          >
            <div className="p-1">
              <h2 className="line-clamp-3 text-center text-lg font-semibold">
                {mainInternational.newsHeading}
              </h2>
            </div>

            <img
              src={mainInternational.newsPicture}
              alt=""
              width={400}
              height={160}
              loading="lazy"
              decoding="async"
              className="h-40 w-full object-cover"
            />
          </Link>
        ) : (
          <EmptyState
            title="উফ! এখনো কিছু দেখানোর মতো নেই।"
            description="এখনো কিছুই যুক্ত হয়নি। চোখ রাখুন!"
            buttonText="প্রথম পৃষ্ঠায় যেতে ক্লিক করুন"
            href="/"
          />
        )}

        <div className="mx-2 mt-6 border border-primary/55 bg-primary/55 shadow-md dark:border-gray-600 dark:bg-gray-700 md:mx-0">
          <div className="flex items-center justify-center gap-2 border-b border-primary/55 py-3 dark:border-gray-600">
            <Earth className="h-6 w-6 text-red-600 dark:text-amber-400" />

            <h2 className="text-lg font-extrabold uppercase tracking-wide text-gray-900 dark:text-gray-100 md:text-xl">
              বিশ্ব
            </h2>
          </div>

          <div className="relative h-64 overflow-y-auto px-4 py-3 scrollbar-thin scrollbar-thumb-amber-400 scrollbar-track-transparent md:h-92">
            {otherInternational.length > 0 ? (
              <div className="space-y-3">
                {otherInternational.map((article) => (
                  <Link
                    href={`/newsDetails/${article.id}`}
                    key={article.id}
                    className="block"
                  >
                    <div className="border border-primary/55 bg-amber-50 p-3 shadow-sm transition-colors hover:bg-amber-200 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <h3 className="line-clamp-2 text-base font-semibold text-gray-800 dark:text-gray-100">
                        {article.newsHeading}
                      </h3>
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

            <div className="pointer-events-none absolute bottom-0 left-0 h-10 w-full bg-gradient-to-t from-amber-100 to-transparent dark:from-gray-700" />

            <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 animate-bounce text-gray-500 dark:text-gray-300">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
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
      </aside>

      {/* RIGHT COLUMN: FEATURED NEWS */}
      <section className="order-1 min-w-0 md:order-3 md:col-span-3">
        {mainFeatured ? (
          <div className="mb-6 rounded-xl md:border md:p-3">
            <Link
              href={`/newsDetails/${mainFeatured.id}`}
              className="group block"
            >
              <div className="flex flex-col px-2">
                <h1 className="mb-4 line-clamp-3 p-2 text-center text-xl font-semibold md:p-4 md:text-4xl">
                  {mainFeatured.newsHeading}
                </h1>

                <div className="h-[220px] w-full overflow-hidden border md:h-80">
                  <img
                    src={mainFeatured.newsPicture}
                    alt={mainFeatured.newsHeading}
                    width={1200}
                    height={500}
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
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

        {otherFeatured.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-2 border-t-2 p-2 md:grid-cols-3 md:border">
            {otherFeatured.map((article) => (
              <Link
                href={`/newsDetails/${article.id}`}
                key={article.id}
                className="group my-1 block min-w-0"
              >
                <div className="h-[110px] w-full overflow-hidden border md:h-[150px]">
                  <img
                    src={article.newsPicture}
                    alt=""
                    width={400}
                    height={150}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="pt-2">
                  <h2 className="line-clamp-3 px-1 text-[15px] font-semibold leading-snug transition-colors group-hover:text-red-700 dark:group-hover:text-red-400 md:text-[17px]">
                    {article.newsHeading}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

// --------------------------------------------------
// Homepage
// --------------------------------------------------

export default function Home() {
  // Route tracking runs after the response work, not in the
  // critical rendering path.
  after(async () => {
    try {
      await trackRoute("Home");
    } catch (error) {
      console.error("Homepage route tracking failed:", error);
    }
  });

  return (
    <>
      {/* LIVE UPDATES */}
      <div className="mb-2 grid grid-cols-1 items-center px-2 dark:bg-black md:grid-cols-3">
        <div className="md:col-span-2">
          <Suspense fallback={<SectionFallback height="min-h-12" />}>
            <LiveUpdate />
          </Suspense>
        </div>
      </div>

      {/* TOP NEWS */}
      <Suspense fallback={<HomeTopFallback />}>
        <HomeTopContent />
      </Suspense>

      {/* ADVERTISEMENT */}
      <div className="flex items-center justify-center pt-4">
        <Suspense fallback={<SectionFallback />}>
          <DeluxeTwoAdvertise />
        </Suspense>
      </div>

      {/* POLL POPUP */}
      <PoolPopupComponent />

      {/* BELOW-FOLD NEWS */}
      <Suspense fallback={<SectionFallback height="min-h-24" />}>
        <BanglaDistrictNewsSlider />
      </Suspense>

      <Suspense fallback={<SectionFallback height="min-h-48" />}>
        <InternationalLatest />
      </Suspense>

      <Suspense fallback={<SectionFallback height="min-h-48" />}>
        <WarLatest />
      </Suspense>

      <Suspense fallback={<SectionFallback height="min-h-48" />}>
        <NationalLatest />
      </Suspense>

      {/* VIDEOS INTENTIONALLY DISABLED */}
      {/* <Videos /> */}

      <Suspense fallback={<SectionFallback height="min-h-24" />}>
        <InstagramPosts />
      </Suspense>

      {/* POLITICS AND OPINIONS */}
      <div className="my-14">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <div className="mx-4 py-4 md:mx-0">
            <Suspense fallback={<SectionFallback />}>
              <PoliticalLatest />
            </Suspense>
          </div>

          <div className="py-4">
            <Suspense fallback={<SectionFallback />}>
              <LatestOpinions />
            </Suspense>
          </div>
        </div>
      </div>

      {/* PREMIUM ADVERTISEMENT */}
      <div className="py-4">
        <Suspense fallback={<SectionFallback />}>
          <PremiarOne />
        </Suspense>
      </div>

      {/* SPORTS */}
      <div className="p-2">
        <Suspense fallback={<SectionFallback height="min-h-48" />}>
          <SportsNews />
        </Suspense>
      </div>

      {/* SCIENCE */}
      <div className="my-10 py-6">
        <div className="my-4 grid grid-cols-3 border-primary">
          <div className="col-span-3 mt-2 flex w-full max-w-sm flex-col justify-between p-2 md:col-span-1 md:mx-0">
            <Suspense fallback={<SectionFallback />}>
              <ScienceNewsHeadPost />
            </Suspense>
          </div>

          <div className="col-span-3 mt-2 grid grid-cols-1 gap-2 p-2 md:col-span-2 md:grid-cols-2">
            <Suspense fallback={<SectionFallback height="min-h-48" />}>
              <ScienceNews />
            </Suspense>
          </div>
        </div>
      </div>

      {/* SECOND PREMIUM ADVERTISEMENT */}
      <Suspense fallback={<SectionFallback />}>
        <PremiumTwoAdvertise />
      </Suspense>

      {/* ENTERTAINMENT AND CONTACT */}
      <div className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-3 md:col-span-2">
            <Suspense fallback={<SectionFallback />}>
              <PopupOnViewServer />
            </Suspense>

            <Suspense fallback={<SectionFallback height="min-h-48" />}>
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
