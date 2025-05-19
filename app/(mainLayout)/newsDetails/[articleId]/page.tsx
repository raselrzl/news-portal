import { prisma } from "@/app/utils/db";
import { EmptyState } from "@/components/general/EmptyState";
import {
  ShirShoNewsHeadings,
  SirshoNewsList,
} from "@/components/general/homepageArticleList";
import {
  Clock,
  LocateIcon,
  Notebook,
  SquarePlay,
  User,
  User2,
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getNewsArticle(articleId: string) {
  const newsArticle = prisma.newsArticle.findUnique({
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
  });
  if (!newsArticle) {
    return notFound();
  }
  return newsArticle;
}

type Params = Promise<{ articleId: string }>;

export default async function NewsDetailsPage({ params }: { params: Params }) {
  const { articleId } = await params;
  const data = await getNewsArticle(articleId);

  if (!data)
    return (
      <EmptyState
        title="উফ! এখনো কিছু দেখানোর মতো নেই।"
        description="এখনো কিছুই যুক্ত হয়নি। চোখ রাখুন!"
        buttonText="প্রথম পৃষ্ঠায় যেতে ক্লিক করুন"
        href="/"
      />
    );

  return (
    <div className="grid grid-cols-5 gap-4 my-10">
      <div className="col-span-5 md:col-span-1">
        <div className="relative w-full h-[100px] md:h-[200px] px-10">
          <Image
            src="/gif111.gif"
            alt="image"
            fill
            className="object-cover" // or "object-cover" if you want it to fill the box
            priority // Optional: loads the image faster
          />
        </div>
        <div className="hidden md:block mt-10">
          <ShirShoNewsHeadings />
        </div>
      </div>
      <div className="col-span-5 md:col-span-3">
        <div className="col-span-4 md:col-span-3">
          <h1 className="text-3xl font-bold mb-4 pl-4">{data?.newsHeading}</h1>
          <div className="flex flex-row font-bold mb-1">
            <div className="flex flex-row pl-4">
              {" "}
              <Notebook className="size-4 pt-1" />
              <p className="">পূর্ণ খবর</p>
            </div>
            <div className="flex flex-row pl-2">
              {" "}
              <User2 className="size-4 pt-1" />
              <p className="">জাগ্রত প্রতিবেদক</p>
            </div>
            <div className="flex flex-row pl-2">
              <Clock className="size-4 pt-1" />
              <p className=" font-bold ">
                {data.createdAt
                  ? new Date(data.createdAt).toLocaleDateString("bn-BD", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "তারিখ পাওয়া যায়নি"}
              </p>
            </div>
          </div>

          <div className="w-full">
            <img
              src={data?.newsPicture}
              alt="Description"
              className="w-full h-[300px] md:h-[400px] block md:px-6"
            />
            <div className="flex justify-center mt-2 px-2 mb-10 text-sm text-accent-foreground/75">
              <p className="mr-4">বিবরণ: {data?.newsPictureHeading}</p>

              <p>কৃতিত্ব: {data?.newsPictureCredit}</p>
            </div>
            <div className="whitespace-pre-line text-md mg:text-lg">
              <div className="flex flex-row ml-6">
                <SquarePlay />
                <h1 className="text-xl font-bold pl-2 mr-4">পূর্ণ বিবরণ</h1>
                <LocateIcon />
                <p className=" text-xl font-bold">{data?.newsLocation}</p>
              </div>
              <p className="p-6 text-justify">{data?.newsDetails}</p>
            </div>

            <p className="ml-6 font-extrabold">
              {">>>"}
              {data?.newsResource}
            </p>
          </div>
          {data.quotes && data.quotes.length > 0 && (
            <div className="mt-6 px-4">
              <div className="space-y-4 ">
                {data.quotes.map((quote, index) => (
                  <div
                    key={index}
                    className="relative border-l-4 border-primary pl-4 bg-accent-foreground/5 p-4 rounded-3xl min-h-[100px] text-justify"
                  >
                    <p className="italic mb-6">"{quote.text}"</p>
                    <p className="absolute bottom-2 right-4 text-sm text-accent-foreground/60">
                      — {quote.speakerInfo}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-5 md:col-span-1">
        <div className=" flex flex-col items-center rounded-2xl mx-auto">
          <Image
            src="/gif111.gif"
            alt="image"
            width={300}
            height={100}
            className="object-fill w-[350px] h-[100px] md:h-[200px] rounded-xl mb-10"
            priority
          />
          <div className="border-t-1 p-2">
            <h1 className="font-extrabold mb-2 ml-6">
              {`>>>`}সাম্প্রতিক সংবাদ
            </h1>
            <SirshoNewsList />
            
          </div>
          <div className="block md:hidden mt-10 border-t-1 p-2">
              <ShirShoNewsHeadings />
            </div>
        </div>
      </div>
    </div>
  );
}
