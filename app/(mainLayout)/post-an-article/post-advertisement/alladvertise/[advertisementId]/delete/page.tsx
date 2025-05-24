'use client';

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { use } from "react";
import { deleteAdvertisementById } from '@/app/actions';
import { useState } from "react";

export default function ConfirmDeleteAdvertisementPage({
  params,
}: {
  params: Promise<{ advertisementId: string }>;
}) {
  const router = useRouter();
  const { advertisementId } = use(params);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);
      await deleteAdvertisementById(advertisementId);
      router.push("/post-an-article/post-advertisement/alladvertise");
    } catch (error) {
      console.error("Error deleting advertisement:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    router.push("/post-an-article/post-advertisement/alladvertise");
  };

  return (
    <div className="flex items-center justify-center px-4 mt-20">
      <div className="max-w-md w-full bg-accent-foreground/8 shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-destructive">
          আপনি কি নিশ্চিতভাবে এই বিজ্ঞাপনটি মুছে ফেলতে চান?
        </h2>
        <p className="mt-2 text-sm text-accent-foreground/70">
          একবার মুছে ফেললে এটি আর ফেরানো যাবে না।
        </p>

        <div className="mt-6 flex justify-center space-x-4">
          <Button variant="outline" onClick={() => router.back()} className="cursor-pointer">
            আগের পাতায় ফিরে যান
          </Button>
          <Button variant="link" onClick={handleCancel} className="cursor-pointer">
            বাতিল করুন
          </Button>
          <Button
            variant="destructive"
            onClick={handleConfirm}
            className="cursor-pointer"
            disabled={loading}
          >
            {loading ? "মুছে ফেলা হচ্ছে..." : "হ্যাঁ, মুছে ফেলুন"}
          </Button>
        </div>
      </div>
    </div>
  );
}
