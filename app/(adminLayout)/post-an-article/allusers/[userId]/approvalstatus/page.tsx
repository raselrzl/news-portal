"use client";

import { useRouter } from "next/navigation";
import { use, useState } from "react";
import { Button } from "@/components/ui/button";
import { updateUserApprovalStatus } from "@/app/actions";
import { Loader2 } from "lucide-react";

export default function ConfirmApprovalPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const router = useRouter();
  const { userId } = use(params);
  const [loadingStatus, setLoadingStatus] = useState<
    null | "APPROVED" | "REJECT"
  >(null);

  const handleConfirm = async (status: "APPROVED" | "REJECT") => {
    try {
      setLoadingStatus(status);
      await updateUserApprovalStatus(userId, status);
      router.push("/post-an-article/allusers");
    } catch (error) {
      console.error("Error updating user approval status:", error);
    } finally {
      setLoadingStatus(null);
    }
  };

  const handleCancel = () => {
    router.push("/post-an-article/allusers");
  };

  return (
    <div className="flex items-center justify-center px-4 mt-30">
      <div className="max-w-md w-full bg-accent-foreground/8 shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-green-700">
          Are you sure you want to approve this user?
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          This action will change the user's approval status to{" "}
          <strong>"Approved"</strong>.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Button variant="outline" onClick={() => router.back()}>
            Go To Previous Page
          </Button>

          <Button variant="link" onClick={handleCancel}>
            Cancel
          </Button>

          <Button
            variant="secondary"
            onClick={() => handleConfirm("APPROVED")}
            disabled={loadingStatus === "APPROVED"}
          >
            {loadingStatus === "APPROVED" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Approving...
              </>
            ) : (
              "Approve"
            )}
          </Button>

          <Button
            variant="secondary"
            onClick={() => handleConfirm("REJECT")}
            disabled={loadingStatus === "REJECT"}
          >
            {loadingStatus === "REJECT" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Rejecting...
              </>
            ) : (
              "Reject"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
