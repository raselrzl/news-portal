'use client';
import React, { useEffect, useState } from 'react';
import Calendar from 'date-bengali-revised';

const bnMonths = [
  'বৈশাখ','জ্যৈষ্ঠ','আষাঢ়','শ্রাবণ','ভাদ্র','আশ্বিন',
  'কার্তিক','অগ্রহায়ণ','পৌষ','মাঘ','ফাল্গুন','চৈত্র'
];

const bnWeekdays = [
  'রবিবার','সোমবার','মঙ্গলবার','বুধবার','বৃহস্পতিবার','শুক্রবার','শনিবার'
];

const toBanglaNumber = (num: number | string) => {
  const bnDigits = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  return num.toString().split('').map(d => bnDigits[parseInt(d)] || d).join('');
};

const RealBanglaDate: React.FC<{ className?: string }> = ({ className }) => {
  const [banglaDate, setBanglaDate] = useState<string>('লোড হচ্ছে…');

  useEffect(() => {
    const cal = new Calendar();

    const updateDate = () => {
      const today = new Date();
      const bd = cal.fromDate(today);

      const banglaYear = bd.year + 1; // Bangladesh Bangabda adjustment
      const weekday = bnWeekdays[today.getDay()];
      const month = bnMonths[bd.month - 1]; 
      const day = bd.day - 1;

      setBanglaDate(`${weekday}, ${toBanglaNumber(day)} ${month} ${toBanglaNumber(banglaYear)} বঙ্গাব্দ`);
    };

    updateDate();
    const timer = setInterval(updateDate, 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  return <div className={className}><p>{banglaDate}</p></div>;
};

export default RealBanglaDate;
