import { requireRoleAccess } from "@/app/(adminLayout)/post-an-article/roleBaseAccess";
import ConfirmDeleteOpinion from "./deleteOpinionForm";

export default async function ConfirmDeleteOpinionPage({
  params,
}: {
  params: Promise<{ opinionId: string }>;
}) {
  // ✅ Restrict access to EDITOR and SUPERADMIN only
  await requireRoleAccess(["EDITOR", "SUPERADMIN"]);

  const { opinionId } = await params;

  return <ConfirmDeleteOpinion opinionId={opinionId} />;
}
