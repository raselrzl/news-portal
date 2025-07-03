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



export async function getPremierTwoAdvertise() {
  return await prisma.advertisement.findMany({
    where: { advertisedCategory: "PREMIER_2" },
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
  const PremiarOneAdvertise = await getPremierTwoAdvertise();
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
                height={220}
                className="w-[300px] min-h-[220px] mb-16"
              />
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}


export async function getSuperOneAdvertise() {
  return await prisma.advertisement.findMany({
    where: { advertisedCategory: "SUPER_1" },
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

export async function SuperOne() {
  const SuperOneAdvertise = await getSuperOneAdvertise();
  return (
    <>
      {SuperOneAdvertise && Object.keys(SuperOneAdvertise).length > 0 ? (
        <div className="flex items-center justify-center">
          {SuperOneAdvertise.map((super1) => (
            <Link href={`https://${super1.websiteLink}`} key={super1.id}  target="_blank"
            rel="noopener noreferrer">
              <Image
                src={super1.advertiseBanner}
                alt={super1.companyName}
                width={300} // adjust as needed
                height={100}
                className="w-[300px] h-[130px] md:h-[180px] rounded-xl"
              />
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}

export async function getSuperTwoAdvertise() {
  return await prisma.advertisement.findMany({
    where: { advertisedCategory: "SUPER_2" },
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

export async function SuperTwo() {
  const SuperTwoAdvertise = await getSuperTwoAdvertise();
  return (
    <>
      {SuperTwoAdvertise && Object.keys(SuperTwoAdvertise).length > 0 ? (
        <div className="flex items-center justify-center">
          {SuperTwoAdvertise.map((super1) => (
            <Link href={`https://${super1.websiteLink}`} key={super1.id}  target="_blank"
            rel="noopener noreferrer">
              <Image
                src={super1.advertiseBanner}
                alt={super1.companyName}
                width={300} // adjust as needed
                height={100}
                className="w-[300px] h-[130px] md:h-[180px] rounded-xl"
              />
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}