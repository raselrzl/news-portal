import React, { cache, Suspense } from "react";
import type { Metadata } from "next";
import { Clock, Eye, User2 } from "lucide-react";
import { notFound } from "next/navigation";

import { prisma } from "@/app/utils/db";
import { incrementArticleView } from "@/app/actions";
import { trackRoute } from "@/app/utils/routeTracker";

import PrintNews from "@/components/general/printNews";
import {
  RecentNews,
  ShirShoNewsHeadings,
} from "@/components/general/homepageArticleList";

import { StandardTwo } from "@/components/allAdvertisement/StandardTwo";
import { EnterPrizeTwo } from "@/components/allAdvertisement/EnterprizeTwo";

import NewUserTracker from "@/components/general/NewUserTracker";
import PoolPopupComponent from "@/components/general/PoolPopupComponent";

type PageParams = Promise<{ articleId: string }>;

type PageProps = {
  params: PageParams;
};

/* -------------------------------------------------------
   ARTICLE QUERY
------------------------------------------------------- */

const getNewsArticle = cache(async (articleId: string) => {
  return prisma.newsArticle.findUnique({
    where: {
      id: articleId,
    },
    select: {
      id: true,
      createdAt: true,
      reporterPublicName: true,
      newsDetails: true,
      newsHeading: true,
      newsPicture: true,
      newsResource: true,
      newsPictureHeading: true,
      newsPictureCredit: true,
      newsLocation: true,

      newsReporter: {
        select: {
          reporterName: true,
        },
      },

      viewCount: true,

      quotes: {
        select: {
          id: true,
          createdAt: true,
          text: true,
          speakerInfo: true,
          articleId: true,
        },
      },
    },
  });
});

/* -------------------------------------------------------
   SEO
------------------------------------------------------- */

function toExcerpt(text: string | null, max = 240) {
  const cleanText = (text ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

  if (cleanText.length <= max) return cleanText;

  return cleanText.slice(0, max).replace(/[,.;:!?]?\s+\S*$/, "") + "…";
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { articleId } = await params;
  const article = await getNewsArticle(articleId);

  if (!article) {
    return {
      title: "খবর পাওয়া যায়নি",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = article.newsHeading ?? "খবর";

  const description =
    toExcerpt(article.newsDetails) || "জাগ্রত বার্তার সর্বশেষ সংবাদ পড়ুন।";

  const base = (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jagrotobarta.com"
  ).replace(/\/$/, "");

  const picture = article.newsPicture || "/n2.png";

  const ogImage = /^https?:\/\//i.test(picture)
    ? picture
    : `${base}${picture.startsWith("/") ? "" : "/"}${picture}`;

  const canonical = `/newsDetails/${article.id}`;

  return {
    title,
    description,

    alternates: {
      canonical,
    },

    openGraph: {
      type: "article",
      url: canonical,
      title,
      description,
      siteName: "জাগ্রত বার্তা",
      publishedTime: article.createdAt.toISOString(),
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/* -------------------------------------------------------
   BACKGROUND TRACKING
------------------------------------------------------- */

async function PageBackgroundTasks({ articleId }: { articleId: string }) {
  await Promise.allSettled([
    trackRoute("NewsDetailsPage"),
    incrementArticleView(articleId),
  ]);

  return null;
}

/* -------------------------------------------------------
   SIDEBARS
------------------------------------------------------- */

function LeftSidebar() {
  return (
    <div className="hidden md:block mt-20">
      <ShirShoNewsHeadings />
    </div>
  );
}

function RightSidebar() {
  return (
    <div className="flex flex-col items-center mx-auto">
      <div className="mt-10 w-full">
        <RecentNews />
      </div>

      <div className="block md:hidden mt-8 border-t border-gray-300 p-2 w-full">
        <ShirShoNewsHeadings />
      </div>

      <EnterPrizeTwo />
    </div>
  );
}

/* -------------------------------------------------------
   MAIN PAGE
------------------------------------------------------- */

export default async function NewsDetailsPage({ params }: PageProps) {
  const { articleId } = await params;

  const data = await getNewsArticle(articleId);

  if (!data) {
    notFound();
  }

  const formattedCreatedAt = new Intl.DateTimeFormat("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(data.createdAt);

  const reporterName = data.reporterPublicName || "জাগ্রত বার্তা প্রতিবেদক";

  return (
    <>
      {/* BACKGROUND TRACKING */}
      <Suspense fallback={null}>
        <PageBackgroundTasks articleId={articleId} />
      </Suspense>

      <div className="bg-white text-gray-950 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 max-w-[1500px] mx-auto px-2 md:px-4 py-5 md:py-8">
          {/* LEFT SIDEBAR */}
          <aside className="hidden md:block md:col-span-1">
            <Suspense fallback={null}>
              <LeftSidebar />
            </Suspense>
          </aside>

          {/* MAIN NEWSPAPER COLUMN */}
          <main className="col-span-1 md:col-span-3 min-w-0">
            {/* NEWSPAPER ARTICLE PAPER */}
            <article className="bg-white">
              {/* TOP EDITORIAL RULE */}
              <div className="border-t-[3px] border-black mb-4" />

              {/* PUBLICATION HEADER */}
              <div className="flex items-center justify-between gap-2 pb-3 mb-4 text-[11px] md:text-xs text-gray-600">
                <span className="font-semibold tracking-wide">
                  জাগ্রত বার্তা
                </span>

                <span className="text-right">
                  প্রকাশিত: {formattedCreatedAt}
                </span>
              </div>

              {/* MAIN NEWS CONTENT */}
              <div className="newsprint-content">
                <PrintNews
                  id={data.id}
                  newsDetails={data.newsDetails}
                  newsResource={data.newsResource}
                  reporterPublicName={data.reporterPublicName}
                  newsPicture={data.newsPicture}
                  newsLocation={data.newsLocation}
                  newsPictureHeading={data.newsPictureHeading}
                  newsPictureCredit={data.newsPictureCredit}
                  newsHeading={data.newsHeading}
                  createdAt={data.createdAt}
                  quotes={data.quotes ?? []}
                  newsReporter={
                    data.newsReporter?.reporterName ?? "জাগ্রত বার্তা প্রতিবেদক"
                  }
                />
              </div>

              {/* REPORTER SIGNATURE BELOW ARTICLE */}
              <div className="mt-5 mb-5 border-gray-300 pt-3 flex justify-end">
                <div className="text-right">
                  <p className="text-sm md:text-base font-bold text-gray-900">
                    {reporterName} :
                  </p>

                  <p className="text-xs text-gray-500 mt-1">জাগ্রত বার্তা</p>
                </div>
              </div>

              {/* ARTICLE VIEWS */}
              <div className="flex items-center gap-2 py-2 mb-5 text-xs text-gray-500">
                <Eye className="size-4" />
                <span>{data.viewCount ?? 0} বার পড়া হয়েছে</span>
              </div>

              {/* ADVERTISEMENT */}
              <div className="w-full mb-6">
                <StandardTwo />
              </div>

              {/* QUOTES */}
              {data.quotes.length > 0 && (
                <section className="my-6 border-t border-gray-300 pt-5">
                  <h2 className="text-base font-bold mb-4 border-b border-gray-300 pb-2">
                    বিশেষ বক্তব্য
                  </h2>

                  <div className="space-y-4">
                    {data.quotes.map((quote) => (
                      <blockquote
                        key={quote.id}
                        className="border-l-[3px] border-gray-700 pl-4 py-2"
                      >
                        <p className="text-sm md:text-base italic leading-8 text-gray-800 text-justify">
                          “{quote.text}”
                        </p>

                        <p className="text-right text-sm font-semibold text-gray-600 mt-3">
                          — {quote.speakerInfo}
                        </p>
                      </blockquote>
                    ))}
                  </div>
                </section>
              )}
            </article>

            {/* USER TRACKING */}
            <NewUserTracker />

            {/* POLL */}
            {/*    <PoolPopupComponent /> */}
          </main>

          {/* RIGHT SIDEBAR */}
          <aside className="col-span-1 md:col-span-1">
            <Suspense fallback={null}>
              <RightSidebar />
            </Suspense>
          </aside>
        </div>
      </div>
    </>
  );
}
