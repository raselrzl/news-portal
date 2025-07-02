// app/routeTrack/page.tsx

import { prisma } from "@/app/utils/db";
import { requireSompandokOrSuperAdmin } from "@/app/utils/requireUser";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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

  await requireSompandokOrSuperAdmin()

  // Calculate the total route hit count
  const totalHits = routeHits.reduce((acc, route) => acc + route.hits, 0);

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-[600px] bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Route Hit Counts</h1>

        {/* Display Total Route Hit Count */}
        <div className="mb-4">
          <p className="text-xl font-medium">Total Route Hits by all users: {totalHits}</p>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>URL</TableHead>
              <TableHead>Hits</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {routeHits.map((route, index) => (
              <TableRow
                key={route.fullUrl}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                }`}
              >
                <TableCell>{route.fullUrl}</TableCell>
                <TableCell>{route.hits}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RouteHits;
