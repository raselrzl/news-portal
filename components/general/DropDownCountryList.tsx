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

const euCountries = [
  {
    name: "Bangladesh",
    flag: "/flags/bangladesh.jpg",
    link: "/diffrentCountry?country=Bangladesh",
  },
  {
    name: "Austria",
    flag: "/flags/Austria.png",
    link: "/international#AustriaNews",
  },
  {
    name: "Belgium",
    flag: "/flags/belgium.webp",
    link: "/countrywide#BelgiumNews",
  },
  {
    name: "Bulgaria",
    flag: "/flags/bulgaria.webp",
    link: "/crime#BulgariaNews",
  },
  {
    name: "Croatia",
    flag: "/flags/croatia.webp",
    link: "/environment#CroatiaNews",
  },
  { name: "Cyprus", flag: "/flags/cyprus.jpg", link: "/politics#CyprusNews" },

  {
    name: "CzechRepublic",
    flag: "/flags/czech-republic.png",
    link: "/diffrentCountry?country=CzechRepublic",
  },

  { name: "Denmark", flag: "/flags/denmark.jpg", link: "/economy#DenmarkNews" },
  {
    name: "Estonia",
    flag: "/flags/estonia.jpeg",
    link: "/diffrentCountry?country=Estonia",
  },
  { name: "Finland", flag: "/flags/finland.jpg", link: "/health#FinlandNews" },
  { name: "France", flag: "/flags/france.jpg", link: "/opinion#FranceNews" },
  {
    name: "Germany",
    flag: "/flags/germany.jpg",
    link: "/education#GermanyNews",
  },
  {
    name: "Greece",
    flag: "/flags/greece.webp",
    link: "/diffrentCountry?country=Greece",
  },
  {
    name: "Hungary",
    flag: "/flags/hungary.png",
    link: "/diffrentCountry?country=Hungary",
  },
  {
    name: "Ireland",
    flag: "/flags/ireland.webp",
    link: "/diffrentCountry?country=Ireland",
  },
  { name: "Italy", flag: "/flags/italy.webp", link: "/sports#ItalyNews" },
  {
    name: "Latvia",
    flag: "/flags/latvia.jpg",
    link: "/diffrentCountry?country=Latvia",
  },
  {
    name: "Lithuania",
    flag: "/flags/lithuania.jpg",
    link: "/diffrentCountry?country=Lithuania",
  },
  {
    name: "Luxembourg",
    flag: "/flags/luxembourg.webp",
    link: "/law-and-justice#LuxembourgNews",
  },
  {
    name: "Malta",
    flag: "/flags/malta.jpg",
    link: "/diffrentCountry?country=Malta",
  },
  {
    name: "Netherlands",
    flag: "/flags/netherlands.webp",
    link: "/science#NetherlandsNews",
  },
  {
    name: "Poland",
    flag: "/flags/poland.jpeg",
    link: "/technology#PolandNews",
  },
  {
    name: "Portugal",
    flag: "/flags/portugal.webp",
    link: "/religion#PortugalNews",
  },

  {
    name: "Romania",
    flag: "/flags/romania.png",
    link: "/diffrentCountry?country=Romania",
  },
  {
    name: "Slovakia",
    flag: "/flags/slovakia.jpg",
    link: "/diffrentCountry?country=Slovakia",
  },
  {
    name: "Slovenia",
    flag: "/flags/slovenia.jpeg",
    link: "/diffrentCountry?country=Slovenia",
  },

  { name: "Spain", flag: "/flags/spain.svg", link: "/entertainment#SpainNews" },
  { name: "Sweden", flag: "/flags/swedish.png", link: "/national#SwedishNews" },

  { name: "Uk", flag: "/flags/uk.png", link: "/diffrentCountry?country=Uk" },
  {
    name: "Switzerland",
    flag: "/flags/switzerland.jpg",
    link: "/diffrentCountry?country=Switzerland",
  },
  {
    name: "Usa",
    flag: "/flags/usa.webp",
    link: "/diffrentCountry?country=Usa",
  },
  {
    name: "Canada",
    flag: "/flags/canada.jpg",
    link: "/diffrentCountry?country=Canada",
  },
  {
    name: "Australia",
    flag: "/flags/australia.jpg",
    link: "/diffrentCountry?country=Australia",
  },
  {
    name: "Norway",
    flag: "/flags/norway.webp",
    link: "/diffrentCountry?country=Norway",
  },
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
        {euCountries.map((country, index) => (
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
            {index < euCountries.length - 1 && <DropdownMenuSeparator />}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
