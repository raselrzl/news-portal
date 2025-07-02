import {
  BarChart,
  BookPlus,
  ChevronDown,
  Heart,
  Layers2,
  Lock,
  LogOut,
  Megaphone,
  MessagesSquare,
  Newspaper,
  PoundSterling,
  Settings2,
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
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ime, isNewsReporter, supperAdmin } from "@/app/utils/ime";
import { requireSuperAdmin } from "@/app/utils/requireUser";
import { getCurrentUserType } from "@/app/utils/getCurrentUserType";

interface iAppProps {
  email: string;
  name: string;
  image: string;
}

export async function UserDropdown({ email, name, image }: iAppProps) {
  const mkr = ime(email);

  const currentUser = await getCurrentUserType();
  const userType = currentUser?.userType;
  const approvalStatus = currentUser?.approvalStatus;

  const canSeeSection1 =
    (userType === "NEWSREPORTER" && approvalStatus === "APPROVED") ||
    userType === "SOMPANDOK" ||
    userType === "SUPERADMIN";
  const canSeeSection2 = userType === "SOMPANDOK" || userType === "SUPERADMIN";
  const canSeeSection3 = userType === "SUPERADMIN";

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
      <DropdownMenuContent className="w-48" align="end">
        <DropdownMenuLabel className="flex flex-col">
          <span className="text-sm font-medium text-foreground">{name}</span>
          <span className="text-xs font-medium text-foreground">{email}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Section 1 - User Options */}
        <DropdownMenuItem asChild>
          <Link href="/alluseropinion">
            <MessagesSquare size={16} strokeWidth={2} className="opacity-60" />
            <span>অভিযোগসমূহ</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuGroup>
          {(canSeeSection1 || mkr) && (
            <>
              <DropdownMenuItem asChild>
                <Link href="/post-an-article">
                  <BookPlus size={16} strokeWidth={2} className="opacity-60" />
                  <span>একটি সংবাদ লিখুন</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/my-article">
                  <Newspaper size={16} strokeWidth={2} className="opacity-60" />
                  <span>আমার প্রকাশিত সংবাদের তালিকা</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/alluseropinion/opiniontable">
                  <Settings2 size={16} strokeWidth={2} className="opacity-60" />
                  <span>সব অভিযোগের নিয়ন্ত্রণ</span>
                </Link>
              </DropdownMenuItem>
            </>
          )}

          {/* Section 2 - Admin Options */}
          {canSeeSection2 && (
            <>
              <DropdownMenuItem asChild>
                <Link href="/post-an-article/alaarticles">
                  <Layers2 size={16} strokeWidth={2} className="opacity-60" />
                  <span>সব প্রবন্ধের নিয়ন্ত্রণ</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/post-an-article/post-advertisement">
                  <Megaphone size={16} strokeWidth={2} className="opacity-60" />
                  <span>বিজ্ঞাপন পোস্ট করুন</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/post-an-article/post-advertisement/alladvertise">
                  <PoundSterling size={16} strokeWidth={2} className="opacity-60" />
                  <span>সব বিজ্ঞাপন নিয়ন্ত্রণ</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about/advertise/allcontactinfo">
                  <MessagesSquare size={16} strokeWidth={2} className="opacity-60" />
                  <span>সব বিজ্ঞাপন অনুরোধ</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/post-an-article/post-a-video">
                  <Settings2 size={16} strokeWidth={2} className="opacity-60" />
                  <span>ইউটিউব ভিডিও পোস্ট করুন</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/post-an-article/post-a-video/allvideos">
                  <BarChart size={16} strokeWidth={2} className="opacity-60" />
                  <span>সব ভিডিও নিয়ন্ত্রণ</span>
                </Link>
              </DropdownMenuItem>

              {/* Dashboard Link */}
              <DropdownMenuItem asChild>
                <Link href="/routeTrack">
                  <BarChart size={16} strokeWidth={2} className="opacity-60" />
                  <span>ড্যাশবোর্ড</span>
                </Link>
              </DropdownMenuItem>

              {/* All Users Link */}
              <DropdownMenuItem asChild>
                <Link href="/post-an-article/allusers">
                  <Users size={16} strokeWidth={2} className="opacity-60" />
                  <span>অ্যাপের সকল ব্যবহারকারী</span>
                </Link>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Logout */}
        <DropdownMenuItem asChild className="w-full">
          <form
            action={async () => {
              "use server";
              await signOut({
                redirectTo: "/",
              });
            }}
          >
            <button className="flex w-full items-center justify-center gap-2">
              <LogOut size={16} strokeWidth={2} className="opacity-60" />
              <span>লগআউট</span>
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
