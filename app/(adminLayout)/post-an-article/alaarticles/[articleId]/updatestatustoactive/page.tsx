"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { use, useState } from "react";
import { updateArticleStatusToActive } from "@/app/actions";
import { CheckCircle, Loader2 } from "lucide-react";

export default function ConfirmPublishPageActive({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const [isPublishing, setIsPublishing] = useState(false);
  const router = useRouter();
  const { articleId } = use(params);
  const handleConfirm = async () => {
    setIsPublishing(true);
    try {
      await updateArticleStatusToActive(articleId);
    } catch (error) {
      console.error("Error updating article status:", error);
    } finally {
      setIsPublishing(false);
    }
  };

  const handleCancel = () => {
    router.push("/post-an-article/alaarticles");
  };

  return (
    <div className="flex items-center justify-center px-4 mt-30">
      <div className="max-w-md w-full bg-accent-foreground/8 shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-green-700">
          Are you sure you want to publish this article?
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          This action will change the article's status to{" "}
          <strong>"Published"</strong>.
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
            variant="secondary"
            onClick={handleConfirm}
            className="cursor-pointer"
            disabled={isPublishing}
          >
            {isPublishing ? (
              <>
                <Loader2 className="animate-spin w-4 h-4 mr-2" />
                Publishing...
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Publish
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
