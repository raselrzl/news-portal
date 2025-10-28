import { prisma } from "@/app/utils/db";
import { isJson } from "@/app/utils/isJson";
import { SizeOneAdvertise } from "@/components/allAdvertisement/SizeOne";
import { SizeTwoAdvertise } from "@/components/allAdvertisement/SizeTwo";
import { StandardOne } from "@/components/allAdvertisement/StandardOne";
import { SuperOne } from "@/components/allAdvertisement/SuperOne";
import { SuperTwo } from "@/components/allAdvertisement/SuperTwo";
import { EmptyState } from "@/components/general/EmptyState";
import { RecentNews } from "@/components/general/homepageArticleList";
import { JsonToHtml } from "@/components/richTextEditor/JsonToHtml";
import { PaginationComponent } from "@/components/general/PaginationComponent";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { formatRelativeTime } from "@/app/utils/formatRelativeTime";

const locations = [
  { name: "bagerhat" },
  { name: "bandarban" },
  { name: "barguna" },
  { name: "barishal" },
  { name: "bhola" },
  { name: "bogura" },
  { name: "brahmanbaria" },
  { name: "chandpur" },
  { name: "chapainawabganj" },
  { name: "chattogram" },
  { name: "chuadanga" },
  { name: "coxsbazar" },
  { name: "cumilla" },
  { name: "dhaka" },
  { name: "dinajpur" },
  { name: "faridpur" },
  { name: "feni" },
  { name: "gaibandha" },
  { name: "gazipur" },
  { name: "gopalganj" },
  { name: "habiganj" },
  { name: "jamalpur" },
  { name: "jashore" },
  { name: "jhenaidah" },
  { name: "joypurhat" },
  { name: "khagrachhari" },
  { name: "khulna" },
  { name: "kishoreganj" },
  { name: "kurigram" },
  { name: "kushtia" },
  { name: "lakshmipur" },
  { name: "lalmonirhat" },
  { name: "madaripur" },
  { name: "magura" },
  { name: "manikganj" },
  { name: "meherpur" },
  { name: "moulvibazar" },
  { name: "munshiganj" },
  { name: "mymensingh" },
  { name: "naogaon" },
  { name: "narail" },
  { name: "narayanganj" },
  { name: "narsingdi" },
  { name: "natore" },
  { name: "nawabganj" },
  { name: "netrokona" },
  { name: "nilphamari" },
  { name: "noakhali" },
  { name: "pabna" },
  { name: "panchagarh" },
  { name: "patuakhali" },
  { name: "pirojpur" },
  { name: "rajbari" },
  { name: "rajshahi" },
  { name: "rangamati" },
  { name: "rangpur" },
  { name: "satkhira" },
  { name: "shariatpur" },
  { name: "sherpur" },
  { name: "sirajganj" },
  { name: "sunamganj" },
  { name: "sylhet" },
  { name: "tangail" },
  { name: "thakurgaon" }
];


async function getCountryNews(country: string) {
  const dbCountry = country;
  const allArticles = await prisma.newsArticle.findMany({
    where: {
      newsArticleStatus: "ACTIVE",
      newsLocation: dbCountry as any,
    },
    orderBy: { createdAt: "desc" },
    take: 7,
  });

  const lastFeaturedArticle = await prisma.newsArticle.findFirst({
    where: {
      newsArticleStatus: "ACTIVE",
      isFeatured: true,
      newsLocation: dbCountry as any,
    },
    orderBy: { createdAt: "desc" },
  });

  return { allArticles, lastFeaturedArticle };
}

// Fetch paginated list starting after the first 7 articles
async function getPaginatedCountryArticles(
  country: string,
  page: number = 1,
  pageSize: number = 10
) {
  const skip = 7 + (page - 1) * pageSize; // skip first 7
  const [data, totalCount] = await Promise.all([
    prisma.newsArticle.findMany({
      where: { newsArticleStatus: "ACTIVE", newsLocation: country as any },
      orderBy: { createdAt: "desc" },
      take: pageSize,
      skip: skip,
    }),
    prisma.newsArticle.count({
      where: { newsArticleStatus: "ACTIVE", newsLocation: country as any },
    }),
  ]);

  return {
    articles: data,
    totalPages: Math.ceil((totalCount - 7) / pageSize),
    totalCount, // ✅ return total count
  };
}

export default async function CountryNews({
  searchParams,
}: {
  searchParams: Promise<{ country?: string; page?: string }>;
}) {
  const params = await searchParams;
  const country = params?.country || "dhaka";
  const currentPage = Number(params?.page) || 1;

  const { allArticles, lastFeaturedArticle } = await getCountryNews(country);
  const { articles, totalPages, totalCount } =
    await getPaginatedCountryArticles(country, currentPage);

  const activeCountry = locations.find(
    (c) => c.name.toLowerCase() === country.toLowerCase()
  ) ?? {
    name: country,
    flag: "/flags/default.png",
  };

  return (
    <>
      <div className="grid grid-cols-5 mt-4 md:mt-8">
        <div className="col-span-5 md:col-span-1 pr-1">
          <div className="hidden md:block sticky top-40 max-h-[400px] overflow-y-auto pb-4 border-2 px-2">
            <div className="pb-2 mb-6 pt-4">
              <div className="flex flex-wrap gap-2">
                {locations.map((c) => (
                  <Link
                    key={c.name}
                    href={`?country=${encodeURIComponent(c.name)}`}
                    className={`flex items-center gap-2 border rounded-lg px-3 py-1 transition-all ${
                      c.name === country
                        ? "bg-primary text-white border-primary"
                        : "hover:bg-muted"
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase">{c.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="items-center justify-center md:absolute my-4">
            <StandardOne country={country} />
          </div>
        </div>

        <div className="col-span-5 md:col-span-3">
          <div className="flex items-center gap-2 pl-2 mb-2">
            <h1 className="font-extrabold">{activeCountry.name} Latest</h1>
          </div>

          {lastFeaturedArticle ? (
            <div className="mb-6 max-h-[320px] md:border-1 md:p-2">
              <Link href={`/newsDetails/${lastFeaturedArticle.id}`}>
                <div className="grid grid-cols-5">
                  <div className="w-full max-h-[240px] md:max-h-[270px] border md:rounded-xl overflow-hidden col-span-5 md:col-span-3 mt-10 md:mt-0">
                    <img
                      src={lastFeaturedArticle.newsPicture}
                      alt="picture"
                      width={500}
                      height={270}
                      className="w-full h-full object-fit"
                    />
                  </div>
                  <div className="pl-1 md:pl-4 col-span-5 md:col-span-2">
                    <h2 className="text-lg md:text-2xl font-semibold mt-2 pl-2 md:pl-0">
                      {lastFeaturedArticle.newsHeading}
                      <span className="md:hidden sm:block">Details....</span>
                    </h2>

                    {isJson(lastFeaturedArticle.newsDetails) ? (
                      <div className="text-sm md:text-lg text-accent-foreground/80 mb-2 md:mt-2 line-clamp-1 md:line-clamp-3 pl-2">
                        <JsonToHtml
                          json={JSON.parse(lastFeaturedArticle.newsDetails)}
                        />
                      </div>
                    ) : (
                      <p className="text-sm md:text-lg text-accent-foreground/80 mb-2 md:mt-2 line-clamp-1 md:line-clamp-3 pl-2">
                        {lastFeaturedArticle.newsDetails}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            <EmptyState
              title="Oops! There's nothing to show yet."
              description="No featured article available yet."
              buttonText="Homepage"
              href="/"
            />
          )}

          <div className="px-2 md:px-0">
            <SuperOne country={country} />
          </div>

          {allArticles?.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 py-6 px-2 border-y-1 md:border-1 my-10">
              {allArticles
                .filter((a) => a.id !== lastFeaturedArticle?.id)
                .map((article) => (
                  <Link href={`/newsDetails/${article.id}`} key={article.id}>
                    <div className="max-w-md w-full mx-auto my-1 sm:max-w-xs md:max-w-md lg:max-w-lg">
                      <div className="w-auto h-[110px] md:h-[150px] border-1 rounded-xl overflow-hidden">
                        <img
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
              title="Oops! There's nothing to show yet."
              description="No article available yet. Stay tuned!"
              buttonText="Homepage"
              href="/"
            />
          )}

          <SuperTwo country={country} />

          {/* More from Country with pagination */}
          <div className="mt-10 border-t pt-6">
            <div className="flex items-center justify-between bg-amber-700 px-4 rounded-md pb-1 mb-4">
              <h2 className="flex items-center font-extrabold text-sm md:text-lg border-l-8 border-primary pl-2">
                More in {activeCountry.name}
              </h2>

              <div >
                <PaginationComponent
                  totalPages={totalPages}
                  currentPage={currentPage}
                />
              </div>
            </div>

            {articles.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
                  {articles.map((article) => (
                    <Link href={`/newsDetails/${article.id}`} key={article.id}>
                      <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary relative grid grid-cols-3 border-0 px-2 py-2">
                        <div className="col-span-1">
                          <img
                            src={article.newsPicture}
                            alt={article.newsPictureHeading}
                            width={56}
                            height={60}
                            className="h-[60px] w-full object-fill rounded-xl"
                          />
                        </div>

                        <div className="col-span-2">
                          <h1 className="text-md font-bold">
                            {article.newsHeading}
                          </h1>
                          <p className="text-xs text-muted-foreground text-right font-bold italic pr-2">
                            {formatRelativeTime(article.createdAt)}
                          </p>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
                <div className=""> <PaginationComponent
                  totalPages={totalPages}
                  currentPage={currentPage}
                /></div>
               
              </>
            ) : (
              <EmptyState
                title="No more news yet."
                description="Please check again later."
                buttonText="Homepage"
                href="/"
              />
            )}
          </div>
        </div>

        <div className="col-span-5 md:col-span-1 px-2 pt-3 gap-4">
          <SizeOneAdvertise country={country} />
          <div className="my-4">
            <RecentNews />
          </div>
          <div className="mt-4">
            <SizeTwoAdvertise country={country} />
          </div>
        </div>
      </div>
    </>
  );
}
