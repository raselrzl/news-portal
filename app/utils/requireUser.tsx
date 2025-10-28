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
  const isSompadok = user?.userType === "SOMPANDOK";
  const isApprovedNewsReporter =
    user?.userType === "NEWSREPORTER" && user.approvalStatus === "APPROVED";

  if (!user || (!isSuperAdmin && !isApprovedNewsReporter && !isSompadok)) {
    return redirect("/restricted");
  }

  return session.user;
}


export async function requireSompandokOrSuperAdmin() {
  const session = await auth();
  if (!session?.user?.email) {
    return redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { userType: true },
  });

  const isSuperAdmin = user?.userType === "SUPERADMIN";
  const isSompandok = user?.userType === "SOMPANDOK";

  if (!isSuperAdmin && !isSompandok) {
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







/* 
import { redirect } from "next/navigation";
import { auth } from "./auth";
import { prisma } from "./db";

// ✅ Basic user check
export async function requireUser() {
  const session = await auth();
  if (!session?.user) {
    return redirect("/login");
  }
  return session.user;
}

// ✅ SUPERADMIN can access everything
export async function requireSuperAdmin() {
  const session = await requireUser();
  const user = await prisma.user.findUnique({
    where: { email: session.email! },
    select: { userType: true },
  });

  if (user?.userType !== "SUPERADMIN") {
    return redirect("/restricted");
  }

  return session;
}

// ✅ SOMPANDOK can access NewsReporters and Users (but not SUPERADMIN or their settings)
export async function requireSompandokOrHigher() {
  const session = await requireUser();
  const user = await prisma.user.findUnique({
    where: { email: session.email! },
    select: { userType: true },
  });

  const isSuperAdmin = user?.userType === "SUPERADMIN";
  const isSompandok = user?.userType === "SOMPANDOK";

  if (!isSuperAdmin && !isSompandok) {
    return redirect("/restricted");
  }

  return session;
}

// ✅ NEWSREPORTER must be approved, and can't access higher-level stuff
export async function requireNewsReporterOnly() {
  const session = await requireUser();
  const user = await prisma.user.findUnique({
    where: { email: session.email! },
    select: { userType: true, approvalStatus: true },
  });

  const isApprovedNewsReporter =
    user?.userType === "NEWSREPORTER" && user.approvalStatus === "APPROVED";

  if (!isApprovedNewsReporter) {
    return redirect("/restricted");
  }

  return session;
}
 */