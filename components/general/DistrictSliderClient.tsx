"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Map English -> Bangla
const districtsMap: Record<string, string> = {
  dhaka: "ঢাকা",
  gazipur: "গাজীপুর",
  narayanganj: "নারায়ণগঞ্জ",
  narsingdi: "নরসিংদী",
  kishoreganj: "কিশোরগঞ্জ",
  manikganj: "মানিকগঞ্জ",
  munshiganj: "মুন্সীগঞ্জ",
  rajbari: "রাজবাড়ী",
  faridpur: "ফরিদপুর",
  gopalganj: "গোপালগঞ্জ",
  madaripur: "মাদারীপুর",
  shariatpur: "শরীয়তপুর",
  tangail: "টাঙ্গাইল",
  jamalpur: "জামালপুর",
  sherpur: "শেরপুর",
  mymensingh: "ময়মনসিংহ",
  netrokona: "নেত্রকোনা",
  chattogram: "চট্টগ্রাম",
  coxsbazar: "কক্সবাজার",
  khagrachhari: "খাগড়াছড়ি",
  rangamati: "রাঙ্গামাটি",
  banshkhali: "বাঁশখালী",
  noakhali: "নোয়াখালী",
  feni: "ফেনী",
  lakshmipur: "লক্ষ্মীপুর",
  chandpur: "চাঁদপুর",
  cumilla: "কুমিল্লা",
  brahmanbaria: "ব্রাহ্মণবাড়িয়া",
  sylhet: "সিলেট",
  moulvibazar: "মৌলভীবাজার",
  habiganj: "হবিগঞ্জ",
  sunamganj: "সুনামগঞ্জ",
  barishal: "বরিশাল",
  patuakhali: "পটুয়াখালী",
  bhola: "ভোলা",
  borguna: "বরগুনা",
  pirojpur: "পিরোজপুর",
  jhalokathi: "ঝালকাঠি",
  chapainawabganj: "চাঁপাইনবাবগঞ্জ",
  rajshahi: "রাজশাহী",
  natore: "নাটোর",
  naogaon: "নওগাঁ",
  joypurhat: "জয়পুরহাট",
  bogura: "বগুড়া",
  sirajganj: "সিরাজগঞ্জ",
  pabna: "পাবনা",
  kurigram: "কুড়িগ্রাম",
  lalmonirhat: "লালমনিরহাট",
  rangpur: "রংপুর",
  nilphamari: "নীলফামারী",
  gaibandha: "গাইবান্ধা",
  thakurgaon: "ঠাকুরগাঁও",
  dinajpur: "দিনাজপুর",
  panchagarh: "পঞ্চগড়",
  khulna: "খুলনা",
  bagerhat: "বাগেরহাট",
  satkhira: "সাতক্ষীরা",
  jashore: "যশোর",
  jhinaidah: "ঝিনাইদহ",
  chuadanga: "চুয়াডাঙ্গা",
  meherpur: "মেহেরপুর",
  magura: "মাগুরা",
  narail: "নড়াইল",
  kushtia: "কুষ্টিয়া",
};

export default function DistrictSliderClient({ articles }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(1);
  const total = articles.length;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = 280; // match width below
      const index = Math.round(scrollLeft / cardWidth) + 1;
      setCurrent(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="px-3 py-6">
      {/* Header + Counter */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold tracking-tight"></h2>
        <div className="text-sm text-muted-foreground font-medium">
          {current} / {total}
        </div>
      </div>

      {/* Slider */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
      >
        {articles.map((article: any) => (
          <Link
            key={article.id}
            href={`/newsDetails/${article.id}`}
            className="min-w-[260px] max-w-[260px] snap-start group"
          >
            <div className="relative rounded-xs overflow-hidden shadow-lg">
              <img
                src={article.newsPicture}
                alt={article.newsPictureHeading || article.newsHeading}
                className="w-full h-90 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

              {/* District badge in Bangla */}
              <div className="absolute top-3 left-3 bg-green-700 text-white text-xs px-3 py-1 rounded-full backdrop-blur">
                {districtsMap[article.district] || article.district}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-base font-semibold leading-snug line-clamp-4 group-hover:underline">
                  {article.newsHeading}
                </h3>

                <p className="text-xs opacity-80 mt-1">
                  {article.reporterPublicName || "জাগ্রত বার্তা প্রতিনিধি"}
                </p>

                <div className="flex items-center gap-1 text-xs opacity-80 mt-2">
                  <Calendar size={13} />
                  {new Date(article.createdAt).toLocaleDateString("bn-BD", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}