"use server";

import { prisma } from "@/app/utils/db";



export async function getVisitorsByDay(month: number, year: number) {
  // month = 0–11 (JS Date)
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0, 23, 59, 59);

  const visits = await prisma.newUserVisit.findMany({
    where: {
      createdAt: {
        gte: startDate,
        lte: endDate,
      },
    },
    select: {
      userId: true,
      createdAt: true,
    },
  });

  // Group by day
  const dailyMap: Record<string, Set<string>> = {};

  visits.forEach((visit) => {
    const day = visit.createdAt.toISOString().split("T")[0];
    if (!dailyMap[day]) {
      dailyMap[day] = new Set();
    }
    dailyMap[day].add(visit.userId);
  });

  // Convert Set → count
  const result = Object.entries(dailyMap).map(([date, users]) => ({
    date,
    count: users.size,
  }));

  return result;
}




export async function getVisitorsByDate(date: Date) {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);

  const end = new Date(date);
  end.setHours(23, 59, 59, 999);

  const visitors = await prisma.newUserVisit.findMany({
    where: {
      createdAt: {
        gte: start,
        lte: end,
      },
    },
    distinct: ["userId"],
  });

  return { count: visitors.length };
}

