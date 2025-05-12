import { inngest } from "@/app/utils/inngest/client";
import { handleNewsArticleExpiration } from "@/app/utils/inngest/functions";
import { serve } from "inngest/next";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [handleNewsArticleExpiration],
});