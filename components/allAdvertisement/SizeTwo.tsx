import { prisma } from "@/app/utils/db";
import { Country } from "@/lib/generated/prisma";
import Image from "next/image";
import Link from "next/link";

interface SlizeTwoProps {
  country: string; // frontend country name like "Usa", "Bangladesh"
}

// Helper: map frontend country string to Prisma enum
function mapToCountryEnum(country: string): Country | undefined {
  if (!country) return undefined;
  const key = country.toUpperCase().replace(/ /g, "_") as keyof typeof Country;
  return Country[key];
}
export async function getsizeTwoAdvertise(country: string) {
  const dbCountry = mapToCountryEnum(country);

  if (!dbCountry) return []; // fallback if mapping fails
  return await prisma.advertisement.findMany({
    where: {
      advertisedCategory: "SIZE_2",
      advertiseStatus: "ACTIVE",
      country: dbCountry,
    },
    select: {
      id: true,
      createdAt: true,
      isFeatured: true,
      companyName: true,
      companyaddress: true,
      websiteLink: true,
      advertiseBanner: true,
      endDate: true,
      supervisedPhonenumber: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 1,
  });
}
export async function SizeTwoAdvertise({ country }: { country: string }) {
  const Advertise = await getsizeTwoAdvertise(country);
  return (
    <>
      {Advertise && Object.keys(Advertise).length > 0 ? (
        <div className="flex items-center justify-center rounded-xl">
          {Advertise.map((ad) => (
            <Link
              href={`https://${ad.websiteLink}`}
              key={ad.id}
              target="_blank"
              rel="noopener noreferrer"
               className="relative inline-block"
            >
              <img
                src={ad.advertiseBanner}
                alt={ad.companyName}
                className="w-full h-[170px] rounded-xl object-cover"
              />
               <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-0.5 rounded">
                Ad.
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div>
          <img
            src="/noad.png"
            alt="image"
            className="w-full h-[170px] rounded-xl object-cover"
          />
          <Link
            href="/about/advertise"
            className="inline-block text-white bg-primary hover:bg-primary/90 px-4 py-1.5 rounded-md text-xs transition"
          >
            Contact us for (SIZE_2) Advertisement
          </Link>
        </div>
      )}
    </>
  );
}
