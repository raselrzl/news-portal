'use server';
import { z } from "zod";
import { prisma } from "./utils/db";
import { requireUser } from "./utils/requireUser";
import { newsReporterSchema } from "./utils/zodSchemas";
import { redirect } from "next/navigation";

export async function createNewsReporter(data: z.infer<typeof newsReporterSchema>) {
    const user = await requireUser();
  
/*     const req = await request();
    const dicision = await aj.protect(req);
    if (dicision.isDenied()) {
      throw new Error("Forbidden");
    } */
  
    const validateData = newsReporterSchema.parse(data);
    console.log(validateData);
    await prisma.user.update({
      where: {
        id: user.id as string,
      },
      data: {
        onboardingCompleted: true,
        userType: "NEWSRREPORTER",
        newsReporter: {
          create: {
            ...validateData,
          },
        },
      },
    });
  
    return redirect("/");
  }