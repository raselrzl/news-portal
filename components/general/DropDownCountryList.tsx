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
  { name: "বাগেরহাট", link: "/diffrentCountry?country=bagerhat" },
  { name: "বান্দরবান", link: "/diffrentCountry?country=bandarban" },
  { name: "বরগুনা", link: "/diffrentCountry?country=barguna" },
  { name: "বরিশাল", link: "/diffrentCountry?country=barishal" },
  { name: "ভোলা", link: "/diffrentCountry?country=bhola" },
  { name: "বগুড়া", link: "/diffrentCountry?country=bogura" },
  { name: "ব্রাহ্মণবাড়িয়া", link: "/diffrentCountry?country=brahmanbaria" },
  { name: "চাঁদপুর", link: "/diffrentCountry?country=chandpur" },
  { name: "চাপাইনবাবগঞ্জ", link: "/diffrentCountry?country=chapainawabganj" },
  { name: "চট্টগ্রাম", link: "/diffrentCountry?country=chattogram" },
  { name: "চুয়াডাঙ্গা", link: "/diffrentCountry?country=chuadanga" },
  { name: "কক্সবাজার", link: "/diffrentCountry?country=coxsbazar" },
  { name: "কুমিল্লা", link: "/diffrentCountry?country=cumilla" },
  { name: "ঢাকা", link: "/diffrentCountry?country=dhaka" },
  { name: "দিনাজপুর", link: "/diffrentCountry?country=dinajpur" },
  { name: "ফরিদপুর", link: "/diffrentCountry?country=faridpur" },
  { name: "ফেনী", link: "/diffrentCountry?country=feni" },
  { name: "গাইবান্ধা", link: "/diffrentCountry?country=gaibandha" },
  { name: "গাজীপুর", link: "/diffrentCountry?country=gazipur" },
  { name: "গোপালগঞ্জ", link: "/diffrentCountry?country=gopalganj" },
  { name: "হবিগঞ্জ", link: "/diffrentCountry?country=habiganj" },
  { name: "জামালপুর", link: "/diffrentCountry?country=jamalpur" },
  { name: "যশোর", link: "/diffrentCountry?country=jashore" },
  { name: "ঝিনাইদাহ", link: "/diffrentCountry?country=jhenaidah" },
  { name: "জয়পুরহাট", link: "/diffrentCountry?country=joypurhat" },
  { name: "খাগড়াছড়ি", link: "/diffrentCountry?country=khagrachhari" },
  { name: "খুলনা", link: "/diffrentCountry?country=khulna" },
  { name: "কিশোরগঞ্জ", link: "/diffrentCountry?country=kishoreganj" },
  { name: "কুড়িগ্রাম", link: "/diffrentCountry?country=kurigram" },
  { name: "কুষ্টিয়া", link: "/diffrentCountry?country=kushtia" },
  { name: "লক্ষ্মীপুর", link: "/diffrentCountry?country=lakshmipur" },
  { name: "লালমনিরহাট", link: "/diffrentCountry?country=lalmonirhat" },
  { name: "মাদারীপুর", link: "/diffrentCountry?country=madaripur" },
  { name: "মাগুরা", link: "/diffrentCountry?country=magura" },
  { name: "মানিকগঞ্জ", link: "/diffrentCountry?country=manikganj" },
  { name: "মেহেরপুর", link: "/diffrentCountry?country=meherpur" },
  { name: "মৌলভীবাজার", link: "/diffrentCountry?country=moulvibazar" },
  { name: "মুন্সীগঞ্জ", link: "/diffrentCountry?country=munshiganj" },
  { name: "ময়মনসিংহ", link: "/diffrentCountry?country=mymensingh" },
  { name: "নওগাঁ", link: "/diffrentCountry?country=naogaon" },
  { name: "নড়াইল", link: "/diffrentCountry?country=narail" },
  { name: "নরায়ণগঞ্জ", link: "/diffrentCountry?country=narayanganj" },
  { name: "নরসিংদী", link: "/diffrentCountry?country=narsingdi" },
  { name: "নাটোর", link: "/diffrentCountry?country=natore" },
  { name: "নবাবগঞ্জ", link: "/diffrentCountry?country=nawabganj" },
  { name: "নেত্রকোণা", link: "/diffrentCountry?country=netrokona" },
  { name: "নীলফামারী", link: "/diffrentCountry?country=nilphamari" },
  { name: "নোয়াখালি", link: "/diffrentCountry?country=noakhali" },
  { name: "পাবনা", link: "/diffrentCountry?country=pabna" },
  { name: "পঞ্চগড়", link: "/diffrentCountry?country=panchagarh" },
  { name: "পটুয়াখালী", link: "/diffrentCountry?country=patuakhali" },
  { name: "পিরোজপুর", link: "/diffrentCountry?country=pirojpur" },
  { name: "রাজবাড়ি", link: "/diffrentCountry?country=rajbari" },
  { name: "রাজশাহী", link: "/diffrentCountry?country=rajshahi" },
  { name: "রাঙ্গামাটি", link: "/diffrentCountry?country=rangamati" },
  { name: "রংপুর", link: "/diffrentCountry?country=rangpur" },
  { name: "সাতক্ষীরা", link: "/diffrentCountry?country=satkhira" },
  { name: "শরীয়তপুর", link: "/diffrentCountry?country=shariatpur" },
  { name: "শেরপুর", link: "/diffrentCountry?country=sherpur" },
  { name: "সিরাজগঞ্জ", link: "/diffrentCountry?country=sirajganj" },
  { name: "সুনামগঞ্জ", link: "/diffrentCountry?country=sunamganj" },
  { name: "সিলেট", link: "/diffrentCountry?country=sylhet" },
  { name: "টাঙ্গাইল", link: "/diffrentCountry?country=tangail" },
  { name: "ঠাকুরগাঁও", link: "/diffrentCountry?country=thakurgaon" }
];



export default function DropDownCountryList() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="mr-1">
          <Globe /> <p className="font-bold text-md">জেলা
</p>
          <ChevronDown className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-66 md:w-[600px] max-h-[400px] overflow-y-auto grid grid-cols-2 md:grid-cols-6 border-none shadow-none padding-0"
      >
        {locations.map((country, index) => (
          <div key={country.name}>
            <DropdownMenuItem asChild className="cursor-pointer border p-1">
              <Link href={country.link}>
                <div className="flex items-center gap-2 pl-3">
                  <span className="font-semibold">{country.name}</span>
                </div>
              </Link>
            </DropdownMenuItem>
          {/*   {index < locations.length - 1 && <DropdownMenuSeparator />} */}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
