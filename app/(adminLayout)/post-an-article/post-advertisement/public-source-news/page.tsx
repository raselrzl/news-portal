import React from "react";
import { requireSompandokOrSuperAdmin } from "@/app/utils/requireUser";
import { redirect } from "next/navigation";
import { requireRoleAccess } from "../roleBaseAccess";
import PublicSourceNewsForm from "./PublicSourceNewsForm";


export default async function PostAnPublicSourceHeading() {

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
         <h1 className="text-xl font-bold bg-accent-foreground/5 p-2 mb-2">Add Public Source News</h1>
     
      <div className="py-10">
        <PublicSourceNewsForm />
      </div>
    </div>
  );
}
