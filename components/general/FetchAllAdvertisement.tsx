import { prisma } from "@/app/utils/db";
import Image from "next/image";
import Link from "next/link";

export async function getPremierOneAdvertise() {
  return await prisma.advertisement.findMany({
    where: { advertisedCategory: "PREMIER_1" },
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

export async function PremiarOne() {
  const PremiarOneAdvertise = await getPremierOneAdvertise();
  return (
    <>
      {PremiarOneAdvertise && Object.keys(PremiarOneAdvertise).length > 0 ? (
        <div className="flex items-center justify-center">
          {PremiarOneAdvertise.map((premier1) => (
            <Link href={`https://${premier1.websiteLink}`} key={premier1.id}  target="_blank"
            rel="noopener noreferrer">
              <Image
                src={premier1.advertiseBanner}
                alt={premier1.companyName}
                width={300} // adjust as needed
                height={100}
                className="w-[300px] h-[100px] md:h-[150px] rounded-xl"
              />
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}

export async function getPremiumOneAdvertise() {
  return await prisma.advertisement.findMany({
    where: { advertisedCategory: "PREMIUM_1" },
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





export async function PremiumOneAdvertise() {
  const PremiarOneAdvertise = await getPremiumOneAdvertise();
  return (
    <>
      {PremiarOneAdvertise && Object.keys(PremiarOneAdvertise).length > 0 ? (
        <div className="flex items-center justify-center">
          {PremiarOneAdvertise.map((premier1) => (
            <Link href={`https://${premier1.websiteLink}`} key={premier1.id}  target="_blank"
            rel="noopener noreferrer">
              <Image
                src={premier1.advertiseBanner}
                alt={premier1.companyName}
                width={300} // adjust as needed
                height={100}
                className="w-[300px] h-[100px] md:h-[180px] rounded-xl"
              />
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}