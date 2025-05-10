import {
  Activity,
  BrainCircuit,
  Coins,
  Film,
  Gavel,
  Globe,
  HeartPulse,
  Landmark,
  Leaf,
  Megaphone,
  Menu,
  Microscope,
  Rocket,
  School,
  Search,
  ShieldAlert,
  Star,
  TentTree,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

export default function DropDownMenuList() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="mr-2">
            <Menu className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-70">
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
          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link href="/national">
              <Landmark size={16} className="opacity-60" />
              <span>জাতীয় (National)</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/politics">
              <Megaphone size={16} className="opacity-60" />
              <span>রাজনীতি (Politics)</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/countrywide">
              <TentTree size={16} className="opacity-60" />
              <span>সারাদেশ (All Over the Country)</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/international">
              <Globe size={16} className="opacity-60" />
              <span>বিশ্ব (International)</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/sports">
              <Activity size={16} className="opacity-60" />
              <span>খেলা (Sports)</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/education">
              <School size={16} className="opacity-60" />
              <span>শিক্ষা (Education)</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/health">
              <HeartPulse size={16} className="opacity-60" />
              <span>স্বাস্থ্য (Health)</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/opinion">
              <BrainCircuit size={16} className="opacity-60" />
              <span>মতামত (Opinion)</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/religion">
              <Star size={16} className="opacity-60" />
              <span>ধর্ম (Religion)</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/crime">
              <ShieldAlert size={16} className="opacity-60" />
              <span>অপরাধ (Crime)</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/technology">
              <Rocket size={16} className="opacity-60" />
              <span>প্রযুক্তি (Technology)</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/entertainment">
              <Film size={16} className="opacity-60" />
              <span>বিনোদন (Entertainment)</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/economy">
              <Coins size={16} className="opacity-60" />
              <span>অর্থনীতি (Economy)</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/law-and-justice">
              <Gavel size={16} className="opacity-60" />
              <span>আইন ও আদালত (Law & Justice)</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/environment">
              <Leaf size={16} className="opacity-60" />
              <span>পরিবেশ (Environment)</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/science">
              <Microscope size={16} className="opacity-60" />
              <span>বিজ্ঞান (Science)</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
