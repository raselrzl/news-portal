function convertToBengaliNumber(number: number): string {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return number
    .toString()
    .split('')
    .map(digit => bengaliDigits[parseInt(digit)])
    .join('');
}

function formatBengaliDate(date: Date): string {
  const months = [
    'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
    'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
  ];

  const day = convertToBengaliNumber(date.getDate());
  const month = months[date.getMonth()];
  const year = convertToBengaliNumber(date.getFullYear());

  return `${day} ${month} ${year}`;
}

export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    return "এইমাত্র পাওয়া";
  } else if (diffInDays === 1) {
    return "গতকাল";
  } else {
    return `${formatBengaliDate(date)}`;
  }
}

/* ${convertToBengaliNumber(diffInDays)} দিন পূর্বের -  */