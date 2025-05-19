"use client";

import Link from "next/link";
import { Card, CardHeader } from "../ui/card";
import { MapPin, User2 } from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { formatRelativeTime } from "@/app/utils/formatRelativeTime";

interface iAppProps {
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

export function NewsArticleCard({ article }: iAppProps) {
  return (
    <Link href={`/newsDetails/${article.id}`}>
      <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary relative grid grid-cols-3 border-0 px-2 py-2">
        <div className="col-span-1">
          <Image
            src={article.newsPicture}
            alt={article.newsPictureHeading}
            width={56}
            height={60}
            className="h-[60px] w-full object-fill rounded-xl"
          />
        </div>

        <div className="col-span-2">
          <h1 className="text-lg md:text-xl font-bold">
            {article.newsHeading}
          </h1>
          <p className="text-sm text-muted-foreground text-right font-bold italic pr-2">
            {formatRelativeTime(article.createdAt)}
          </p>
        </div>
      </Card>
    </Link>
  );
}
