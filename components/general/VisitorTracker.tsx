"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function VisitorTracker() {
  const [activeUsers, setActiveUsers] = useState<number | null>(null);
  const pathname = usePathname();

  const incrementVisitor = () => {
    fetch("/api/active", { method: "POST" })
      .then((res) => res.json())
      .then((data) => setActiveUsers(data.activeUsers));
  };

  const decrementVisitor = () => {
    fetch("/api/active", { method: "DELETE" });
  };

  // Run once on mount + run on every route change (pathname change)
  useEffect(() => {
    incrementVisitor();
  }, [pathname]); // dependency on pathname

  useEffect(() => {
    // Decrement on unload (tab close or page refresh)
    window.addEventListener("beforeunload", decrementVisitor);

    // Cleanup decrement on component unmount
    return () => {
      decrementVisitor();
      window.removeEventListener("beforeunload", decrementVisitor);
    };
  }, []);

  if (activeUsers === null) return null;

  return (
   <div className="fixed bottom-4 right-4 bg-accent-foreground bg-opacity-80 text-primary w-6 h-6 flex items-center justify-center rounded-full text-xs font-semibold z-50 shadow-lg">
  {activeUsers}
</div>

  );
}
