'use client';
import React from 'react';
import { toHijri } from 'hijri-converter';

// Bangla months
const bnMonths = [
  'বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন',
  'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'
];

// Hijri months in Bangla
const hijriMonths = [
  'মুহররম', 'সফর', 'রবিউল আউয়াল', 'রবিউস সানি',
  'জমাদিউল আউয়াল', 'জমাদিউস সানি', 'রজব', 'শাবান',
  'রমজান', 'শাওয়াল', 'জিলক্বদ', 'জিলহজ'
];

// Gregorian months in Bangla
const gregorianMonthsBn = [
  'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
  'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
];

// Convert numbers to Bengali digits
const toBanglaNumber = (num: number) => {
  const bnDigits = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  return num.toString().split('').map(d => bnDigits[parseInt(d)]).join('');
};

// Mapping of Bangla month start dates in Gregorian calendar
const banglaMonthStart: Record<number, { month: number; day: number }> = {
  0: { month: 9, day: 14 }, // Boishakh starts 14 April
  1: { month: 4, day: 14 },
  2: { month: 5, day: 15 },
  3: { month: 6, day: 16 },
  4: { month: 7, day: 16 },
  5: { month: 8, day: 16 },
  6: { month: 9, day: 16 },
  7: { month: 10, day: 16 },
  8: { month: 11, day: 15 },
  9: { month: 12, day: 15 },
  10: { month: 0, day: 14 },
  11: { month: 1, day: 14 },
};

type TodayDateProps = {
  calendar?: 'gregorian' | 'bangla' | 'hijri';
  className?: string;
};

const TodayDate: React.FC<TodayDateProps> = ({ calendar = 'gregorian', className }) => {
  const today = new Date();
  let dateString = '';

  if (calendar === 'bangla') {
    // Approximate real Bangla date using official mid-April start
    const gMonth = today.getMonth();
    const gDate = today.getDate();
    let banglaYear = today.getFullYear() - 593;
    if (gMonth < 3 || (gMonth === 3 && gDate < 14)) banglaYear -= 1;

    // Determine Bangla month and day
    let banglaMonth = gMonth;
    let banglaDay = gDate - banglaMonthStart[gMonth].day + 1;
    if (banglaDay <= 0) {
      banglaMonth = (banglaMonth + 11) % 12;
      banglaDay += 30; // approximate previous month length
    }

    dateString = `${toBanglaNumber(banglaDay)} ${bnMonths[banglaMonth]} ${toBanglaNumber(banglaYear)} বঙ্গাব্দ`;

  } else if (calendar === 'hijri') {
    const { hy, hm, hd } = toHijri(today.getFullYear(), today.getMonth() + 1, today.getDate());
    dateString = `${toBanglaNumber(hd)} ${hijriMonths[hm - 1]} ${toBanglaNumber(hy)} `;
/* হিজরী */
  } else {
    const day = toBanglaNumber(today.getDate());
    const month = gregorianMonthsBn[today.getMonth()];
    const year = toBanglaNumber(today.getFullYear());
    dateString = `${day} ${month} ${year}`;
  }

  return <p className={`text-sm font-medium ${className}`}>{dateString}</p>;
};

export default TodayDate;
