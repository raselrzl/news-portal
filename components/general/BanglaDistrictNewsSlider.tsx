import { prisma } from "@/app/utils/db";
import { NewsCountry } from "@/lib/generated/prisma";
import DistrictSliderClient from "./DistrictSliderClient";

// Get all Bangladeshi districts from enum
const districts = Object.values(NewsCountry);

// ✅ Set priority districts
const priority = ["moulvibazar", "sylhet"];

async function getLatestPerDistrict() {
  const districts = Object.values(NewsCountry);

  // Query 1: Find the latest article date for each district.
  const latestDates = await prisma.newsArticle.groupBy({
    by: ["newsLocation"],
    where: {
      newsLocation: {
        in: districts,
      },
      newsArticleStatus: "ACTIVE",
    },
    _max: {
      createdAt: true,
    },
  });

  const latestDistrictDates = latestDates.filter(
    (item) => item.newsLocation && item._max.createdAt,
  );

  if (latestDistrictDates.length === 0) {
    return [];
  }

  // Query 2: Fetch the latest articles for those districts.
  const articles = await prisma.newsArticle.findMany({
    where: {
      newsArticleStatus: "ACTIVE",
      OR: latestDistrictDates.map((item) => ({
        newsLocation: item.newsLocation!,
        createdAt: item._max.createdAt!,
      })),
    },
    select: {
      id: true,
      newsLocation: true,
      newsHeading: true,
      newsDetails: true,
      newsPicture: true,
      newsPictureHeading: true,
      reporterPublicName: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // Keep only one article per district.
  const articleByDistrict = new Map<
    string,
    (typeof articles)[number]
  >();

  for (const article of articles) {
    if (
      article.newsLocation &&
      !articleByDistrict.has(article.newsLocation)
    ) {
      articleByDistrict.set(article.newsLocation, article);
    }
  }

  const priority = ["MOULVIBAZAR", "SYLHET"];

  return Array.from(articleByDistrict.values()).sort((a, b) => {
    const aLocation = String(a.newsLocation).toUpperCase();
    const bLocation = String(b.newsLocation).toUpperCase();

    const aPriority = priority.indexOf(aLocation);
    const bPriority = priority.indexOf(bLocation);

    if (aPriority !== -1 || bPriority !== -1) {
      if (aPriority === -1) return 1;
      if (bPriority === -1) return -1;
      return aPriority - bPriority;
    }

    return aLocation.localeCompare(bLocation);
  });
}

export default async function BanglaDistrictNewsSlider() {
  const articles = await getLatestPerDistrict();
  if (!articles.length) return null;

  return <DistrictSliderClient articles={articles} />;
}