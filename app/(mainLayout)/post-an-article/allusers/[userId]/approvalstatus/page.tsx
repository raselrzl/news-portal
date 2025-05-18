"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { use } from "react";
import { updateUserApprovalStatus } from "@/app/actions";

export default function ConfirmApprovalPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const router = useRouter();
  const { userId } = use(params);

  const handleConfirm = async (status: 'APPROVED' | 'REJECT') => {
    try {
      await updateUserApprovalStatus(userId, status);
      router.push("/post-an-article/allusers"); 
    } catch (error) {
      console.error("Error updating user approval status:", error);
    }
  };

  const handleCancel = () => {
    router.push("/post-an-article/allusers");
  };

  return (
    <div className="flex items-center justify-center px-4 mt-30">
      <div className="max-w-md w-full bg-accent-foreground/8 shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-green-700">
          আপনি কি নিশ্চিতভাবে এই ব্যবহারকারীকে অনুমোদন করতে চান?
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          এই পদক্ষেপের ফলে ব্যবহারকারীর অনুমোদন স্ট্যাটাস <strong>"অনুমোদিত"</strong> এ
          পরিবর্তিত হবে।
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Button variant="outline" onClick={() => router.back()} className="cursor-pointer">
            আগের পাতায় ফিরে যান
          </Button>
          <Button variant="link" onClick={handleCancel} className="cursor-pointer">
          কিছু করতে চাই না
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleConfirm('APPROVED')}
            className="cursor-pointer"
          >
            সাংবাদিকতা অনুমোদন করুন
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleConfirm('REJECT')}
            className="cursor-pointer"
          >
            সাংবাদিকতা প্রত্যাখ্যান করুন
          </Button>
        </div>
      </div>
    </div>
  );
}
