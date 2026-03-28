// SportsNews.tsx
import Link from "next/link";
import { EmptyState } from "./EmptyState";
import Image from "next/image";
import { prisma } from "@/app/utils/db";

export async function getSportsNews() {
  return await prisma.newsArticle.findMany({
    where: {
      newsCategory: "SPORTS", 
      newsArticleStatus: "ACTIVE",
    },
    select: {
      id: true,
      newsHeading: true,
      newsPicture: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });
}

// 🟢 মূল কম্পোনেন্ট
export default async function SportsNews() {
  const sports = await getSportsNews();

  if (!sports || sports.length === 0) {
    return (
      <EmptyState
        title="কোনো খেলাধুলার খবর নেই"
        description="পরে আবার চেষ্টা করুন"
        buttonText="হোমে যান"
        href="/"
      />
    );
  }

  const [main, ...rest] = sports;

  return (
    <div className="my-10">
      
<h2 className="text-2xl  md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight relative">
            খেলাধুলা
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-red-600 rounded-full md:w-24 lg:w-32"></span>
          </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        
        <Link href={`/newsDetails/${main.id}`} className="md:col-span-2">
          <div className="relative h-80 md:h-[430px] rounded-2xl overflow-hidden group">
            
            <Image
              src={main.newsPicture}
              alt={main.newsHeading}
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-0 p-5">
              <h3 className="text-white text-xl md:text-3xl font-bold leading-tight">
                {main.newsHeading}
              </h3>
            </div>
          </div>
        </Link>

        <div className="flex flex-col gap-4">
          {rest.map((item) => (
            <Link key={item.id} href={`/newsDetails/${item.id}`}>
              <div className="flex gap-3 group">
                
                <div className="relative w-32 h-24 shrink-0 rounded-2xl overflow-hidden">
                  <Image
                    src={item.newsPicture}
                    alt={item.newsHeading}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* 📝 শিরোনাম */}
                <div>
                  <h4 className="text-md font-semibold line-clamp-2 group-hover:text-green-600 transition">
                    {item.newsHeading}
                  </h4>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}