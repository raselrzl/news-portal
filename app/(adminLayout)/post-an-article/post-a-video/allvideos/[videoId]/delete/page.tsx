"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { use } from "react";
import { deleteVedioById } from "@/app/actions";
import { useState } from "react";

export default function ConfirmDeleteVedioPage({
  params,
}: {
  params: Promise<{ videoId: string }>;
}) {
  const router = useRouter();
  const { videoId } = use(params);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);
      await deleteVedioById(videoId);
      router.push("/post-an-article/post-a-video/allvideos");
    } catch (error) {
      console.error("Error deleting advertisement:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    router.push("/post-an-article/post-a-video/allvideos");
  };

  return (
    <div className="flex items-center justify-center px-4 mt-20">
      <div className="max-w-md w-full bg-accent-foreground/8 shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-destructive">
          Are you sure you want to delete this video?
        </h2>
        <p className="mt-2 text-sm text-accent-foreground/70">
          Once deleted, this cannot be undone.
        </p>

        <div className="mt-6 flex justify-center space-x-4">
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
            variant="destructive"
            onClick={handleConfirm}
            className="cursor-pointer"
            disabled={loading}
          >
            {loading ? "Deleting..." : "Yes, Delete"}
          </Button>
        </div>
      </div>
    </div>
  );
}
