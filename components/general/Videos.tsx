import Image from "next/image";

// utils/getVideos.ts or inside your page component
import { prisma } from "@/app/utils/db";
import { Card, CardHeader } from "../ui/card";
import YouTubeVideo from "./YouTubeVideo";
import { PremiarTwo } from "./FetchAllAdvertisement";

export async function getVideos() {
  return await prisma.videopost.findMany({
    where: { vedioStatus: "ACTIVE" },
    orderBy: { createdAt: "desc" },
    take: 10, // Optional: limit to latest 10 videos
    select: {
      id: true,
      videoHeadings: true,
      videoLink: true,
    },
  });
}

export default async function Videos() {
  const videos = await getVideos();

  return (
    <Card className="p-4 shadow-lg mb-20 mt-8 rounded-none">
      <CardHeader className="p-0 flex flex-row justify-between">
        <div className="flex flex-row items-center space-x-2">
          <Image
            src="/youtube.gif"
            alt="YouTube GIF"
            width={50}
            height={50}
            className="object-contain"
          />
          <p className="font-bold text-2xl">ভিডিও</p>
        </div>
        <div className="text-primary flex flex-row items-center justify-center">
          <Image
            src="/arrow1.gif"
            alt="Arrow GIF"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
      </CardHeader>

      <div className="overflow-x-auto pb-10 overflow-y-hidden scrollbar-thin">
        <div className="flex gap-4 px-2">
          <div className="min-w-[300px] h-[230px] flex items-center justify-center">
            <PremiarTwo />
          </div>
          {videos.map((video) => (
            <div
              key={video.id}
              className="min-w-[300px] h-[230px] flex items-center justify-center"
            >
              <YouTubeVideo
                videoId={video.videoLink}
                title={video.videoHeadings}
              />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
