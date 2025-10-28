import { prisma } from "@/app/utils/db";
import AdvertisementAnalysisClient from "./AdvertisementAnalysisClient";
import { requireRoleAccess } from "../../roleBaseAccess";

export default async function AdvertisementAnalysisServer() {
  // Fetch all advertisements on the server
  const ads = await prisma.advertisement.findMany({
    orderBy: { createdAt: "desc" },
  });
  const rewuireUserToAccessPage = await requireRoleAccess(["SUPERADMIN"]);

  
  return (
    <>
      <AdvertisementAnalysisClient serverAds={ads} />
    </>
  );
}
