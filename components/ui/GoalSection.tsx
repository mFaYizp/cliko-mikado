"use client";
import React from "react";
import { motion } from "framer-motion";

type GoalSectionProps = {
  section: string;
  desc: string[];
};

const GoalSection: React.FC<GoalSectionProps> = ({ section, desc }) => {
  // Animation for each word in the section title
  const wordAnimation = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    }),
  };

  // Animation for each paragraph in the description
  const paragraphAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.4, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div className="text-white px-8 md:px-20 py-16 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Side Section */}
        <div className="md:col-span-1">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            {section.split(" ").map((word, index) => (
              <span key={index} className="inline-block mr-4">
                {[...word].map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.2 + i * 0.05,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h2>
        </div>

        {/* Right Side Content */}
        <div className="md:col-span-2 space-y-6">
          {desc.map((paragraph, index) => (
            <motion.p
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={paragraphAnimation}
              className="text-lg leading-relaxed w-full md:w-[90%] lg:w-[75%]"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoalSection;
