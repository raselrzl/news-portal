import React from "react";
import { CreateAdvertisementForm } from "./post-advertisement-form";
import { requireSompandokOrSuperAdmin } from "@/app/utils/requireUser";
import { redirect } from "next/navigation";


export default async function PostAnArticle() {
  const SompandokOrSuperAdmin = await requireSompandokOrSuperAdmin();
  if (!SompandokOrSuperAdmin) {
    return redirect("/restricted");
  }
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-1 mb-10">
      <div className="py-10">
        <CreateAdvertisementForm />
      </div>
    </div>
  );
}
