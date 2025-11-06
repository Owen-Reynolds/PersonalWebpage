"use client"

import { useEffect } from "react";

interface PageBackgroundProps {
  color?: string; // any valid CSS color
}

export default function PageBackground({ color = "transparent" }: PageBackgroundProps) {
  useEffect(() => {
    const prev = document.body.style.backgroundColor;
    const prevTransition = document.body.style.transition;
    document.body.style.backgroundColor = color;
    // nice subtle transition when switching pages
    document.body.style.transition = "background-color 300ms ease";
    return () => {
      document.body.style.backgroundColor = prev;
      document.body.style.transition = prevTransition;
    };
  }, [color]);
  return null;
}
