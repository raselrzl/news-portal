import Navbar from "@/components/general/Navbar";
import TodayDate from "@/components/general/TodayDate";
import React, { ReactNode } from "react";
import Link from "next/link";
import BanglaNavMenu from "@/components/general/BanglaNavMenu";
import { Toaster } from "sonner";
import Footer from "@/components/general/Footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <> 
    <div className="max-w-7xl mx-auto">
      <div className="fixed top-0 left-0 right-0 z-50 px-2 md:px-20 bg-background shadow-md">
        <Navbar />
      </div>
      <div className="mt-16">
        <div className="flex justify-between items-center py-1 bg-primary-foreground">
          <Link
            href="/"
            className="font-extrabold text-primary border-b-4 hover:text-primary/75 border-primary border-r-2  px-2"
          >
            এখন
          </Link>
          <TodayDate locale="bn-BD" withTime />
        </div>
        <BanglaNavMenu />
      </div>
      {children}
     
      <Toaster closeButton richColors />
    </div>
    <div className=""><Footer /></div></>
  );
}
