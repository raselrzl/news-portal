import { z } from "zod";

export const newsReporterSchema = z.object({
    name: z.string().min(2, "আপনার নাম কমপক্ষে ২ অক্ষরের হতে হবে"),
    location: z.string().min(1, "অবস্থান উল্লেখ করা আবশ্যক"),
    bio: z.string().min(10, "আপনার নিজের সম্পর্কে কিছু তথ্য লিখুন"),
    profilePicture: z.string().min(1, "অনুগ্রহ করে একটি ছবি আপলোড করুন"),
    phoneNumber:z.string().min(10, "আপনার নিজের তথ্য লিখুন"),
    facebookProfileAddress: z.string().optional()
  });


  export const AdvertiserSchema= z.object({
    supervisorName: z.string().min(2, "আপনার নাম কমপক্ষে ২ অক্ষরের হতে হবে"),
    companyName: z.string().min(4, "কোম্পানির নাম কমপক্ষে ৪ অক্ষরের হতে হবে"),
    companyAddress: z.string().min(1, "অবস্থান উল্লেখ করা আবশ্যক"),
    phoneNumber: z.string().min(1, "অনুগ্রহ করে ফোন নম্বর প্রদান করুন"),
    aboutCompany: z.string().min(10, "কোম্পানির সম্পর্কে কমপক্ষে ১০ অক্ষরের বর্ণনা প্রদান করুন"),
    companyWebsite: z.string().optional()

  });