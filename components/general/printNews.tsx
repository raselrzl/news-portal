"use client";
import {
  Download,
  Facebook,
  MessageCircle,
  Copy,
  SquarePlay,
  LocateIcon,
  Wheat,
  LinkIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas-pro";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";

interface PrintNewsProps {
  newsPicture: string | null;
  newsPictureHeading: string | null;
  newsPictureCredit: string | null;
  newsLocation: string | null;
  newsDetails: string | null;
  newsResource: string | null;
}

export default function PrintNews({
  newsPicture,
  newsPictureHeading,
  newsPictureCredit,
  newsLocation,
  newsDetails,
  newsResource,
}: PrintNewsProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!contentRef.current) return;
    const canvas = await html2canvas(contentRef.current, {
      scale: 2,
      useCORS: true, // for external images
    });
    const link = document.createElement("a");
    link.download = "news-article.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };


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
        <Button
          onClick={handleDownload}
          className="w-9 h-9 overflow-hidden p-[6px]"
          variant="outline"
        >
          <Image
            src="/download.png"
            alt="WhatsApp"
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </Button>

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
            alt="WhatsApp"
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
            alt="WhatsApp"
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

      <div className="mb-10">
        <div
          id="printable-content"
          ref={contentRef}
          className="w-full bg-white rounded shadow"
        >
          {newsPicture && (
            <img
              src={newsPicture}
              alt="Description"
              className="w-full h-[300px] md:h-[400px] block md:px-6"
            />
          )}
          <div className="flex justify-center mt-2 px-2 mb-10 text-sm text-accent-foreground/75">
            <p className="mr-4">{newsPictureHeading}</p>
            <p>কৃতিত্ব: {newsPictureCredit}</p>
          </div>
          <div className="whitespace-pre-line text-md mg:text-lg">
            <div className="flex flex-row ml-6">
              <SquarePlay />
              <h1 className="text-xl font-bold pl-2 mr-4">পূর্ণ বিবরণ</h1>
              <LocateIcon />
              <p className="text-xl font-bold">{newsLocation}</p>
            </div>
            <p className="py-6 px-2 text-justify">{newsDetails}</p>
          </div>
          <p className="ml-6 font-extrabold">
            {">>>"} {newsResource}
          </p>
        </div>
      </div>
    </>
  );
}
