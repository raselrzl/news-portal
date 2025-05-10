import { z } from "zod";

export const newsReporterSchema = z.object({
    name: z.string().min(2, "আপনার নাম কমপক্ষে ২ অক্ষরের হতে হবে"),
    location: z.string().min(1, "অবস্থান উল্লেখ করা আবশ্যক"),
    bio: z.string().min(10, "আপনার নিজের সম্পর্কে কিছু তথ্য লিখুন"),
    profilePicture: z.string().min(1, "অনুগ্রহ করে একটি ছবি আপলোড করুন"),
    phoneNumber:z.string().min(10, "আপনার নিজের তথ্য লিখুন"),
    facebookProfileAddress: z.string().optional()
  });