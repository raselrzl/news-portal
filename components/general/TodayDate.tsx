'use client';
import React from 'react';

type TodayDateProps = {
  locale?: 'en-US' | 'bn-BD'; // default is English
  withTime?: boolean;
};

const TodayDate: React.FC<TodayDateProps> = ({ locale = 'en-US', withTime = false }) => {
  const today = new Date();
  const dateString = today.toLocaleDateString(locale, {
    weekday: 'long', // ✅ add weekday name
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const timeString = today.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <p className='text-muted-foreground text-sm mr-2'>
      {dateString}
      {withTime && `, ${timeString}`}
    </p>
  );
};

export default TodayDate;
