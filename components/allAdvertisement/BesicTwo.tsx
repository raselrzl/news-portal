import { prisma } from "@/app/utils/db";
import Image from "next/image";
import Link from "next/link";

export async function getBesicTwoAdvertise() {
  return await prisma.advertisement.findMany({
    where: { advertisedCategory: "BASIC_2", advertiseStatus: "ACTIVE" },
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
export async function BesicTwoAdvertise() {
  const Advertise = await getBesicTwoAdvertise();

  return (
    <>
        {Advertise && Object.keys(Advertise).length > 0 ? (
         <div className="flex flex-col items-center justify-center rounded-xl">
          {Advertise.map((ad) => (
            <Link
              href={`https://${ad.websiteLink}`}
              key={ad.id}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white rounded-md text-xs transition w-[250px]"
          >
              <img
                src={ad.advertiseBanner}
                alt={ad.companyName}
                className="w-[350px] h-[170px] rounded-xl object-cover"
              />
              <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-0.5 rounded">
                Ad.
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-xl">
          <img
            src="/noad.png"
            alt="no ad. image"
           className="w-[350px] h-[170px] rounded-xl md:pt-0 py-2 mt-5 object-cover"
          /> 
          <Link
            href="/about/advertise"
            className="inline-block text-white bg-primary hover:bg-primary/90 px-4 py-1.5 rounded-md text-xs transition"
          >
            Contact us for (BASIC_2)
          </Link>
        </div>
      )}
    </>
  );
}

