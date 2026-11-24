
import Link from "next/link";
import { buttonVariants } from "../ui/button";

import { ThemeToggle } from "./ThemeToggle";
import { auth } from "@/app/utils/auth";
import { UserDropdown } from "./UserDropdown";
import { User2 } from "lucide-react";

import MegaMenu from "./MegaMenu";
import DropDownCountryList from "./DropDownCountryList";
import DivisionNavBar from "@/components/general/DivisionNavBar";

export default async function Navbar() {
  const user = await auth();

  return (
    <header className="relative z-50 w-full max-w-full overflow-x-clip bg-white dark:bg-[#171717]">
      <nav className="flex min-h-[62px] w-full max-w-full items-center justify-between gap-1 px-2 sm:min-h-[66px] sm:gap-3 sm:px-5 lg:px-7">

        {/* Logo */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="flex min-w-0 shrink items-center"
        >
          <div className="h-[42px] w-[105px] shrink-0 bg-[url('/logo.png')] bg-contain bg-left bg-no-repeat min-[380px]:w-[125px] sm:h-[54px] sm:w-[175px] lg:h-[62px] lg:w-[205px]" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden min-w-0 flex-1 items-center justify-center px-3 md:flex">
          <DivisionNavBar />
        </div>

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <div className="flex items-center gap-1 border-r border-gray-200 pr-2 dark:border-neutral-700">
            <ThemeToggle />
            <DropDownCountryList />
          </div>

          <MegaMenu />

          {user?.user ? (
            <UserDropdown
              email={user.user.email as string}
              name={user.user.name as string}
              image={user.user.image as string}
            />
          ) : (
            <Link
              href="/login"
              aria-label="Login"
              className={buttonVariants({
                variant: "outline",
                size: "icon",
              })}
            >
              <User2 className="size-4" />
            </Link>
          )}
        </div>

        {/* Mobile Actions */}
        <div className="flex min-w-0 shrink-0 items-center justify-end gap-0.5 sm:gap-1.5 md:hidden">

          <div className="flex shrink-0 items-center">
            <ThemeToggle />
          </div>

          <div className="flex shrink-0 items-center">
            <DropDownCountryList />
          </div>

          <div className="flex shrink-0 items-center">
            <MegaMenu />
          </div>

          <div className="flex shrink-0 items-center">
            {user?.user ? (
              <UserDropdown
                email={user.user.email as string}
                name={user.user.name as string}
                image={user.user.image as string}
              />
            ) : (
              <Link
                href="/login"
                aria-label="Login"
                className={buttonVariants({
                  variant: "outline",
                  size: "icon",
                })}
              >
                <User2 className="size-4" />
              </Link>
            )}
          </div>
        </div>
      </nav>
      {/* Burgundy Accent */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#5f1018] via-[#a51d2d] to-[#5f1018]" />
    </header>
  );
}
