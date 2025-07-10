
import React, { useEffect, useState } from "react";
import "./cursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setPosition({ x, y });

      // Add to trail
      setTrail((prevTrail) => [
        ...prevTrail,
        { id: Date.now(), x, y },
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Remove old trail items every 100ms
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prev) => prev.slice(-10)); // keep last 10 dots
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Main blinking cursor */}
      <div
        className="custom-cursor"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />

      {/* Sparkle trail */}
      {trail.map((dot) => (
        <div
          key={dot.id}
          className="trail-dot"
          style={{ left: dot.x, top: dot.y }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
