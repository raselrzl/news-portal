import React from "react";
import { CreateNewsArticleForm } from "./postArticleForm";
import { prisma } from "@/app/utils/db";
import { requireUser } from "@/app/utils/requireUser";
import { requireArticlePoster } from "@/app/utils/NewsReporter";
import { requireRoleAccess } from "./roleBaseAccess";
import { trackRoute } from "@/app/utils/routeTracker";

async function getNewsReporterInfo(userId: string) {
  return await prisma.newsReporter.findUnique({
    where: { userId },
    select: {
      reporterName: true,
      location: true,
      bio: true,
      profilePicture: true,
      phoneNumber: true,
      facebookProfileAddress: true,
    },
  });
}

export default async function PostAnArticle() {
  const session = await requireUser();
  await requireArticlePoster();

  const user = await requireRoleAccess(["EDITOR", "SUPERADMIN", "NEWSREPORTER"]);
  await trackRoute("PostAnArticle");

  const data = await getNewsReporterInfo(session.id as string);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-xl font-bold bg-accent-foreground/5 p-2">
        Fill in everything available in the news.
      </h1>

      <div className="py-10">
        <CreateNewsArticleForm
          reporterName={data?.reporterName ?? ""}
          reporterLocation={data?.location ?? "Unknown"}
          reporterBio={data?.bio ?? ""}
          reporterProfilePicture={data?.profilePicture ?? ""}
          reporterPhoneNumber={data?.phoneNumber ?? ""}
          reporterFacebookProfileAddress={data?.facebookProfileAddress ?? ""}
          userType={user.userType ?? null}
        />
      </div>
    </div>
  );
}
