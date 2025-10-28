"use client";

import { useEffect } from "react";

const RouteTracker = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentUrl = window.location.href; 
      console.log("Tracking URL:", currentUrl);

      fetch("/api/track-route", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullUrl: currentUrl }), 
      })
        .then((res) => res.json())
        .then((data) => console.log("Route tracked:", data))
        .catch((error) => console.error("Error tracking route:", error));
    }
  }, []);

  return null; 
};

export default RouteTracker;
