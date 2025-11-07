import { prisma } from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const skip = parseInt(url.searchParams.get("skip") || "0");
  const take = parseInt(url.searchParams.get("take") || "8");

  const posts = await prisma.instagramPost.findMany({
    where: { igStatus: "ACTIVE" },
    orderBy: { createdAt: "desc" },
    skip,
    take,
  });

  return NextResponse.json(posts);
}
