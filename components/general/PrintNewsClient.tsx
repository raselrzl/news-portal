"use client";
import React, { useRef, useState } from "react";
import jsPDF from "jspdf";

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

import { formatRelativeTime } from "@/app/utils/formatRelativeTime";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import html2canvas from "html2canvas-pro";
import { Loader2 } from "lucide-react";

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

    // Create a PDF with same width/height as canvas
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    const fileName = `${newsHeading}-${
      createdAt.toISOString().split("T")[0]
    }.pdf`;
    pdf.save(fileName);
    setIsLoading(false);
  };
  const approxSplitLength = 350;
  const firstPart = newsDetails.slice(0, approxSplitLength);
  const remainingPart = newsDetails.slice(approxSplitLength);

  return (
    <>
      {" "}
      <Button
        onClick={handleDownload}
        className="w-9 h-9 overflow-hidden p-[6px]"
        variant="outline"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="animate-spin w-5 h-5 text-primary" />
        ) : (
          <Image
            src="/download.png"
            alt="Download"
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
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
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #ccc",
            borderBottom: "1px solid #ccc",
            paddingBottom: "8px",
            marginBottom: "16px",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            style={{ height: "40px", objectFit: "contain" }}
            width={120}
            height={30}
          />
          <div>{formatRelativeTime(createdAt)}</div>
        </header>

        <article
          style={{ flexGrow: 1, overflow: "auto", paddingBottom: "8px" }}
        >
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            {newsHeading}
          </h1>

          <div
            style={{
              overflow: "hidden",
              fontSize: "12px",
              lineHeight: 1.3,
              textAlign: "justify",
              marginBottom: "16px",
            }}
          >
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
                  borderRadius: "8px",
                }}
              />
            )}
            <p style={{ whiteSpace: "pre-line" }}>{firstPart}</p>
          </div>

          {remainingPart && (
            <section
              style={{
                whiteSpace: "pre-line",
                fontSize: "12px",
                lineHeight: 1.3,
                columnCount: 3,
                columnGap: "1rem",
                textAlign: "justify",
              }}
            >
              {remainingPart}
            </section>
          )}
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
      </div>
    </>
  );
}
