"use client";

import { promoteToUserType } from "@/app/actions";
import { UserType } from "@/lib/generated/prisma";
import { Loader2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const userTypes = [
  { label: "NEWS REPORTER", value: "NEWSREPORTER" },
  { label: "ADVERTISER", value: "ADVERTISER" },
  { label: "EDITOR", value: "EDITOR" },
  { label: "Super Admin", value: "SUPERADMIN" },
];

export default function CreateSompandokPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<UserType>("EDITOR");
  const [isLoading, setIsLoading] = useState(false);

  const handlePromote = async () => {
    setIsLoading(true);
    try {
      await promoteToUserType(params.userId as string, selectedType);
      router.push("/post-an-article/allusers");
    } catch (err) {
      console.error("Promotion failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">Promote a User</h1>
      <label htmlFor="userType" className="block mb-2 font-medium">
        Select a role
      </label>

      <select
        id="userType"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value as UserType)}
        className="w-full border px-4 py-2 mb-4 rounded"
      >
        {userTypes.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>

      <button
        onClick={handlePromote}
        disabled={isLoading}
        className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded w-full flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Updating...</span>
          </>
        ) : (
          "Update"
        )}
      </button>
    </div>
  );
}
