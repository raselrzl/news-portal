// app/routeTrack/page.tsx

import { prisma } from "@/app/utils/db";
import { notFound } from "next/navigation";

async function getRouteHits() {
  try {
    const routeVisits = await prisma.routeVisit.findMany({
      select: {
        fullUrl: true,
        hits: true,
      },
      orderBy: {
        hits: "desc",
      },
    });

    return routeVisits;
  } catch (error) {
    console.error("Error fetching route hits:", error);
    return [];
  }
}

const RouteHits = async () => {
  const routeHits = await getRouteHits();

  if (routeHits.length === 0) {
    notFound();
  }

  return (
    <div>
      <h1>Route Hit Counts</h1>
      <ul>
        {routeHits.map((route) => (
          <li key={route.fullUrl}>
            <strong>{route.fullUrl}</strong>: {route.hits} hits
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RouteHits;
