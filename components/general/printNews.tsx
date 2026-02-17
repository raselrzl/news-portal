"use client";
import {
  SquarePlay,
  LocateIcon,
  LinkIcon,
  Copy,
  Map,
  MapPin,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
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
  reporterPublicName: string| null;
  newsResource: string | null;
  newsHeading: string | null;
  id: string | null;
  createdAt: Date;
  quotes?: quote[];
  newsReporter: string | null;
}

const newsCountryBnMap: Record<string, string> = {
  bagerhat: "বাগেরহাট",
  bandarban: "বান্দরবান",
  barguna: "বরগুনা",
  barishal: "বরিশাল",
  bhola: "ভোলা",
  bogura: "বগুড়া",
  brahmanbaria: "ব্রাহ্মণবাড়িয়া",
  chandpur: "চাঁদপুর",
  chapainawabganj: "চাঁপাইনবাবগঞ্জ",
  chattogram: "চট্টগ্রাম",
  chuadanga: "চুয়াডাঙ্গা",
  coxsbazar: "কক্সবাজার",
  cumilla: "কুমিল্লা",
  dhaka: "ঢাকা",
  dinajpur: "দিনাজপুর",
  faridpur: "ফরিদপুর",
  feni: "ফেনী",
  gaibandha: "গাইবান্ধা",
  gazipur: "গাজীপুর",
  gopalganj: "গোপালগঞ্জ",
  habiganj: "হবিগঞ্জ",
  jamalpur: "জামালপুর",
  jashore: "যশোর",
  jhenaidah: "ঝিনাইদহ",
  joypurhat: "জয়পুরহাট",
  khagrachhari: "খাগড়াছড়ি",
  khulna: "খুলনা",
  kishoreganj: "কিশোরগঞ্জ",
  kurigram: "কুড়িগ্রাম",
  kushtia: "কুষ্টিয়া",
  lakshmipur: "লক্ষ্মীপুর",
  lalmonirhat: "লালমনিরহাট",
  madaripur: "মাদারীপুর",
  magura: "মাগুরা",
  manikganj: "মানিকগঞ্জ",
  meherpur: "মেহেরপুর",
  moulvibazar: "মৌলভীবাজার",
  munshiganj: "মুন্সীগঞ্জ",
  mymensingh: "ময়মনসিংহ",
  naogaon: "নওগাঁ",
  narail: "নড়াইল",
  narayanganj: "নারায়ণগঞ্জ",
  narsingdi: "নরসিংদী",
  natore: "নাটোর",
  nawabganj: "নবাবগঞ্জ",
  netrokona: "নেত্রকোণা",
  nilphamari: "নীলফামারী",
  noakhali: "নোয়াখালী",
  pabna: "পাবনা",
  panchagarh: "পঞ্চগড়",
  patuakhali: "পটুয়াখালী",
  pirojpur: "পিরোজপুর",
  rajbari: "রাজবাড়ী",
  rajshahi: "রাজশাহী",
  rangamati: "রাঙামাটি",
  rangpur: "রংপুর",
  satkhira: "সাতক্ষীরা",
  shariatpur: "শরীয়তপুর",
  sherpur: "শেরপুর",
  sirajganj: "সিরাজগঞ্জ",
  sunamganj: "সুনামগঞ্জ",
  sylhet: "সিলেট",
  tangail: "টাঙ্গাইল",
  thakurgaon: "ঠাকুরগাঁও",
};

export default function PrintNews({
  newsPicture,
  newsPictureHeading,
  newsPictureCredit,
  newsLocation,
  newsDetails,
  reporterPublicName,
  newsResource,
  newsHeading,
  createdAt,
  quotes = [],
  newsReporter,
  id,
}: PrintNewsProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [articleUrl, setArticleUrl] = useState("");
  const [isFullImage, setIsFullImage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setArticleUrl(window.location.href);
    }
  }, []);

  const handleShareWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(articleUrl)}`,
      "_blank"
    );
  };

  const handleShareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        articleUrl
      )}`,
      "_blank"
    );
  };

  const handleShareMessenger = () => {
    const url = encodeURIComponent(articleUrl);
    const shareUrl = `https://m.me/?link=${url}`;
    window.open(shareUrl, "_blank");
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      toast("লিংক কপি হয়েছে!");
    } catch {
      toast("লিংক কপি করা যায়নি।");
    }
  };

  return (
    <>
      {/* Share Buttons */}
      <div className="flex justify-end flex-wrap space-x-1 pr-4 mt-6 md:mt-2">
        <PrintNewsDetailsClient
          newsHeading={newsHeading ?? ""}
          newsPicture={newsPicture ?? null}
          newsPictureHeading={newsPictureHeading ?? null}
          newsDetails={newsDetails}
          createdAt={createdAt}
          quotes={quotes}
          reporterPublicName={reporterPublicName ?? "জাগ্রত বার্তা প্রতিবেদক"}
        />
        <Button
          onClick={handleShareWhatsApp}
          className="w-10 h-10 p-0 cursor-pointer border-none shadow-none"
          variant="outline"
        >
          <img
            src="/whatsapp.svg"
            alt="WhatsApp"
            className="object-cover w-full h-full"
          />
        </Button>

        <Button
          onClick={handleShareFacebook}
          className="w-10 h-10 p-0 cursor-pointer border-none shadow-none"
          variant="outline"
        >
          <img
            src="/fb.webp"
            alt="Facebook"
            className="object-cover w-full h-full"
          />
        </Button>

        <Button
          onClick={handleShareMessenger}
          className="w-10 h-10 p-0 cursor-pointer border-none shadow-none"
          variant="outline"
        >
          <img
            src="/messanger.svg"
            alt="Messenger"
            className="object-cover w-full h-full"
          />
        </Button>

        <Button
          onClick={handleCopyLink}
          className="w-9 h-9 p-0 cursor-pointer border-none shadow-none"
          variant="outline"
        >
          <img
            src="/copylink.png"
            alt="copyimage"
            className="object-cover w-full h-full"
          />
        </Button>
      </div>

      {/* Main Content */}
      <div className="mb-10">
        <div
          id="printable-content"
          ref={contentRef}
          className="w-full rounded shadow mt-6"
        >
          <h1 className="text-3xl font-bold my-4 px-2 md:px-6 pt-6">
            {newsHeading}
          </h1>

          {/* Image Section */}
          {newsPicture && (
            <>
              <div
                className="relative w-full md:px-6 h-[280px] md:h-[550px] cursor-pointer"
                onClick={() => setIsFullImage(true)}
              >
                <img
                  src={newsPicture}
                  alt="Description"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Text Layer */}
                <div className="absolute bottom-0 left-0 w-full z-10 bg-black/20 text-white text-[10px] px-4 py-2 text-center">
                  {newsPictureHeading || newsPictureCredit ? (
                    <>
                      {newsPictureHeading && (
                        <p className="text-[10px] font-semibold">
                          {newsPictureHeading}
                        </p>
                      )}
                      {newsPictureCredit && (
                        <p className="text-[8px]">{newsPictureCredit}</p>
                      )}
                    </>
                  ) : (
                    <p className="text-[8px] font-semibold">জাগ্রত বার্তা</p>
                  )}
                </div>
              </div>

              {/* Fullscreen Image Viewer */}
              {isFullImage && (
                <div className="fixed inset-0 bg-black/90 z-9999 flex items-center justify-center p-4">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsFullImage(false)}
                    className="absolute top-4 right-4 text-white p-2 bg-black/50 rounded-full hover:bg-black/70"
                  >
                    ✕
                  </button>

                  <img
                    src={newsPicture}
                    alt="Fullscreen Image"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}
            </>
          )}

          {/* News Details */}
          <div className="whitespace-pre-line text-md mg:text-lg dark:bg-black mt-10">
            {/* <div className="flex flex-row px-3 items-center mb-4 text-xl font-extrabold">
              <MapPin />
              {newsLocation?.trim()
                ? newsCountryBnMap[newsLocation] || newsLocation
                : "জাগ্রতবার্তা"}{" "}
              প্রতিবেদক
            </div> */}

            <div className="px-3">
              <NewsDetailsDisplay newsDetails={newsDetails} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
