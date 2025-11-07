import { Card, CardHeader } from "@/components/ui/card";
import InstagramPostPreview from "./InstagramPostPreview";
import { prisma } from "@/app/utils/db";
import { Instagram, ArrowRight } from "lucide-react";
import { PremiarTwo } from "../allAdvertisement/PremierTwo";
import Link from "next/link";

export async function getInstagramPosts() {
  return await prisma.instagramPost.findMany({
    where: { igStatus: "ACTIVE" },
    orderBy: { createdAt: "desc" },
    take: 10,
    select: {
      id: true,
      igLink: true,
    },
  });
}

export default async function InstagramPosts() {
  const posts = await getInstagramPosts();

  return (
    <Card className="p-4 shadow-lg mb-2 mt-8 rounded-none">
      <CardHeader className="p-0 flex flex-row justify-between">
        <div className="flex flex-row items-center justify-center space-x-2">
          <Instagram size={24} className="text-primary" />
          <p className="font-bold text-xl mt-1">INSTAGRAM</p>
        </div>
        <div className="flex flex-row items-center justify-center hover:underline">
          <Link href="/all-ig-post">View all</Link>
        </div>
      </CardHeader>

      <div className="overflow-x-auto pb-10 overflow-y-hidden scrollbar-thin">
        <div className="flex gap-2 px-2">
          <div className="min-w-[280px] h-[350px] flex items-center justify-center">
            <PremiarTwo />
          </div>

          {posts.map((post) => (
            <div
              key={post.id}
              className="min-w-[300px] h-[350px] flex items-center justify-center"
            >
              <InstagramPostPreview igLink={post.igLink} />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
