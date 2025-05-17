'use server';
import { z } from "zod";
import { prisma } from "./utils/db";
import { requireUser } from "./utils/requireUser";
import { AdvertiserSchema, newsArticleSchema, newsReporterSchema } from "./utils/zodSchemas";
import { redirect } from "next/navigation";
import arcjet, { detectBot, shield } from "./utils/arcjet";
import { request } from "@arcjet/next";
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
export async function createNewsReporter(data: z.infer<typeof newsReporterSchema>) {
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
      data:{
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
          create: validateData.quotes
        }
      }
      
    });
    return redirect("/")
    
  }
  
  export async function updateArticleStatusToActive(articleId: string) {
    const user = await requireUser();
  
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