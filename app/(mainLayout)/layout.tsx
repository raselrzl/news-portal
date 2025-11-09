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
        <AdsTicker />
        <Navbar />
        <div className="flex justify-between items-center py-1 bg-primary-foreground">
          <Link
            href="/"
            className="font-extrabold text-primary border-b-4 hover:text-primary/75 border-primary border-r-2  px-2"
          >
            এখন
          </Link>
          <TodayDate locale="bn-BD" withTime />
        </div>

            <NewsTicker />
      </div>
      <div className="mt-38 md:mt-48">
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
