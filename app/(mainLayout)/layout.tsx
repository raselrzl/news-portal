import Navbar from "@/components/general/Navbar";
import TodayDate from "@/components/general/TodayDate";
import React, { ReactNode } from "react";
import Link from "next/link";
import BanglaNavMenu from "@/components/general/BanglaNavMenu";
import { Toaster } from "sonner";
import NewsTicker from "@/components/general/NewsTicker";
import Poll from "@/components/LivePoll/Poll";
import Footer from "@/components/general/Footer";
import VisitorTracker from "@/components/general/VisitorTracker";
import AdsTicker from "@/components/general/AdsTicker";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md max-w-7xl mx-auto">
   {/*      <AdsTicker /> */}
        <Navbar />
        <div className="flex justify-between items-center py-1 bg-primary-foreground">
          <Link
            href="/"
            className="font-extrabold text-primary border-b-4 hover:text-primary/75 border-primary border-r-2  px-2"
          >
            এখন
          </Link>
        <div className="flex flex-wrap justify-end gap-1">
  <TodayDate calendar="gregorian" className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full shadow-sm" />
  <TodayDate calendar="bangla" className="bg-green-100 text-green-800 px-3 py-1 rounded-full shadow-sm" />
  <TodayDate calendar="hijri" className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full shadow-sm" />
</div>

        </div>

        <NewsTicker />
      </div>
      <div className="mt-46 md:mt-48">
        <BanglaNavMenu />
      </div>
      {children}
      <Poll />
      <Footer />
      <VisitorTracker />
      <Toaster closeButton richColors />
    </div>
  );
}
