"use client";

import Image from "next/image";
import Link from "next/link";

export const Cities = [
  { name: "ঢাকা", link: "/diffrentCountry?country=dhaka" },
  { name: "গাজীপুর", link: "/diffrentCountry?country=gazipur" },
  { name: "নারায়ণগঞ্জ", link: "/diffrentCountry?country=narayanganj" },
  { name: "নরসিংদী", link: "/diffrentCountry?country=narsingdi" },
  { name: "কিশোরগঞ্জ", link: "/diffrentCountry?country=kishoreganj" },
  { name: "মানিকগঞ্জ", link: "/diffrentCountry?country=manikganj" },
  { name: "মুন্সীগঞ্জ", link: "/diffrentCountry?country=munshiganj" },
  { name: "রাজবাড়ী", link: "/diffrentCountry?country=rajbari" },
  { name: "ফরিদপুর", link: "/diffrentCountry?country=faridpur" },
  { name: "গোপালগঞ্জ", link: "/diffrentCountry?country=gopalganj" },
  { name: "মাদারীপুর", link: "/diffrentCountry?country=madaripur" },
  { name: "শরীয়তপুর", link: "/diffrentCountry?country=shariatpur" },
  { name: "টাঙ্গাইল", link: "/diffrentCountry?country=tangail" },
  { name: "জামালপুর", link: "/diffrentCountry?country=jamalpur" },
  { name: "শেরপুর", link: "/diffrentCountry?country=sherpur" },
  { name: "ময়মনসিংহ", link: "/diffrentCountry?country=mymensingh" },
  { name: "নেত্রকোনা", link: "/diffrentCountry?country=netrokona" },
  { name: "চট্টগ্রাম", link: "/diffrentCountry?country=chittagong" },
  { name: "কক্সবাজার", link: "/diffrentCountry?country=coxs-bazar" },
  { name: "খাগড়াছড়ি", link: "/diffrentCountry?country=khagrachari" },
  { name: "রাঙ্গামাটি", link: "/diffrentCountry?country=rangamati" },
  { name: "বাঁশখালী", link: "/diffrentCountry?country=bashkhali" },
  { name: "নোয়াখালী", link: "/diffrentCountry?country=noakhali" },
  { name: "ফেনী", link: "/diffrentCountry?country=feni" },
  { name: "লক্ষ্মীপুর", link: "/diffrentCountry?country=lakshmipur" },
  { name: "চাঁদপুর", link: "/diffrentCountry?country=chandpur" },
  { name: "কুমিল্লা", link: "/diffrentCountry?country=comilla" },
  { name: "ব্রাহ্মণবাড়িয়া", link: "/diffrentCountry?country=brahmanbaria" },
  { name: "সিলেট", link: "/diffrentCountry?country=sylhet" },
  { name: "মৌলভীবাজার", link: "/diffrentCountry?country=moulvibazar" },
  { name: "হবিগঞ্জ", link: "/diffrentCountry?country=habiganj" },
  { name: "সুনামগঞ্জ", link: "/diffrentCountry?country=sunamganj" },
  { name: "বরিশাল", link: "/diffrentCountry?country=barishal" },
  { name: "পটুয়াখালী", link: "/diffrentCountry?country=patuakhali" },
  { name: "ভোলা", link: "/diffrentCountry?country=bhola" },
  { name: "বরগুনা", link: "/diffrentCountry?country=barguna" },
  { name: "পিরোজপুর", link: "/diffrentCountry?country=pirojpur" },
  { name: "ঝালকাঠি", link: "/diffrentCountry?country=jhalokathi" },
  { name: "চাঁপাইনবাবগঞ্জ", link: "/diffrentCountry?country=chapainawabganj" },
  { name: "রাজশাহী", link: "/diffrentCountry?country=rajshahi" },
  { name: "নাটোর", link: "/diffrentCountry?country=natore" },
  { name: "নওগাঁ", link: "/diffrentCountry?country=naogaon" },
  { name: "জয়পুরহাট", link: "/diffrentCountry?country=joypurhat" },
  { name: "বগুড়া", link: "/diffrentCountry?country=bogura" },
  { name: "সিরাজগঞ্জ", link: "/diffrentCountry?country=sirajganj" },
  { name: "পাবনা", link: "/diffrentCountry?country=pabna" },
  { name: "কুড়িগ্রাম", link: "/diffrentCountry?country=kurigram" },
  { name: "লালমনিরহাট", link: "/diffrentCountry?country=lalmonirhat" },
  { name: "রংপুর", link: "/diffrentCountry?country=rangpur" },
  { name: "নীলফামারী", link: "/diffrentCountry?country=nilphamari" },
  { name: "গাইবান্ধা", link: "/diffrentCountry?country=gaibandha" },
  { name: "ঠাকুরগাঁও", link: "/diffrentCountry?country=thakurgaon" },
  { name: "দিনাজপুর", link: "/diffrentCountry?country=dinajpur" },
  { name: "পঞ্চগড়", link: "/diffrentCountry?country=panchagarh" },
  { name: "খুলনা", link: "/diffrentCountry?country=khulna" },
  { name: "বাগেরহাট", link: "/diffrentCountry?country=bagerhat" },
  { name: "সাতক্ষীরা", link: "/diffrentCountry?country=satkhira" },
  { name: "যশোর", link: "/diffrentCountry?country=jessore" },
  { name: "ঝিনাইদহ", link: "/diffrentCountry?country=jhenaidah" },
  { name: "চুয়াডাঙ্গা", link: "/diffrentCountry?country=chuadanga" },
  { name: "মেহেরপুর", link: "/diffrentCountry?country=meherpur" },
  { name: "মাগুরা", link: "/diffrentCountry?country=magura" },
  { name: "নড়াইল", link: "/diffrentCountry?country=narail" },
  { name: "কুষ্টিয়া", link: "/diffrentCountry?country=kushtia" }
];


export default function CountryListLinks() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-4 px-8 mt-8">
      {Cities.map((country) => (
        <Link
          key={country.name}
          href={country.link}
          onClick={scrollToTop}
          className="flex items-center justify-center gap-2 border p-1 transition-all 
                     hover:opacity-80 active:opacity-60 active:scale-95 rounded-xs"
        >
         <span className="text-xs font-bold">{country.name}</span>
        </Link>
      ))}
    </div>
  );
}
