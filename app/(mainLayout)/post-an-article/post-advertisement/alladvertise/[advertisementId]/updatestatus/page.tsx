import { updateAdvertisementStatus } from "@/app/actions";
import { redirect } from "next/navigation";

const statusOptions = [
  { label: "খসড়া", value: "DRAFT" },
  { label: "সক্রিয়", value: "ACTIVE" },
  { label: "মেয়াদোত্তীর্ণ", value: "EXPIRED" },
];

export default function UpdateAdvertiseStatus({ params }: { params: { advertisementId: string } }) {
  return (
    <form
      action={async (formData) => {
        "use server";
        const status = formData.get("status") as "DRAFT" | "ACTIVE" | "EXPIRED";
        await updateAdvertisementStatus(params.advertisementId, status);
        redirect("/post-an-article/post-advertisement/alladvertise");
      }}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow"
    >
      <h1 className="text-xl font-bold mb-4">বিজ্ঞাপনের স্ট্যাটাস পরিবর্তন করুন</h1>

      <label htmlFor="status" className="block mb-2 font-medium">
        একটি স্ট্যাটাস নির্বাচন করুন
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
        আপডেট করুন
      </button>
    </form>
  );
}
