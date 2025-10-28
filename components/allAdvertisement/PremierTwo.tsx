import { prisma } from "@/app/utils/db";
import Image from "next/image";
import Link from "next/link";

export async function getPremierTwoAdvertise() {
  return await prisma.advertisement.findMany({
    where: { advertisedCategory: "PREMIER_2", advertiseStatus: "ACTIVE" },
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
export async function PremiarTwo() {
  const Advertise = await getPremierTwoAdvertise();
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
    className="w-full h-[270px] rounded-xl object-cover"
  />
  {/* ✅ Perfectly centered in the middle of the image */}
  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs px-3 py-1 rounded shadow-md">
    Ad.
  </span>
</Link>

          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img
            src="/noad.png"
            alt="no ad. image"
            className="w-full h-[270px] rounded-xl object-fill"
          />
              <Link
              href="/about/advertise"
              className="inline-block text-white bg-primary hover:bg-primary/90 px-4 py-1.5 rounded-md text-xs transition"
            >
              Contact us for (PREMIER_2) Advertisement 
            </Link>
        </div>
      )}
    </>
  );
}