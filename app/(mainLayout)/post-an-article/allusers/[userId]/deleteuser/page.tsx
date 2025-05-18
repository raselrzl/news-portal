'use client';

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { use } from "react";
import { deleteUserById } from '@/app/actions';

export default function ConfirmDeleteUserPage({ params }: { params: Promise<{ userId: string }> }) {
  const router = useRouter();
  const { userId } = use(params);

  const handleConfirm = async () => {
    try {
      await deleteUserById(userId);
      router.push("/post-an-article/allusers"); 
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handleCancel = () => {
    router.push("/post-an-article/allusers");
  };

  return (
    <div className=" flex items-center justify-center px-4 mt-30">
      <div className="max-w-md w-full bg-accent-foreground/8 shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-destructive">আপনি কি নিশ্চিতভাবে এই ID মুছে ফেলতে চান?</h2>
        <p className="mt-2 text-sm text-accent-foreground/70">এই কাজটি একবার করলে আর ফিরিয়ে আনা যাবে না।</p>

        <div className="mt-6 flex justify-center space-x-4">
        <Button variant="outline" onClick={() => router.back()} className="cursor-pointer">
            আগের পাতায় ফিরে যান
          </Button>
          <Button variant="link" onClick={handleCancel} className='cursor-pointer'>বাতিল করুন</Button>
          <Button variant="destructive" onClick={handleConfirm} className='cursor-pointer'>হ্যাঁ, মুছে ফেলুন</Button>
        </div>
      </div>
    </div>
  );
}
