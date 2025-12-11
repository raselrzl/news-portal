import React from "react";
import { prisma } from "@/app/utils/db";
import { EmptyState } from "@/components/general/EmptyState";
import {
  RecentNews,
  ShirShoNewsHeadings,
} from "@/components/general/homepageArticleList";
import { Clock, List, Notebook, User2 } from "lucide-react";
import { notFound } from "next/navigation";
import PrintNews from "@/components/general/printNews";
import { trackRoute } from "@/app/utils/routeTracker";
import { BesicTwoAdvertise } from "@/components/allAdvertisement/BesicTwo";
import type { Metadata } from "next";
import { StandardTwo } from "@/components/allAdvertisement/StandardTwo";
import { EnterPrizeTwo } from "@/components/allAdvertisement/EnterprizeTwo";
import { incrementArticleView } from "@/app/actions";
import NewUserTracker from "@/components/general/NewUserTracker";

async function getNewsArticle(articleId: string) {
  const newsArticle = await prisma.newsArticle.findUnique({
    where: {
      id: articleId,
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
          id: true,
          createdAt: true,
          text: true,
          speakerInfo: true,
          articleId: true,
        },
      },
      newsResource: true,
      newsPictureHeading: true,
      newsPictureCredit: true,
      newsLocation: true,
      newsReporter: true,
      newsArticleStatus: true,
      viewCount: true,
    },
  });

  if (!newsArticle) notFound();

  return newsArticle;
}

type PageParams = Promise<{ articleId: string }>;
type PageProps = { params: PageParams };

function toExcerpt(htmlOrText: string | null, max = 240) {
  const src = htmlOrText ?? "";
  const text = src
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length <= max
    ? text
    : text.slice(0, max).replace(/[,.;:!?]?\s+\S*$/, "") + "…";
}
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { articleId } = await params; // ✅ await params
  const article = await getNewsArticle(articleId); // your existing fetch

  const title = article.newsHeading ?? "খবর";
  const description = toExcerpt("বিস্তারিত জানতে লিঙ্কে ক্লিক করুন...");

  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jagrotobarta.com";
  const pic = article.newsPicture ?? "/n2.png";
  const ogImage = pic.startsWith("http") ? pic : `${base}${pic}`;

  return {
    title,
    description,
    // with metadataBase set in root layout, a relative path is fine:
    alternates: { canonical: `/newsDetails/${article.id}` },
    openGraph: {
      type: "article",
      url: `/newsDetails/${article.id}`,
      title,
      description,
      siteName: "জাগ্রত বার্তা",
      images: [{ url: ogImage, alt: title }],
    },
  };
}

type Params = Promise<{ articleId: string }>;

export default async function NewsDetailsPage({ params }: { params: Params }) {
  const { articleId } = await params;

  // Track route
  await trackRoute("NewsDetailsPage");

  // Increment view count BEFORE fetching
  await incrementArticleView(articleId);

  // Fetch updated article data
  const data = await getNewsArticle(articleId);

  if (!data) {
    return (
      <EmptyState
        title="উফ! এখনো কিছু দেখানোর মতো নেই।"
        description="এখনো কিছুই যুক্ত হয়নি। চোখ রাখুন!"
        buttonText="প্রথম পৃষ্ঠায় যেতে ক্লিক করুন"
        href="/"
      />
    );
  }

  // Format the createdAt date before passing it to the UI
  const formattedCreatedAt = data.createdAt
    ? new Date(data.createdAt).toLocaleDateString("bn-BD", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Date is not available";

  return (
    <div className="grid grid-cols-5 gap-4 my-10">
      {/* Left Sidebar */}
      <div className="col-span-5 md:col-span-1">
        <BesicTwoAdvertise />

        <div className="hidden md:block mt-10">
          <ShirShoNewsHeadings />
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-5 md:col-span-3 px-3">
        {/* Article Meta Info */}
        <div className="flex flex-col font-bold mb-1 text-xl">
          <div className="flex flex-row pl-2 items-center">
            <User2 className="size-5 mr-1" />
            <p>জাগ্রত বার্তা প্রতিবেদক</p>
          </div>
          <div className="flex flex-row  pl-2 items-center">
            <Clock className="size-5 mr-1" />
            <p className="font-bold">{formattedCreatedAt}</p>
          </div>
        </div>

        

        {/* News Content using PrintNews component */}
        <PrintNews
          id={data.id}
          newsDetails={data.newsDetails}
          newsResource={data.newsResource}
          newsPicture={data.newsPicture}
          newsLocation={data.newsLocation}
          newsPictureHeading={data.newsPictureHeading}
          newsPictureCredit={data.newsPictureCredit}
          newsHeading={data.newsHeading}
          createdAt={data.createdAt} // <--- Pass createdAt here
          quotes={data.quotes ?? []}
          newsReporter={
            data.newsReporter?.reporterName ?? "জাগ্রত বার্তা প্রতিবেদক"
          }
        />

        {/* View Counter */}
        <p className="text-sm text-gray-600 mb-3">
          👁‍🗨{data.viewCount ?? 0} বার পড়া হয়েছে
        </p>

        {/* Bottom Banner */}
        <div className=" w-full mb-6">
          <StandardTwo />
          <div>
            {/* Quotes Section */}
            {data.quotes && data.quotes.length > 0 && (
              <div className="mt-6 px-4">
                <div className="space-y-4">
                  {data.quotes.map((quote, index) => (
                    <div
                      key={index}
                      className="flex flex-col border-l-4 border-primary pl-4 bg-accent-foreground/5 p-4 rounded-3xl min-h-[100px] text-justify"
                    >
                      <p className="italic mb-6">"{quote.text}"</p>
                      <p className="text-right bottom-2 right-4 text-sm text-accent-foreground/60">
                        — {quote.speakerInfo}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
          <NewUserTracker />
      </div>

      {/* Right Sidebar */}
      <div className="col-span-5 md:col-span-1">
        <div className="flex flex-col items-center rounded-2xl mx-auto">
          <div className="mt-16">
            <RecentNews />
          </div>
          <div className="block md:hidden mt-10 border-t p-2">
            <ShirShoNewsHeadings />
          </div>
          <EnterPrizeTwo />
        </div>
      </div>
    </div>
  );
}
