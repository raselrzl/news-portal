import { prisma } from "@/app/utils/db";
export async function getEnterpriseOneAdvertise() {
  return await prisma.advertisement.findMany({
    where: { advertisedCategory: "ENTERPRISE_1", advertiseStatus: "ACTIVE" },
    select: {
      id: true,
      advertiseBanner: true,
      websiteLink: true,
      companyName: true,
    },
    orderBy: { createdAt: "desc" },
    take: 1,
  });
}
