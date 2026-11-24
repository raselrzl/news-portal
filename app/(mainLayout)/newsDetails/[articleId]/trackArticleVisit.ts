"use server";

import { incrementArticleView } from "@/app/actions";
import { trackRoute } from "@/app/utils/routeTracker";

export async function trackArticleVisit(articleId: string) {
  await Promise.allSettled([
    trackRoute("NewsDetailsPage"),
    incrementArticleView(articleId),
  ]);
}