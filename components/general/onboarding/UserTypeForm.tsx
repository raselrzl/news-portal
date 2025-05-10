type UserSelectionType = "newsReporter" | "Advertiser";

interface UserTypeSelectionProps {
  onSelect: (type: UserSelectionType) => void;
}

import { Button } from "@/components/ui/button";
import { Building2, UserRound } from "lucide-react";

export default function UserTypeSelection({
  onSelect,
}: UserTypeSelectionProps) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">স্বাগতম, চলুন শুরু করা যাক!</h2>
        <p className="text-gray-400 text-xs">
          আপনি কি সাংবাদিক হতে চান, নাকি বিজ্ঞাপনদাতা হতে চান? তা বেছে নিন
        </p>
      </div>
      <div className="grid gap-4">
        <Button
          onClick={() => onSelect("newsReporter")}
          variant={"outline"}
          className="w-full h-auto p-6 items-center gap-4 border-2 transition-all duration-200 hover:border-primary hover:bg-primary/5 cursor-pointer"
        >
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Building2 className="size-6 text-primary" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold">সাংবাদিক?</h3>
            <p className="text-gray-500">
              জাগ্রত বার্তায় সংবাদ প্রকাশ করতে পারবেন?
            </p>
          </div>
        </Button>
        <Button
          onClick={() => onSelect("Advertiser")}
          variant={"outline"}
          className="w-full h-auto p-6 items-center gap-4 border-2 transition-all duration-200 hover:border-primary hover:bg-primary/5 cursor-pointer"
        >
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
            <UserRound className="size-6 text-primary" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold">বিজ্ঞাপনদাতা?</h3>
            <p className="text-gray-500">
              বিজ্ঞাপনদাতা হিসেবে নিবন্ধন করতে পারবেন?
            </p>
          </div>
        </Button>
      </div>
    </div>
  );
}
