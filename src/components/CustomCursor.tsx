"use client";
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverState, setHoverState] = useState({
    isHovering: false,
    elementType: "",
  });
  const [isClicking, setIsClicking] = useState(false);

  // Smooth animation loop with spring effect
  useEffect(() => {
    let animationFrameId: number;
    const stiffness = 0.2; // Controls the spring stiffness
    const damping = 0.7; // Controls the damping effect

    const animate = () => {
      setCursorPosition((prev) => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        return {
          x: prev.x + dx * stiffness * damping,
          y: prev.y + dy * stiffness * damping,
        };
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePosition]);

  // Event listeners
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setMousePosition((prev) =>
        prev.x !== newPos.x || prev.y !== newPos.y ? newPos : prev
      );
    };

    const handleMouseDown = () => {
      setIsClicking((prev) => (prev ? prev : true));
    };

    const handleMouseUp = () => {
      setIsClicking((prev) => (!prev ? prev : false));
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveElements = [
        "A",
        "BUTTON",
        "INPUT",
        "TEXTAREA",
        "SELECT",
        "LABEL",
      ];

      const isInteractive = interactiveElements.includes(target.tagName);
      const elementType = isInteractive ? target.tagName.toLowerCase() : "";

      setHoverState((prev) =>
        prev.isHovering !== isInteractive || prev.elementType !== elementType
          ? { isHovering: isInteractive, elementType }
          : prev
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Dynamic size and color based on interaction
  const getCursorStyles = () => {
    // Base styles
    let innerSize = 2;
    let outerSize = 12;
    let innerColor = "bg-sky-500";
    let outerColor = "border-sky-500";
    const opacity = "opacity-100";

    // Click effect
    if (isClicking) {
      innerSize = 2;
      outerSize = 10;
      innerColor = "bg-sky-600";
      outerColor = "border-sky-600";
    }
    // Hover effect
    else if (hoverState.isHovering) {
      innerSize = 2;
      outerSize = 12;

      // Different colors for different element types
      switch (hoverState.elementType) {
        case "a":
          innerColor = "bg-emerald-500";
          outerColor = "border-emerald-500";
          break;
        case "button":
          innerColor = "bg-purple-500";
          outerColor = "border-purple-500";
          break;
        case "input":
        case "textarea":
          innerColor = "bg-amber-500";
          outerColor = "border-amber-500";
          break;
        default:
          innerColor = "bg-sky-500";
          outerColor = "border-sky-500";
      }
    }

    return {
      inner: {
        size: `w-${innerSize} h-${innerSize}`,
        color: innerColor,
      },
      outer: {
        size: `w-${outerSize} h-${outerSize}`,
        color: outerColor,
      },
      opacity,
    };
  };

  const cursorStyles = getCursorStyles();

  return (
    <>
      {/* Outer ring - larger and more subtle */}
      <div
        style={{
          top: cursorPosition.y,
          left: cursorPosition.x,
          transition: "width 0.2s, height 0.2s, border-color 0.1s",
        }}
        className={`fixed z-50 rounded-full border-2 pointer-events-none -translate-x-1/2 -translate-y-1/2 ${cursorStyles.outer.size} ${cursorStyles.outer.color} ${cursorStyles.opacity}`}
      />

      {/* Inner dot - follows more precisely */}
      <div
        style={{
          top: cursorPosition.y,
          left: cursorPosition.x,
          transition: "width 0.1s, height 0.1s, background-color 0.1s",
        }}
        className={`fixed z-50 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 ${cursorStyles.inner.size} ${cursorStyles.inner.color} ${cursorStyles.opacity}`}
      />
    </>
  );
};

export default CustomCursor;