import { prisma } from "@/app/utils/db";
import { requireSompandokOrSuperAdmin } from "@/app/utils/requireUser";
import ChartComponent from "@/components/general/ChartComponent";
import Statistics from "@/components/general/Statistics";
import { UserLinks } from "@/components/general/UserLinks";
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

const Dashboard = async () => {

  await requireSompandokOrSuperAdmin()

  const routeHits = await getRouteHits();
  if (routeHits.length === 0) {
    notFound();
  }
  const totalHits = routeHits.reduce((acc, route) => acc + route.hits, 0);

  return (
    <>
    <UserLinks />
    <div className="flex justify-center flex-col md:flex-row p-4 shadow-lg">
      
      <div className="w-full max-w-[600px] rounded-lg p-6">
        {/* Table displaying route hit counts */}
        <div className="mb-6">
          <table className="w-full border-collapse ">
            <thead >
              <tr className="text-primary bg-accent-foreground/10">
                <th className="border p-2 text-left">URL</th>
                <th className="border p-2 text-left">Hits</th>
              </tr>
            </thead>
            <tbody>
              {routeHits.map((route, index) => (
                <tr
                  key={route.fullUrl}
                  className={index % 2 === 0 ? "bg-primary-foreground text-primary" : "bg-primary-foreground/10 text-primary"}
                >
                  <td className="border p-2">{route.fullUrl}</td>
                  <td className="border p-2">{route.hits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Chart Section */}
      <div className="p-4 w-full max-w-[1000px] sm:max-w-[800px] md:max-w-[900px]">
        <p className="text-xl font-medium text-center text-orange-400 mb-6">
          Total Route Hits by all users: {totalHits}
        </p>
        <ChartComponent routeHits={routeHits} />
        <Statistics />
      </div>
    </div>
    </>
  );
};

export default Dashboard;
