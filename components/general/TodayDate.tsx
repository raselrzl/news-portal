'use client';
import React from 'react';

// Bangla calendar months
const bnMonths = [
  'বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন',
  'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'
];

// Hijri / Islamic months
const hijriMonths = [
  'মুহররম', 'সফর', 'রবিউল আউয়াল', 'রবিউস সানি', 'জমাদিউল আউয়াল',
  'জমাদিউস সানি', 'রজব', 'শাবান', 'রমজান', 'শাওয়াল', 'জিলক্বদ', 'জিলহজ'
];

// Gregorian months in Bengali
const gregorianMonthsBn = [
  'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
  'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
];

// Function to convert numbers to Bengali digits
const toBanglaNumber = (num: number) => {
  const bnDigits = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  return num.toString().split('').map(d => bnDigits[parseInt(d)]).join('');
};

type TodayDateProps = {
  calendar?: 'gregorian' | 'bangla' | 'hijri'; // Select calendar type
  className?: string; // Optional styling
};

const TodayDate: React.FC<TodayDateProps> = ({ calendar = 'gregorian', className }) => {
  const today = new Date();
  let dateString = '';

  if (calendar === 'bangla') {
    // Bangla calendar approximation
    const month = bnMonths[today.getMonth()];
    const day = toBanglaNumber(today.getDate());
    const year = toBanglaNumber(today.getFullYear() - 593);
    dateString = `${day} ${month} ${year}`;
  } else if (calendar === 'hijri') {
    // Hijri calendar approximation
    const month = hijriMonths[today.getMonth()];
    const day = toBanglaNumber(today.getDate());
    const year = toBanglaNumber(today.getFullYear() - 622);
    dateString = `${day} ${month} ${year} হিজরী`;
  } else {
    // Gregorian calendar fully in Bengali
    const month = gregorianMonthsBn[today.getMonth()];
    const day = toBanglaNumber(today.getDate());
    const year = toBanglaNumber(today.getFullYear());
    dateString = `${day} ${month} ${year}`;
  }

  return (
    <p className={`text-sm font-medium ${className}`}>
      {dateString}
    </p>
  );
};

export default TodayDate;
