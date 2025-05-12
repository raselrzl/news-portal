/* import { prisma } from "../db";
import { inngest } from "./client";

export const handleNewsArticleExpiration = inngest.createFunction(
  { id: "article-expiration", cancelOn:[
    {event:"article/cancel.expiration",
    if:"event.data.newsArticleId == async.data.newsArticleId"
    }
  ] },

  { event: "article/created" },
    async ({ event, step }) => {
    const { newsArticleId, expirationDays } = event.data;

    // Wait for the specified duration
    await step.sleep("wait-for-expiration", `${1}m`);

    // Update job status to expired
    await step.run("update-job-status", async () => {
      await prisma.newsArticle.update({
        where: { id: newsArticleId },
        data: { newsArticleStatus: "EXPIRED" },
      }); 
    });

    return { newsArticleId, message: "News Article Status marked as expired" };
  }
); */


/* export const sendPeriodicJobListing = inngest.createFunction(
  { id: "send-job-listings" },
  { event: "jobseeker/created" },
  async ({ event, step }) => {
    const { userId, email } = event.data;

    const totalDays=30;
    const intervalDays=2;
    let currentDay=0;

    while(currentDay<totalDays){
      await step.sleep("wait-interval", `${intervalDays}d`);
      currentDay +=intervalDays;

          // Update job status to expired
    const recentJobs=await step.run("fetch-recent-job", async () => {
      return await prisma.jobPost.findMany({
        where: { status: "ACTIVE" },
        orderBy:{
          createdAt:"desc",
        },
        take: 5,
        include:{
          Company:{
            select:{
              name:true,
            }
          }
        }
      }); 
    });

    if(recentJobs.length>0){
      await step.run("send-email", async()=>{

      })
    }
    }


    return { jobId, message: "Job marked as expired" };
  }
); */