"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
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
  dailyPrice?: number | null;
  moms?: number | null;
  discount?: number | null;
};

export default function Invoice({ ad }: { ad: Ad }) {
  const [isLoading, setIsLoading] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const start = useMemo(() => new Date(ad.startDate), [ad.startDate]);
  const end = useMemo(() => new Date(ad.endDate), [ad.endDate]);
  const formattedStartDate = start.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const formattedEndDate = end.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const durationInDays = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));

  const dailyRate = ad.dailyPrice ?? 0;
  const discountRate = ad.discount ?? 0;
  const momsRate = (ad.moms ?? 0) / 100;
  const subtotal = dailyRate * durationInDays;
  const discountAmount = (subtotal * discountRate) / 100;
  const priceAfterDiscount = subtotal - discountAmount;
  const momsAmount = priceAfterDiscount * momsRate;
  const totalWithMoms = priceAfterDiscount + momsAmount;

  const paymentDueDate = useMemo(() => { const d = new Date(start); d.setDate(start.getDate() + 15); return d; }, [start]);
  const formattedDueDate = paymentDueDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  const logoUrl = "/logo.png";
  const invoiceRef = ad.id.slice(-8).toUpperCase();
  const filename = `INV-${invoiceRef}.pdf`;

  const handleDownload = async () => {
    if (!contentRef.current) return;
    setIsLoading(true);
    const canvas = await html2canvas(contentRef.current, { scale: 2, useCORS: true, backgroundColor: "#ffffff" });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 36;
    const printableWidth = pageWidth - margin * 2;
    const imgHeight = (canvas.height * printableWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", margin, margin, printableWidth, imgHeight, undefined, "FAST");
    pdf.save(filename);
    setIsLoading(false);
  };

  if (!isClient) return null;

  return (
    <>
      <div className="flex justify-end mb-6 print:hidden">
        <Button onClick={handleDownload} disabled={isLoading} className="mt-2 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/70">
          {isLoading ? <div className="flex items-center gap-2"><Loader2 className="animate-spin w-5 h-5" /> Downloading...</div> : "⬇️ Download INVOICE"}
        </Button>
      </div>

      <div style={{ position: "absolute", top: "-7777px", left: "-7777px" }}>
        <div ref={contentRef} style={{ width: "720px", backgroundColor: "#fff", padding: "20px 36px", fontFamily: "'Inter','Helvetica','Arial',sans-serif", fontSize: "11pt", lineHeight: 1.4, boxSizing: "border-box" }}>
          
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <img src={logoUrl} alt="Logo" width={150} height={50} crossOrigin="anonymous" />
              <p style={{ fontSize: "18pt", fontWeight: 700, color: "#333" }}>বিজ্ঞাপনের চালান</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p><strong>চালান নম্বর:</strong> {invoiceRef}</p>
              <p><strong>তারিখ:</strong> {formattedStartDate}</p>
            </div>
          </div>

          {/* Boxes: Company & Advertisement Info */}
          <div style={{ display: "flex", marginBottom: 16, border: "1px solid #ddd" }}>
            <div style={{ flex: 1, padding: 12, background: "#f9f9f9" }}>
              <h3 style={{ fontWeight: 600, marginBottom: 8 }}>কোম্পানির তথ্য</h3>
              <p><strong>নাম:</strong> {ad.companyName}</p>
              <p><strong>ঠিকানা:</strong> {ad.companyaddress}</p>
              <p><strong>পরিচালক:</strong> {ad.supervisedName}</p>
              <p><strong>ফোন:</strong> {ad.supervisedPhonenumber}</p>
              {ad.websiteLink && <p><strong>ওয়েবসাইট:</strong> {ad.websiteLink}</p>}
            </div>
            <div style={{ flex: 1, padding: 12, background: "#f9f9f9" }}>
              <h3 style={{ fontWeight: 600, marginBottom: 8 }}>বিজ্ঞাপনের তথ্য</h3>
              <p><strong>ধরন:</strong> {ad.advertisedCategory}</p>
              <p><strong>সময়কাল:</strong> {formattedStartDate} - {formattedEndDate}</p>
              <p><strong>মোট দিন:</strong> {durationInDays}</p>
              <p><strong>অবস্থা:</strong> {ad.advertiseStatus}</p>
            </div>
          </div>

          {/* Pricing Table */}
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 16 }}>
            <thead>
              <tr style={{ backgroundColor: "#f5f5f5" }}>
                <th style={{ border: "1px solid #ddd", padding: 10, textAlign: "left" }}>বিবরণ</th>
                <th style={{ border: "1px solid #ddd", padding: 10, textAlign: "right" }}>দর (প্রতি দিন)</th>
                <th style={{ border: "1px solid #ddd", padding: 10, textAlign: "right" }}>দিন</th>
                <th style={{ border: "1px solid #ddd", padding: 10, textAlign: "right" }}>মোট (৳)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: "#fff" }}>
                <td style={{ border: "1px solid #ddd", padding: 10 }}>বিজ্ঞাপন ({formattedStartDate} - {formattedEndDate})</td>
                <td style={{ border: "1px solid #ddd", padding: 10, textAlign: "right" }}>{dailyRate.toLocaleString("en-US")}</td>
                <td style={{ border: "1px solid #ddd", padding: 10, textAlign: "right" }}>{durationInDays}</td>
                <td style={{ border: "1px solid #ddd", padding: 10, textAlign: "right" }}>{subtotal.toLocaleString("en-US")}</td>
              </tr>

              {discountRate > 0 && (
                <tr style={{ backgroundColor: "#f0f8ff" }}>
                  <td colSpan={3} style={{ textAlign: "right", border: "1px solid #ddd", padding: 10 }}>ছাড় ({discountRate}%)</td>
                  <td style={{ border: "1px solid #ddd", padding: 10, textAlign: "right" }}>-{discountAmount.toLocaleString("en-US")}</td>
                </tr>
              )}

              <tr style={{ backgroundColor: "#fff" }}>
                <td colSpan={3} style={{ textAlign: "right", fontWeight: 600, border: "1px solid #ddd", padding: 10 }}>কর ({ad.moms ?? 0}%)</td>
                <td style={{ border: "1px solid #ddd", padding: 10, textAlign: "right" }}>{momsAmount.toLocaleString("en-US")}</td>
              </tr>

              <tr style={{ backgroundColor: "#d1e7dd" }}>
                <td colSpan={3} style={{ textAlign: "right", fontWeight: 700, border: "1px solid #ddd", padding: 10 }}>মোট (৳)</td>
                <td style={{ border: "1px solid #ddd", padding: 10, textAlign: "right", fontWeight: 700 }}>{totalWithMoms.toLocaleString("en-US")}</td>
              </tr>
            </tbody>
          </table>

          {/* Bank Info */}
          <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 2, background: "#f9f9f9", marginBottom: 12 }}>
            <h4 style={{ fontWeight: 600, marginBottom: 6 }}>পেমেন্ট তথ্য</h4>
            <p><strong className="mr-2">ব্যাংকের নাম:</strong> Pubali Bank</p>
          <p><strong className="mr-2">একাউন্ট নম্বর:</strong>3616901021733</p>
          <p><strong className="mr-2">একাউন্ট নাম:</strong>Dainik jagrotobarta</p>
          <p><strong className="mr-2">শাখা:</strong>Chowmuhana Branch, Moulvibazar</p>
          <p><strong className="mr-2">SWIFT কোড:</strong>PUBABDDH</p>
          </div>

          {/* Reference & Due Date */}
          <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
            <div style={{ flex: 1, border: "1px solid #cfd8ff", padding: 10, borderRadius: 2, background: "#eef3ff" }}>
              <strong>📌  ব্যাংক ট্রান্সফার রেফারেন্স: </strong>{invoiceRef}
            </div>
            <div style={{ flex: 1, border: "1px solid #ffecb3", padding: 10, borderRadius: 2, background: "#fff9e6", color: "#aa6c39" }}>
              <strong>🕒 পেমেন্ট সম্পন্ন করার তারিখ:</strong> {formattedDueDate}
            </div>
          </div>

          <p style={{ fontSize: "10pt", color: "#666", textAlign: "center" }}>
            এই চালানটি স্বয়ংক্রিয়ভাবে তৈরি হওয়া একটি ডিজিটাল নথি এবং এতে স্বাক্ষরের প্রয়োজন নেই। <br/>
            বিজ্ঞাপনটি নির্ধারিত সময় অনুযায়ী jagrotobarta.com-এ প্রকাশিত
          </p>
        </div>
      </div>
    </>
  );
}
