"use client";
import { useState, useEffect } from "react";

export default function PageViewCounter() {
  const [pageviews, setPageviews] = useState(0);

  useEffect(() => {
    // Increment pageviews on component mount
    try {
      fetch("/api/pageviews", { method: "POST" })
        .then((res) => res.json())
        .then((data) => setPageviews(data.pageviews));
    } catch (error) {
      console.error("Failed to increment pageviews");
    }

    // Get updated pageviews every 5 seconds
    const interval = setInterval(() => {
      fetch("/api/pageviews")
        .then((res) => res.json())
        .then((data) => setPageviews(data.pageviews));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Jumlah pengunjung halaman ini: {pageviews}</p>
    </div>
  );
}
