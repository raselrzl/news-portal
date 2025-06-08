"use client";
import {
  SquarePlay,
  LocateIcon,
  LinkIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { NewsDetailsDisplay } from "../richTextEditor/NewsDetailsDisplay";
import { PrintNewsDetailsClient } from "@/components/general/PrintNewsClient";
import { quote } from "@/lib/generated/prisma";

interface PrintNewsProps {
  newsPicture: string | null;
  newsPictureHeading: string | null;
  newsPictureCredit: string | null;
  newsLocation: string | null;
  newsDetails: string | "...";
  newsResource: string | null;
  newsHeading: string | null;
  id: string | null;
  createdAt: Date;
  quotes?: quote[];
}

export default function PrintNews({
  newsPicture,
  newsPictureHeading,
  newsPictureCredit,
  newsLocation,
  newsDetails,
  newsResource,
  newsHeading,
  createdAt,
  quotes = [],
  id,
}: PrintNewsProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const [articleUrl, setArticleUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setArticleUrl(window.location.href); // Grabs full current URL
    }
  }, []);

  const handleShareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(articleUrl)}`, '_blank');
  };

  const handleShareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`, '_blank');
  };

  const handleShareMessenger = () => {
    const url = encodeURIComponent(articleUrl);
    const shareUrl = `https://m.me/?link=${url}`;
    window.open(shareUrl, '_blank');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      toast('লিংক কপি হয়েছে!');
    } catch {
      toast('লিংক কপি করা যায়নি।');
    }
  };

  return (
    <>
      <div className="flex justify-end flex-wrap space-x-1 pr-4 mt-6 md:mt-2">
        {/* Removed the Download button here */}
        <PrintNewsDetailsClient
          newsHeading={newsHeading ?? ""}
          newsPicture={newsPicture ?? null}
          newsPictureHeading={newsPictureHeading ?? null}
          newsDetails={newsDetails}
          createdAt={createdAt}
          quotes={quotes}
        />
        <Button
          onClick={handleShareWhatsApp}
          className="w-9 h-9 p-0 overflow-hidden"
          variant="outline"
        >
          <Image
            src="/whatsapp.svg"
            alt="WhatsApp"
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </Button>

        <Button
          onClick={handleShareFacebook}
          className="w-9 h-9 p-0 overflow-hidden"
          variant="outline"
        >
          <Image
            src="/facebook.svg"
            alt="Facebook"
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </Button>

        <Button
          onClick={handleShareMessenger}
          className="w-9 h-9 p-0 overflow-hidden"
          variant="outline"
        >
          <Image
            src="/messanger.svg"
            alt="Messenger"
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </Button>

        <Button
          onClick={handleCopyLink}
          className="mb-2 p-2 sm:p-3"
          variant="outline"
        >
          <LinkIcon size={16} />
        </Button>
      </div>

      <div className="mb-10 ">
        <div
          id="printable-content"
          ref={contentRef}
          className="w-full rounded shadow mt-6"
        >
          <h1 className="text-3xl font-bold my-4  px-2 md:px-6 pt-6">{newsHeading}</h1>
{newsPicture && (
  <div className="relative w-full md:px-6 h-[300px] md:h-[400px]">
    {/* Image Layer (underneath) */}
    <img
      src={newsPicture}
      alt="Description"
      className="absolute inset-0 w-full h-full object-cover z-0"
    />

    {/* Text Layer (bottom with background) */}
    <div className="absolute bottom-0 left-0 w-full z-10 bg-black/60 text-white px-4 py-2 text-center">
      {newsPictureHeading || newsPictureCredit ? (
        <>
          {newsPictureHeading && <p className="text-sm font-semibold">{newsPictureHeading}</p>}
          {newsPictureCredit && <p className="text-xs">{newsPictureCredit}</p>}
        </>
      ) : (
        <p className="text-sm font-semibold">জাগ্রত প্রতিবেদক</p>
      )}
    </div>
  </div>
)}




          <div className="whitespace-pre-line text-md mg:text-lg dark:bg-black mt-10">
            <div className="flex flex-row ml-6">
              <SquarePlay />
              <h1 className="text-xl font-bold pl-2 mr-4 mb-4">জাগ্রত প্রতিবেদন</h1>
              <LocateIcon />
              <p className="text-xl font-bold">{newsLocation}</p>
            </div>
            <div className="px-2 md:px-6">
              <NewsDetailsDisplay newsDetails={newsDetails} />
            </div>
          </div>
          <p className="ml-6 font-extrabold">
            {">>>"} {newsResource}
          </p>
        </div>
      </div>
    </>
  );
}
