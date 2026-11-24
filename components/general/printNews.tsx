
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { NewsDetailsDisplay } from "../richTextEditor/NewsDetailsDisplay";
import { PrintNewsDetailsClient } from "@/components/general/PrintNewsClient";
import {
  Copy,
  Printer,
  X,
} from "lucide-react";
import type { quote } from "@/lib/generated/prisma";

interface PrintNewsProps {
  newsPicture: string | null;
  newsPictureHeading: string | null;
  newsPictureCredit: string | null;
  newsLocation: string | null;
  newsDetails: string;
  reporterPublicName: string | null;
  newsResource: string | null;
  newsHeading: string | null;
  id: string | null;
  createdAt: Date;
  quotes?: quote[];
  newsReporter: string | null;
}

const actionButtonClass =
  "h-10 w-10 min-w-10 shrink-0 rounded-md border border-gray-200 bg-white p-2 shadow-sm hover:bg-gray-50 hover:border-gray-300";

export default function PrintNews({
  newsPicture,
  newsPictureHeading,
  newsPictureCredit,
  newsDetails,
  reporterPublicName,
  newsHeading,
  createdAt,
  quotes = [],
}: PrintNewsProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isFullImage, setIsFullImage] = useState(false);

  const closeImageViewer = useCallback(() => {
    setIsFullImage(false);
  }, []);

  useEffect(() => {
    if (!isFullImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeImageViewer();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullImage, closeImageViewer]);

  const getArticleUrl = () => window.location.href;

  const openShareWindow = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleShareWhatsApp = () => {
    const url = encodeURIComponent(getArticleUrl());
    openShareWindow(`https://wa.me/?text=${url}`);
  };

  const handleShareFacebook = () => {
    const url = encodeURIComponent(getArticleUrl());
    openShareWindow(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`
    );
  };

  const handleShareMessenger = () => {
    const url = encodeURIComponent(getArticleUrl());
    openShareWindow(`https://m.me/?link=${url}`);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getArticleUrl());
      toast.success("লিংক কপি হয়েছে!");
    } catch {
      toast.error("লিংক কপি করা যায়নি।");
    }
  };

  return (
    <>
      {/* ARTICLE ACTIONS */}
      <div className="flex items-center justify-end gap-2 px-2 md:px-0 mt-4">
        <div className="flex items-center gap-2">

          <PrintNewsDetailsClient
            newsHeading={newsHeading ?? ""}
            newsPicture={newsPicture}
            newsPictureHeading={newsPictureHeading}
            newsDetails={newsDetails}
            createdAt={createdAt}
            quotes={quotes}
            reporterPublicName={
              reporterPublicName || "জাগ্রত বার্তা প্রতিবেদক"
            }
          />

          <Button
            onClick={handleShareWhatsApp}
            type="button"
            aria-label="Share on WhatsApp"
            variant="outline"
            className={actionButtonClass}
          >
            <img src="/whatsapp.svg" alt="" className="size-full object-contain" />
          </Button>

          <Button
            onClick={handleShareFacebook}
            type="button"
            aria-label="Share on Facebook"
            variant="outline"
            className={actionButtonClass}
          >
            <img src="/fb.webp" alt="" className="size-full object-contain" />
          </Button>

          <Button
            onClick={handleShareMessenger}
            type="button"
            aria-label="Share on Messenger"
            variant="outline"
            className={actionButtonClass}
          >
            <img src="/messanger.svg" alt="" className="size-full object-contain" />
          </Button>

          <Button
            onClick={handleCopyLink}
            type="button"
            aria-label="Copy article link"
            variant="outline"
            className={actionButtonClass}
          >
            <Copy className="size-5" />
          </Button>

        </div>
      </div>

      {/* NEWS ARTICLE */}
      <div className="mb-8 mt-4">
        <article
          id="printable-content"
          ref={contentRef}
          className="w-full bg-white text-gray-950"
        >
          {/* HEADLINE */}
          {newsHeading && (
            <header className="px-3 md:px-0 pb-4">
              <h1 className="text-[25px] sm:text-3xl md:text-[38px] font-bold leading-[1.45] md:leading-[1.4] tracking-tight text-gray-950">
                {newsHeading}
              </h1>
            </header>
          )}

          {/* FEATURED NEWS IMAGE */}
          {newsPicture && (
            <figure className="w-full">
              <button
                type="button"
                onClick={() => setIsFullImage(true)}
                aria-label="ছবি বড় করে দেখুন"
                className="group relative block w-full overflow-hidden bg-gray-100 cursor-zoom-in aspect-[16/9] md:aspect-[16/8]"
              >
                <img
                  src={newsPicture}
                  alt={newsPictureHeading || newsHeading || "সংবাদ ছবি"}
                  loading="eager"
                  decoding="async"
                  draggable={false}
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                />
              </button>

              {(newsPictureHeading || newsPictureCredit) && (
                <figcaption className="mt-2 border-b border-gray-200 px-3 md:px-0 pb-3">
                  {newsPictureHeading && (
                    <p className="text-[13px] leading-6 font-medium text-gray-700">
                      {newsPictureHeading}
                    </p>
                  )}

                  {newsPictureCredit && (
                    <p className="mt-0.5 text-xs text-gray-500">
                      ছবি: {newsPictureCredit}
                    </p>
                  )}
                </figcaption>
              )}
            </figure>
          )}

          {/* ARTICLE BODY */}
          <div className="mt-6 px-3 md:px-0">
            <div className="text-[17px] md:text-[19px] leading-[2] md:leading-[2.05] text-gray-900 text-justify">
              <NewsDetailsDisplay newsDetails={newsDetails} />
            </div>
          </div>
        </article>
      </div>

      {/* FULLSCREEN IMAGE VIEWER */}
      {isFullImage && newsPicture && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="পূর্ণ পর্দায় সংবাদ ছবি"
          onClick={closeImageViewer}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-3 md:p-6"
        >
          <button
            type="button"
            onClick={closeImageViewer}
            aria-label="ছবি বন্ধ করুন"
            className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="size-6" />
          </button>

          <img
            src={newsPicture}
            alt={newsPictureHeading || newsHeading || "সংবাদ ছবি"}
            onClick={(event) => event.stopPropagation()}
            draggable={false}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}
    </>
  );
}
