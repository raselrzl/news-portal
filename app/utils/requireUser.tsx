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
  if (!user || user.userType !== "NEWSREPORTER") {
    return redirect("/");
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
    return redirect("/");
  }
  return session.user;
}



