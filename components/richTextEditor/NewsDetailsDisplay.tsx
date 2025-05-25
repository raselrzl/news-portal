import React from "react";
import { JsonToHtml } from "./JsonToHtml";

interface NewsDetailsDisplayProps {
  newsDetails: string;
}

function isJson(str: string): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

export function NewsDetailsDisplay({ newsDetails }: NewsDetailsDisplayProps) {
  if (!newsDetails) {
    return null;
  }

  if (isJson(newsDetails)) {
    const doc = JSON.parse(newsDetails);
    return <JsonToHtml json={doc} />;
  }

  // Plain text fallback
  return <p className="whitespace-pre-wrap text-justify">{newsDetails}</p>;
}
