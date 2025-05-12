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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((article) => (
          <Card
            key={article.id}
            className="max-w-md w-full shadow-md mx-auto my-2"
          >
            <CardHeader>
              <CardTitle className="text-lg">
                {article.newsPictureHeading}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {article.newsPictureCredit}
              </p>
            </CardHeader>

            <CardContent className="space-y-4">
              <Image
                src={article.newsPicture}
                alt="news image"
                width={400}
                height={250}
                className="rounded object-cover"
              />
              <p className="text-sm text-muted-foreground">
                {article.newsLocation}
              </p>
              <p>{article.newsDetails}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
