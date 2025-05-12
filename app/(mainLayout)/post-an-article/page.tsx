
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
      reporterName:true,
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
  console.log("Reportername",data.reporterName)
  return (
    <div className="max-w-7xl mx-auto px-2 mb-10">
        <div className="py-10">
          {" "}
          <CreateNewsArticleForm
           reporterName={data.reporterName ?? undefined}
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
