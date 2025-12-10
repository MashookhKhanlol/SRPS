"use client";

import React, { useState, useEffect, useRef } from "react";

interface CursorProps {
  size?: number;
  scale?: number;
  containerRef?: React.RefObject<HTMLElement>;
}

export const Cursor: React.FC<CursorProps> = ({ size = 60, scale = 1, containerRef }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const previousPos = useRef({ x: -size, y: -size }); // start off-screen
  const scaleRef = useRef(scale);

  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: -size, y: -size });

  useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);

  // Animation loop for smooth cursor follow
  const animate = () => {
    if (!cursorRef.current) return;

    const currentX = previousPos.current.x;
    const currentY = previousPos.current.y;

    const targetX = position.x - size / 2;
    const targetY = position.y - size / 2;

    const deltaX = (targetX - currentX) * 0.2;
    const deltaY = (targetY - currentY) * 0.2;

    const newX = currentX + deltaX;
    const newY = currentY + deltaY;

    previousPos.current = { x: newX, y: newY };
    cursorRef.current.style.transform = `translate(${newX}px, ${newY}px) scale(${scaleRef.current})`;

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Wait until the container ref is available when scoping
    if (containerRef && !containerRef.current) return;

    const target = containerRef?.current ?? document;
    const isScoped = Boolean(containerRef?.current);

    const handleMouseMove = (e: MouseEvent) => {
      setVisible(true);
      if (isScoped && containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      } else {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    target.addEventListener("mousemove", handleMouseMove);
    target.addEventListener("mouseenter", handleMouseEnter);
    target.addEventListener("mouseleave", handleMouseLeave);

    if (isScoped && containerRef?.current) {
      containerRef.current.style.cursor = "none";
    } else if (!isScoped) {
      document.body.style.cursor = "none"; // fallback
    }

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      target.removeEventListener("mousemove", handleMouseMove);
      target.removeEventListener("mouseenter", handleMouseEnter);
      target.removeEventListener("mouseleave", handleMouseLeave);

      if (requestRef.current) cancelAnimationFrame(requestRef.current);

      if (isScoped && containerRef?.current) {
        containerRef.current.style.cursor = "auto";
      } else if (!isScoped) {
        document.body.style.cursor = "auto";
      }
    };
    // Re-run if the target ref changes
  }, [animate, containerRef?.current]);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none rounded-full bg-white mix-blend-difference z-50 transition-opacity duration-300 transition-transform ease-out"
      style={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
        position: containerRef?.current ? "absolute" : "fixed",
        top: 0,
        left: 0,
      }}
      aria-hidden="true"
    />
  );
};

export default Cursor;

