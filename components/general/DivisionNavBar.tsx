'use client';
import { usePathname } from "next/navigation";
import Link from "next/link";

const divisionLinks = [
  { id: 1, href: "/diffrentCountry?country=dhaka", label: "ঢাকা" },
  { id: 2, href: "/diffrentCountry?country=sylhet", label: "সিলেট" },
  { id: 3, href: "/diffrentCountry?country=barishal", label: "বরিশাল" },
  { id: 4, href: "/diffrentCountry?country=rajshahi", label: "রাজশাহী" },
  { id: 5, href: "/diffrentCountry?country=khulna", label: "খুলনা" },
  { id: 6, href: "/diffrentCountry?country=chattogram", label: "চট্টগ্রাম" },
  { id: 7, href: "/diffrentCountry?country=cumilla", label: "কুমিল্লা" },
];

export default function DivisionFlexNav() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 border-r-8 border-primary justify-center md:justify-end flex-wrap">
      {divisionLinks.map(({ id, href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={id}
            href={href}
            className={`px-1 py-1 font-bold text-sm transition-colors ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
