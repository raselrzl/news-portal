'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { deleteUserById } from '@/app/actions';
import { Trash } from "lucide-react";

export default function ConfirmDeleteUserPage({ params }: { params: Promise<{ userId: string }> }) {
  const [userId, setUserId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false); // Track deletion state
  const router = useRouter();

  // Resolve the userId when the component is mounted
  useEffect(() => {
    const getUserId = async () => {
      const resolvedParams = await params;
      setUserId(resolvedParams.userId);
    };
    getUserId();
  }, [params]);

  const handleConfirm = async () => {
    if (!userId) return;

    setIsDeleting(true); // Start the delete process
    try {
      await deleteUserById(userId);
      router.push("/post-an-article/allusers"); // Navigate back after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setIsDeleting(false); // Stop the spinning effect
    }
  };

  const handleCancel = () => {
    router.push("/post-an-article/allusers");
  };

  return (
    <div className="flex items-center justify-center px-4 mt-30">
      <div className="max-w-md w-full bg-accent-foreground/8 shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-destructive">আপনি কি নিশ্চিতভাবে এই ID মুছে ফেলতে চান?</h2>
        <p className="mt-2 text-sm text-accent-foreground/70">এই কাজটি একবার করলে আর ফিরিয়ে আনা যাবে না।</p>

        <div className="mt-6 flex justify-center space-x-4">
          <Button variant="outline" onClick={() => router.back()} className="cursor-pointer">
            আগের পাতায় ফিরে যান
          </Button>
          <Button variant="link" onClick={handleCancel} className='cursor-pointer'>
            বাতিল করুন
          </Button>
          <Button
            variant="destructive"
            onClick={handleConfirm}
            className="cursor-pointer flex items-center gap-2"
            disabled={isDeleting} // Disable the button while deleting
          >
            {isDeleting ? (
              <Trash className="animate-spin" size={16} />
            ) : (
              <Trash size={16} />
            )}
            হ্যাঁ, মুছে ফেলুন
          </Button>
        </div>
      </div>
    </div>
  );
}
