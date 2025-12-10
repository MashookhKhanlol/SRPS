"use client";

import { useEffect } from "react";

/**
 * Adds cursor-follow interaction to all heading elements by setting
 * a data-cursor-text attribute. This makes the global CursorFollow
 * bubble grow smoothly over headings (similar to the hero text effect).
 */
export function HeadingCursorBinder() {
  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll<HTMLElement>("h1, h2, h3, h4, h5, h6")
    );

    headings.forEach((el) => {
      // Only add if not already present
      if (!el.hasAttribute("data-cursor-text")) {
        el.setAttribute("data-cursor-text", " ");
        el.style.cursor = "none";
      }
    });

    return () => {
      headings.forEach((el) => {
        if (el.getAttribute("data-cursor-text") === " ") {
          el.removeAttribute("data-cursor-text");
          el.style.cursor = "";
        }
      });
    };
  }, []);

  return null;
}

export default HeadingCursorBinder;

