"use client";

import React, { useMemo, useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas-pro";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

type Ad = {
  id: string;
  companyName: string;
  companyaddress: string;
  supervisedName: string;
  supervisedPhonenumber: string;
  websiteLink?: string | null;
  advertisedCategory: string;
  advertiseStatus: string;
  additionalInfo?: string | null;
  advertiseBanner?: string | null;
  startDate: string | Date;
  endDate: string | Date;
};

export default function PrintInvoiceClient({
  ad,
  dailyRate = 400,
  buttonClassName = "mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/70 active:bg-primary/70 transition cursor-pointer",
}: {
  ad: Ad;
  dailyRate?: number;
  buttonClassName?: string;
}) {
  const [isLoading, setIsLoading] = useState(false);

  // ----- Dates & pricing -----
  const start = useMemo(() => new Date(ad.startDate), [ad.startDate]);
  const end = useMemo(() => new Date(ad.endDate), [ad.endDate]);

  const formattedStartDate = start.toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedEndDate = end.toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const durationInDays = Math.max(
    1,
    Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  );
  const subtotal = dailyRate * durationInDays;

  const paymentDueDate = useMemo(() => {
    const d = new Date(start);
    d.setDate(start.getDate() + 15);
    return d;
  }, [start]);

  const formattedDueDate = paymentDueDate.toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // ----- Assets & refs -----
  const filename = `INV-${ad.id.slice(0, 6).toUpperCase()}.pdf`;
  const logoUrl = "/logo.png";
  const bannerUrl = ad.advertiseBanner || "";

  const contentRef = useRef<HTMLDivElement>(null);

  // ----- PDF capture -----
  const handleDownload = async () => {
    if (!contentRef.current) return;
    setIsLoading(true);

    const canvas = await html2canvas(contentRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });

    const pageWidth = pdf.internal.pageSize.getWidth();   // ~595pt
    const pageHeight = pdf.internal.pageSize.getHeight(); // ~842pt

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Fit whole capture on ONE page
    const ratio = Math.min(pageWidth / canvasWidth, pageHeight / canvasHeight);
    const imgWidth = canvasWidth * ratio;
    const imgHeight = canvasHeight * ratio;

    const x = (pageWidth - imgWidth) / 2;
    const y = (pageHeight - imgHeight) / 2;

    // Render captured image (no extra PDF border — single visible box comes from CSS)
    pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight, undefined, "FAST");
    pdf.save(filename);

    setIsLoading(false);
  };

  return (
    <>
      {/* Download button */}
      <div className="flex justify-end mb-6 print:hidden">
        <Button onClick={handleDownload} className={buttonClassName} disabled={isLoading}>
          {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : "⬇️ ডাউনলোড INVOICE"}
        </Button>
      </div>

      {/* Off-screen wrapper */}
      <div style={{ position: "absolute", top: "-9999px", left: "-9999px" }}>
        {/* Capture area (A4 width). All content stays INSIDE this sharp box */}
        <div
          ref={contentRef}
          style={{
            position: "relative",             // for watermark
            width: "794px",                   // ≈ A4 width @ 96dpi (8.27in * 96)
            backgroundColor: "#ffffff",
            color: "#000000",
            padding: "12px 10px",             // tight L/R padding; everything stays inside
            fontSize: "11.2pt",
            lineHeight: 1.22,                 // reduced line spacing to help fit
            fontFamily: "'Inter','Helvetica','Arial',sans-serif",
            boxSizing: "border-box",        // single, sharp, visible border (all sides)
            borderRadius: 0,                  // NOT rounded
            overflow: "hidden",               // prevents any overflow beyond the box
          }}
        >
          {/* Watermark (centered, inside the box) */}
          <img
            src={logoUrl}
            alt="Watermark"
            crossOrigin="anonymous"
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "50%",
              top: "68%",
              transform: "translate(-50%, -50%) rotate(-18deg)",
              width: "48%",
              opacity: 0.06,
              pointerEvents: "none",
              userSelect: "none",
              zIndex: 0,
              filter: "grayscale(100%)",
            }}
          />

          {/* Foreground content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
                borderBottom: "1px solid #111",
              }}
            >
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <img
                  src={logoUrl}
                  alt="Logo"
                  width={180}
                  height={60}
                  style={{ objectFit: "cover" }}
                  crossOrigin="anonymous"
                />
                <p style={{ fontSize: "15pt", color: "#555", marginLeft: 4 }}>বিজ্ঞাপন চালান</p>
              </div>
              <div style={{ textAlign: "right", fontSize: "10pt", color: "#333" }}>
                <p>চালান নম্বর: INV-{ad.id.slice(0, 6).toUpperCase()}</p>
                <p>তারিখ: {formattedStartDate}</p>
              </div>
            </div>

            {/* Company & Ad Info */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                marginBottom: "8px",
                borderBottom: "1px solid #111",
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <h2 style={{ fontWeight: 600, marginBottom: "4px" }}>প্রতিষ্ঠান তথ্য</h2>
                <p><strong>নাম:</strong> {ad.companyName}</p>
                <p><strong>ঠিকানা:</strong> {ad.companyaddress}</p>
                <p><strong>সুপারভাইজার:</strong> {ad.supervisedName}</p>
                <p><strong>ফোন:</strong> {ad.supervisedPhonenumber}</p>
                {ad.websiteLink && <p><strong>ওয়েবসাইট:</strong> {ad.websiteLink}</p>}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <h2 style={{ fontWeight: 600, marginBottom: "4px" }}>বিজ্ঞাপন তথ্য</h2>
                <p><strong>ধরন:</strong> {ad.advertisedCategory}</p>
                <p><strong>সময়কাল:</strong> {formattedStartDate} - {formattedEndDate}</p>
                <p><strong>মোট দিন:</strong> {durationInDays} দিন</p>
                <p><strong>স্ট্যাটাস:</strong> {ad.advertiseStatus}</p>
              </div>
            </div>

            {/* Description */}
            {ad.additionalInfo && (
              <div style={{ marginBottom: "8px" }}>
                <h2 style={{ fontWeight: 600, marginBottom: "4px" }}>বিস্তারিত বিবরণ</h2>
                <p style={{ textAlign: "justify" }}>{ad.additionalInfo}</p>
              </div>
            )}

            {/* Ad Banner — centered perfectly inside the box */}
            {bannerUrl && (
              <div style={{ display: "flex", justifyContent: "center", margin: "6px 0 8px" }}>
                <img
                  src={bannerUrl}
                  alt="Banner"
                  width={300}
                  height={200}
                  style={{
                    display: "block",
                    objectFit: "cover",
                    border: "1px solid #e5e7eb",
                    borderRadius: 0, // keep everything squared
                  }}
                  crossOrigin="anonymous"
                />
              </div>
            )}

            {/* Calculation Table (compact, inside the box) */}
            <div style={{ marginTop: 4, marginBottom: 8 }}>
              <h2 style={{ fontWeight: 600, marginBottom: 4 }}>হিসাব</h2>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "11pt",
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        padding: "6px 8px",
                        border: "1px solid #e5e7eb",
                        background: "#f7f7f7",
                        fontWeight: 600,
                      }}
                    >
                      বিবরণ
                    </th>
                    <th
                      style={{
                        textAlign: "right",
                        padding: "6px 8px",
                        border: "1px solid #e5e7eb",
                        background: "#f7f7f7",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                      }}
                    >
                      রেট (প্রতি দিন)
                    </th>
                    <th
                      style={{
                        textAlign: "right",
                        padding: "6px 8px",
                        border: "1px solid #e5e7eb",
                        background: "#f7f7f7",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                      }}
                    >
                      দিন
                    </th>
                    <th
                      style={{
                        textAlign: "right",
                        padding: "6px 8px",
                        border: "1px solid #e5e7eb",
                        background: "#f7f7f7",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                      }}
                    >
                      মোট (৳)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "6px 8px", border: "1px solid #e5e7eb" }}>
                      বিজ্ঞাপন প্রকাশ ({formattedStartDate} - {formattedEndDate})
                    </td>
                    <td style={{ padding: "6px 8px", border: "1px solid #e5e7eb", textAlign: "right" }}>
                      {dailyRate.toLocaleString("bn-BD")}
                    </td>
                    <td style={{ padding: "6px 8px", border: "1px solid #e5e7eb", textAlign: "right" }}>
                      {durationInDays}
                    </td>
                    <td style={{ padding: "6px 8px", border: "1px solid #e5e7eb", textAlign: "right" }}>
                      {subtotal.toLocaleString("bn-BD")}
                    </td>
                  </tr>
                  <tr>
                    <td
                      colSpan={3}
                      style={{
                        padding: "8px 8px",
                        border: "1px solid #e5e7eb",
                        textAlign: "right",
                        fontWeight: 700,
                        background: "#fafafa",
                      }}
                    >
                      সর্বমোট
                    </td>
                    <td
                      style={{
                        padding: "8px 8px",
                        border: "1px solid #e5e7eb",
                        textAlign: "right",
                        fontWeight: 700,
                        background: "#fafafa",
                      }}
                    >
                      {subtotal.toLocaleString("bn-BD")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Bank Info */}
            <div style={{ marginTop: "6px", fontSize: "11pt" }}>
              <h2 style={{ fontWeight: 600, marginBottom: "4px" }}>প্রদানের তথ্য</h2>
              <p><strong>ব্যাংকের নাম:</strong> Dutch-Bangla Bank Limited</p>
              <p><strong>একাউন্ট নাম্বার:</strong> 123 456 789</p>
              <p><strong>একাউন্ট নাম:</strong> Jagrato News</p>
              <p><strong>শাখা:</strong> Motijheel, Dhaka</p>
              <p><strong>SWIFT Code:</strong> DBBLBDDH</p>

              <div
                style={{
                  marginTop: "6px",
                  padding: "8px",
                  backgroundColor: "#f8f9fa",
                  border: "1px solid #e5e7eb",
                  borderRadius: 0,
                }}
              >
                <p style={{ fontWeight: "bold", color: "#0d47a1" }}>📌 রেফারেন্স:</p>
                <p>অনুগ্রহ করে আপনার ব্যাংক ট্রান্সফারে নিচের রেফারেন্সটি ব্যবহার করুন:</p>
                <p style={{ fontWeight: "bold", fontSize: "14pt", marginTop: "4px" }}>
                  INV-{ad.id.slice(0, 6).toUpperCase()}
                </p>
              </div>
            </div>

            {/* Due Date */}
            <div
              style={{
                marginTop: "8px",
                backgroundColor: "#fffbe6",
                padding: "8px",
                border: "1px solid #ffecb3",
                fontSize: "11pt",
                color: "#aa6c39",
                borderRadius: 0,
              }}
            >
              <p style={{ fontWeight: "bold" }}>🕒 প্রদানের শেষ তারিখ:</p>
              <p>অনুগ্রহ করে {formattedDueDate} তারিখের মধ্যে অর্থ প্রদান করুন।</p>
            </div>

            {/* Footer Note */}
            <div style={{ marginTop: "8px", fontSize: "10pt", color: "#777" }}>
              <p>এই চালানটি একটি স্বয়ংক্রিয়ভাবে তৈরি ডিজিটাল নথি এবং এর কোন স্বাক্ষরের প্রয়োজন নেই।</p>
              <p>বিজ্ঞাপনটি নির্ধারিত সময় অনুযায়ী জাগ্রত নিউজে প্রকাশিত হবে।</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
