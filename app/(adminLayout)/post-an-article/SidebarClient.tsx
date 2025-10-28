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
  Layers2,
  Megaphone,
  MessagesSquare,
  Newspaper,
  Package,
  PoundSterling,
  Settings2,
  Table,
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
    { href: "/alluseropinion", icon: MessagesSquare, label: "Complaints" },
  ];

  // NEWSREPORTER approved only
  const linksNewsReporter = [
    { href: "/post-an-article", icon: BookPlus, label: "Write News Article" },
    { href: "/post-an-article/my-article", icon: Newspaper, label: "My Published Articles" },
  ];

  // SOMPADOK + SUPERADMIN (common links)
  const linksSompadokSuperAdmin = [
    { href: "/post-an-article", icon: BookPlus, label: "Write News Article" },
    { href: "/post-an-article/my-article", icon: Newspaper, label: "My Published Articles" },
    { href: "/post-an-article/poll", icon: FileQuestion, label: "Write Poll Question" },
    { href: "/post-an-article/alluseropinion/opiniontable", icon: Settings2, label: "Manage All Complaints" },
    { href: "/post-an-article/alaarticles", icon: Layers2, label: "Manage All Articles" },
    { href: "/post-an-article/post-advertisement", icon: Megaphone, label: "Post Advertisement" },
    { href: "/post-an-article/post-advertisement/alladvertise", icon: PoundSterling, label: "Manage Advertisements" },
    { href: "/post-an-article/advertise/allcontactinfo", icon: MessagesSquare, label: "All Advertisement Requests" },
    { href: "/post-an-article/post-a-video", icon: Settings2, label: "Post a YouTube Video" },
    { href: "/post-an-article/post-a-video/allvideos", icon: BarChart, label: "Manage All Videos" },
    { href: "/post-an-article/allusers", icon: Users, label: "Users" },
  ];

  // SUPERADMIN only
  const linksSuperAdmin = [
    { href: "/post-an-article/post-advertisement/advertisementPackage", icon: Package, label: "Add Advertisement Package" },
    { href: "/post-an-article/post-advertisement/adanalysis", icon: TableProperties, label: "Economy" },
    { href: "/post-an-article/routeTrack", icon: ChartColumnBig, label: "Dashboard" },
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
