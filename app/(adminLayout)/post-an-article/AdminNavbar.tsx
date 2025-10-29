"use server"
import Link from "next/link";
import { auth } from "@/app/utils/auth";
import { ThemeToggle } from "@/components/general/ThemeToggle";
import { UserDropdown } from "@/components/general/UserDropdown";
import { buttonVariants } from "@/components/ui/button";
import { House, User2 } from "lucide-react";

export default async function AdminNavbar() {
  const user = await auth();

  return (
    <nav className="flex items-center justify-between pr-2 py-2">
     <Link href="/" className="flex items-center space-x-2 text-black pl-2">
      <House className="h-8 w-10"/>
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
