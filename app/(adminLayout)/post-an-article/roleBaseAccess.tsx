import { auth } from "@/app/utils/auth";
import { prisma } from "@/app/utils/db";
import { redirect } from "next/navigation";

/**
 * Ensures the logged-in user has one of the allowed roles.
 * If not logged in or unauthorized, redirect to home.
 */
export async function requireRoleAccess(allowedRoles: string[]) {
  const session = await auth();
  if (!session?.user?.email) {
    return redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { userType: true, approvalStatus: true },
  });

  if (!user) return redirect("/");

  // News reporters must be approved to access reporter routes
  if (
    user.userType === "NEWSREPORTER" &&
    user.approvalStatus !== "APPROVED"
  ) {
    return redirect("/");
  }

  // If user's role is not in the allowed roles, redirect to home
  if (!allowedRoles.includes(user.userType ?? "")) {
    return redirect("/");
  }

  return user;
}
