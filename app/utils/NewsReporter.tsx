import { redirect } from "next/navigation";
import { auth } from "./auth";
import { prisma } from "./db";

export async function requireArticlePoster() {
  const session = await auth();

  if (!session?.user?.email) {
    return redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      userType: true,
      approvalStatus: true,
    },
  });

  const isSuperAdmin = user?.userType === "SUPERADMIN";
  const isSompadok = user?.userType === "SOMPANDOK";
  const isApprovedNewsReporter =
    user?.userType === "NEWSREPORTER" && user.approvalStatus === "APPROVED";

  if (!user || (!isSuperAdmin && !isSompadok && !isApprovedNewsReporter)) {
    return redirect("/restricted");
  }

  return session.user;
}
