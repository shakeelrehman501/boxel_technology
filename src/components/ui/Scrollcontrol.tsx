"use client";

import { useEffect } from "react";

export default function ScrollPreserve() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Load previous scroll position from sessionStorage
    const savedScroll = sessionStorage.getItem("scrollY");
    if (savedScroll) {
      window.scrollTo(0, parseInt(savedScroll));
    }

    const handleScroll = () => {
      sessionStorage.setItem("scrollY", window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
