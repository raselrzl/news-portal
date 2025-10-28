"use server"
import Link from "next/link";
import { auth } from "@/app/utils/auth";
import { ThemeToggle } from "@/components/general/ThemeToggle";
import DropDownCountryList from "@/components/general/DropDownCountryList";
import { UserDropdown } from "@/components/general/UserDropdown";
import { buttonVariants } from "@/components/ui/button";
import { User2 } from "lucide-react";

export default async function AdminNavbar() {
  const user = await auth();

  return (
    <nav className="flex items-center justify-between pr-2 py-2">
      <Link href="/" className="flex items-center">
        <div className="w-[100px] h-[50px] sm:w-[140px] sm:h-[60px] md:w-[160px] md:h-[80px] bg-[url('/n1w.png')] dark:bg-[url('/n333.png')] bg-cover bg-center" />
      </Link>

    

      {/*  desktop navigation */}

      <div className="hidden md:flex items-center gap-5">
        <p className="font-bold">{user?.user?.name }</p>
        <ThemeToggle />
        

        <div>
          {" "}
          {user?.user ? (
            <UserDropdown
              email={user.user.email as string}
              name={user.user.name as string}
              image={user.user.image as string}
            />
          ) : (
            <Link
              href="/login"
              className={`${buttonVariants({
                variant: "outline",
                size: "sm",
              })}`}
            >
              <User2 />
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-2">
        <p className="font-bold">{user?.user?.name }</p>
        <div className="size-sm">
          <ThemeToggle />
        </div>
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
