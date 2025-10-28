import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/general/Navbar";
import { LogOut, User2 } from "lucide-react";
import { auth, signOut } from "@/app/utils/auth";
import AdminNavbar from "./AdminNavbar";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import SidebarServer from "./SidebarServer";
import { requireRoleAccess } from "./roleBaseAccess";

interface AdminLayoutProps {
  children: ReactNode;
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const user = await auth();
     const rewuireUserToAccessPage = await requireRoleAccess([
        "EDITOR",
        "SUPERADMIN",
        "NEWSREPORTER",
      ]);

  return (
    <div className="flex">
      {/* Sidebar (Server Component) */}
      <Card className="hidden md:flex sticky top-34 h-[80%] pt-6 pb-0 rounded-none">
        {user?.user ? (
          <SidebarServer
            email={user.user.email as string}
            name={user.user.name as string}
            image={user.user.image as string}
          />
        ) : (
          <Link
            href="/login"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
            })}
          >
            <User2 />
          </Link>
        )}

        <form
          className="bg-gray-600 p-4"
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button className="flex w-full items-center justify-center gap-2 cursor-pointer">
            <LogOut size={16} strokeWidth={2} className="opacity-60" />
            <span>Logout</span>
          </button>
        </form>
      </Card>

      {/* Main content */}
      <div className="flex-1 overflow-auto relative min-h-screen">
        <div className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md max-w-7xl mx-auto">
          <AdminNavbar />
          <h1 className="text-xl font-bold bg-gray-600 text-center text-primary p-2">
            Admin Panel
          </h1>
        </div>
        <div className="mt-34"></div>
        <div className="p-2 md:px-4 border-1 mb-10 shadow min-h-[669px]">{children}</div>
      </div>
    </div>
  );
}
