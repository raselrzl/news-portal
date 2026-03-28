import { prisma } from "@/app/utils/db";
import { NewsCountry } from "@/lib/generated/prisma";
import Image from "next/image";
import Link from "next/link";

// Only the 7 cities we want, in Bangla
const banglaRegionNames: Partial<Record<NewsCountry, string>> = {
  sylhet: "সিলেট",
  dhaka: "ঢাকা",
  rajshahi: "রাজশাহী",
  khulna: "খুলনা",
  chattogram: "চট্টগ্রাম",
  cumilla: "কুমিল্লা",
  rangpur: "রংপুর",
};

// Fetch latest news per region
export async function getRegionalNews() {
  const regions: NewsCountry[] = [
    "sylhet",
    "dhaka",
    "rajshahi",
    "khulna",
    "chattogram",
    "cumilla",
    "rangpur",
  ];

  const results = await Promise.all(
    regions.map((region) =>
      prisma.newsArticle.findFirst({
        where: {
          newsArticleStatus: "ACTIVE",
          newsLocation: region, // filter by enum
        },
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          newsHeading: true,
          newsPicture: true,
          newsLocation: true,
          createdAt: true,
        },
      })
    )
  );

  // Remove nulls
  return results.filter((n): n is NonNullable<typeof n> => n !== null);
}

export default async function RegionalNews() {
  const news = await getRegionalNews();

  if (!news.length)
    return <p className="text-center text-gray-500 mt-8">কোনও খবর নেই</p>;

  return (
    <section className="px-4 md:px-0 my-10">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {news.map((item) => (
          <Link
            key={item.id}
            href={`/newsDetails/${item.id}`}
            className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Image */}
            <div className="relative w-full h-40">
              <Image
                src={item.newsPicture}
                alt={item.newsHeading}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-3 bg-white dark:bg-gray-900">
              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                {item.newsLocation
                  ? banglaRegionNames[item.newsLocation] || "অজানা"
                  : "অজানা"}
              </span>

              <h3 className="text-sm md:text-base font-semibold mt-2 line-clamp-2">
                {item.newsHeading}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                {new Date(item.createdAt).toLocaleDateString("bn-BD")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}