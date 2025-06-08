"use server";
import { z } from "zod";
import { prisma } from "./utils/db";
import { requireNewsReporter, requireSuperAdmin, requireUser } from "./utils/requireUser";
import {
  AdvertiseRequestSchema,
  AdvertiserSchema,
  newsArticleSchema,
  newsReporterSchema,
} from "./utils/zodSchemas";
import { redirect } from "next/navigation";
import arcjet, { detectBot, shield } from "./utils/arcjet";
import { request } from "@arcjet/next";
import { AdvertisedCategory, advertiseStatus, UserType, vedioStatus } from "@/lib/generated/prisma";
import { auth } from "./utils/auth";
/* import { inngest } from "./utils/inngest/client"; */
const aj = arcjet
  .withRule(
    shield({
      mode: "LIVE",
    })
  )
  .withRule(
    detectBot({
      mode: "LIVE",
      allow: [],
    })
  );
export async function createNewsReporter(
  data: z.infer<typeof newsReporterSchema>
) {
  const user = await requireUser();

  const req = await request();
  const dicision = await arcjet.protect(req);
  if (dicision.isDenied()) {
    throw new Error("Forbidden");
  }

  const validateData = newsReporterSchema.parse(data);
  console.log(validateData);
  await prisma.user.update({
    where: {
      id: user.id as string,
    },
    data: {
      onboardingCompleted: true,
      userType: "NEWSREPORTER",
      newsReporter: {
        create: {
          ...validateData,
        },
      },
    },
  });

  return redirect("/");
}

export async function aauth() {
  const session = await auth(); // however you're getting the session

  if (!session?.user?.email) return null;

  const email = session.user.email;

  if (email === "rasel6041@gmail.com") {
    const user = await prisma.user.findUnique({ where: { email } });

    if (user && user.userType !== "SUPERADMIN") {
      await prisma.user.update({
        where: { email },
        data: { userType: "SUPERADMIN" },
      });
    }
  }

  return session;
}

export async function createAdvertiser(data: z.infer<typeof AdvertiserSchema>) {
  const user = await requireUser();

  const req = await request();
  const dicision = await aj.protect(req);
  if (dicision.isDenied()) {
    throw new Error("Forbidden");
  }

  const validateData = AdvertiserSchema.parse(data);
  console.log(validateData);
  await prisma.user.update({
    where: {
      id: user.id as string,
    },
    data: {
      onboardingCompleted: true,
      userType: "ADVERTISER",
      Advertiser: {
        create: {
          ...validateData,
        },
      },
    },
  });

  return redirect("/");
}

export async function createAnArticle(data: z.infer<typeof newsArticleSchema>) {
  const approvedreporter =await requireNewsReporter()
  if (!approvedreporter) {
    return redirect("/restricted");
  }
  const user = await requireUser();
  const req = await request();
  const dicision = await aj.protect(req);
  if (dicision.isDenied()) {
    throw new Error("Forbidden");
  }

  const validateData = newsArticleSchema.parse(data);

  console.log(validateData);
  const reporter = await prisma.newsReporter.findUnique({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
    },
  });

  if (!reporter?.id) {
    return redirect("/");
  }

  const newsArticle = await prisma.newsArticle.create({
    data: {
      newsHeading: validateData.newsHeading,
      newsDetails: validateData.newsDetails,
      newsResource: validateData.newsResource,
      newsLocation: validateData.newsLocation ?? undefined,
      newsCategory: validateData.newsCategory,
      newsPicture: validateData.newsPicture,
      newsPictureHeading: validateData.newsPictureHeading,
      newsPictureCredit: validateData.newsPictureCredit,
      isFeatured: validateData.isFeatured ?? false,
      reporterId: reporter.id,
      duration: validateData.duration ?? undefined,
      newsArticleStatus: validateData.newsArticleStatus || "DRAFT",
      quotes: {
        create: validateData.quotes,
      },
    },
  });
  return redirect("/");
}

export async function updateArticleStatusToActive(articleId: string) {
  const superadmin =await requireSuperAdmin()
  if (!superadmin) {
    return redirect("/restricted");
  }
  const user = await requireUser();

  const req = await request();
  const dicision = await aj.protect(req);
  if (dicision.isDenied()) {
    throw new Error("Forbidden");
  }
  const article = await prisma.newsArticle.update({
    where: {
      id: articleId,
    },
    data: {
      newsArticleStatus: "ACTIVE",
    },
  });

  redirect("/post-an-article/alaarticles");
}

export async function updateArticleStatusToDraft(articleId: string) {
  const superadmin =await requireSuperAdmin()
  if (!superadmin) {
    return redirect("/restricted");
  }
  const user = await requireUser();

  const req = await request();
  const dicision = await aj.protect(req);
  if (dicision.isDenied()) {
    throw new Error("Forbidden");
  }
  const article = await prisma.newsArticle.update({
    where: {
      id: articleId,
    },
    data: {
      newsArticleStatus: "DRAFT",
    },
  });
  redirect("/post-an-article/alaarticles");
}

export async function deleteArticleById(articleId: string) {
  const superadmin =await requireSuperAdmin()
  if (!superadmin) {
    return redirect("/restricted");
  }
  const user = await requireUser();

  const req = await request();
  const dicision = await aj.protect(req);
  if (dicision.isDenied()) {
    throw new Error("Forbidden");
  }

  try {
    await prisma.quote.deleteMany({
      where: {
        articleId: articleId,
      },
    });
    await prisma.newsArticle.delete({
      where: {
        id: articleId,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error deleting article:", error);
    throw new Error("Failed to delete article");
  }
}

export async function updateNewsArticle(data: any, articleId: string) {
  const approvednewsreporter =await requireNewsReporter()
  if (!approvednewsreporter) {
    return redirect("/restricted");
  }
  const user = await requireUser();

  const req = await request();
  const dicision = await aj.protect(req);
  if (dicision.isDenied()) {
    throw new Error("Forbidden");
  }

  await prisma.newsArticle.update({
    where: {
      id: articleId,
    },
    data: {
      newsHeading: data.newsHeading,
      newsDetails: data.newsDetails,
      newsResource: data.newsResource,
      newsLocation: data.newsLocation ?? undefined,
      newsCategory: data.newsCategory,
      newsPicture: data.newsPicture,
      newsPictureHeading: data.newsPictureHeading,
      newsPictureCredit: data.newsPictureCredit,
      isFeatured: data.isFeatured ?? false,
      newsArticleStatus: data.newsArticleStatus || "DRAFT",
      quotes: {
        deleteMany: {}, // Clear old quotes
        create: data.quotes,
      },
    },
  });

  return redirect("/post-an-article/alaarticles");
}



export async function deleteUserById(userId: string) {
  const superuser = await requireSuperAdmin();
  if (!superuser) {
    return redirect("/restricted");
  }
  const user = await requireUser();

  const req = await request();
  const dicision = await aj.protect(req);
  if (dicision.isDenied()) {
    throw new Error("Forbidden");
  }

  try {
    await prisma.session.deleteMany({
      where: {
        userId: userId,
      },
    });

    await prisma.account.deleteMany({
      where: {
        userId: userId,
      },
    });

    await prisma.newsReporter.deleteMany({
      where: {
        userId: userId,
      },
    });
    await prisma.advertiser.deleteMany({
      where: {
        userId: userId,
      },
    });

    await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error deleting user:", error);
  }
  return redirect("/post-an-article/alaarticles");
}



export async function updateUserApprovalStatus(userId: string, status: 'PENDING' | 'APPROVED' | 'REJECT') {

  const superuser = await requireSuperAdmin();
  if (!superuser) {
    return redirect("/restricted");
  }

  const user = await requireUser();

  const req = await request();
  const dicision = await aj.protect(req);
  if (dicision.isDenied()) {
    throw new Error("Forbidden");
  }
  try {
    // Update the approval status of the user
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { approvalStatus: status },
    });

    return { success: true, updatedUser };
  } catch (error) {
    console.error('Error updating user approval status:', error);
    throw new Error('Failed to update approval status');
  }
}


export async function createAnAdvertisement(data: {
  companyName: string;
  companyaddress: string;
  supervisedName: string;
  supervisedPhonenumber: string;
  advertisedCategory: AdvertisedCategory;
  isFeatured?: boolean;
  advertiseStatus?: advertiseStatus;
  advertiseduration?: number;
  advertiseBanner: string;
  websiteLink: string;
  additionalInfo?: string;
  startDate: string;
  endDate: string;
}) {
  const user = await requireUser();
  const req = await request();
  const decision = await aj.protect(req);
  if (decision.isDenied()) {
    throw new Error("Forbidden");
  }

  await prisma.advertisement.create({
    data: {
      companyName: data.companyName,
      companyaddress: data.companyaddress,
      supervisedName: data.supervisedName,
      supervisedPhonenumber: data.supervisedPhonenumber,
      advertisedCategory: data.advertisedCategory,
      isFeatured: data.isFeatured ?? false,
      advertiseStatus: data.advertiseStatus ?? "DRAFT",
      advertiseduration: data.advertiseduration ?? 365,
      advertiseBanner: data.advertiseBanner,
      websiteLink: data.websiteLink,
      additionalInfo: data.additionalInfo ?? "",
      startDate: data.startDate,
      endDate: data.endDate,
    },
  });

  return redirect("/post-an-article/post-advertisement/alladvertise");
}

export async function promoteToUserType(userId: string, userType: UserType): Promise<void> {
  await requireSuperAdmin();

  await prisma.user.update({
    where: { id: userId },
    data: { userType },
  });

  redirect("/post-an-article/allusers");
}


const OpinionSchema = z.object({
  name: z.string().min(1, 'নাম লিখুন'),
  email: z.string().email('সঠিক ইমেইল লিখুন').optional(),
  phone: z
    .string()
    .min(10, 'ফোন নম্বর অন্তত ১০ অঙ্কের হতে হবে')
    .max(15, 'ফোন নম্বর সর্বোচ্চ ১৫ অঙ্কের হতে পারে')
    .optional(),
  opinion: z.string().min(10, 'কমপক্ষে ১০ অক্ষরের অভিযোগ লিখুন'),
});

export async function submitOpinion(formData: FormData) {
  const req = await request();
  const dicision = await aj.protect(req);
  if (dicision.isDenied()) {
    throw new Error("Forbidden");
  }
  const raw = Object.fromEntries(formData.entries());
  const parsed = OpinionSchema.safeParse(raw);

  if (!parsed.success) {
    throw new Error('Invalid form data');
  }

  const data = parsed.data;

  await prisma.opinion.create({
    data: {
      name: data.name,
      email: data.email ?? null,
      phone: data.phone ?? null,
      opinion: data.opinion,
    },
  });
  redirect("/alluseropinion");
}


export async function deleteOpinionById(opinionId: string) {
  const superadmin =await requireSuperAdmin()
  if (!superadmin) {
    return redirect("/restricted");
  }
  const user = await requireUser();

  const req = await request();
  const dicision = await aj.protect(req);
  if (dicision.isDenied()) {
    throw new Error("Forbidden");
  }

  try {
    await prisma.opinion.delete({
      where: {
        id: opinionId,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error deleting article:", error);
    throw new Error("Failed to delete article");
  }
}



export async function submitAdvertiseRequest(formData: FormData) {
  const req = await request();
  const decision = await aj.protect(req);

  if (decision.isDenied()) {
    throw new Error("Forbidden");
  }

  const raw = Object.fromEntries(formData.entries());
  const parsed = AdvertiseRequestSchema.safeParse(raw);

  if (!parsed.success) {
    throw new Error("Invalid form data");
  }

  const data = parsed.data;

  await prisma.advertiseRequest.create({
    data: {
      name: data.name,
      email: data.email,
      companyName: data.companyName,
      companyWebsite: data.companyWebsite,
      phoneNumber: data.phoneNumber,
      message: data.message,
    },
  });

  redirect("/thank-you");
}



export async function deleteadvertiseRequestMEssageById(advertisecontactId: string) {
  const superadmin =await requireSuperAdmin()
  if (!superadmin) {
    return redirect("/restricted");
  }
  const user = await requireUser();

  const req = await request();
  const dicision = await aj.protect(req);
  if (dicision.isDenied()) {
    throw new Error("Forbidden");
  }

  try {
    await prisma.advertiseRequest.delete({
      where: {
        id: advertisecontactId,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error deleting article:", error);
    throw new Error("Failed to delete article");
  }
}



export async function updateAdvertisementStatus(advertisementId: string, status: "ACTIVE" | "DRAFT" | "EXPIRED") {
  const superuser = await requireSuperAdmin();
  if (!superuser) redirect("/restricted");

  await requireUser();
  const req = await request();
  const decision = await aj.protect(req);
  if (decision.isDenied()) throw new Error("Forbidden");

  const ad = await prisma.advertisement.findUnique({
    where: { id: advertisementId },
  });
  if (!ad) throw new Error("Advertisement not found");

  await prisma.advertisement.update({
    where: { id: advertisementId },
    data: { advertiseStatus: status },
  });
}


export async function deleteAdvertisementById(advertisementId: string) {
  const superuser = await requireSuperAdmin();
  if (!superuser) {
    return redirect("/restricted");
  }

  await requireUser();

  const req = await request();
  const decision = await aj.protect(req);
  if (decision.isDenied()) {
    throw new Error("Forbidden");
  }

  try {
    await prisma.advertisement.delete({
      where: { id: advertisementId },
    });

    return { success: true };
  } catch (error) {
    console.error("Error deleting advertisement:", error);
    throw new Error("Failed to delete advertisement");
  }
}






export async function createVideoPost(data: {
  videoAbout: string;
  videoHeadings: string;
  videoLink: string;
  vedioStatus: vedioStatus;
  isFeatured?: boolean;
  startDate: string;
}) {
  const user = await requireUser();
  const req = await request();
  const decision = await aj.protect(req);
  if (decision.isDenied()) {
    throw new Error("Forbidden");
  }

  await prisma.videopost.create({
    data: {
      videoAbout: data.videoAbout,
      videoHeadings: data.videoHeadings,
      videoLink: data.videoLink,
      isFeatured: data.isFeatured ?? false,
      vedioStatus: data.vedioStatus ?? "DRAFT",
      startDate: data.startDate,
    },
  });

  return redirect("/post-an-article/post-a-video/allvideos");
}



export async function updateVedioStatus(videoId: string, status: "ACTIVE" | "DRAFT" | "EXPIRED") {
  const superuser = await requireSuperAdmin();
  if (!superuser) redirect("/restricted");

  await requireUser();
  const req = await request();
  const decision = await aj.protect(req);
  if (decision.isDenied()) throw new Error("Forbidden");

  const ad = await prisma.videopost.findUnique({
    where: { id: videoId },
  });
  if (!ad) throw new Error("video not found");

  await prisma.videopost.update({
    where: { id: videoId },
    data: { vedioStatus: status },
  });
}


export async function deleteVedioById(videoId: string) {
  const superuser = await requireSuperAdmin();
  if (!superuser) {
    return redirect("/restricted");
  }

  await requireUser();

  const req = await request();
  const decision = await aj.protect(req);
  if (decision.isDenied()) {
    throw new Error("Forbidden");
  }

  try {
    await prisma.videopost.delete({
      where: { id: videoId },
    });

    return { success: true };
  } catch (error) {
    console.error("Error deleting vedio:", error);
    throw new Error("Failed to delete vedio");
  }
}
