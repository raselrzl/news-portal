import React, { Suspense } from "react";
import { prisma } from "../utils/db";
import { EmptyState } from "@/components/general/EmptyState";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "@/components/general/socialLink";
import { Clock, Loader2, Notebook, StepForward } from "lucide-react";
import { aauth } from "../actions";
import YouTubeVideo from "@/components/general/YouTubeVideo";
import { Card, CardHeader } from "@/components/ui/card";
import { Contact } from "@/components/general/Contact";
import {
  Bachaikreto,
  Binodon,
  ScienceNews,
  ScienceNewsHeadPost,
} from "@/components/general/homepageArticleList";
import {
  PremiarOne,
  PremiarTwo,
  PremiumOneAdvertise,
} from "@/components/general/FetchAllAdvertisement";
import { SorboseshAndJonoprioTab } from "@/components/SorboseshAndJonoprioTab";
import { JsonToHtml } from "@/components/richTextEditor/JsonToHtml";
import { isJson } from "../utils/isJson";
import Videos from "@/components/general/Videos";

async function getData() {
  const [lastFeaturedArticle, latestNews, InternationalAll] = await Promise.all(
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
        take: 7,
      }),

      prisma.newsArticle.findMany({
        where: { newsCategory: "ENTERTAINMENT" },
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
    latestNews,
    InternationalAll,
  };
}
export default async function Home() {
  const { lastFeaturedArticle, latestNews, InternationalAll } = await getData();

  const session = await aauth();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-10">
        <div className="order-3 md:order-1 md:col-span-1 p-2 border-1">
          <div className="flex flex-row gap-2 text-center items-center justify-center">
            <Clock />
            <h1 className="text-2xl font-bold pt-2">সাম্প্রতিক</h1>
          </div>
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

          <img
            src="/shoe.gif"
            alt="gif image"
            className="w-full h-[100px] rounded-xl mt-2"
          />
          <div className="mt-10 text-left flex-col hidden sm:block">
            <p className="text-sm font-semibold text-justify">
              সর্বশেষ আপডেট এবং এক্সক্লুসিভ কন্টেন্টের জন্য আমাদের সোশ্যাল
              মিডিয়া একাউন্টে ফলো করুন।
            </p>
            <SocialLinks />
          </div>
        </div>
        <div className="order-2 md:order-2 md:col-span-1">
          <div className=" grid grid-cols-1">
            <div>
              <Suspense fallback={<Loader2 />}>
                <PremiarOne />
              </Suspense>
            </div>

            {InternationalAll && Object.keys(InternationalAll).length > 0 ? (
              <Link href={`/newsDetails/${InternationalAll[0].id}`}>
                <div className="max-w-sm rounded-lg overflow-hidden shadow-md border mt-2 p-2">
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
            <div className="bg-primary-foreground dark:bg-accent-foreground/5 mt-4 pt-2 border-1">
              <h1 className="font-bold text-center text-2xl">"শীর্ষ খবর"</h1>
              <div className="relative h-56 overflow-y-scroll mx-4 md:mx-0 md:px-1  mb-6 px-4">
                {InternationalAll &&
                Object.keys(InternationalAll).length > 0 ? (
                  <div className="rounded-xl">
                    {InternationalAll.slice(1).map((article) => (
                      <Link
                        href={`/newsDetails/${article.id}`}
                        key={article.id}
                      >
                        <div className="max-w-sm rounded-lg overflow-hidden shadow-md border m-2">
                          <div className="p-1">
                            <h2 className="text-lg  font-semibold line-clamp-1 pl-1">
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

                {/* Fade & Scroll Hint */}
                <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-accent-foreground/5 to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                  <svg
                    className="w-5 h-5 text-gray-400 animate-bounce"
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
          <div className="flex justify-center items-center pt-4 border-t-1">
            <PremiumOneAdvertise />
          </div>
        </div>
        <div className="order-1 md:order-3 md:col-span-3">
          {lastFeaturedArticle &&
          Object.keys(lastFeaturedArticle).length > 0 ? (
            <div className="mb-6 max-h-[290px] md:border-1 md:p-2">
              {lastFeaturedArticle && (
                <Link href={`/newsDetails/${lastFeaturedArticle[0].id}`}>
                  <div className="grid grid-cols-5 px-2">
                    <div className="w-full max-h-[240px] md:max-h-[270px] border md:rounded-xl overflow-hidden col-span-5 md:col-span-3">
                      <Image
                        src={lastFeaturedArticle[0].newsPicture}
                        alt="picture"
                        width={500}
                        height={270}
                        className="w-full h-full object-fit"
                      />
                    </div>
                    <div className="pl-1 md:pl-4 col-span-5 md:col-span-2">
                      <h2 className="text-lg md:text-2xl font-semibold mt-2 pl-2 md:pl-0 line-clamp-2 md:line-clamp-5">
                        {lastFeaturedArticle[0].newsHeading}
                      </h2>
                      {isJson(lastFeaturedArticle[0].newsDetails) ? (
                        <div className="text-sm md:text-lg text-accent-foreground/80 mb-2 md:mt-2 line-clamp-1 md:line-clamp-3 pl-2 md:p">
                          <JsonToHtml
                            json={JSON.parse(
                              lastFeaturedArticle[0].newsDetails
                            )}
                          />
                        </div>
                      ) : (
                        <p className="text-sm md:text-lg text-accent-foreground/80 mb-2 md:mt-2 line-clamp-1 md:line-clamp-3 pl-2 md:p">
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

          {lastFeaturedArticle &&
          Object.keys(lastFeaturedArticle).length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2 md:border-1 mt-23 border-t-2">
              {lastFeaturedArticle.slice(1, 7).map((article) => (
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
        </div>
      </div>

      <Videos />

      <SorboseshAndJonoprioTab />

      {/*  Science section */}
      <div className="border-y-4 my-2 py-6 border-primary">
        <div className="grid grid-cols-3 border-primary my-4">
          <div className="col-span-3 md:col-span-1 p-2 mt-2 flex flex-col justify-between">
            {" "}
            <ScienceNewsHeadPost />
            <img
              src="/shoe.gif"
              alt="gif image"
              className="w-full h-[100px] rounded-xl mt-2"
            />
          </div>
          <div className="col-span-3 md:col-span-2 mt-2 grid grid-cols-1 md:grid-cols-2  gap-2 p-2">
            <ScienceNews />
          </div>
        </div>
      </div>
      {/* binodonsection */}
      <div className="mb-10 pb-6">
        <div className=" grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-3 md:col-span-2">
            <Binodon />
          </div>
          <div className="col-span-3 md:col-span-1 md:mt-12">
            <Contact />
          </div>
        </div>
        <img
          src="/save1.gif"
          alt="gif image"
          className="w-full h-[100px] rounded-xl px-8 md:px-32"
        />
      </div>
    </>
  );
}
