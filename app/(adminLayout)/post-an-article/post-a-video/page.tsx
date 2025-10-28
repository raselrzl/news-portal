import React from "react";
import { requireSompandokOrSuperAdmin } from "@/app/utils/requireUser";
import { redirect } from "next/navigation";
import { PostVideoForm } from "./post-video-form";
import { requireRoleAccess } from "../roleBaseAccess";


export default async function PostAnArticle() {

   const rewuireUserToAccessPage = await requireRoleAccess([
          "EDITOR",
          "SUPERADMIN",
        ]);
  const SompandokOrSuperAdmin = await requireSompandokOrSuperAdmin();
  if (!SompandokOrSuperAdmin) {
    return redirect("/restricted");
  }
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-1 mb-10">
       <h1 className="text-xl font-bold bg-accent-foreground/5 p-2 mb-8">Fill out everything related to the video here.</h1>
      <div className="py-10">
        <PostVideoForm />
      </div>
    </div>
  );
}
