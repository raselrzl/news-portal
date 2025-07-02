import React from "react";
import { CreateNewsArticleForm } from "./postArticleForm";
import { prisma } from "@/app/utils/db";
import { requireArticlePoster } from "@/app/utils/NewsReporter";
import { requireUser } from "@/app/utils/requireUser";
import { trackRoute } from "@/app/utils/routeTracker";

async function getNewsReporterInfo(userId: string) {
  const data = await prisma.newsReporter.findUnique({
    where: {
      userId: userId,
    },
    select: {
      reporterName: true,
      location: true,
      bio: true,
      profilePicture: true,
      phoneNumber: true,
      facebookProfileAddress: true,
    },
  });

  return data ?? null;
}

export default async function PostAnArticle() {
  const session = await requireUser();
  await requireArticlePoster();

  const data = await getNewsReporterInfo(session.id as string);
   await trackRoute("PostAnArticle");

  return (
    <div className="max-w-7xl mx-auto px-2 md:px-1 mb-10">
      <div className="py-10">
        <CreateNewsArticleForm
          reporterName={data?.reporterName ?? ""}
          reporterLocation={data?.location ?? "Unknown"}
          reporterBio={data?.bio ?? ""}
          reporterProfilePicture={data?.profilePicture ?? ""}
          reporterPhoneNumber={data?.phoneNumber ?? ""}
          reporterFacebookProfileAddress={data?.facebookProfileAddress ?? ""}
        />
      </div>
    </div>
  );
}
