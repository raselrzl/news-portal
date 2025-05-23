import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-center">গোপনীয়তার নীতি</h1>

      <p className="mb-4 text-base">
        <strong>সর্বশেষ হালনাগাদ:</strong> {new Date().toLocaleDateString("bn-BD")}
      </p>

      <p className="mb-4 text-base">
        <strong>জাগ্রত বার্তা</strong> আপনার গোপনীয়তাকে অত্যন্ত গুরুত্বের সঙ্গে বিবেচনা করে। এই নীতিতে
        আমরা ব্যাখ্যা করছি কীভাবে আমরা আপনার তথ্য সংগ্রহ, ব্যবহার এবং সংরক্ষণ করি।
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">১. তথ্য সংগ্রহ</h2>
      <ul className="list-disc ml-6 mb-4 text-base">
        <li>নাম, ইমেইল, ফোন নম্বর (যদি আপনি নিজে তা প্রদান করেন)</li>
        <li>আপনার ব্রাউজিং ডেটা, যেমন কোন পেজে আপনি যান</li>
        <li>কুকিজ এবং অন্যান্য ট্র্যাকিং প্রযুক্তির মাধ্যমে ডিভাইস সংক্রান্ত তথ্য</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">২. তথ্য ব্যবহার</h2>
      <p className="mb-4 text-base">
        আমরা আপনার তথ্য ব্যবহার করি আপনাকে আরও ভাল সেবা দিতে, যোগাযোগ রাখতে, কনটেন্ট উন্নত করতে এবং
        আমাদের কার্যক্রম বিশ্লেষণ করতে।
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">৩. তথ্য সুরক্ষা</h2>
      <p className="mb-4 text-base">
        আমরা আপনার তথ্য রক্ষা করতে বিভিন্ন প্রযুক্তিগত এবং প্রশাসনিক ব্যবস্থা গ্রহণ করি। তবে
        ইন্টারনেটে শতভাগ নিরাপত্তা নিশ্চিত করা যায় না।
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">৪. তথ্য শেয়ার</h2>
      <p className="mb-4 text-base">
        আমরা আপনার তথ্য তৃতীয় পক্ষের কাছে বিক্রি করি না। কিছু পরিস্থিতিতে, যেমন আইনগত প্রয়োজনে
        বা পরিষেবা প্রদানকারীদের সাথে সীমিত তথ্য শেয়ার করা হতে পারে।
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">৫. বাহ্যিক লিংক</h2>
      <p className="mb-4 text-base">
        আমাদের ওয়েবসাইটে তৃতীয় পক্ষের ওয়েবসাইটের লিংক থাকতে পারে। তাদের গোপনীয়তার নীতি আমাদের
        নিয়ন্ত্রণে নেই।
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">৬. ব্যবহারকারীর অধিকার</h2>
      <p className="mb-4 text-base">
        আপনি চাইলে আপনার ব্যক্তিগত তথ্য দেখতে, পরিবর্তন করতে বা মুছে ফেলতে পারেন। এ জন্য
        আমাদের সঙ্গে যোগাযোগ করুন।
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">৭. নীতিমালার পরিবর্তন</h2>
      <p className="mb-4 text-base">
        আমরা প্রয়োজন অনুযায়ী এই গোপনীয়তা নীতি পরিবর্তন করতে পারি। সব পরিবর্তন এই পৃষ্ঠায়
        প্রকাশ করা হবে।
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">৮. যোগাযোগ</h2>
      <p className="mb-4 text-base">
        গোপনীয়তা সংক্রান্ত যেকোনো প্রশ্নের জন্য আমাদের সাথে যোগাযোগ করুন:
      </p>
      <ul className="list-none mb-6 text-base">
        <li><strong>ইমেইল:</strong> <a href="mailto:privacy@jagrotobarta.com" className="text-primary hover:underline">privacy@jagrotobarta.com</a></li>
        <li><strong>ফোন:</strong> +৮৮ ০২ ০০০০০০০০</li>
      </ul>

      <p className="text-base italic">
        ধন্যবাদ, জাগ্রত বার্তার সঙ্গে থাকার জন্য।
      </p>
    </div>
  );
}
