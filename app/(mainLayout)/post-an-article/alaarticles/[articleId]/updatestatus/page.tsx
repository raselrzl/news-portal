'use client';

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { use } from "react";
import { updateArticleStatusToActive } from '@/app/actions';

export default function ConfirmPublishPage({ params }: { params: Promise<{ articleId: string }> }) {
  const router = useRouter();
  
  const { articleId } = use(params); 

  const handleConfirm = async () => {
    try {
      await updateArticleStatusToActive(articleId);
    } catch (error) {
      console.error("Error updating article status:", error);
    }
  };

  const handleCancel = () => {
    router.push("/post-an-article/alaarticles");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Are you sure you want to publish this article?</h2>
      <p className="mt-2">This action will change the article status to "ACTIVE".</p>

      <div className="mt-4 space-x-2">
        <Button variant="link" onClick={handleCancel}>Cancel</Button>
        <Button variant="ghost" onClick={handleConfirm}>Confirm</Button>
      </div>
    </div>
  );
}
