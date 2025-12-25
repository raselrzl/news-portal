"use client";

import { useEffect, useState } from "react";
import { getVisitorsByDate } from "./visitorCalendar";
import VisitorsGraph from "./VisitorsGraph";

export default function DailyVisitorsByDate() {
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0] // today
  );
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    getVisitorsByDate(new Date(date)).then((res) => {
      setCount(res.count);
    });
  }, [date]);

  return (
    <div>
      <h3>Visitors by Day</h3>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <div style={{ marginTop: 10 }}>
        <strong>{count}</strong> visitors
      </div>
      <VisitorsGraph />
    </div>
  );
}
