'use client';

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { use } from "react";
import { deleteArticleById } from '@/app/actions';

export default function ConfirmDeletePage({ params }: { params: Promise<{ articleId: string }> }) {
  const router = useRouter();
  const { articleId } = use(params);

  const handleConfirm = async () => {
    try {
      await deleteArticleById(articleId);
      router.push("/post-an-article/alaarticles"); // Redirect to list
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  const handleCancel = () => {
    router.push("/post-an-article/alaarticles");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-red-600">Are you sure you want to delete this article?</h2>
      <p className="mt-2 text-sm text-gray-600">This action cannot be undone.</p>

      <div className="mt-4 space-x-2">
        <Button variant="link" onClick={handleCancel}>Cancel</Button>
        <Button variant="destructive" onClick={handleConfirm}>Yes, Delete</Button>
      </div>
    </div>
  );
}
