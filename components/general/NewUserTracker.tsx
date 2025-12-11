"use client";
import { getTotalNewUsers, registerNewUser } from "@/app/actions";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function NewUserTracker() {
  const [totalUsers, setTotalUsers] = useState<number>(0);

  useEffect(() => {
    let userId = localStorage.getItem("userId");
    if (!userId) {
      userId = uuidv4(); // generate unique ID for this visitor
      localStorage.setItem("userId", userId);

      const browserInfo = {
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        screen: `${window.screen.width}x${window.screen.height}`,
      };

      registerNewUser(userId, browserInfo);
    }

    getTotalNewUsers().then((res) => setTotalUsers(res.count));
  }, []);

  return <div>{totalUsers}</div>;
}
