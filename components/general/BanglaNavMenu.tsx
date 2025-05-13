'use client';

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Import the icons
import { links } from "@/app/utils/linkList";

export default function BanglaNavMenu() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null); // Explicitly define the type
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);


  

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
          className="text-primary dark:text-white cursor-pointer"
          size={24}
        />
      )}

      <div
        ref={containerRef}
        className="flex gap-1 overflow-x-auto whitespace-nowrap no-scrollbar"
      >
        {links.map(({ href, label, id }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={id}
              href={href}
              className={`px-3 py-2 text-md font-bold transition-colors rounded-4xl ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-accent-foreground dark:text-white hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>

      {canScrollRight && (
        <ArrowRight
          className="text-primary dark:text-white cursor-pointer"
          size={24}
        />
      )}
    </div>
  );
}
