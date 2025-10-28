import { prisma } from "@/app/utils/db";
import Image from "next/image";
import Link from "next/link";



export async function getStandardOneAdvertise() {
  return await prisma.advertisement.findMany({
    where: { advertisedCategory: "STANDARD_1" },
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
export async function StandardOneAdvertise() {
  const Advertise = await getStandardOneAdvertise();
  return (
    <>
      {Advertise && Object.keys(Advertise).length > 0 ? (
        <div className="">
          {Advertise.map((pro1) => (
            <Link
              href={`https://${pro1.websiteLink}`}
              key={pro1.id}
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <img
                src={pro1.advertiseBanner}
                alt={pro1.companyName}
                width={800} // adjust as needed
                height={400}
                className="w-full h-[130px] md:h-[220px] rounded-xl px-8 md:px-32"
              />
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}
export async function getStandardTwoAdvertise() {
  return await prisma.advertisement.findMany({
    where: { advertisedCategory: "STANDARD_2" },
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
export async function StandardTwoAdvertise() {
  const Advertise = await getStandardTwoAdvertise();
  return (
    <>
      {Advertise && Object.keys(Advertise).length > 0 ? (
        <div className="">
          {Advertise.map((pro1) => (
            <Link
              href={`https://${pro1.websiteLink}`}
              key={pro1.id}
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <img
                src={pro1.advertiseBanner}
                alt={pro1.companyName}
                width={800} // adjust as needed
                height={400}
                className="w-full h-[130px] md:h-[220px] rounded-xl px-8 md:px-32"
              />
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}


export async function getUltimateOneAdvertise() {
  return await prisma.advertisement.findMany({
    where: { advertisedCategory: "ULTIMATE_1" },
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
export async function UltimateOneAdvertise() {
  const Advertise = await getUltimateOneAdvertise();
  return (
    <>
      {Advertise && Object.keys(Advertise).length > 0 ? (
        <div className="">
          {Advertise.map((pro1) => (
            <Link
              href={`https://${pro1.websiteLink}`}
              key={pro1.id}
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <img
                src={pro1.advertiseBanner}
                alt={pro1.companyName}
                width={800} // adjust as needed
                height={400}
                className="w-full h-[130px] md:h-[220px] rounded-xl px-8 md:px-32"
              />
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}
export async function getUltimateTwoAdvertise() {
  return await prisma.advertisement.findMany({
    where: { advertisedCategory: "ULTIMATE_2" },
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
export async function UltimateTwoAdvertise() {
  const Advertise = await getUltimateTwoAdvertise();
  return (
    <>
      {Advertise && Object.keys(Advertise).length > 0 ? (
        <div className="">
          {Advertise.map((pro1) => (
            <Link
              href={`https://${pro1.websiteLink}`}
              key={pro1.id}
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <img
                src={pro1.advertiseBanner}
                alt={pro1.companyName}
                width={800} // adjust as needed
                height={400}
                className="w-full h-[130px] md:h-[220px] rounded-xl px-8 md:px-32"
              />
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}




export async function getEnterprizeTwoAdvertise() {
  return await prisma.advertisement.findMany({
    where: { advertisedCategory: "ENTERPRISE_2" },
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
export async function EnterprizeTwoAdvertise() {
  const Advertise = await getEnterprizeTwoAdvertise();
  return (
    <>
      {Advertise && Object.keys(Advertise).length > 0 ? (
        <div className="">
          {Advertise.map((pro1) => (
            <Link
              href={`https://${pro1.websiteLink}`}
              key={pro1.id}
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <img
                src={pro1.advertiseBanner}
                alt={pro1.companyName}
                width={800} // adjust as needed
                height={400}
                className="w-full h-[130px] md:h-[220px] rounded-xl px-8 md:px-32"
              />
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}