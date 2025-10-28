"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown, Globe } from "lucide-react";

const locations = [
  { name: "bagerhat", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=bagerhat" },
  { name: "bandarban", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=bandarban" },
  { name: "barguna", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=barguna" },
  { name: "barishal", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=barishal" },
  { name: "bhola", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=bhola" },
  { name: "bogura", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=bogura" },
  { name: "brahmanbaria", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=brahmanbaria" },
  { name: "chandpur", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=chandpur" },
  { name: "chapainawabganj", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=chapainawabganj" },
  { name: "chattogram", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=chattogram" },
  { name: "chuadanga", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=chuadanga" },
  { name: "coxs_bazar", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=coxs_bazar" },
  { name: "cumilla", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=cumilla" },
  { name: "dhaka", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=dhaka" },
  { name: "dinajpur", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=dinajpur" },
  { name: "faridpur", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=faridpur" },
  { name: "feni", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=feni" },
  { name: "gaibandha", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=gaibandha" },
  { name: "gazipur", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=gazipur" },
  { name: "gopalganj", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=gopalganj" },
  { name: "habiganj", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=habiganj" },
  { name: "jamalpur", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=jamalpur" },
  { name: "jashore", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=jashore" },
  { name: "jhenaidah", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=jhenaidah" },
  { name: "joypurhat", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=joypurhat" },
  { name: "khagrachhari", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=khagrachhari" },
  { name: "khulna", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=khulna" },
  { name: "kishoreganj", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=kishoreganj" },
  { name: "kurigram", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=kurigram" },
  { name: "kushtia", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=kushtia" },
  { name: "lakshmipur", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=lakshmipur" },
  { name: "lalmonirhat", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=lalmonirhat" },
  { name: "madaripur", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=madaripur" },
  { name: "magura", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=magura" },
  { name: "manikganj", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=manikganj" },
  { name: "meherpur", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=meherpur" },
  { name: "moulvibazar", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=moulvibazar" },
  { name: "munshiganj", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=munshiganj" },
  { name: "mymensingh", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=mymensingh" },
  { name: "naogaon", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=naogaon" },
  { name: "narail", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=narail" },
  { name: "narayanganj", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=narayanganj" },
  { name: "narsingdi", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=narsingdi" },
  { name: "natore", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=natore" },
  { name: "nawabganj", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=nawabganj" },
  { name: "netrokona", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=netrokona" },
  { name: "nilphamari", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=nilphamari" },
  { name: "noakhali", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=noakhali" },
  { name: "pabna", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=pabna" },
  { name: "panchagarh", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=panchagarh" },
  { name: "patuakhali", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=patuakhali" },
  { name: "pirojpur", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=pirojpur" },
  { name: "rajbari", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=rajbari" },
  { name: "rajshahi", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=rajshahi" },
  { name: "rangamati", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=rangamati" },
  { name: "rangpur", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=rangpur" },
  { name: "satkhira", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=satkhira" },
  { name: "shariatpur", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=shariatpur" },
  { name: "sherpur", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=sherpur" },
  { name: "sirajganj", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=sirajganj" },
  { name: "sunamganj", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=sunamganj" },
  { name: "sylhet", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=sylhet" },
  { name: "tangail", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=tangail" },
  { name: "thakurgaon", flag: "/flags/bangladesh.jpg", link: "/diffrentCountry?country=thakurgaon" }
];


export default function DropDownCountryList() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="mr-1">
          <Globe /> <p className="font-bold text-md">News</p>
          <ChevronDown className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56 max-h-[400px] overflow-y-auto"
      >
        {locations.map((country, index) => (
          <div key={country.name}>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href={country.link}>
                <div className="flex items-center gap-2 pl-3">
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    width={26}
                    height={18}
                    className="rounded-sm"
                  />
                  <span className="font-semibold">{country.name}</span>
                </div>
              </Link>
            </DropdownMenuItem>
            {index < locations.length - 1 && <DropdownMenuSeparator />}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
