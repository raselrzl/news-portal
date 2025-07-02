import { trackRoute } from "@/app/utils/routeTracker";
import React from "react";

export default async function TermsPage() {
  await trackRoute("Terms");
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-center">শর্তাবলি</h1>

      <p className="mb-4 text-base">
        <strong>সর্বশেষ হালনাগাদ:</strong> {new Date().toLocaleDateString("bn-BD")}
      </p>

      <p className="mb-4 text-base">
        জাগ্রত বার্তা ওয়েবসাইটে প্রবেশ করে বা ব্যবহার করে আপনি আমাদের এই শর্তাবলি মেনে চলতে
        সম্মত হচ্ছেন। অনুগ্রহ করে এগুলো মনোযোগ সহকারে পড়ুন।
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">১. সেবা ব্যবহার</h2>
      <p className="mb-4 text-base">
        আপনি এই ওয়েবসাইট কেবলমাত্র ব্যক্তিগত ও অ-বাণিজ্যিক উদ্দেশ্যে ব্যবহার করতে পারবেন।
        অবৈধ কার্যকলাপে ওয়েবসাইট ব্যবহার সম্পূর্ণরূপে নিষিদ্ধ।
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">২. বিষয়বস্তু অধিকার</h2>
      <p className="mb-4 text-base">
        ওয়েবসাইটে প্রকাশিত সমস্ত লেখা, ছবি, ভিডিও এবং অন্যান্য উপকরণ জাগ্রত বার্তার সম্পত্তি বা
        লাইসেন্সের আওতাভুক্ত। আপনার ব্যক্তিগত ব্যবহারের বাইরে কনটেন্ট কপি, প্রকাশ বা পরিবেশন
        করা নিষেধ।
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">৩. ব্যবহারকারীর আচরণ</h2>
      <ul className="list-disc ml-6 mb-4 text-base">
        <li>আপত্তিকর, মানহানিকর বা ঘৃণামূলক মন্তব্য থেকে বিরত থাকুন</li>
        <li>মিথ্যা তথ্য বা গুজব ছড়ানো নিষেধ</li>
        <li>অন্যের গোপনীয়তা লঙ্ঘন করা যাবে না</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">৪. মন্তব্য নীতিমালা</h2>
      <p className="mb-4 text-base">
        পাঠকদের মন্তব্য স্বাগত। তবে আমরা অশালীন, বানোয়াট বা হিংসাত্মক মন্তব্য মুছে দেওয়ার অধিকার
        রাখি।
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">৫. বাহ্যিক লিংক</h2>
      <p className="mb-4 text-base">
        ওয়েবসাইটে থাকা তৃতীয় পক্ষের লিংক জাগ্রত বার্তার নিয়ন্ত্রণে নয়। আমরা সেইসব সাইটের
        বিষয়বস্তু বা নিরাপত্তার জন্য দায়ী নই।
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">৬. দায়বদ্ধতার সীমাবদ্ধতা</h2>
      <p className="mb-4 text-base">
        আমরা ওয়েবসাইটের সকল তথ্য নির্ভুল রাখার চেষ্টা করি, তবে কোনো ভুল, তথ্যগত ত্রুটি বা ক্ষতির
        জন্য জাগ্রত বার্তা দায়ী নয়।
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">৭. পরিবর্তন</h2>
      <p className="mb-4 text-base">
        এই শর্তাবলি যেকোনো সময় পরিবর্তন করা হতে পারে। পরিবর্তন হলে তা এই পৃষ্ঠায় আপডেট করা হবে।
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">৮. যোগাযোগ</h2>
      <p className="mb-4 text-base">
        আমাদের শর্তাবলি সম্পর্কে প্রশ্ন বা মতামতের জন্য যোগাযোগ করুন:
      </p>
      <ul className="list-none mb-6 text-base">
        <li><strong>ইমেইল:</strong> <a href="mailto:info@jagrotobarta.com" className="text-primary hover:underline">info@jagrotobarta.com</a></li>
      </ul>

      <p className="text-base italic">
        ধন্যবাদ, জাগ্রত বার্তা পরিবারের সদস্য হিসেবে যুক্ত থাকার জন্য।
      </p>
    </div>
  );
}
