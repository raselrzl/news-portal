import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import {
  Menu,
  Search,
  User,
  Globe,
  School,
  Landmark,
  BookOpenCheck,
  Microscope,
  ShieldAlert,
  HeartPulse,
  BrainCircuit,
  Newspaper,
  Leaf,
  BriefcaseBusiness,
  Gavel,
  Star,
  TentTree,
  Rocket,
  Coins,
  Activity,
  BadgeCheck,
  Megaphone,
  Users,
  Film,
  ChevronDown,
  User2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ThemeToggle } from "./ThemeToggle";
import { redirect } from "next/navigation";
import { auth } from "@/app/utils/auth";
import { UserDropdown } from "./UserDropdown";
import DropDownMenuList from "./dropDownMenuList";

export default async function Navbar() {
  const user = await auth();
  /*     if (session?.user) {
      return redirect("/");
    } */
  return (
    <nav className=" flex items-center justify-between border-y-1 shadow-md">
      <Link href="/" className="flex items-center py-2 px-2">
        <div className="w-[182px] h-[46px] bg-[url('/jagarata3.png')] bg-cover bg-center" />
        {/*  <Image 
        src="/jagrata3.png"      
        alt="Logo"          
        width={160}         
        height={30}           
        /> */}
        {/*     <Image 
        src="/barta1.png"      
        alt="Logo"          
        width={50}         
        height={40}           
        /> */}
        {/*    <h1 className="text-lg font-bold text-green-500 ">
          জাগ্রত{" "}
          <span className="text-primary text-2xl font-extrabold italic">
          জাগ্রত বার্তা
          </span>
        </h1> */}
      </Link>
      {/*  desktop navigation */}

      <div className="hidden md:flex items-center gap-5">
        <ThemeToggle />
       <DropDownMenuList />
        

        {user?.user ? (
          <UserDropdown
            email={user.user.email as string}
            name={user.user.name as string}
            image={user.user.image as string}
          />
        ) : (
          <Link
          href="/login"
          className={`${buttonVariants({ variant: "outline", size: "sm" })} mr-1`}
        >
          <User2 />
        </Link>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-2">
      <div className="size-sm">
            <ThemeToggle />
          </div>
          <DropDownMenuList />
        {user?.user ? (
          <UserDropdown
            email={user.user.email as string}
            name={user.user.name as string}
            image={user.user.image as string}
          />
        ) : (

          <Link
          href="/login"
          className={`${buttonVariants({ variant: "outline", size: "sm" })} mr-1`}
        >
          <User2 />
        </Link>
        )}
        
      </div>
    </nav>
  );
}
