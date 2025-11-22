'use client';
import React, { useRef, useState, useEffect } from "react";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas-pro";
import { Download, Loader2 } from "lucide-react";
import { isJson } from "@/app/utils/isJson";
import { richTextToPlainText } from "@/app/utils/richTextToPlainText";
import { toHijri } from 'hijri-converter';
import Calendar from 'date-bengali-revised';

// --- Bangla months ---
const bnMonths = [
  'বৈশাখ','জ্যৈষ্ঠ','আষাঢ়','শ্রাবণ','ভাদ্র','আশ্বিন',
  'কার্তিক','অগ্রহায়ণ','পৌষ','মাঘ','ফাল্গুন','চৈত্র'
];

// --- Hijri months in Bangla ---
const hijriMonths = [
  'মুহররম','সফর','রবিউল আউয়াল','রবিউস সানি',
  'জমাদিউল আউয়াল','জমাদিউস সানি','রজব','শাবান',
  'রমজান','শাওয়াল','জিলক্বদ','জিলহজ'
];

// --- Gregorian months in Bangla ---
const gregMonthsBn = [
  'জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন',
  'জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'
];

// --- Bengali weekdays ---
const bnWeekdays = [
  'রবিবার','সোমবার','মঙ্গলবার','বুধবার','বৃহস্পতিবার','শুক্রবার','শনিবার'
];

// --- Helper: Convert numbers to Bangla digits ---
const toBanglaNumber = (num: number) => {
  const bnDigits = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  return num.toString().split('').map(d => bnDigits[parseInt(d)]).join('');
};

// --- Props ---
type Quote = { speakerInfo: string; text: string };
type PrintNewsDetailsClientProps = {
  newsHeading: string;
  newsPicture?: string | null;
  newsPictureHeading?: string | null;
  newsDetails: string;
  createdAt: Date;
  quotes?: Quote[];
};

// --- Split text helper ---
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
  const [banglaDate, setBanglaDate] = useState<{ day: string; month: string; year: string } | null>(null);

  useEffect(() => {
    const cal = new Calendar();
    const bd = cal.fromDate(createdAt);
    setBanglaDate({
      day: toBanglaNumber(bd.day),
      month: bnMonths[bd.month - 1],
      year: toBanglaNumber(bd.year),
    });
  }, [createdAt]);

  // --- Handle PDF download ---
  const handleDownload = async () => {
    if (!contentRef.current) return;
    setIsLoading(true);

    const canvas = await html2canvas(contentRef.current, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "portrait", unit: "px", format: [canvas.width, canvas.height] });
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    window.open(URL.createObjectURL(pdf.output("blob")), "_blank");
    setIsLoading(false);
  };

  // --- Time and weekday ---
  const hour12 = createdAt.getHours() % 12 || 12;
  const ampmBn = createdAt.getHours() >= 12 ? "পিএম" : "এএম";
  const hourBn = toBanglaNumber(hour12);
  const minuteBn = toBanglaNumber(createdAt.getMinutes());
  const weekdayBn = bnWeekdays[createdAt.getDay()];

  // --- Gregorian ---
  const dayBn = toBanglaNumber(createdAt.getDate());
  const gregMonthBn = gregMonthsBn[createdAt.getMonth()];
  const gregYearBn = toBanglaNumber(createdAt.getFullYear());

  // --- Hijri ---
  const { hy, hm, hd } = toHijri(createdAt.getFullYear(), createdAt.getMonth()+1, createdAt.getDate());
  const hijriDay = toBanglaNumber(hd);
  const hijriMonth = hijriMonths[hm-1];
  const hijriYear = toBanglaNumber(hy);

  const fullText = isJson(newsDetails) ? richTextToPlainText(JSON.parse(newsDetails)) : newsDetails;
  const { firstPart, remainingPart } = splitTextByLength(fullText, 350);

  return (
    <>
      <Button onClick={handleDownload} className="overflow-hidden w-10 h-10 bg-black shadow border rounded-xl cursor-pointer" variant="outline" disabled={isLoading}>
        {isLoading ? <Loader2 className="animate-spin w-5 h-5 text-primary"/> : <Download className="h-14 w-14 text-white hover:text-black"/>}
      </Button>

      <div ref={contentRef} style={{
        position:"absolute", top:"-9999px", left:"-9999px", backgroundColor:"#fff",
        color:"#000", maxWidth:"450px", width:"100%", minHeight:"600px",
        padding:"16px", boxSizing:"border-box", fontFamily:"'Helvetica','Arial',sans-serif", lineHeight:1.5, margin:"0 auto"
      }}>
        <header style={{display:"flex", flexDirection:"column", justifyContent:"space-between", padding:"8px 12px", marginBottom:"16px", background:"#000", color:"#fff", borderRadius:"2px", boxShadow:"0 2px 4px rgba(0,0,0,0.3)", position:"relative"}}>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap"}}>
            <div style={{display:"flex", flexDirection:"column", gap:"2px"}}>
              <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
                <img src="/lg1.png" alt="Logo" style={{height:"40px", objectFit:"contain"}} width={120} height={30}/>
                <span style={{fontSize:"12px", fontWeight:"normal", color:"#f0f0f0"}}>নির্ভীক সংবাদ, নির্ভরযোগ্য সূত্র।</span>
              </div>
              <a href="www.jagrotobarta.com" target="_blank" rel="noopener noreferrer" style={{fontSize:"8px", color:"#00bfff", textDecoration:"underline", paddingLeft:"9px"}}>www.jagrotobarta.com</a>
            </div>
            <div style={{position:"absolute", top:"2px", right:"2px", color:"#fff", padding:"2px 2px", borderRadius:"6px", fontSize:"8px", textAlign:"center"}}>
              {weekdayBn} {hourBn}:{minuteBn} {ampmBn}
            </div>
          </div>

          <div style={{display:"flex", justifyContent:"flex-end", gap:"6px", marginTop:"6px", flexWrap:"nowrap", fontSize:"10px"}}>
            <span style={{background:"#ff4d4f", padding:"2px 6px", borderRadius:"6px"}}>{dayBn} {gregMonthBn} {gregYearBn}</span>
            {banglaDate && <span style={{background:"#52c41a", padding:"2px 6px", borderRadius:"6px"}}>{banglaDate.day} {banglaDate.month} {banglaDate.year} বঙ্গাব্দ</span>}
            <span style={{background:"#1890ff", padding:"2px 6px", borderRadius:"6px"}}>{hijriDay} {hijriMonth} {hijriYear} হিজরী</span>
          </div>

          <div style={{fontStyle:"italic", marginTop:"4px", color:"#ffcc00", fontSize:"10px", textAlign:"right"}}>নিখুঁত খবর, আপনার বিশ্বাসে।</div>
        </header>

        <article style={{flexGrow:1, overflow:"auto", paddingBottom:"8px"}} className="border-1 p-4">
          <h1 style={{fontSize:"20px", fontWeight:"bold", marginBottom:"8px", borderBottom:"1px solid gray"}}>{newsHeading}</h1>
          <div style={{overflow:"hidden", marginBottom:"16px"}}>
            {newsPicture && <img src={newsPicture} alt={newsPictureHeading||"News Image"} style={{float:"left", width:"120px", height:"120px", objectFit:"cover", marginRight:"16px", marginBottom:"16px"}}/>}
            <p className="text-[12px] leading-[1.3] text-justify mb-4 whitespace-pre-line">{firstPart}</p>
            <div style={{clear:"both", columnCount:3, columnGap:"1rem", fontSize:"12px", lineHeight:1.3, textAlign:"justify", whiteSpace:"pre-line"}}>{remainingPart}</div>
          </div>
        </article>

        {quotes.length > 0 && <section style={{paddingTop:"16px"}}>
          {quotes.map((quote,index)=>(
            <blockquote key={index} style={{borderLeft:"4px solid #D18700", backgroundColor:"#f2f2f2", padding:"8px", borderRadius:"12px", marginBottom:"16px", fontStyle:"italic", position:"relative", minHeight:"75px"}}>
              <p style={{marginBottom:"24px"}}>"{quote.text}"</p>
              <footer style={{position:"absolute", bottom:"8px", right:"16px", fontSize:"10px", color:"#555"}}>— {quote.speakerInfo}</footer>
            </blockquote>
          ))}
        </section>}

        <a href="https://jagrotobarta.com" target="_blank" rel="noopener noreferrer" style={{fontSize:"11px", color:"#000", textDecoration:"underline"}}>www.jagrotobarta.com</a>
      </div>
    </>
  );
}
