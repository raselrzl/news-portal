"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { use } from "react";
import { updateArticleStatusToDraft } from "@/app/actions";

export default function ConfirmPublishPageDraft({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const router = useRouter();
  const { articleId } = use(params);
  const handleConfirm = async () => {
    try {
      await updateArticleStatusToDraft(articleId);
    } catch (error) {
      console.error("Error updating article status:", error);
    }
  };

  const handleCancel = () => {
    router.push("/post-an-article/alaarticles");
  };

  return (
    <div className=" flex items-center justify-center px-4 mt-30">
      <div className="max-w-md w-full bg-accent-foreground/8 shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-green-700">
          Are you sure you want to unpublish this article?
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          This action will revert the article to <strong>"Unpublished"</strong>{" "}
          status.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="cursor-pointer"
          >
            Go To Previous Page
          </Button>
          <Button
            variant="link"
            onClick={handleCancel}
            className="cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            variant="ghost"
            onClick={handleConfirm}
            className="cursor-pointer"
          >
            Make it Draft
          </Button>
        </div>
      </div>
    </div>
  );
}
