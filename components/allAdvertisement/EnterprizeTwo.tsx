import { prisma } from "@/app/utils/db";
import Image from "next/image";
import Link from "next/link";


async function getEnterPrizeTwoAdvertise() {

  return await prisma.advertisement.findMany({
    where: {
      advertisedCategory: "ENTERPRISE_2",
      advertiseStatus: "ACTIVE",
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
    orderBy: { createdAt: "desc" },
    take: 1,
  });
}

export async function EnterPrizeTwo() {
  const Advertise = await getEnterPrizeTwoAdvertise();

  return (
    <>
      {Advertise && Advertise.length > 0 ? (
        <div className="flex items-center justify-center">
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
                width={360}
                height={300}
                className="w-[360px] md:w-full h-[170px] md:h-[170px] rounded-xl md:pt-0 py-2 mt-5 object-fill"
              />
              <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-0.5 rounded">
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
            className="w-[360px] md:w-full h-[170px] md:h-[170px] rounded-xl md:pt-0 py-2 mt-5 object-cover"
          />

          <Link
            href="/about/advertise"
            className="inline-block text-white bg-primary hover:bg-primary/90 px-4 py-1.5 rounded-md text-xs transition"
          >
            Contact us for (ENTERPRISE_2) Advertisement
          </Link>
        </div>
      )}
    </>
  );
}
