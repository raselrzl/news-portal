import Navbar from "@/components/general/Navbar";
import React, { ReactNode } from "react";

export default function MainLayout({children}:{children: ReactNode}) {
    return (
      <div className="max-w-7xl mx-auto">
              <Navbar />
              {children}
             </div>
    );
  }
  