import React from "react";
import { CreateAdvertisementForm } from "./post-advertisement-form";
import { requireSompandokOrSuperAdmin } from "@/app/utils/requireUser";
import { redirect } from "next/navigation";
import { requireRoleAccess } from "../roleBaseAccess";


export default async function PostAnArticle() {

   const rewuireUserToAccessPage = await requireRoleAccess([
          "EDITOR",
          "SUPERADMIN"
        ]);
  const SompandokOrSuperAdmin = await requireSompandokOrSuperAdmin();
  if (!SompandokOrSuperAdmin) {
    return redirect("/restricted");
  }
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-1 mb-10">
         <h1 className="text-xl font-bold bg-accent-foreground/5 p-2 mb-2">Fill in all the details related to the advertisement here.</h1>
     
      <div className="py-10">
        <CreateAdvertisementForm />
      </div>
    </div>
  );
}
