import { prisma } from "@/app/utils/db";
import Image from "next/image";
import Link from "next/link";

export async function getProTwoAdvertise() {
  return await prisma.advertisement.findMany({
    where: { advertisedCategory: "PRO_2", advertiseStatus: "ACTIVE" },
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
export async function ProTwoAdvertise() {
  const ProOneAdvertise = await getProTwoAdvertise();
  return (
    <>
      {ProOneAdvertise && Object.keys(ProOneAdvertise).length > 0 ? (
        <div className="flex items-center justify-center">
          {ProOneAdvertise.map((pro1) => (
            <Link
              href={`https://${pro1.websiteLink}`}
              key={pro1.id}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block"
            >
              <img
                src={pro1.advertiseBanner}
                alt={pro1.companyName}
                className="w-full h-[100px] rounded-xl px-8 md:px-32"
              />
                <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-0.5 rounded">
                Ad.
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="border p-4 rounded-xl text-center max-w-[370px] mx-auto bg-gray-50 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">
            No <strong>Pro Two</strong> advertisement available.
          </p>
          <Link
              href="/about/advertise"
              className="inline-block text-white bg-primary hover:bg-primary/90 px-4 py-1.5 rounded-md text-xs transition"
            >
              Contact us for (PRO_2) Advertisement 
            </Link>
        </div>
      )}
    </>
  );
}
