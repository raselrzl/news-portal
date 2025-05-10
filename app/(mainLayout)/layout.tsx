import Navbar from "@/components/general/Navbar";
import TodayDate from "@/components/general/TodayDate";
import React, { ReactNode } from "react";
import Link from "next/link";
import BanglaNavMenu from "@/components/general/BanglaNavMenu";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />

      <div className="flex justify-between items-center py-1 bg-primary-foreground">
        <Link
          href="/"
          className="font-extrabold text-primary hover:border-b-4 border-primary border-r-2  px-2"
        >
          এখন
        </Link>
        <TodayDate locale="bn-BD" withTime />
      </div>
      <BanglaNavMenu />
      {children}
    </div>
  );
}
