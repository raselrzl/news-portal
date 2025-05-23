import { z } from "zod";

export const newsReporterSchema = z.object({
  reporterName:z.string().min(2, "আপনার নাম কমপক্ষে ২ অক্ষরের হতে হবে"),
  location: z.string().min(1, "অবস্থান উল্লেখ করা আবশ্যক"),
  bio: z.string().min(10, "আপনার নিজের সম্পর্কে কিছু তথ্য লিখুন"),
  profilePicture: z.string().min(1, "অনুগ্রহ করে একটি ছবি আপলোড করুন"),
  phoneNumber: z.string().min(10, "আপনার নিজের তথ্য লিখুন"),
  facebookProfileAddress: z.string().optional(),
});

export const AdvertiserSchema = z.object({
  supervisorName: z.string().min(2, "আপনার নাম কমপক্ষে ২ অক্ষরের হতে হবে"),
  companyName: z.string().min(4, "কোম্পানির নাম কমপক্ষে ৪ অক্ষরের হতে হবে"),
  companyAddress: z.string().min(1, "অবস্থান উল্লেখ করা আবশ্যক"),
  phoneNumber: z.string().min(1, "অনুগ্রহ করে ফোন নম্বর প্রদান করুন"),
  aboutCompany: z
    .string()
    .min(10, "কোম্পানির সম্পর্কে কমপক্ষে ১০ অক্ষরের বর্ণনা প্রদান করুন"),
  companyWebsite: z.string().optional(),
});
const quoteSchema = z.object({
  text: z.string(),
  speakerInfo: z.string()
});

export const newsArticleSchema = z.object({
  newsHeading: z.string().min(6, "সংবাদের শিরোনাম আবশ্যক"),
  newsResource: z.string(),
  newsLocation: z.string().optional(),
  newsCategory: z.enum([ "LATEST",
    "NATIONAL",
    "POLITICS",
    "COUNTRYWIDE",
    "INTERNATIONAL",
    "SPORTS",
    "EDUCATION",
    "HEALTH",
    "OPINION",
    "RELIGION",
    "CRIME",
    "TECHNOLOGY",
    "ENTERTAINMENT",
    "ECONOMY",
    "LAW_AND_JUSTICE",
    "ENVIRONMENT",
    "SCIENCE",]),
  newsPicture: z.string().url("অনুগ্রহ করে একটি ছবি আপলোড করুন"),
  newsPictureHeading: z.string(),
  newsPictureCredit: z.string(),
  newsDetails: z.string().min(10, "পূর্ণ সংবাদ লিখুন"),
  duration: z.number().optional(),
  isFeatured: z.boolean().optional(),
  newsArticleStatus: z.enum(["EXPIRED", "ACTIVE", "DRAFT"]),
  reporterName: z.string().optional(),
  phoneNumber: z.string(),
  location: z.string(),
  facebookProfileAddress: z.string().optional(),
  bio: z.string(),
  profilePicture: z.string().url("প্রোফাইল ছবি আবশ্যক"),
  quotes: z.array(quoteSchema)
});

export const AdvertiseRequestSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  companyName: z.string().min(4),
  companyWebsite: z.string().min(4),
  phoneNumber: z.string().min(10),
  message: z.string().min(10),
});