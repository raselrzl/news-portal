import React from "react";
import { CreateAdvertisementForm } from "./post-advertisement-form";
import { requireSuperAdmin } from "@/app/utils/requireUser";
export default async function PostAnArticle() { 
    const superadmin= await requireSuperAdmin()
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-1 mb-10">
        <div className="py-10">
          <CreateAdvertisementForm
          />
        </div>
    </div>
  );
}
