import { updateVedioStatus } from "@/app/actions";
import { redirect } from "next/navigation";
import { use } from "react";

const statusOptions = [
  { label: "DRAFT", value: "DRAFT" },
  { label: "ACTIVE", value: "ACTIVE" },
  { label: "EXPIRED", value: "EXPIRED" },
];

export default function UpdateVedioStatus(
  {
    params,
  }: {
    params: Promise<{ videoId: string }>;
  }
) {
  const { videoId } = use(params);

  
  
  return (
    <form
      action={async (formData) => {
        "use server";
        const status = formData.get("status") as "DRAFT" | "ACTIVE" | "EXPIRED";
        await updateVedioStatus(videoId, status);
        redirect("/post-an-article/post-advertisement/alladvertise");
      }}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow"
    >
      <h1 className="text-xl font-bold mb-4">Update Status</h1>

      <label htmlFor="status" className="block mb-2 font-medium">
        Select a status
      </label>
      <select
        id="status"
        name="status"
        className="w-full border px-4 py-2 mb-4 rounded"
      >
        {statusOptions.map((status) => (
          <option key={status.value} value={status.value}>
            {status.label}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded w-full"
      >
        Update
      </button>
    </form>
  );
}
