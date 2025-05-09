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

export default async function Navbar() {
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
        <Link
          href="/post-news"
          className={buttonVariants({ variant: "default", size: "sm" })}
        >
          সংবাদ যোগ করুন
        </Link>
        
        
        <Link
          href="/login"
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          লগইন
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-4">
        <DropdownMenu>
            <div className="size-sm"><ThemeToggle /></div>
          <DropdownMenuTrigger asChild>
            
            <Button variant="outline" size="sm" className="mr-2">
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-60">
            <DropdownMenuLabel>
              <Link href="/" className="flex items-center gap-2">
             
                <div className="w-[100px] h-[30px] bg-[url('/jagrata3.png')] bg-cover bg-center" />

              </Link>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem asChild>
              <Link href="/latest">
                <Search size={16} className="opacity-60" />
                <span>সর্বশেষ (Latest)</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/national">
                <Landmark size={16} className="opacity-60" />
                <span>জাতীয় (National)</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/politics">
                <Megaphone size={16} className="opacity-60" />
                <span>রাজনীতি (Politics)</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/countrywide">
                <TentTree size={16} className="opacity-60" />
                <span>সারাদেশ (All Over the Country)</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/international">
                <Globe size={16} className="opacity-60" />
                <span>বিশ্ব (International)</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/sports">
                <Activity size={16} className="opacity-60" />
                <span>খেলা (Sports)</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/education">
                <School size={16} className="opacity-60" />
                <span>শিক্ষা (Education)</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/health">
                <HeartPulse size={16} className="opacity-60" />
                <span>স্বাস্থ্য (Health)</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/opinion">
                <BrainCircuit size={16} className="opacity-60" />
                <span>মতামত (Opinion)</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/religion">
                <Star size={16} className="opacity-60" />
                <span>ধর্ম (Religion)</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/crime">
                <ShieldAlert size={16} className="opacity-60" />
                <span>অপরাধ (Crime)</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/technology">
                <Rocket size={16} className="opacity-60" />
                <span>প্রযুক্তি (Technology)</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/entertainment">
                <Film size={16} className="opacity-60" />
                <span>বিনোদন (Entertainment)</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/economy">
                <Coins size={16} className="opacity-60" />
                <span>অর্থনীতি (Economy)</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/law-and-justice">
                <Gavel size={16} className="opacity-60" />
                <span>আইন ও আদালত (Law & Justice)</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/environment">
                <Leaf size={16} className="opacity-60" />
                <span>পরিবেশ (Environment)</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/science">
                <Microscope size={16} className="opacity-60" />
                <span>বিজ্ঞান (Science)</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link href="/login">
                <User size={16} className="opacity-90" />
                <span>লগইন (Login)</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
