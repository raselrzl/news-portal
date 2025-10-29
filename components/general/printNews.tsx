"use client";
import { SquarePlay, LocateIcon, LinkIcon, Copy, Map, MapPin } from "lucide-react";
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
  newsResource,
  newsHeading,
  createdAt,
  quotes = [],
  id,
}: PrintNewsProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const [articleUrl, setArticleUrl] = useState("");

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
          className="w-10 h-10 p-0 overflow-hidden cursor-pointer bg-green-600 shadow border rounded-xl"
          variant="outline"
        >
          <img
            src="/whatsapp.svg"
            alt="WhatsApp"
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </Button>

        <Button
          onClick={handleShareFacebook}
          className="w-10 h-10 p-0 overflow-hidden cursor-pointer bg-blue-950 shadow border rounded-xl"
          variant="outline"
        >
          <img
            src="/fb.webp"
            alt="Facebook"
            width={45}
            height={45}
            className="object-cover w-full h-full"
          />
        </Button>

        <Button
          onClick={handleShareMessenger}
          className="w-10 h-10 p-0 overflow-hidden cursor-pointer bg-blue-800 shadow border rounded-xl"
          variant="outline"
        >
          <img
            src="/messanger.svg"
            alt="Messenger"
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </Button>

        <Button
          onClick={handleCopyLink}
          className="p-0 cursor-pointer w-10 h-10 bg-black shadow border rounded-xl text-white"
          variant="outline"
        >
          <Copy className="h-12 w-12" />
        </Button>
      </div>

      <div className="mb-10 ">
        <div
          id="printable-content"
          ref={contentRef}
          className="w-full rounded shadow mt-6"
        >
          <h1 className="text-3xl font-bold my-4  px-2 md:px-6 pt-6">
            {newsHeading}
          </h1>
          {newsPicture && (
            <div className="relative w-full md:px-6 h-[300px] md:h-[400px] ">
              {/* Image Layer (underneath) */}
              <img
                src={newsPicture}
                alt="Description"
                className="absolute inset-0 w-full h-full object-fill z-0"
              />

              {/* Text Layer (bottom with background) */}
              <div className="absolute bottom-0 left-0 w-full z-10 bg-black/60 text-white px-4 py-2 text-center">
                {newsPictureHeading || newsPictureCredit ? (
                  <>
                    {newsPictureHeading && (
                      <p className="text-sm font-semibold">
                        {newsPictureHeading}
                      </p>
                    )}
                    {newsPictureCredit && (
                      <p className="text-xs">{newsPictureCredit}</p>
                    )}
                  </>
                ) : (
                  <p className="text-sm font-semibold">জাগ্রত প্রতিবেদক</p>
                )}
              </div>
            </div>
          )}

          <div className="whitespace-pre-line text-md mg:text-lg dark:bg-black mt-10">
            <div className="flex flex-row px-3 items-center mb-4 text-xl font-extrabold">
  <MapPin />
  {newsLocation?.trim()
    ? newsCountryBnMap[newsLocation] || newsLocation
    : "জাগ্রতবার্তা"} {" "}প্রতিনিধি
</div>

            <div className="px-3">
              <NewsDetailsDisplay newsDetails={newsDetails} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
