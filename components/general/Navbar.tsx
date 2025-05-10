import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";

import { ThemeToggle } from "./ThemeToggle";
import { redirect } from "next/navigation";
import { auth } from "@/app/utils/auth";
import { UserDropdown } from "./UserDropdown";
import DropDownMenuList from "./dropDownMenuList";
import { User2 } from "lucide-react";

export default async function Navbar() {
  const user = await auth();
  /*     if (session?.user) {
      return redirect("/");
    } */
  return (
    <nav className=" flex items-center justify-between">
      <Link href="/" className="flex items-center py-2">
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
        

       <div> {user?.user ? (
          <UserDropdown
            email={user.user.email as string}
            name={user.user.name as string}
            image={user.user.image as string}
          />
        ) : (
          <Link
          href="/login"
          className={`${buttonVariants({ variant: "outline", size: "sm" })}`}
        >
          <User2 />
        </Link>
        )}</div>
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
          className={`${buttonVariants({ variant: "outline", size: "sm" })}`}
        >
          <User2 />
        </Link>
        )}
        
      </div>
    </nav>
  );
}
