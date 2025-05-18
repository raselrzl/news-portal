import { prisma } from "@/app/utils/db";
import { notFound } from "next/navigation";
import { EditNewsArticleForm } from "./editArticleForm";
import { requireNewsReporter } from "@/app/utils/requireUser";

async function getData (articleId:string){
    const data = await prisma.newsArticle.findUnique({
        where: {
          id: articleId,
        },
        select: {
          id: true,
          newsHeading: true,
          newsDetails: true,
          newsResource: true,
          newsLocation: true,
          newsCategory: true,
          newsPicture: true,
          newsPictureHeading: true,
          newsPictureCredit: true,
          isFeatured: true,
          duration: true,
          newsArticleStatus: true,
          quotes: {
            select: {
              id: true,
              text: true,
              speakerInfo: true,
            },
          },
        },
      });
      if (!data){
        return notFound();
      }
    
      return data;
    }

interface iAppProps {
  article: {
    id: string;
    isFeatured: boolean;
    newsCategory: string;
    newsDetails: string;
    newsHeading: string;
    newsPicture: string;
    quotes: {
      speakerInfo: string;
      text: string;
    }[];
    newsResource: string;
    newsPictureHeading: string;
    newsPictureCredit: string;
    newsLocation: string | null;
    newsReporter: {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      userId: string;
      reporterName: string | null;
      location: string;
      bio: string;
      profilePicture: string;
      phoneNumber: string;
      facebookProfileAddress: string | null;
      registered: boolean;
    };
    newsArticleStatus: string;
  };
}

type Params= Promise<{ articleId: string }>

export default async function EditNewsArticleFormPage({params}:{ params:Params }) {
    const approvednewsreporter=await requireNewsReporter()
    const {articleId}=await params
    const data =await getData(articleId)


  return (
   <>
           <EditNewsArticleForm article={data}/>
   </>
  );
}
