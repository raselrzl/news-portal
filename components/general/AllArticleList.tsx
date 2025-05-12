import { prisma } from "@/app/utils/db";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

async function getData() {
  const data = await prisma.newsArticle.findMany({
    where: {
      newsArticleStatus: "ACTIVE",
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
  return data;
}

export default async function AllArticleList() {
  const data = await getData();

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {data.map((article) => (
          <div
            key={article.id}
            className="max-w-md w-full mx-auto my-1 sm:max-w-xs md:max-w-md lg:max-w-lg"
          >
            <div className="w-auto h-[140px] md:h-[170px] border-1 rounded-xl overflow-hidden">
              <Image
                src={article.newsPicture}
                alt="picture"
                width={190}
                height={150}
                className="w-full h-full object-fit"
              />
            </div>

            <div className="pt-2">
              <h2 className="text-[17px] font-semibold text-foreground/80 leading-[1.5] px-1 font-stretch-extra-condensed">
                {article.newsPictureHeading}নিশুতি রাতের নিস্তব্ধতায় হঠাৎ এক পশুপাখির ডাক শোনা গেল। 
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
