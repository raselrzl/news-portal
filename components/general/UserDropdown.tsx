import {
  BarChart,
  BookPlus,
  ChartColumnBig,
  ChevronDown,
  FileQuestion,
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

  const isNewsReporter = userType === "NEWSREPORTER" && approvalStatus === "APPROVED";
  const isEditor = userType === "EDITOR";
  const isSuperAdmin = userType === "SUPERADMIN";

  // Common links for everyone
  const linksCommon = [
    { href: "/alluseropinion", icon: MessagesSquare, label: "Complaints" },
  ];

  // Links for NEWSREPORTER approved
  const linksNewsReporter = [
    { href: "/post-an-article", icon: BookPlus, label: "Write News Article" },
    { href: "/post-an-article/my-article", icon: Newspaper, label: "My Published Articles" },
  ];

  // Links for SOMPADOK and SUPERADMIN
  const linksSompadokSuperAdmin = [
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

  // SUPERADMIN-only links
  const linksSuperAdmin = [
    { href: "/post-an-article/post-advertisement/advertisementPackage", icon: Package, label: "Add Advertisement Package" },
    { href: "/post-an-article/post-advertisement/adanalysis", icon: TableProperties, label: "Economy" },
    { href: "/post-an-article/routeTrack", icon: ChartColumnBig, label: "Statistics" },
  ];

  // Compose final links
  let allLinks = [...linksCommon];

  if (isNewsReporter || mkr) {
    allLinks.push(...linksNewsReporter);
  }

  if (isEditor || isSuperAdmin) {
    allLinks.push(...linksSompadokSuperAdmin);
  }

  if (isSuperAdmin) {
    allLinks.push(...linksSuperAdmin);
  }

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
        <DropdownMenuLabel className="flex flex-col">
          <span className="text-sm font-medium text-foreground">{name}</span>
          <span className="text-xs font-medium text-foreground">{email}</span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {allLinks.map((link) => (
            <DropdownMenuItem key={link.href} asChild>
              <Link href={link.href}>
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
