"use client";

import Link from "next/link";
import { Card } from "../ui/card";
import Image from "next/image";
import { formatRelativeTime } from "@/app/utils/formatRelativeTime";

interface iWarnewsProps {
  article: {
    id: string;
    createdAt: Date;
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

export function WarnewsCard({ article }: iWarnewsProps) {
  return (
    <Link href={`/newsDetails/${article.id}`}>
      <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary relative grid grid-cols-3 border-0 px-2 py-2">
       

        <div className="col-span-2 flex flex-col justify-between">
          <h1 className="text-lg md:text-xl font-bold">{article.newsHeading}</h1>
          <p className="text-sm text-muted-foreground text-right font-bold italic pr-2">
            {formatRelativeTime(article.createdAt)}
          </p>
        </div>
         <div className="col-span-1">
          <img
            src={article.newsPicture}
            alt={article.newsPictureHeading}
            width={120} // bigger width
            height={100} // bigger height
            className="h-[80px] md:h-[150px] w-full object-cover rounded-xl"
          />
        </div>
      </Card>
    </Link>
  );
}
