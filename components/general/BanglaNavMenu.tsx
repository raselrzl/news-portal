'use client';
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { links } from "@/app/utils/linkList";

export default function BanglaNavMenu() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null); 
  const activeLinkRef = useRef<HTMLAnchorElement | null>(null); // For active link scroll
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Scroll active link into view on route/pathname change
  useEffect(() => {
    if (activeLinkRef.current && containerRef.current) {
      const activeEl = activeLinkRef.current;
      const container = containerRef.current;

      const activeLeft = activeEl.offsetLeft;
      const activeRight = activeLeft + activeEl.offsetWidth;
      const containerLeft = container.scrollLeft;
      const containerRight = containerLeft + container.offsetWidth;

      if (activeLeft < containerLeft || activeRight > containerRight) {
        activeEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [pathname]);

  // Track scroll arrows visibility
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

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    handleScroll();

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Scroll handlers
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center gap-1 border-l-12 border-b border-r-12 border-primary light:bg-primary-foreground">
      {canScrollLeft && (
        <ArrowLeft
          className="text-primary dark:text-white cursor-pointer"
          size={24}
          onClick={scrollLeft}
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
              ref={isActive ? activeLinkRef : null}
              className={`px-2 py-0.5 text-xs md:text-sm font-bold transition-colors ${
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
          onClick={scrollRight}
        />
      )}
    </div>
  );
}
