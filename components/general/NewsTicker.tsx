import { prisma } from "@/app/utils/db";
import Link from "next/link";
import React from "react";

export default async function NewsTicker() {
  const latestFive = await prisma.newsArticle.findMany({
    where: { newsArticleStatus: "ACTIVE" },
    select: { id: true, newsHeading: true },
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  if (!latestFive.length) return null;

  return (
    <div className="overflow-hidden bg-green-700 text-white  py-1">
      <div
        className="flex gap-10 text-sm whitespace-nowrap will-change:transform animate-ticker"
        style={{ ["--ticker-speed" as any]: "120s" }}
        aria-label="Latest headlines"
      >
        {latestFive.map((item) => (
          <Link key={`A-${item.id}`} href={`/newsDetails/${item.id}`} className="hover:underline">
            {item.newsHeading}
          </Link>
        ))}
        {latestFive.map((item) => (
          <span key={`B-${item.id}`} aria-hidden="true">
            {item.newsHeading}
          </span>
        ))}
      </div>
    </div>
  );
}
