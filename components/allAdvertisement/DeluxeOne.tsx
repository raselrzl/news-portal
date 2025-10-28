import { prisma } from "@/app/utils/db";
import Link from "next/link";

export async function getDeluxeOneAdvertise() {
  return await prisma.advertisement.findMany({
    where: { advertisedCategory: "DELUXE_1", advertiseStatus: "ACTIVE" },
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
export async function DeluxeOneAdvertise() {
  const Advertise = await getDeluxeOneAdvertise();
  return (
    <div className="w-full flex justify-center">
      {Advertise && Advertise.length > 0 ? (
        <div className="w-[600px] h-[80px] flex items-center justify-center">
          {Advertise.map((pro1) => (
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
                className="h-[80px] w-full object-fill rounded-xs"
              />
                <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-0.5 rounded">
                Ad.
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="border w-[600px] h-[70px] flex items-center justify-center rounded-xl bg-primary/10 mx-auto">
          <div className="flex flex-col items-center justify-center px-2">
            <p>No ad. yet</p>
            <Link
              href="/about/advertise"
              className="inline-block text-white bg-primary hover:bg-primary/90 px-4 py-1.5 rounded-xs text-xs transition"
            >
              Contact us for (DELUXE_1) ad.
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
