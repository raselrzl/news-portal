"use client";
import React, { useRef, useState, useEffect } from "react";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas-pro";
import { Loader2 } from "lucide-react";
import { isJson } from "@/app/utils/isJson";
import { richTextToPlainText } from "@/app/utils/richTextToPlainText";
import { toHijri } from "hijri-converter";
import Calendar from "date-bengali-revised";

// Bangla helpers
const bnMonths = [
  "বৈশাখ",
  "জ্যৈষ্ঠ",
  "আষাঢ়",
  "শ্রাবণ",
  "ভাদ্র",
  "আশ্বিন",
  "কার্তিক",
  "অগ্রহায়ণ",
  "পৌষ",
  "মাঘ",
  "ফাল্গুন",
  "চৈত্র",
];
const hijriMonths = [
  "মুহররম",
  "সফর",
  "রবিউল আউয়াল",
  "রবিউস সানি",
  "জমাদিউল আউয়াল",
  "জমাদিউস সানি",
  "রজব",
  "শাবান",
  "রমজান",
  "শাওয়াল",
  "জিলক্বদ",
  "জিলহজ",
];
const gregMonthsBn = [
  "জানুয়ারি",
  "ফেব্রুয়ারি",
  "মার্চ",
  "এপ্রিল",
  "মে",
  "জুন",
  "জুলাই",
  "আগস্ট",
  "সেপ্টেম্বর",
  "অক্টোবর",
  "নভেম্বর",
  "ডিসেম্বর",
];
const bnWeekdays = [
  "রবিবার",
  "সোমবার",
  "মঙ্গলবার",
  "বুধবার",
  "বৃহস্পতিবার",
  "শুক্রবার",
  "শনিবার",
];

// ✅ Full Bangla number conversion
const toBanglaNumber = (input: number | string): string => {
  const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return input
    .toString()
    .split("")
    .map((ch) => (/\d/.test(ch) ? bnDigits[Number(ch)] : ch))
    .join("");
};

type Quote = { speakerInfo: string; text: string };
type PrintNewsDetailsClientProps = {
  newsHeading: string;
  newsPicture?: string | null;
  newsPictureHeading?: string | null;
  newsDetails: string;
  quotes?: Quote[];
  createdAt: Date;
  newsReporter: string | null;
};

function splitTextByLength(text: string, first: number = 350) {
  return { firstPart: text.slice(0, first), remainingPart: text.slice(first) };
}

export function PrintNewsDetailsClient({
  newsHeading,
  newsPicture,
  newsPictureHeading,
  newsDetails,
  quotes = [],
  newsReporter,
}: PrintNewsDetailsClientProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [currentTime, setCurrentTime] = useState({
    hour: "০",
    minute: "০০",
    ampm: "এএম",
    weekday: "রবিবার",
    day: "০",
    month: "জানুয়ারি",
    year: "২০২৫",
    banglaDay: "০",
    banglaMonth: "বৈশাখ",
    banglaYear: "১৪৩২",
    hijriDay: "০",
    hijriMonth: "মুহররম",
    hijriYear: "১৪৪৬",
  });

  // ⏰ Update time every minute
  useEffect(() => {
    const cal = new Calendar();

    const updateAll = () => {
      const now = new Date();
      const bd = cal.fromDate(now);
      const { hy, hm, hd } = toHijri(
        now.getFullYear(),
        now.getMonth() + 1,
        now.getDate()
      );

      setCurrentTime({
        hour: toBanglaNumber(now.getHours() % 12 || 12),
        minute: toBanglaNumber(now.getMinutes()),
        ampm: now.getHours() >= 12 ? "পিএম" : "এএম",
        weekday: bnWeekdays[now.getDay()],
        day: toBanglaNumber(now.getDate()),
        month: gregMonthsBn[now.getMonth()],
        year: toBanglaNumber(now.getFullYear()),
        banglaDay: toBanglaNumber(bd.day - 1),
        banglaMonth: bnMonths[bd.month - 1],
        banglaYear: toBanglaNumber(bd.year + 1),
        hijriDay: toBanglaNumber(hd),
        hijriMonth: hijriMonths[hm - 1],
        hijriYear: toBanglaNumber(hy),
      });
    };

    updateAll();
    const timer = setInterval(updateAll, 60000);
    return () => clearInterval(timer);
  }, []);

  // 📄 PDF Download
  const handleDownload = async () => {
    if (!contentRef.current) return;
    setIsLoading(true);

    const canvas = await html2canvas(contentRef.current, {
      scale: 3,
      useCORS: true,
    });

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(
      canvas.toDataURL("image/png"),
      "PNG",
      0,
      0,
      canvas.width,
      canvas.height
    );
    window.open(URL.createObjectURL(pdf.output("blob")), "_blank");

    setIsLoading(false);
  };

  const fullText = isJson(newsDetails)
    ? richTextToPlainText(JSON.parse(newsDetails))
    : newsDetails;

  const { firstPart, remainingPart } = splitTextByLength(fullText, 490);

  return (
    <>
      <Button
        onClick={handleDownload}
        className="overflow-hidden h-11 w-16 shadow-none border-none cursor-pointer hover:bg-none"
        variant="outline"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="animate-spin w-5 h-5 text-primary" />
        ) : (
          <img
            src="/printtt.png"
            alt="WhatsApp"
            className="object-cover w-full h-full"
          />
        )}
      </Button>

      {/* PRINT AREA */}
      <div
        ref={contentRef}
        style={{
          position: "absolute",
          top: "-9999px",
          left: "-9999px",
          width: "600px",
          maxWidth: "600px",
          background: "#fff",
          padding: 16,
        }}
      >
        {/* HEADER (unchanged design) */}
        <header
          style={{
            padding: 12,
            marginBottom: 16,
            border: "1px solid #ccc",
            boxShadow: "0 2px 4px #0002",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <img src="/logo.png" style={{ height: 40 }} />
              <span style={{ fontSize: 12 }}>
                “কারও তাঁবেদারি নয়, সত্যের প্রতি দায়বদ্ধ।”
              </span>
            </div>

            <div style={{ fontSize: 10 }}>
              {currentTime.weekday} {currentTime.hour}:{currentTime.minute}{" "}
              {currentTime.ampm}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 6,
              marginTop: 6,
              fontSize: 10,
            }}
          >
            <span style={{ background: "#ff4d4f", padding: "2px 6px" }}>
              {currentTime.day} {currentTime.month} {currentTime.year}
            </span>
            <span style={{ background: "#52c41a", padding: "2px 6px" }}>
              {currentTime.banglaDay} {currentTime.banglaMonth}{" "}
              {currentTime.banglaYear} বঙ্গাব্দ
            </span>
            <span style={{ background: "#1890ff", padding: "2px 6px" }}>
              {currentTime.hijriDay} {currentTime.hijriMonth}{" "}
              {currentTime.hijriYear} হিজরী
            </span>
          </div>
        </header>

        {/* ARTICLE */}
        <article style={{ border: "1px solid #ddd", padding: 12 }}>
          <div style={{ fontSize: 14, marginBottom: 6 }}>
            প্রতিবেদক:{" "}
            {newsReporter === "Mamun"
              ? "তারফদার মামুন"
              : newsReporter === "Rasel"
              ? "জাগ্রত বার্তা প্রতিবেদক"
              : newsReporter || "জাগ্রত বার্তা প্রতিবেদক"}
          </div>

          <h1 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>
            {newsHeading}
          </h1>

          <div style={{ overflow: "hidden", marginBottom: 16 }}>
            {newsPicture && (
              <img
                src={newsPicture}
                alt={newsPictureHeading || "News Image"}
                style={{
                  float: "left",
                  width: 180,
                  maxHeight: 160,
                  objectFit: "contain",
                  marginRight: 16,
                  marginBottom: 16,
                }}
              />
            )}

            <p style={{ fontSize: 12, textAlign: "justify" }}>{firstPart}</p>

            <div
              style={{
                clear: "both",
                columnCount: 3,
                columnGap: "1rem",
                fontSize: 12,
                lineHeight: 1.4,
                textAlign: "justify",
              }}
            >
              {remainingPart}
            </div>
          </div>

          <a href="https://jagrotobarta.com" style={{ fontSize: 12 }}>
            www.jagrotobarta.com
          </a>
        </article>

        {/* QUOTES */}
        {quotes.length > 0 && (
          <section style={{ marginTop: 16 }}>
            {quotes.map((q, i) => (
              <blockquote
                key={i}
                style={{
                  borderLeft: "4px solid #d18700",
                  padding: 8,
                  background: "#f4f4f4",
                  marginBottom: 12,
                }}
              >
                <p>"{q.text}"</p>
                <footer style={{ textAlign: "right", fontSize: 10 }}>
                  — {q.speakerInfo}
                </footer>
              </blockquote>
            ))}
          </section>
        )}
      </div>
    </>
  );
}
