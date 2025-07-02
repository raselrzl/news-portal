import { prisma } from "./db";
export async function trackRoute(fullUrl: string) {
  const route = new URL(fullUrl, "http://localhost").pathname;

  const existingRoute = await prisma.routeVisit.findUnique({
    where: { fullUrl: route },
  });

  if (!existingRoute) {
    await prisma.routeVisit.create({
      data: {
        fullUrl: route,
        route: route,
        hits: 1,
      },
    });
  } else {
    await prisma.routeVisit.update({
      where: { fullUrl: route },
      data: {
        hits: { increment: 1 },
      },
    });
  }
}
