import { prisma } from "@/app/utils/db";

export async function getInstagramPostsBatch(skip: number = 0, take: number = 8) {
  return prisma.instagramPost.findMany({
    where: { igStatus: "ACTIVE" },
    orderBy: { createdAt: "desc" },
    skip,
    take,
  });
}
