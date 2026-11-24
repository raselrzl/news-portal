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
    } ${toBanglaNumber(bd.year + 1)}`,
    hijri: `${toBanglaNumber(hd)} ${
      hijriMonths[hm - 1]
    } ${toBanglaNumber(hy)}`,
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
   IMAGE LOADING
   Images are converted to data URLs BEFORE the card is
   drawn, so cross-origin (CORS) problems can never leave
   the header / hero empty.
------------------------------------------------------- */

async function fetchAsDataUrl(url: string): Promise<string | null> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      mode: "cors",
      credentials: "omit",
    });

    if (!response.ok) return null;

    const blob = await response.blob();
    if (!blob.type.startsWith("image/")) return null;

    return await new Promise<string | null>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () =>
        resolve(typeof reader.result === "string" ? reader.result : null);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  } finally {
    window.clearTimeout(timer);
  }
}

async function loadImageAsDataUrl(src: string): Promise<string | null> {
  if (src.startsWith("data:")) return src;

  const candidates = [src];

  try {
    const isRemote = new URL(src, window.location.href).origin !== window.location.origin;

    // Same-origin Next.js image proxy: works even when the host has no CORS headers
    // (the host must be listed in next.config images.remotePatterns).
    if (isRemote) {
      candidates.push(`/_next/image?url=${encodeURIComponent(src)}&w=1080&q=85`);
    }
  } catch {
    // ignore malformed URLs
  }

  for (const candidate of candidates) {
    const dataUrl = await fetchAsDataUrl(candidate);
    if (dataUrl) return dataUrl;
  }

  return null;
}

/* -------------------------------------------------------
   DESIGN
------------------------------------------------------- */

const C = {
  ink: "#0a1020",
  inkSoft: "#16203d",
  paper: "#fffdf8",
  gold: "#e6a928",
  goldLight: "#f7d27a",
  goldDeep: "#b57a00",
  red: "#d62839",
  text: "#1c2132",
  muted: "#6b7280",
};

// One phone-width image. Exported at up to 2x => 1080px wide.
const CARD_WIDTH = 540;
const MAX_SCALE = 2;
const MAX_CANVAS_DIMENSION = 16000;
const MAX_CANVAS_AREA = 16_000_000;
const TOAST_ID = "news-image-export";

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

type Stage = "idle" | "preparing" | "rendering";

type Prepared = {
  photo: string | null;
  logo: string | null;
  dates: DateInformation;
};

/* -------------------------------------------------------
   SMALL DESIGN PIECES
------------------------------------------------------- */

function Dot({ color, size = 8 }: { color: string; size?: number }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: 999,
        background: color,
      }}
    />
  );
}

function Ornament() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "0 22px",
      }}
    >
      <div
        style={{
          flex: 1,
          height: 2,
          background: `linear-gradient(to right, transparent, ${C.gold})`,
        }}
      />
      <div
        style={{
          width: 9,
          height: 9,
          background: C.red,
          transform: "rotate(45deg)",
        }}
      />
      <div
        style={{
          flex: 1,
          height: 2,
          background: `linear-gradient(to left, transparent, ${C.gold})`,
        }}
      />
    </div>
  );
}

function LogoBadge({ src, size }: { src: string | null; size: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 999,
        background: "#ffffff",
        border: `3px solid ${C.gold}`,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      {src ? (
        <img
          src={src}
          alt=""
          style={{
            width: "78%",
            height: "78%",
            objectFit: "contain",
            display: "block",
          }}
        />
      ) : (
        <span
          style={{
            color: C.ink,
            fontSize: size * 0.42,
            fontWeight: 800,
            lineHeight: 1,
          }}
        >
          জা
        </span>
      )}
    </div>
  );
}

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
  const [stage, setStage] = useState<Stage>("idle");
  const [prepared, setPrepared] = useState<Prepared | null>(null);

  const isLoading = stage !== "idle";

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
     STEP 1: PREPARE IMAGES + DATES
  ------------------------------------------------------- */

  useEffect(() => {
    if (stage !== "preparing") return;

    let cancelled = false;

    const prepare = async () => {
      const [photo, logo] = await Promise.all([
        newsPicture ? loadImageAsDataUrl(newsPicture) : Promise.resolve(null),
        loadImageAsDataUrl("/logo.png"),
      ]);

      if (cancelled) return;

      setPrepared({ photo, logo, dates: getDateInformation() });
      setStage("rendering");
    };

    void prepare();

    return () => {
      cancelled = true;
    };
  }, [stage, newsPicture]);

  /* -------------------------------------------------------
     STEP 2: DRAW THE CARD AND DOWNLOAD ONE PNG
  ------------------------------------------------------- */

  useEffect(() => {
    if (stage !== "rendering") return;

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

        if (cancelled) {
          toast.dismiss(TOAST_ID);
          return;
        }

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `jagroto-barta-${id ?? Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        link.remove();

        window.setTimeout(() => URL.revokeObjectURL(url), 10000);

        toast.success("ছবি সফলভাবে ডাউনলোড হয়েছে!", { id: TOAST_ID });
      } catch (error) {
        console.error("Image generation error:", error);
        toast.error("ছবি তৈরি করা যায়নি। আবার চেষ্টা করুন।", {
          id: TOAST_ID,
        });
      } finally {
        if (!cancelled) {
          setStage("idle");
          setPrepared(null);
        }
      }
    };

    void run();

    return () => {
      cancelled = true;
    };
  }, [stage, id]);

  const handleDownload = () => {
    if (isLoading) return;
    toast.loading("ছবি তৈরি হচ্ছে…", { id: TOAST_ID });
    setStage("preparing");
  };

  /* -------------------------------------------------------
     RENDER
  ------------------------------------------------------- */

  const dates = prepared?.dates;
  const hasPhoto = Boolean(prepared?.photo);

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
         The font is inherited from your site.
      --------------------------------------------------- */}

      {stage === "rendering" && prepared && dates && (
        <div
          ref={contentRef}
          aria-hidden="true"
          style={{
            position: "fixed",
            top: 0,
            left: "-10000px",
            width: CARD_WIDTH,
            padding: 20,
            boxSizing: "border-box",
            background: `linear-gradient(160deg, ${C.ink} 0%, #26144d 55%, #4a1233 100%)`,
            color: C.text,
            zIndex: -1,
            overflow: "hidden",
          }}
        >
          {/* background glows */}
          <div
            style={{
              position: "absolute",
              top: -120,
              left: -120,
              width: 380,
              height: 380,
              background:
                "radial-gradient(circle, rgba(230,169,40,0.35), transparent 65%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -140,
              right: -140,
              width: 420,
              height: 420,
              background:
                "radial-gradient(circle, rgba(214,40,57,0.4), transparent 65%)",
            }}
          />

          {/* PAPER CARD */}
          <div
            style={{
              position: "relative",
              background: C.paper,
              borderRadius: 28,
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
            }}
          >
            {/* ================= MASTHEAD ================= */}
            <header
              style={{
                position: "relative",
                padding: "26px 22px 20px",
                background: `linear-gradient(135deg, ${C.ink} 0%, ${C.inkSoft} 100%)`,
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -90,
                  right: -70,
                  width: 300,
                  height: 300,
                  background:
                    "radial-gradient(circle, rgba(230,169,40,0.38), transparent 62%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -110,
                  left: -80,
                  width: 280,
                  height: 280,
                  background:
                    "radial-gradient(circle, rgba(214,40,57,0.3), transparent 62%)",
                }}
              />

              <div style={{ position: "relative" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <LogoBadge src={prepared.logo} size={68} />

                  <div style={{ textAlign: "left" }}>
                    <div
                      style={{
                        color: "#ffffff",
                        fontSize: 36,
                        fontWeight: 800,
                        lineHeight: 1.45,
                      }}
                    >
                      জাগ্রত বার্তা
                    </div>
                    <div
                      style={{
                        color: C.goldLight,
                        fontSize: 11.5,
                        lineHeight: 1.7,
                      }}
                    >
                      কারও তাঁবেদারি নয়, সত্যের প্রতি দায়বদ্ধ।
                    </div>
                  </div>
                </div>

                {/* weekday + time pill */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    marginTop: 16,
                    padding: "5px 16px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.22)",
                    color: "#ffffff",
                    fontSize: 12,
                    fontWeight: 700,
                    lineHeight: 1.7,
                  }}
                >
                  <Dot color={C.red} size={7} />
                  <span>{dates.weekday}</span>
                  <span style={{ color: C.gold }}>|</span>
                  <span>{dates.time}</span>
                </div>

                {/* triple calendar */}
                <div
                  style={{
                    display: "flex",
                    marginTop: 14,
                    borderRadius: 14,
                    overflow: "hidden",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.16)",
                  }}
                >
                  {[
                    { label: "ইংরেজি", value: dates.gregorian, color: C.red },
                    { label: "বঙ্গাব্দ", value: dates.bangla, color: "#22c55e" },
                    { label: "হিজরি", value: dates.hijri, color: "#3b82f6" },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      style={{
                        flex: 1,
                        padding: "9px 4px 8px",
                        borderBottom: `3px solid ${item.color}`,
                        borderLeft:
                          index > 0
                            ? "1px solid rgba(255,255,255,0.14)"
                            : "none",
                      }}
                    >
                      <div
                        style={{
                          color: C.goldLight,
                          fontSize: 10,
                          fontWeight: 700,
                          lineHeight: 1.7,
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          color: "#ffffff",
                          fontSize: 11.5,
                          fontWeight: 700,
                          lineHeight: 1.6,
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </header>

            {/* gold rule */}
            <div
              style={{
                height: 5,
                background: `linear-gradient(to right, ${C.goldDeep}, ${C.gold}, ${C.goldLight}, ${C.gold}, ${C.goldDeep})`,
              }}
            />

            {/* ================= HERO ================= */}
            <div
              style={{
                position: "relative",
                minHeight: hasPhoto ? 400 : 250,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                overflow: "hidden",
                background: `linear-gradient(135deg, ${C.inkSoft}, #3a1148)`,
              }}
            >
              {prepared.photo ? (
                <img
                  src={prepared.photo}
                  alt=""
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 30%",
                  }}
                />
              ) : (
                <>
                  <div
                    style={{
                      position: "absolute",
                      top: -60,
                      right: -40,
                      width: 260,
                      height: 260,
                      background:
                        "radial-gradient(circle, rgba(230,169,40,0.45), transparent 65%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 6,
                      left: 18,
                      fontSize: 150,
                      lineHeight: 1,
                      color: "rgba(255,255,255,0.08)",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    “
                  </div>
                </>
              )}

              {/* scrim */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: hasPhoto
                    ? "linear-gradient(to top, rgba(10,16,32,0.97) 0%, rgba(10,16,32,0.8) 42%, rgba(10,16,32,0.08) 100%)"
                    : "linear-gradient(to top, rgba(10,16,32,0.35), rgba(10,16,32,0))",
                }}
              />

              <div
                style={{
                  position: "relative",
                  padding: hasPhoto ? "110px 22px 24px" : "50px 22px 24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 14,
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      background: C.red,
                      color: "#ffffff",
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: 999,
                      lineHeight: 1.6,
                    }}
                  >
                    <Dot color="#ffffff" size={6} />
                    সর্বশেষ সংবাদ
                  </span>

                  <span
                    style={{
                      background: "rgba(255,255,255,0.18)",
                      color: "#ffffff",
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: 999,
                      lineHeight: 1.6,
                    }}
                  >
                    পড়তে {toBanglaNumber(readMinutes)} মিনিট
                  </span>
                </div>

                <h1
                  style={{
                    margin: 0,
                    color: "#ffffff",
                    fontSize: 28,
                    fontWeight: 800,
                    lineHeight: 1.55,
                    overflowWrap: "anywhere",
                  }}
                >
                  {newsHeading}
                </h1>

                <div
                  style={{
                    width: 64,
                    height: 5,
                    borderRadius: 999,
                    marginTop: 14,
                    background: `linear-gradient(to right, ${C.gold}, ${C.red})`,
                  }}
                />
              </div>
            </div>

            {/* ================= CAPTION ================= */}
            {hasPhoto && (newsPictureHeading || newsPictureCredit) && (
              <div
                style={{
                  padding: "9px 22px",
                  background: "#f3eddc",
                  borderLeft: `5px solid ${C.gold}`,
                  fontSize: 11,
                  lineHeight: 1.8,
                  color: "#5b5f6b",
                  fontStyle: "italic",
                }}
              >
                {newsPictureHeading}
                {newsPictureCredit && (
                  <span
                    style={{
                      display: "block",
                      fontWeight: 700,
                      fontStyle: "normal",
                      color: C.goldDeep,
                    }}
                  >
                    ছবি: {newsPictureCredit}
                  </span>
                )}
              </div>
            )}

            {/* ================= BYLINE ================= */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                margin: "18px 22px 6px",
                padding: "12px 14px",
                borderRadius: 18,
                background: "#ffffff",
                border: "1px solid #eadfc4",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 999,
                  background: `linear-gradient(135deg, ${C.gold}, ${C.red})`,
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {splitFirstGrapheme(reporter)[0]}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 10.5,
                    color: C.goldDeep,
                    fontWeight: 700,
                    lineHeight: 1.7,
                  }}
                >
                  প্রতিবেদক
                </div>
                <div
                  style={{
                    fontWeight: 800,
                    fontSize: 14.5,
                    color: C.text,
                    lineHeight: 1.6,
                  }}
                >
                  {reporter}
                </div>
              </div>

              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div
                  style={{
                    fontSize: 10.5,
                    color: C.muted,
                    lineHeight: 1.7,
                  }}
                >
                  প্রকাশিত
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: C.text,
                    lineHeight: 1.6,
                  }}
                >
                  {published}
                </div>
              </div>
            </div>

            {/* ================= ARTICLE ================= */}
            <div style={{ padding: "14px 22px 6px" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 16.5,
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
                    fontSize: 64,
                    lineHeight: "60px",
                    fontWeight: 800,
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

            {/* ================= QUOTES ================= */}
            {quotes.length > 0 && (
              <section style={{ paddingTop: 16 }}>
                <Ornament />

                <div
                  style={{
                    textAlign: "center",
                    fontSize: 16,
                    fontWeight: 800,
                    color: C.ink,
                    margin: "12px 0 14px",
                    lineHeight: 1.6,
                  }}
                >
                  সংশ্লিষ্ট বক্তব্য
                </div>

                <div style={{ padding: "0 22px" }}>
                  {quotes.map((quote, index) => (
                    <blockquote
                      key={index}
                      style={{
                        position: "relative",
                        margin: "0 0 14px",
                        padding: "18px 18px 12px 20px",
                        background:
                          "linear-gradient(135deg, #fff6dc, #fdebec)",
                        borderRadius: 18,
                        borderLeft: `6px solid ${C.gold}`,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: -8,
                          right: 14,
                          fontSize: 64,
                          lineHeight: 1,
                          color: C.gold,
                          opacity: 0.4,
                          fontFamily: "Georgia, serif",
                        }}
                      >
                        ”
                      </div>

                      <p
                        style={{
                          position: "relative",
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
                          position: "relative",
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
                </div>
              </section>
            )}

            {/* ================= FOOTER ================= */}
            <footer
              style={{
                position: "relative",
                marginTop: 22,
                padding: "24px 22px 22px",
                background: `linear-gradient(135deg, ${C.ink}, ${C.inkSoft})`,
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 5,
                  background: `linear-gradient(to right, ${C.goldDeep}, ${C.gold}, ${C.goldLight}, ${C.gold}, ${C.goldDeep})`,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -100,
                  right: -60,
                  width: 260,
                  height: 260,
                  background:
                    "radial-gradient(circle, rgba(214,40,57,0.35), transparent 65%)",
                }}
              />

              <div style={{ position: "relative" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                  }}
                >
                  <LogoBadge src={prepared.logo} size={40} />
                  <span
                    style={{
                      color: "#ffffff",
                      fontWeight: 800,
                      fontSize: 22,
                      lineHeight: 1.6,
                    }}
                  >
                    জাগ্রত বার্তা
                  </span>
                </div>

                <div
                  style={{
                    color: C.goldLight,
                    fontSize: 12,
                    marginTop: 2,
                    lineHeight: 1.8,
                  }}
                >
                  সত্যের প্রতি দায়বদ্ধ
                </div>

                <div
                  style={{
                    color: "#cbd5e1",
                    fontSize: 11.5,
                    marginTop: 12,
                    lineHeight: 1.8,
                  }}
                >
                  বিস্তারিত ও আরও খবর পড়তে ভিজিট করুন
                </div>

                <div
                  style={{
                    display: "inline-block",
                    marginTop: 8,
                    background: `linear-gradient(to right, ${C.gold}, ${C.goldLight})`,
                    color: C.ink,
                    fontSize: 12.5,
                    fontWeight: 800,
                    padding: "7px 20px",
                    borderRadius: 999,
                    lineHeight: 1.6,
                    overflowWrap: "anywhere",
                  }}
                >
                  {articleLink}
                </div>
              </div>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}

export default PrintNewsDetailsClient;