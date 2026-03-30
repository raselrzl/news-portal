import { prisma } from "@/app/utils/db";
import { NewsCountry } from "@/lib/generated/prisma";
import DistrictSliderClient from "./DistrictSliderClient";

// Get all Bangladeshi districts from enum
const districts = Object.values(NewsCountry);

// ✅ Set priority districts
const priority = ["moulvibazar", "sylhet"];

async function getLatestPerDistrict() {
  const results = await Promise.all(
    districts.map(async (district) => {
      const article = await prisma.newsArticle.findFirst({
        where: {
          newsLocation: district,
          newsArticleStatus: "ACTIVE",
        },
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          newsHeading: true,
          newsDetails: true,
          newsPicture: true,
          newsPictureHeading: true,
          createdAt: true,
        },
      });

      return article ? { ...article, district } : null;
    })
  );

  return results
    .filter((item): item is any => item !== null)
    .sort((a, b) => {
      // 1️⃣ Priority districts first
      const aPriority = priority.indexOf(a.district);
      const bPriority = priority.indexOf(b.district);

      if (aPriority !== -1 && bPriority === -1) return -1;
      if (aPriority === -1 && bPriority !== -1) return 1;
      if (aPriority !== -1 && bPriority !== -1) return aPriority - bPriority;

      // 2️⃣ Then sort alphabetically
      return a.district.localeCompare(b.district);
    });
}

export default async function BanglaDistrictNewsSlider() {
  const articles = await getLatestPerDistrict();
  if (!articles.length) return null;

  return <DistrictSliderClient articles={articles} />;
}