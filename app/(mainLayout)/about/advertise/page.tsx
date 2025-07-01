import AdvertiseForm from "./AdvertsieContactForm";
import {
  Target,
  Users,
  ShieldCheck,
  Globe,
  Layout,
  Video,
  FileText,
  Calendar,
  Mail,
} from "lucide-react";

export default function AdvertisePage() {
  return (
    <div className="py-10 px-4">
      <div className="max-w-3xl mx-auto bg-background rounded-lg shadow-md p-6 md:p-10 text-foreground font-[Noto_Sans_Bengali]">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-600">
          দৈনিক জাগ্রত বার্তা
        </h2>
        <p className="mb-6">
          একটি দ্রুত বর্ধনশীল ও পাঠকপ্রিয় অনলাইন সংবাদমাধ্যম, যেখানে প্রতিদিন পৌঁছে যাই হাজারো সচেতন ও দায়িত্বশীল মানুষের দোরগোড়ায়।
          আপনার ব্র্যান্ড, পণ্য বা সেবার জন্য আমরা হতে পারি সবচেয়ে নির্ভরযোগ্য ও কার্যকরী বিজ্ঞাপন প্ল্যাটফর্ম।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-orange-700">
          কেন বিজ্ঞাপন দিবেন আমাদের সাথে?
        </h3>
        <ul className="space-y-4 mb-6">
          <li className="flex items-start gap-3">
            <Target className="text-orange-500 mt-1" />
            <span>
              <strong>টার্গেটেড অডিয়েন্স:</strong> আমাদের পাঠকগোষ্ঠী সচেতন, সিদ্ধান্ত গ্রহণে সক্রিয় এবং সমাজে প্রভাবশালী।
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Users className="text-orange-500 mt-1" />
            <span>
              <strong>উচ্চ রিচ ও এনগেজমেন্ট:</strong> সোশ্যাল মিডিয়া ও ওয়েবসাইট মিলিয়ে দৈনিক হাজার হাজার ভিজিটর ও ফলোয়ার।
            </span>
          </li>
          <li className="flex items-start gap-3">
            <ShieldCheck className="text-orange-500 mt-1" />
            <span>
              <strong>বিশ্বাসযোগ্য প্ল্যাটফর্ম:</strong> তথ্যনির্ভর ও নিরপেক্ষ সাংবাদিকতার কারণে পাঠকের আস্থা ও বিশ্বাস আমাদের মূল শক্তি।
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Globe className="text-orange-500 mt-1" />
            <span>
              <strong>মাল্টিপ্ল্যাটফর্ম কভারেজ:</strong> ওয়েবসাইট, ফেসবুক, ইনস্টাগ্রাম, ইউটিউবসহ বিভিন্ন চ্যানেলে আপনার বিজ্ঞাপন পৌঁছে যাবে সঠিক গন্তব্যে।
            </span>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-4 text-orange-700">বিজ্ঞাপন সেবা:</h3>
        <ul className="space-y-4 mb-6">
          <li className="flex items-center gap-3">
            <Layout className="text-orange-600" /> ব্যানার বিজ্ঞাপন (ওয়েবসাইট)
          </li>
          <li className="flex items-center gap-3">
            <Users className="text-orange-600" /> স্পনসর পোস্ট (সোশ্যাল মিডিয়া)
          </li>
          <li className="flex items-center gap-3">
            <Video className="text-orange-600" /> ভিডিও ও রিল বিজ্ঞাপন
          </li>
          <li className="flex items-center gap-3">
            <FileText className="text-orange-600" /> ব্র্যান্ড কনটেন্ট ও প্রোমোশন
          </li>
          <li className="flex items-center gap-3">
            <Calendar className="text-orange-600" /> ইভেন্ট কভারেজ ও স্পনসরশিপ
          </li>
          <li className="flex items-center gap-3">
            <FileText className="text-orange-600" /> প্রেস রিলিজ ও ফিচার রিপোর্ট
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 text-orange-700">যোগাযোগ করুন:</h3>
        <p className="mb-8 flex items-center gap-2">
          <Mail className="text-orange-500" />
          বিজ্ঞাপন বুকিং বা মূল্য জানার জন্য যোগাযোগ করুন
        </p>

        <h4 className="text-lg font-semibold text-orange-600 mb-4">
          অথবা নিচে ফর্মটি পূরণ করুন
        </h4>

        <AdvertiseForm />
      </div>
    </div>
  );
}
