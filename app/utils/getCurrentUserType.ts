// utils/getCurrentUserSafe.ts
import { prisma } from "@/app/utils/db";
import { auth } from "./auth";

export async function getCurrentUserType() {
  const session = await auth();
  if (!session?.user?.email) return null;

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      email: true,
      userType: true,
      approvalStatus: true,
    },
  });

  return user;
}
