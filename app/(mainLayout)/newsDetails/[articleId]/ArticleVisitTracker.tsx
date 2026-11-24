"use client";

import { useEffect } from "react";
import { trackArticleVisit } from "./trackArticleVisit";

/**
 * Fires the analytics/view-count call from the browser after the page is
 * interactive, so it never blocks rendering and the page can be cached.
 */
export default function ArticleVisitTracker({
  articleId,
}: {
  articleId: string;
}) {
  useEffect(() => {
    const run = () => void trackArticleVisit(articleId);

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(run, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(run, 1500);
    return () => clearTimeout(t);
  }, [articleId]);

  return null;
}