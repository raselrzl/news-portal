import {
  BarChart,
  BookPlus,
  ChartColumnBig,
  ChevronDown,
  FileQuestion,
  FlameIcon,
  Layers2,
  LogOut,
  Megaphone,
  MessagesSquare,
  Newspaper,
  Package,
  PoundSterling,
  Settings2,
  TableProperties,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { signOut } from "@/app/utils/auth";
import { ime } from "@/app/utils/ime";
import { getCurrentUserType } from "@/app/utils/getCurrentUserType";

interface iAppProps {
  email: string;
  name: string;
  image: string;
}

export async function UserDropdown({ email, name, image }: iAppProps) {
  const mkr = ime(email);
  const currentUser = await getCurrentUserType();
  const userType = currentUser?.userType ?? null;
  const approvalStatus = currentUser?.approvalStatus ?? null;

  const isNewsReporter =
    userType === "NEWSREPORTER" && approvalStatus === "APPROVED";
  const isEditor = userType === "EDITOR";
  const isSuperAdmin = userType === "SUPERADMIN";

  // Common links for everyone
  const linksCommon = [
    { href: "/alluseropinion", icon: MessagesSquare, label: "অভিযুগসমূহ" },
  ];

  // Links for NEWSREPORTER approved
  const linksNewsReporter = [
    { href: "/post-an-article", icon: BookPlus, label: "সংবাদ নিবন্ধ লিখুন" }, // Write News Article
    {
      href: "/post-an-article/my-article",
      icon: Newspaper,
      label: "আমার প্রকাশিত সংবাদ",
    }, // My Published Articles
  ];

  // Links for SOMPADOK and SUPERADMIN
  const linksSompadokSuperAdmin = [
    { href: "/post-an-article", icon: BookPlus, label: "সংবাদ নিবন্ধ লিখুন" },
    {
      href: "/post-an-article/my-article",
      icon: Newspaper,
      label: "আমার প্রকাশিত সংবাদ",
    },
    {
      href: "/post-an-article/poll",
      icon: FileQuestion,
      label: "পোল প্রশ্ন লিখুন",
    }, // Write Poll Question
    {
      href: "/post-an-article/alluseropinion/opiniontable",
      icon: Settings2,
      label: "সব অভিযোগ পরিচালনা করুন",
    }, // Manage All Complaints
    {
      href: "/post-an-article/public-source-news",
      icon: FlameIcon,
      label: "লাইভ আপডেট পোস্ট করুন",
    }, // Post A Live Update
    {
      href: "/post-an-article/public-source-news/all-public-source-news",
      icon: FlameIcon,
      label: "সব লাইভ আপডেট পরিচালনা করুন",
    }, // Manage All Live Updates
    {
      href: "/post-an-article/alaarticles",
      icon: Layers2,
      label: "সব নিবন্ধ পরিচালনা করুন",
    }, // Manage All Articles
    {
      href: "/post-an-article/post-advertisement",
      icon: Megaphone,
      label: "বিজ্ঞাপন পোস্ট করুন",
    }, // Post Advertisement
    {
      href: "/post-an-article/post-advertisement/alladvertise",
      icon: PoundSterling,
      label: "বিজ্ঞাপন পরিচালনা করুন",
    }, // Manage Advertisements
    {
      href: "/post-an-article/advertise/allcontactinfo",
      icon: MessagesSquare,
      label: "সব বিজ্ঞাপন অনুরোধ",
    }, // All Advertisement Requests
    {
      href: "/post-an-article/post-a-video",
      icon: Settings2,
      label: "ইউটিউব ভিডিও পোস্ট করুন",
    }, // Post a YouTube Video
    {
      href: "/post-an-article/post-an-instagram",
      icon: Settings2,
      label: "ইনস্টাগ্রাম লিঙ্ক পোস্ট করুন",
    }, // Post an Instagram Link
    {
      href: "/post-an-article/post-an-instagram/allinstagrampost",
      icon: Settings2,
      label: "সব ইনস্টাগ্রাম পোস্ট পরিচালনা করুন",
    }, // Manage all Instagram posts
    {
      href: "/post-an-article/post-a-video/allvideos",
      icon: BarChart,
      label: "সব ভিডিও পরিচালনা করুন",
    }, // Manage All Videos
    { href: "/post-an-article/allusers", icon: Users, label: "ইউজার" }, // Users
  ];

  // SUPERADMIN-only links
  const linksSuperAdmin = [
    {
      href: "/post-an-article/dailyvisitors",
      icon: Users,
      label: "দৈনিক ভিজিটর",
    }, // Daily Visitors
    {
      href: "/post-an-article/post-advertisement/advertisementPackage",
      icon: Package,
      label: "বিজ্ঞাপন প্যাকেজ যোগ করুন",
    }, // Add Advertisement Package
    {
      href: "/post-an-article/post-advertisement/adanalysis",
      icon: TableProperties,
      label: "অর্থনীতি",
    }, // Economy
    {
      href: "/post-an-article/routeTrack",
      icon: ChartColumnBig,
      label: "পরিসংখ্যান",
    }, // Statistics
  ];

  // Logout button
  <span>লগ আউট</span>;

  // ✅ Helper function to merge and remove duplicates
  function mergeLinks(...groups: any[][]) {
    const merged = groups.flat();
    return merged.filter(
      (link, i, arr) => i === arr.findIndex((l) => l.href === link.href)
    );
  }

  // Combine links based on user type
  const allLinks = mergeLinks(
    linksCommon,
    isNewsReporter || mkr ? linksNewsReporter : [],
    isEditor || isSuperAdmin ? linksSompadokSuperAdmin : [],
    isSuperAdmin ? linksSuperAdmin : []
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="h-auto p-0 hover:bg-transparent cursor-pointer mr-1"
          size="sm"
        >
          <p className="font-bold py-[5px]">{name.charAt(0)}</p>
          <ChevronDown size={16} strokeWidth={2} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-60" align="end">
        {/* User Info */}
        <DropdownMenuLabel className="flex flex-col">
          <span className="text-sm font-medium text-foreground">{name}</span>
          <span className="text-xs font-medium text-foreground">{email}</span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* Dynamic Links */}
        <DropdownMenuGroup>
          {allLinks.map((link) => (
            <DropdownMenuItem key={link.href} asChild>
              <Link href={link.href} className="flex items-center gap-2">
                <link.icon size={16} strokeWidth={2} className="opacity-60" />
                <span>{link.label}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Logout */}
        <DropdownMenuItem asChild className="w-full">
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button className="flex w-full items-center justify-center gap-2">
              <LogOut size={16} strokeWidth={2} className="opacity-60" />
              <span>Logout</span>
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
