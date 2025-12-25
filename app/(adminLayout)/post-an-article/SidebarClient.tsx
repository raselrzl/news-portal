// SidebarClient.tsx (client)
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card } from "@/components/ui/card";
import {
  BarChart,
  BookPlus,
  ChartColumnBig,
  FileQuestion,
  FlameIcon,
  Layers2,
  Megaphone,
  MessagesSquare,
  Newspaper,
  Package,
  PoundSterling,
  Settings2,
  TableProperties,
  Users,
} from "lucide-react";

interface SidebarClientProps {
  email: string;
  name: string;
  image: string;
  userType: string | null;
  approvalStatus: string | null;
  mkrValue: boolean;
}

export default function SidebarClient({ email, name, userType, approvalStatus, mkrValue }: SidebarClientProps) {
  const pathname = usePathname();

  const isNewsReporter = userType === "NEWSREPORTER" && approvalStatus === "APPROVED";
  const isEditor = userType === "EDITOR";
  const isSuperAdmin = userType === "SUPERADMIN";

  // Everyone sees
  const linksCommon = [
    { href: "/alluseropinion", icon: MessagesSquare, label: "অভিযোগ" },
  ];

  // NEWSREPORTER approved only
  const linksNewsReporter = [
    { href: "/post-an-article", icon: BookPlus, label: "নিউজ আর্টিকেল লিখুন" },
    { href: "/post-an-article/my-article", icon: Newspaper, label: "আমার প্রকাশিত সংবাদ" },
  ];

  // SOMPADOK + SUPERADMIN (common links)
  const linksSompadokSuperAdmin = [
    { href: "/post-an-article", icon: BookPlus, label: "নিউজ আর্টিকেল লিখুন" },
    { href: "/post-an-article/my-article", icon: Newspaper, label: "আমার প্রকাশিত সংবাদ" },
    { href: "/post-an-article/poll", icon: FileQuestion, label: "পোল প্রশ্ন লিখুন" },
    { href: "/post-an-article/public-source-news", icon: FlameIcon, label: "লাইভ আপডেট পোস্ট করুন" },
    { href: "/post-an-article/public-source-news/all-public-source-news", icon: FlameIcon, label: "সব লাইভ আপডেট পরিচালনা করুন" },
    { href: "/post-an-article/alluseropinion/opiniontable", icon: Settings2, label: "সব অভিযোগ পরিচালনা করুন" },
    { href: "/post-an-article/alaarticles", icon: Layers2, label: "সব আর্টিকেল পরিচালনা করুন" },
    { href: "/post-an-article/post-advertisement", icon: Megaphone, label: "বিজ্ঞাপন পোস্ট করুন" },
    { href: "/post-an-article/post-advertisement/alladvertise", icon: PoundSterling, label: "বিজ্ঞাপন পরিচালনা করুন" },
    { href: "/post-an-article/advertise/allcontactinfo", icon: MessagesSquare, label: "সব বিজ্ঞাপন অনুরোধ" },
    { href: "/post-an-article/post-a-video", icon: Settings2, label: "ইউটিউব ভিডিও পোস্ট করুন" },
    { href: "/post-an-article/post-an-instagram", icon: Settings2, label: "ইনস্টাগ্রাম লিঙ্ক পোস্ট করুন" },
    { href: "/post-an-article/post-an-instagram/allinstagrampost", icon: Settings2, label: "সব ইনস্টাগ্রাম পোস্ট পরিচালনা করুন" },
    { href: "/post-an-article/post-a-video/allvideos", icon: BarChart, label: "সব ভিডিও পরিচালনা করুন" },
    { href: "/post-an-article/allusers", icon: Users, label: "ব্যবহারকারীরা" },
  ];

  // SUPERADMIN only
  const linksSuperAdmin = [
    { href: "/post-an-article/dailyvisitors", icon: Users, label: "দৈনিক ভিজিটর" },
    { href: "/post-an-article/post-advertisement/advertisementPackage", icon: Package, label: "বিজ্ঞাপন প্যাকেজ যোগ করুন" },
    { href: "/post-an-article/post-advertisement/adanalysis", icon: TableProperties, label: "অর্থনীতি" },
    { href: "/post-an-article/routeTrack", icon: ChartColumnBig, label: "ড্যাশবোর্ড" },
  ];

  // Compose final links
  let allVisibleLinks = [...linksCommon];

  if (isNewsReporter) {
    allVisibleLinks.push(...linksNewsReporter);
  }

  if (isEditor || isSuperAdmin) {
    allVisibleLinks.push(...linksSompadokSuperAdmin);
  }

  if (isSuperAdmin) {
    allVisibleLinks.push(...linksSuperAdmin);
  }

  return (
    <Card className="hidden md:flex w-54 rounded-none flex-col pt-0 shadow-none border-none">
      <div className="px-4 pb-2">
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs text-gray-500">{email}</p>
      </div>
      <nav className="flex-1 flex flex-col gap-2 text-xs overflow-y-auto px-4">
        {allVisibleLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 p-1 text-md transition-colors duration-150 rounded-xs ${
                isActive
                  ? "bg-gray-400 dark:text-black font-semibold"
                  : "bg-gray-50 hover:bg-gray-200 dark:hover:bg-gray-200 dark:bg-gray-600"
              }`}
            >
              <link.icon size={16} />
              {link.label}
            </Link>
          );
        })}
      </nav>
    </Card>
  );
}
