import {
  BookPlus,
  ChevronDown,
  Heart,
  Layers2,
  Lock,
  LogOut,
  PoundSterling,
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
import { ime } from "@/app/utils/ime";
/* import { ime } from "@/app/utils/ime"; */

interface iAppProps {
  email: string;
  name: string;
  image: string;
}
export function UserDropdown({ email, name, image }: iAppProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="h-auto p-0 hover:bg-transparent cursor-pointer mr-1"
          size="sm"
        >
          <p className="font-bold py-[5px]">{name.charAt(0)}</p>
          <ChevronDown size={16} strokeWidth={2} className="" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align="end">
        <DropdownMenuLabel className="flex flex-col">
          {/* <div className="flex justify-between"> */}
            <span className="text-sm font-medium text-foreground">{name}</span>
        {/*     <Avatar>
            <AvatarImage src={image} alt="Profile Image" />
            <AvatarFallback className="font-bold">{name.charAt(0)}</AvatarFallback>            
          </Avatar> */}
          {/* </div> */}
          <span className="text-xs font-medium text-foreground">{email}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/saved">
              <Heart size={16} strokeWidth={2} className="opacity-60" />
              <span>সংরক্ষিত সংবাদ</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/post-an-article">
              <BookPlus size={16} strokeWidth={2} className="opacity-60" />
              একটি সংবাদ লিখুন
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/my-article">
              <Layers2 size={16} strokeWidth={2} className="opacity-60" />
              <span>আমার প্রকাশিত সংবাদের তালিকা</span>
            </Link>
          </DropdownMenuItem>
                {ime(email) && (
              <DropdownMenuItem asChild>
                <Link href="/post-an-article/alaarticles">
                  <Lock size={16} strokeWidth={2} className="opacity-60" />
                  <span>AllArticleList</span>
                </Link>
              </DropdownMenuItem>
            )}

          <DropdownMenuSeparator />
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
                <span> লগআউট </span>
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
