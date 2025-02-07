"use client";
import React from "react";

type GoalSectionProps = {
  section: string;
 
  desc: string[];
};

const GoalSection: React.FC<GoalSectionProps> = ({ section, desc }) => {
  return (
    <div className=" text-white px-8 md:px-20 py-16 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Side Section */}
        <div className="md:col-span-1">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            {section.split(" ").map((word, index) => (
              <div key={index}>{word}</div>
            ))}
          </h2>
        </div>

        {/* Right Side Content */}
        <div className="md:col-span-2 space-y-6">
          {desc.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoalSection;
