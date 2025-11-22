'use client';
import React, { useState, useEffect } from 'react';
import Calendar from 'date-bengali-revised';

const bnMonths = [
  'বৈশাখ','জ্যৈষ্ঠ','আষাঢ়','শ্রাবণ','ভাদ্র','আশ্বিন',
  'কার্তিক','অগ্রহায়ণ','পৌষ','মাঘ','ফাল্গুন','চৈত্র'
];
const bnWeekdays = [
  'রবিবার','সোমবার','মঙ্গলবার','বুধবার','বৃহস্পতিবার','শুক্রবার','শনিবার'
];

const toBanglaNumber = (num: number) => {
  const bnDigits = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  return num.toString().split('').map(d => bnDigits[parseInt(d)]).join('');
};

const RealBanglaDate: React.FC<{ className?: string }> = ({ className }) => {
  const [bangla, setBangla] = useState<{ year: number; month: number; day: number; weekday: string } | null>(null);

  useEffect(() => {
    const cal = new Calendar();
    const today = new Date();
    const bd = cal.fromDate(today);
    setBangla({
      year: bd.year,
      month: bd.month - 1, // `month` from library may be 1‑based
      day: bd.day,
      weekday: bnWeekdays[today.getDay()],
    });
  }, []);

  if (!bangla) {
    return <p className={className}>লোড হচ্ছে…</p>;
  }

  return (
    <div className={className}>
      <p>
       {toBanglaNumber(bangla.day)} {bnMonths[bangla.month]} {toBanglaNumber(bangla.year)} বঙ্গাব্দ
      </p>
    </div>
  );
};

export default RealBanglaDate;
