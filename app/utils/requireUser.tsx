import { redirect } from "next/navigation";
import { auth } from "./auth";
import { prisma } from "./db";

export async function requireUser() {
  const session = await auth();
  if (!session?.user) {
    return redirect("/login");
  }
  return session.user;
}


export async function requireNewsReporter() {
  const session = await auth();

  if (!session?.user || !session.user.email) {
    return redirect("/login");
  }

  const email = session.user.email;

  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      userType: true,
      approvalStatus: true,
    },
  });

  // Allow if user is SUPERADMIN or an APPROVED NEWSREPORTER
  const isSuperAdmin = user?.userType === "SUPERADMIN";
  const isApprovedNewsReporter =
    user?.userType === "NEWSREPORTER" && user.approvalStatus === "APPROVED";

  if (!user || (!isSuperAdmin && !isApprovedNewsReporter)) {
    return redirect("/restricted");
  }

  return session.user;
}


export async function requireSuperAdmin() {
  const session = await auth();
  if (!session?.user) {
    return redirect("/login");
  }
  const email = session.user.email;
  if (!email) {
    return redirect("/login");
  }
  const user = await prisma.user.findUnique({
    where: { email: email },
    select: { userType: true },
  });
  if (!user || user.userType !== "SUPERADMIN") {
    return redirect("/restricted");
  }
  return session.user;
}


