"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Menu } from "lucide-react";
import { links } from "@/app/utils/linkList";
import { Button } from "../ui/button";
import TodayDate from "./TodayDate";
import RealBanglaDate from "./BanglaDate";

/* 🔹 জেলা লিংক */
const divisionLinks = [
  { id: "d1", href: "/diffrentCountry?country=dhaka", label: "ঢাকা" },
  { id: "d2", href: "/diffrentCountry?country=sylhet", label: "সিলেট" },
  { id: "d3", href: "/diffrentCountry?country=barishal", label: "বরিশাল" },
  { id: "d4", href: "/diffrentCountry?country=rajshahi", label: "রাজশাহী" },
  { id: "d5", href: "/diffrentCountry?country=khulna", label: "খুলনা" },
  { id: "d6", href: "/diffrentCountry?country=chattogram", label: "চট্টগ্রাম" },
  { id: "d7", href: "/diffrentCountry?country=cumilla", label: "কুমিল্লা" },
];

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="relative z-50">
      {/* Menu Button */}
      <Button variant="outline" size="sm" onClick={handleToggle}>
        <Menu size={16} />
      </Button>

      {isOpen && (
        <div
          className="
            fixed inset-0 z-50 pointer-events-none
            md:flex md:justify-center md:items-start
          "
        >
          <div
            className="
              pointer-events-auto bg-white dark:bg-black shadow-lg overflow-y-auto

              /* Mobile */
              fixed left-0 right-0 top-[37px]
              h-[calc(100vh-37px)] px-4 py-6

              /* Desktop center */
              md:relative md:mt-[42px]
              md:h-auto md:w-[900px]
              md:rounded-md md:px-6 md:py-6
            "
          >
            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute top-1 right-2 text-gray-700 hover:text-black cursor-pointer"
            >
              <X size={22} />
            </button>

            {/* Top bar */}
            <div className="flex justify-between items-center py-1 bg-primary-foreground pr-2">
              <Link
                href="/"
                onClick={handleClose}
                className="font-extrabold text-primary border-b-4 border-primary border-r-2 px-2"
              >
                এখন
              </Link>

              <div className="flex flex-wrap justify-end gap-0.5">
                <TodayDate
                  calendar="gregorian"
                  className="bg-blue-100 text-blue-800 px-2 py-0.5 text-[10px] md:text-sm rounded-full"
                />
                <RealBanglaDate
                  className="bg-green-100 text-green-800 px-2 py-0.5 text-[10px] md:text-sm rounded-full"
                />
                <TodayDate
                  calendar="hijri"
                  className="bg-yellow-100 text-yellow-800 px-2 py-0.5 text-[10px] md:text-sm rounded-full"
                />
              </div>
            </div>

            {/* District links – same place */}
            <div className="border-b mb-6 border-primary">
              <div className="flex flex-wrap justify-center md:justify-end gap-2 py-2">
                {divisionLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={handleClose}
                    className="px-2 m-1 text-sm font-bold hover:bg-gray-100 transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Sections */}
            <div className="grid grid-cols-2 md:grid-cols-6 text-sm">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={handleClose}
                  className="block mx-4 my-1.5 border-b font-bold md:border-none hover:bg-gray-100 transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo */}
            <div className="mt-6 pt-4 border-t border-primary flex justify-center">
              <Image
                src="/logo.png"
                alt="Jagroto Barta Logo"
                width={120}
                height={40}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
