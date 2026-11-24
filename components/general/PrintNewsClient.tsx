"use client";

import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas-pro";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { isJson } from "@/app/utils/isJson";
import { richTextToPlainText } from "@/app/utils/richTextToPlainText";
import { toHijri } from "hijri-converter";
import Calendar from "date-bengali-revised";

/* -------------------------------------------------------
   BANGLA DATE HELPERS
------------------------------------------------------- */

const bnMonths = [
  "বৈশাখ", "জ্যৈষ্ঠ", "আষাঢ়", "শ্রাবণ",
  "ভাদ্র", "আশ্বিন", "কার্তিক", "অগ্রহায়ণ",
  "পৌষ", "মাঘ", "ফাল্গুন", "চৈত্র",
];

const hijriMonths = [
  "মুহররম", "সফর", "রবিউল আউয়াল", "রবিউস সানি",
  "জমাদিউল আউয়াল", "জমাদিউস সানি", "রজব", "শাবান",
  "রমজান", "শাওয়াল", "জিলক্বদ", "জিলহজ",
];

const gregMonthsBn = [
  "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল",
  "মে", "জুন", "জুলাই", "আগস্ট",
  "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর",
];

const bnWeekdays = [
  "রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার",
  "বৃহস্পতিবার", "শুক্রবার", "শনিবার",
];

const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

const toBanglaNumber = (input: number | string): string =>
  String(input).replace(/\d/g, (digit) => bnDigits[Number(digit)]);

type DateInformation = {
  weekday: string;
  time: string;
  gregorian: string;
  bangla: string;
  hijri: string;
};

function getDateInformation(): DateInformation {
  const now = new Date();
  const bd = new Calendar().fromDate(now);

  const { hy, hm, hd } = toHijri(
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate()
  );

  const hours = now.getHours();

  return {
    weekday: bnWeekdays[now.getDay()],
    time: `${toBanglaNumber(hours % 12 || 12)}:${toBanglaNumber(
      String(now.getMinutes()).padStart(2, "0")
    )} ${hours >= 12 ? "পিএম" : "এএম"}`,
    gregorian: `${toBanglaNumber(now.getDate())} ${
      gregMonthsBn[now.getMonth()]
    } ${toBanglaNumber(now.getFullYear())}`,
    bangla: `${toBanglaNumber(bd.day - 1)} ${
      bnMonths[bd.month - 1]
    } ${toBanglaNumber(bd.year + 1)} বঙ্গাব্দ`,
    hijri: `${toBanglaNumber(hd)} ${
      hijriMonths[hm - 1]
    } ${toBanglaNumber(hy)} হিজরি`,
  };
}

/** First visible Bangla letter (keeps conjuncts intact) */
function splitFirstGrapheme(text: string): [string, string] {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Segmenter = (Intl as any).Segmenter;
    const first: string | undefined = new Segmenter("bn", {
      granularity: "grapheme",
    })
      .segment(text)
      [Symbol.iterator]()
      .next().value?.segment;

    if (first) return [first, text.slice(first.length)];
  } catch {
    // fall back below
  }

  return [text.charAt(0), text.slice(1)];
}

const publishedFormatter = new Intl.DateTimeFormat("bn-BD", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const canvasToBlob = (canvas: HTMLCanvasElement) =>
  new Promise<Blob | null>((resolve) =>
    canvas.toBlob((blob) => resolve(blob), "image/png")
  );

/* -------------------------------------------------------
   DESIGN
------------------------------------------------------- */

const C = {
  ink: "#0b1220",
  inkSoft: "#1b2440",
  paper: "#fffcf6",
  gold: "#e0a526",
  goldDeep: "#b57a00",
  red: "#d62839",
  text: "#1f2433",
  muted: "#6b7280",
};

// One phone-width image. Exported at up to 2x => 1080px wide.
const CARD_WIDTH = 540;
const MAX_SCALE = 2;
const MAX_CANVAS_DIMENSION = 16000;
const MAX_CANVAS_AREA = 16_000_000;

const FONT_FAMILY =
  "'Noto Sans Bengali', 'Noto Serif Bengali', 'Hind Siliguri', system-ui, sans-serif";

/* -------------------------------------------------------
   TYPES
------------------------------------------------------- */

type Quote = {
  speakerInfo: string;
  text: string;
};

type PrintNewsDetailsClientProps = {
  id?: string;
  newsHeading: string;
  newsPicture?: string | null;
  newsPictureHeading?: string | null;
  newsPictureCredit?: string | null;
  newsDetails: string;
  quotes?: Quote[];
  createdAt: Date | string;
  reporterPublicName: string | null;
};

/* -------------------------------------------------------
   COMPONENT
------------------------------------------------------- */

export function PrintNewsDetailsClient({
  id,
  newsHeading,
  newsPicture,
  newsPictureHeading,
  newsPictureCredit,
  newsDetails,
  quotes = [],
  createdAt,
  reporterPublicName,
}: PrintNewsDetailsClientProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  // The card is only mounted while the image is being generated.
  const dates = isLoading ? getDateInformation() : null;

  /* -------------------------------------------------------
     ARTICLE CONTENT
  ------------------------------------------------------- */

  const fullText = (
    isJson(newsDetails)
      ? richTextToPlainText(JSON.parse(newsDetails))
      : newsDetails
  ).trim();

  const [dropCap, restOfBody] = splitFirstGrapheme(fullText);

  const reporter = reporterPublicName || "জাগ্রত বার্তা প্রতিবেদক";
  const published = publishedFormatter.format(new Date(createdAt));
  const articleLink = `jagrotobarta.com${id ? `/newsDetails/${id}` : ""}`;
  const readMinutes = Math.max(
    1,
    Math.ceil(fullText.split(/\s+/).filter(Boolean).length / 180)
  );

  /* -------------------------------------------------------
     GENERATE ONE IMAGE
  ------------------------------------------------------- */

  useEffect(() => {
    if (!isLoading) return;

    let cancelled = false;

    const run = async () => {
      try {
        const element = contentRef.current;
        if (!element) throw new Error("Card not mounted");

        await document.fonts?.ready;

        await Promise.all(
          Array.from(element.querySelectorAll("img")).map((img) =>
            img.decode
              ? img.decode().catch(() => undefined)
              : Promise.resolve(undefined)
          )
        );

        // Let the browser finish layout before measuring.
        await new Promise<void>((resolve) =>
          requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
        );

        const height = Math.max(element.scrollHeight, 1);

        // Keep the canvas inside browser limits for very long articles.
        const scale = Math.max(
          1,
          Math.min(
            MAX_SCALE,
            MAX_CANVAS_DIMENSION / height,
            Math.sqrt(MAX_CANVAS_AREA / (CARD_WIDTH * height))
          )
        );

        const canvas = await html2canvas(element, {
          scale,
          useCORS: true,
          allowTaint: false,
          backgroundColor: null,
          logging: false,
          scrollX: 0,
          scrollY: 0,
        });

        const blob = await canvasToBlob(canvas);

        canvas.width = 0;
        canvas.height = 0;

        if (!blob) throw new Error("Image could not be created");
        if (cancelled) return;

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `jagroto-barta-${id ?? Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        link.remove();

        window.setTimeout(() => URL.revokeObjectURL(url), 10000);

        toast.success("ছবি সফলভাবে ডাউনলোড হয়েছে!");
      } catch (error) {
        console.error("Image generation error:", error);
        if (!cancelled) {
          toast.error("ছবি তৈরি করা যায়নি। আবার চেষ্টা করুন।");
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    void run();

    return () => {
      cancelled = true;
    };
  }, [isLoading, id]);

  const handleDownload = () => {
    if (isLoading) return;
    setIsLoading(true);
  };

  /* -------------------------------------------------------
     RENDER
  ------------------------------------------------------- */

  return (
    <>
      {/* ACTION BUTTON - SAME SIZE AS SOCIAL BUTTONS */}
      <Button
        type="button"
        onClick={handleDownload}
        disabled={isLoading}
        aria-label="Download news as image"
        title="সংবাদ ছবি হিসেবে ডাউনলোড করুন"
        variant="outline"
        className="flex h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white p-2 shadow-sm transition-colors hover:bg-gray-50 hover:border-gray-300"
      >
        {isLoading ? (
          <Loader2 className="size-5 animate-spin text-sky-700" />
        ) : (
          <img
            src="/printtt.png"
            alt=""
            className="size-full object-contain"
          />
        )}
      </Button>

      {/* ---------------------------------------------------
         HIDDEN PHONE-SIZED NEWS CARD (single tall image)
      --------------------------------------------------- */}

      {isLoading && dates && (
        <div
          ref={contentRef}
          aria-hidden="true"
          style={{
            position: "fixed",
            top: 0,
            left: "-10000px",
            width: CARD_WIDTH,
            padding: 18,
            boxSizing: "border-box",
            background: `linear-gradient(160deg, ${C.ink} 0%, #2a1550 55%, #4a1233 100%)`,
            fontFamily: FONT_FAMILY,
            color: C.text,
            zIndex: -1,
          }}
        >
          <div
            style={{
              background: C.paper,
              borderRadius: 26,
              overflow: "hidden",
            }}
          >
            {/* MASTHEAD */}
            <header
              style={{
                background: `linear-gradient(120deg, ${C.ink}, ${C.inkSoft})`,
                padding: "18px 22px 16px",
                borderBottom: `4px solid ${C.gold}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <img
                    src="/logo.png"
                    alt=""
                    crossOrigin="anonymous"
                    style={{ width: 52, height: 52, objectFit: "contain" }}
                  />
                  <div>
                    <div
                      style={{
                        color: "#fff",
                        fontSize: 24,
                        fontWeight: 900,
                        lineHeight: 1.5,
                      }}
                    >
                      জাগ্রত বার্তা
                    </div>
                    <div
                      style={{ color: C.gold, fontSize: 11, lineHeight: 1.6 }}
                    >
                      কারও তাঁবেদারি নয়, সত্যের প্রতি দায়বদ্ধ।
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    textAlign: "right",
                    color: "#cbd5e1",
                    fontSize: 11,
                    lineHeight: 1.7,
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}
                  >
                    {dates.weekday}
                  </div>
                  {dates.time}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginTop: 14,
                }}
              >
                {[
                  { text: dates.gregorian, bg: C.red },
                  { text: dates.bangla, bg: "#16a34a" },
                  { text: dates.hijri, bg: "#2563eb" },
                ].map((chip) => (
                  <span
                    key={chip.text}
                    style={{
                      background: chip.bg,
                      color: "#fff",
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: 999,
                      lineHeight: 1.6,
                    }}
                  >
                    {chip.text}
                  </span>
                ))}
              </div>
            </header>

            {/* HERO: photo + headline (grows with the headline) */}
            <div
              style={{
                position: "relative",
                minHeight: 330,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                background: `linear-gradient(135deg, ${C.inkSoft}, ${C.ink})`,
              }}
            >
              {newsPicture && (
                <img
                  src={newsPicture}
                  alt=""
                  crossOrigin="anonymous"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              )}

              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: newsPicture
                    ? "linear-gradient(to top, rgba(11,18,32,0.97) 0%, rgba(11,18,32,0.78) 45%, rgba(11,18,32,0.05) 100%)"
                    : "transparent",
                }}
              />

              <div style={{ position: "relative", padding: "90px 22px 22px" }}>
                <span
                  style={{
                    display: "inline-block",
                    background: C.red,
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: 999,
                    marginBottom: 12,
                    lineHeight: 1.6,
                  }}
                >
                  ● সর্বশেষ সংবাদ
                </span>

                <h1
                  style={{
                    margin: 0,
                    color: "#fff",
                    fontSize: 27,
                    fontWeight: 900,
                    lineHeight: 1.55,
                    overflowWrap: "anywhere",
                  }}
                >
                  {newsHeading}
                </h1>
              </div>
            </div>

            {/* PICTURE CAPTION */}
            {(newsPictureHeading || newsPictureCredit) && (
              <div
                style={{
                  padding: "9px 22px",
                  background: "#f3efe4",
                  borderLeft: `4px solid ${C.gold}`,
                  fontSize: 11,
                  lineHeight: 1.8,
                  color: C.muted,
                  fontStyle: "italic",
                }}
              >
                {newsPictureHeading}
                {newsPictureCredit && (
                  <span style={{ display: "block", fontWeight: 700 }}>
                    ছবি: {newsPictureCredit}
                  </span>
                )}
              </div>
            )}

            {/* BYLINE */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "18px 22px 4px",
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 999,
                  background: `linear-gradient(135deg, ${C.gold}, ${C.red})`,
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: 19,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {splitFirstGrapheme(reporter)[0]}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: 14, color: C.text }}>
                  {reporter}
                </div>
                <div style={{ fontSize: 11, color: C.muted, lineHeight: 1.7 }}>
                  প্রকাশ: {published}
                </div>
              </div>

              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: C.goldDeep,
                  background: "#fff3d1",
                  padding: "4px 10px",
                  borderRadius: 999,
                  lineHeight: 1.6,
                  flexShrink: 0,
                }}
              >
                পড়তে {toBanglaNumber(readMinutes)} মিনিট
              </div>
            </div>

            {/* FULL ARTICLE */}
            <div style={{ padding: "14px 22px 6px" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 16,
                  lineHeight: 1.95,
                  color: C.text,
                  textAlign: "justify",
                  whiteSpace: "pre-wrap",
                  overflowWrap: "anywhere",
                }}
              >
                <span
                  style={{
                    float: "left",
                    fontSize: 62,
                    lineHeight: "58px",
                    fontWeight: 900,
                    color: C.red,
                    margin: "6px 10px 0 0",
                  }}
                >
                  {dropCap}
                </span>
                {restOfBody}
              </p>
              <div style={{ clear: "both" }} />
            </div>

            {/* QUOTES */}
            {quotes.length > 0 && (
              <section style={{ padding: "14px 22px 6px" }}>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: C.ink,
                    marginBottom: 12,
                    lineHeight: 1.6,
                  }}
                >
                  সংশ্লিষ্ট বক্তব্য
                </div>

                {quotes.map((quote, index) => (
                  <blockquote
                    key={index}
                    style={{
                      position: "relative",
                      margin: "0 0 14px",
                      padding: "16px 18px 12px 20px",
                      background: "linear-gradient(135deg, #fff7e0, #fdecec)",
                      borderRadius: 16,
                      borderLeft: `6px solid ${C.gold}`,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: -4,
                        right: 14,
                        fontSize: 60,
                        lineHeight: 1,
                        color: C.gold,
                        opacity: 0.45,
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      ”
                    </div>

                    <p
                      style={{
                        margin: 0,
                        fontSize: 15,
                        lineHeight: 1.85,
                        fontStyle: "italic",
                        color: C.text,
                        overflowWrap: "anywhere",
                      }}
                    >
                      “{quote.text}”
                    </p>

                    <footer
                      style={{
                        marginTop: 8,
                        textAlign: "right",
                        fontSize: 12,
                        fontWeight: 700,
                        color: C.goldDeep,
                      }}
                    >
                      — {quote.speakerInfo}
                    </footer>
                  </blockquote>
                ))}
              </section>
            )}

            {/* FOOTER */}
            <footer
              style={{
                marginTop: 18,
                padding: "20px 22px",
                background: `linear-gradient(120deg, ${C.ink}, ${C.inkSoft})`,
                borderTop: `4px solid ${C.gold}`,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <img
                  src="/logo.png"
                  alt=""
                  crossOrigin="anonymous"
                  style={{ width: 30, height: 30, objectFit: "contain" }}
                />
                <span
                  style={{
                    color: "#fff",
                    fontWeight: 900,
                    fontSize: 18,
                    lineHeight: 1.6,
                  }}
                >
                  জাগ্রত বার্তা
                </span>
              </div>

              <div
                style={{
                  color: C.gold,
                  fontSize: 12,
                  marginTop: 4,
                  lineHeight: 1.7,
                }}
              >
                সত্যের প্রতি দায়বদ্ধ
              </div>

              <div
                style={{
                  display: "inline-block",
                  marginTop: 12,
                  background: C.gold,
                  color: C.ink,
                  fontSize: 12,
                  fontWeight: 800,
                  padding: "6px 16px",
                  borderRadius: 999,
                  lineHeight: 1.6,
                  overflowWrap: "anywhere",
                }}
              >
                পুরো খবর: {articleLink}
              </div>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}

export default PrintNewsDetailsClient;