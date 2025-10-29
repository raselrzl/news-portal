import { prisma } from "@/app/utils/db";
import Link from "next/link";
import { EmptyState } from "../general/EmptyState";

export async function getEconomyNews() {
  return await prisma.newsArticle.findMany({
    where: { newsCategory: "ECONOMY" },
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
  });
}
export async function EconomyNews() {
  const economy = await getEconomyNews();

  const convertToBanglaNumber = (number: number): string => {
    const banglaDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return number
      .toString()
      .split("")
      .map((digit) => banglaDigits[parseInt(digit)])
      .join("");
  };

  return (
    <>
      <div className="min-h-[450px] overflow-y-auto">
        {economy && economy.length > 0 ? (
          economy.slice(0, 10).map((item, index) => (
            <Link key={item.id} href={`/newsDetails/${item.id}`}>
              <div className="max-w-sm rounded-lg overflow-hidden shadow-md border m-2 px-2 py-1 hover:bg-accent-foreground/5 transition-opacity">
                <div className="p-1 flex gap-2 items-start">
                  <span className="text-lg font-bold text-primary">
                    {convertToBanglaNumber(index + 1)}.
                  </span>
                  <h2 className="text-lg text-accent-foreground font-semibold line-clamp-1">
                    {item.newsHeading}
                  </h2>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <EmptyState
            title="Oops! There's nothing to show yet."
            description="Nothing has been added yet. Stay tuned!"
            buttonText="Homepage"
            href="/"
          />
        )}
      </div>
    </>
  );
}
