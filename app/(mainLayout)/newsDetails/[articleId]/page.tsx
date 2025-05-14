import { prisma } from "@/app/utils/db";
import { EmptyState } from "@/components/general/EmptyState";
import { notFound } from "next/navigation";

async function getNewsArticle(articleId: string) {
  const newsArticle = prisma.newsArticle.findUnique({
    where: {
      id: articleId
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
    <div className="grid grid-cols-5 gap-4 mt-10 items-center">
      <div className="col-span-5 md:col-span-4 grid grid-cols-4 gap-4">
        <div className="col-span-4 md:col-span-1 flex items-center justify-center">
          <p className="text-center">Left sidebar</p>
        </div>
        <div className="col-span-4 md:col-span-3">
          <h1 className="text-3xl font-bold mb-6">{data?.newsHeading}</h1>
          <div className="w-full">
            <img
              src={data?.newsPicture}
              alt="Description"
              className="w-full h-[300px] md:h-[400px] block"
            />
            <div className="flex justify-between mt-2 px-2">
              <p>{data?.newsPictureHeading}</p>
              <p>
                {data.createdAt
                  ? new Date(data.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "No date available"}
              </p>
              <p> PhoteCredit:{data?.newsPictureCredit}</p>
            </div>
            <div className="whitespace-pre-line text-md mg:text-lg">
              {data?.newsDetails}
            </div>
            <p>{data?.newsLocation}</p>
            <p>{data?.newsResource}</p>
            <p>
              {data.createdAt
                ? new Date(data.createdAt).toLocaleDateString()
                : "No date available"}
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-5 md:col-span-1 flex justify-center items-center">
        <p className="text-center">Right side bar</p>
      </div>
    </div>
  );
}
