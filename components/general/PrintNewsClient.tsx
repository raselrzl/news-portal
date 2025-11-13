"use client";
import React, { useRef, useState } from "react";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas-pro";
import { Download, Loader2 } from "lucide-react";
import Image from "next/image";
import { isJson } from "@/app/utils/isJson";
import { richTextToPlainText } from "@/app/utils/richTextToPlainText";

type Quote = {
  speakerInfo: string;
  text: string;
};

type PrintNewsDetailsClientProps = {
  newsHeading: string;
  newsPicture?: string | null;
  newsPictureHeading?: string | null;
  newsDetails: string;
  createdAt: Date;
  quotes?: Quote[];
};

function splitTextByLength(text: string, firstPartLength: number = 350) {
  return {
    firstPart: text.slice(0, firstPartLength),
    remainingPart: text.slice(firstPartLength),
  };
}

export function PrintNewsDetailsClient({
  newsHeading,
  newsPicture,
  newsPictureHeading,
  newsDetails,
  createdAt,
  quotes = [],
}: PrintNewsDetailsClientProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    if (!contentRef.current) return;
    setIsLoading(true);

    const canvas = await html2canvas(contentRef.current, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);

    // Open the PDF in a new browser tab instead of downloading
    const pdfBlob = pdf.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank");

    setIsLoading(false);
  };

  // Function to format numbers to Bengali digits
  const toBn = (num: number) =>
    num
      .toString()
      .split("")
      .map((d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)])
      .join("");

  // Helper arrays for calendars
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

  const day = toBn(createdAt.getDate());
  const hour = toBn(createdAt.getHours());
  const minute = toBn(createdAt.getMinutes());

  const gregMonth = gregMonthsBn[createdAt.getMonth()];
  const banglaMonth = bnMonths[createdAt.getMonth()];
  const hijriMonth = hijriMonths[createdAt.getMonth()];

  const gregYear = toBn(createdAt.getFullYear());
  const banglaYear = toBn(createdAt.getFullYear() - 593);
  const hijriYear = toBn(createdAt.getFullYear() - 622);

  const bnWeekdays = [
  "রবিবার",
  "সোমবার",
  "মঙ্গলবার",
  "বুধবার",
  "বৃহস্পতিবার",
  "শুক্রবার",
  "শনিবার",
];

// Get day name
const weekdayBn = bnWeekdays[createdAt.getDay()];

// 12-hour format
const hour12 = createdAt.getHours() % 12 || 12;
const ampmBn = createdAt.getHours() >= 12 ? "পিএম" : "এএম";
const hourBn = toBn(hour12);
const minuteBn = toBn(createdAt.getMinutes());

  return (
    <>
      <Button
        onClick={handleDownload}
        className="overflow-hidden w-10 h-10 bg-black shadow border rounded-xl cursor-pointer"
        variant="outline"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="animate-spin w-5 h-5 text-primary" />
        ) : (
          <Download className="h-14 w-14 text-white hover:text-black" />
        )}
      </Button>
      <div
        ref={contentRef}
        style={{
          position: "absolute",
          top: "-9999px",
          left: "-9999px",
          backgroundColor: "#ffffff",
          color: "#000000",
          maxWidth: "450px",
          width: "100%",
          minHeight: "600px",
          padding: "16px",
          boxSizing: "border-box",
          fontFamily: "'Helvetica', 'Arial', sans-serif",
          lineHeight: 1.5,
          margin: "0 auto",
        }}
      >
        <header
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "8px 12px",
            marginBottom: "16px",
            background: "#000000",
            color: "#ffffff",
            borderRadius: "2px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
            position: "relative",
          }}
        >
          {/* Top Row: Logo & Tagline */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <img
                  src="/lg1.png"
                  alt="Logo"
                  style={{ height: "40px", objectFit: "contain" }}
                  width={120}
                  height={30}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "normal",
                    color: "#f0f0f0",
                  }}
                >
                  নির্ভীক সংবাদ, নির্ভরযোগ্য সূত্র।
                </span>
              </div>
              <a
                href="www.jagrotobarta.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "8px",
                  color: "#00bfff",
                  textDecoration: "underline",
                  paddingLeft: "9px",
                }}
              >
                www.jagrotobarta.com
              </a>
            </div>

            {/* Top-right time */}
           <div
  style={{
    position: "absolute",
    top: "8px",
    right: "12px",
    background: "#000",
    color: "#fff",
    padding: "2px 6px",
    borderRadius: "6px",
    fontSize: "10px",
    textAlign: "center",
  }}
>
  {weekdayBn} {hourBn}:{minuteBn} {ampmBn}
</div>
          </div>

          {/* Bottom Row: All dates in one line (without time) */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "6px",
              marginTop: "6px",
              flexWrap: "nowrap",
              fontSize: "10px",
            }}
          >
            <span
              style={{
                background: "#ff4d4f",
                padding: "2px 6px",
                borderRadius: "6px",
              }}
            >
              {day} {gregMonth} {gregYear}
            </span>
            <span
              style={{
                background: "#52c41a",
                padding: "2px 6px",
                borderRadius: "6px",
              }}
            >
              {day} {banglaMonth} {banglaYear}
            </span>
            <span
              style={{
                background: "#1890ff",
                padding: "2px 6px",
                borderRadius: "6px",
              }}
            >
              {day} {hijriMonth} {hijriYear} হিজরী
            </span>
          </div>

          {/* Tagline at bottom */}
          <div
            style={{
              fontStyle: "italic",
              marginTop: "4px",
              color: "#ffcc00",
              fontSize: "10px",
              textAlign: "right",
            }}
          >
            নিখুঁত খবর, আপনার বিশ্বাসে।
          </div>
        </header>

        <article
          style={{ flexGrow: 1, overflow: "auto", paddingBottom: "8px" }}
          className="border-1 p-4"
        >
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "8px",
              borderBottom: "1px solid gray",
            }}
          >
            {newsHeading}
          </h1>

          <div style={{ overflow: "hidden", marginBottom: "16px" }}>
            {newsPicture && (
              <img
                src={newsPicture}
                alt={newsPictureHeading || "News Image"}
                style={{
                  float: "left",
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  marginRight: "16px",
                  marginBottom: "16px",
                }}
              />
            )}

            {(() => {
              const fullText = isJson(newsDetails)
                ? richTextToPlainText(JSON.parse(newsDetails))
                : newsDetails;

              const { firstPart, remainingPart } = splitTextByLength(
                fullText,
                350
              );

              return (
                <>
                  <p className="text-[12px] leading-[1.3] text-justify mb-4 whitespace-pre-line">
                    {firstPart}
                  </p>

                  <div
                    style={{
                      clear: "both",
                      columnCount: 3,
                      columnGap: "1rem",
                      fontSize: "12px",
                      lineHeight: 1.3,
                      textAlign: "justify",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {remainingPart}
                  </div>
                </>
              );
            })()}
          </div>
        </article>

        {quotes.length > 0 && (
          <section style={{ paddingTop: "16px" }}>
            {quotes.map((quote, index) => (
              <blockquote
                key={index}
                style={{
                  borderLeft: "4px solid #D18700",
                  backgroundColor: "#f2f2f2",
                  padding: "8px",
                  borderRadius: "12px",
                  marginBottom: "16px",
                  fontStyle: "italic",
                  position: "relative",
                  minHeight: "75px",
                }}
              >
                <p style={{ marginBottom: "24px" }}>"{quote.text}"</p>
                <footer
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    right: "16px",
                    fontSize: "10px",
                    color: "#555",
                  }}
                >
                  — {quote.speakerInfo}
                </footer>
              </blockquote>
            ))}
          </section>
        )}
        <a
          href="https://jagrotobarta.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "11px",
            color: "#000000",
            textDecoration: "underline",
          }}
        >
          www.jagrotobarta.com
        </a>
      </div>
    </>
  );
}
