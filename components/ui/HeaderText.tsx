"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  text: string;
  strokeWidth: number;
  fontSize: number;
  svgWidth?: number;
  className?: string;
}

const HeaderText = ({ text, strokeWidth, svgWidth, fontSize, className }: Props) => {
  return (
    <svg
      width="100%"
      height="100%"
      className="w-full h-auto flex items-start justify-start"
    >
      <text
        x="0%"
        y="50%"
        textAnchor="start"
        dominantBaseline="middle"
        className={cn("w-full h-full tracking-normal", className)}
        stroke="white"
        strokeWidth={strokeWidth}
        fill="black"
        fontSize={fontSize}
      >
        {text}
      </text>
    </svg>
  );
};

export default HeaderText;
