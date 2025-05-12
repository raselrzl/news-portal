
import React from "react";
import { requireUser } from "@/app/utils/requireUser";
import { CreateNewsArticleForm } from "./postArticleForm";
import { prisma } from "@/app/utils/db";
import { redirect } from "next/navigation";


async function getNewsReporterInfo(userId: string) {
  const data = await prisma.newsReporter.findUnique({
    where: {
      userId: userId,
    },
    select: {
      location: true,
      bio: true,
      profilePicture: true,
      phoneNumber: true,
      facebookProfileAddress: true,
    },
  });

  if (!data) {
    return redirect("/");
  }
  return data;
}
export default async function PostAnArticle() {
  const session = await requireUser();
  const data = await getNewsReporterInfo(session.id as string);
  return (
    <div className="max-w-7xl mx-auto px-2 mb-10">
        <div className="py-10">
          {" "}
          <CreateNewsArticleForm
           reporterLocation={data.location}
           reporterBio={data.bio}
           reporterProfilePicture={data.profilePicture}
           reporterPhoneNumber={data.phoneNumber}
           reporterFacebookProfileAddress={data.facebookProfileAddress ?? undefined}
          
          />
        </div>
    </div>
  );
}
