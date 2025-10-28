"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { use, useState } from "react";
import { deleteArticleById } from "@/app/actions";
import { Loader2 } from "lucide-react";

export default function DeleteArticle({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { articleId } = use(params);

  const handleConfirm = async () => {
    try {
      setLoading(true);
      await deleteArticleById(articleId);
      router.push("/post-an-article/alaarticles");
      setLoading(false);
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  }; 

  const handleCancel = () => {
    router.push("/post-an-article/alaarticles");
  };

  return (
    <div className=" flex items-center justify-center px-4 mt-30">
      <div className="max-w-md w-full bg-accent-foreground/8 shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-destructive">
          Are you sure you want to delete this news article?
        </h2>
        <p className="mt-2 text-sm text-accent-foreground/70">
          This action is irreversible once done.
        </p>

        <div className="mt-6 flex justify-center space-x-4">
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="cursor-pointer"
          >
            Previous Page
          </Button>
          <Button
            variant="link"
            onClick={handleCancel}
            className="cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleConfirm}
            className="cursor-pointer flex items-center gap-2"
            disabled={loading}
          >
            {loading && <Loader2 className="animate-spin w-4 h-4" />}
            Yes, Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
