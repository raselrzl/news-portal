"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const divisionLinks = [
  {
    id: 1,
    href: "/diffrentCountry?country=dhaka",
    label: "ঢাকা",
    number: "০১",
  },
  {
    id: 2,
    href: "/diffrentCountry?country=sylhet",
    label: "সিলেট",
    number: "০২",
  },
  {
    id: 3,
    href: "/diffrentCountry?country=barishal",
    label: "বরিশাল",
    number: "০৩",
  },
  {
    id: 4,
    href: "/diffrentCountry?country=rajshahi",
    label: "রাজশাহী",
    number: "০৪",
  },
  {
    id: 5,
    href: "/diffrentCountry?country=khulna",
    label: "খুলনা",
    number: "০৫",
  },
  {
    id: 6,
    href: "/diffrentCountry?country=chattogram",
    label: "চট্টগ্রাম",
    number: "০৬",
  },
  {
    id: 7,
    href: "/diffrentCountry?country=cumilla",
    label: "কুমিল্লা",
    number: "০৭",
  },
];

export default function DivisionFlexNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <nav aria-label="বিভাগীয় সংবাদ" className="w-full">
      <div className="flex flex-wrap items-center justify-center gap-1 md:justify-end">
        {divisionLinks.map(({ id, href, label, number }) => {
          const country = href.split("country=")[1];

          const isActive =
            pathname === "/diffrentCountry" &&
            searchParams.get("country") === country;

          return (
            <Link
              key={id}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`
                group relative flex min-w-[68px] flex-col
                items-center justify-center overflow-hidden
                px-2.5 py-2 transition-all duration-200
                ${
                  isActive
                    ? "bg-[#861c29] text-white shadow-sm"
                    : "bg-transparent text-gray-800 hover:bg-[#861c29]/5 dark:text-gray-200 dark:hover:bg-white/5"
                }
              `}
            >
              {/* Division Name */}
              <span className="mt-0.5 whitespace-nowrap text-[13px] font-extrabold sm:text-sm">
                {label}
              </span>

              {/* Animated Bottom Accent */}
              <span
                className={`absolute bottom-0 left-0 h-[3px] w-full origin-left transition-transform duration-300 ${
                  isActive
                    ? "scale-x-100 bg-[#e9b7a0]"
                    : "scale-x-0 bg-[#861c29] group-hover:scale-x-100"
                }`}
              />

              {/* Active Top Accent */}
              {isActive && (
                <span className="absolute left-0 top-0 h-[2px] w-full bg-white/40" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
