'use client';

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Import the icons

export default function BanglaNavMenu() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null); // Explicitly define the type
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const links = [
    { href: "/latest", label: "সর্বশেষ" },
    { href: "/national", label: "জাতীয়" },
    { href: "/politics", label: "রাজনীতি" },
    { href: "/countrywide", label: "সারাদেশ" },
    { href: "/international", label: "বিশ্ব" },
    { href: "/sports", label: "খেলা" },
    { href: "/education", label: "শিক্ষা" },
    { href: "/health", label: "স্বাস্থ্য" },
    { href: "/opinion", label: "মতামত" },
    { href: "/religion", label: "ধর্ম" },
    { href: "/crime", label: "অপরাধ" },
    { href: "/technology", label: "প্রযুক্তি" },
    { href: "/entertainment", label: "বিনোদন" },
    { href: "/economy", label: "অর্থনীতি" },
    { href: "/law-and-justice", label: "আইন ও আদালত" },
    { href: "/environment", label: "পরিবেশ" },
    { href: "/science", label: "বিজ্ঞান" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(
          container.scrollWidth > container.clientWidth + container.scrollLeft
        );
      }
    };

    // Attach scroll event listener
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    // Initial check
    handleScroll();

    // Clean up event listener on unmount
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="flex items-center gap-2 py-2 border-b-1 border-primary light:bg-primary-foreground">
      {canScrollLeft && (
        <ArrowLeft
          className="text-gray-800 dark:text-white cursor-pointer"
          size={24}
        />
      )}

      <div
        ref={containerRef}
        className="flex gap-1 overflow-x-auto whitespace-nowrap no-scrollbar"
      >
        {links.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`px-2 py-1 text-sm font-bold transition-colors rounded-4xl ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-gray-800 dark:text-white hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>

      {canScrollRight && (
        <ArrowRight
          className="text-gray-800 dark:text-white cursor-pointer"
          size={24}
        />
      )}
    </div>
  );
}
