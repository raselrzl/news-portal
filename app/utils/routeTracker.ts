import { prisma } from "./db";

export async function trackRoute(fullUrl: string) {
  // Extract pathname
  const pathname = new URL(fullUrl, "http://localhost").pathname;

  // Remove leading slash
  const route = pathname.startsWith("/") ? pathname.slice(1) : pathname;

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
