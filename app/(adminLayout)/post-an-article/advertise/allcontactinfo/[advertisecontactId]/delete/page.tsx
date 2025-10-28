import { requireRoleAccess } from "@/app/(adminLayout)/post-an-article/roleBaseAccess";
import ConfirmDeleteAdvertiseContact from "./ConfirmDeleteAdvertiseContact";


export default async function DeletePage() {
  await requireRoleAccess(["SUPERADMIN"]);

  return (
    <div className="p-6">
      <ConfirmDeleteAdvertiseContact />
    </div>
  );
}
