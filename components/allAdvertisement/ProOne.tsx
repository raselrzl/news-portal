import { prisma } from "@/app/utils/db";
import Link from "next/link";

export async function getProOneAdvertise() {
  return await prisma.advertisement.findMany({
    where: { advertisedCategory: "PRO_1", advertiseStatus: "ACTIVE" },
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

export async function ProOneAdvertise() {
  const proAds = await getProOneAdvertise();
  if (!proAds || proAds.length === 0) {
    return (
      <div className="border p-2">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/noad.png"
            alt="No Advertisement"
            className="
              block mx-auto
              w-full max-w-[370px]
              h-auto
              object-cover
              rounded-xl
            "
          />
               <Link
              href="/about/advertise"
              className="inline-block text-white bg-primary hover:bg-primary/90 px-4 py-1.5 rounded-md text-xs transition"
            >
              Contact us for (PRO_1) Advertisement 
            </Link>
        </div> 
      </div>
    );
  }

  return (
    <div className="border p-2">
      <div className="flex items-center justify-center">
        {proAds.map((pro1) => {
          // Make sure protocol is present
          const href = pro1.websiteLink?.startsWith("http")
            ? pro1.websiteLink
            : `https://${pro1.websiteLink}`;

          return (
            <Link
              href={href}
              key={pro1.id}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full relative inline-block"
            >
              {/* Responsive, centered image; no padding on the <img> itself */}
              <img
                src={pro1.advertiseBanner}
                alt={pro1.companyName ?? "Advertisement"}
                className="
                  mx-auto
                  w-full max-w-[370px]
                  h-auto
                  object-cover
                  rounded-xl
                "
              />
              <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-0.5 rounded">
                Ad.
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
