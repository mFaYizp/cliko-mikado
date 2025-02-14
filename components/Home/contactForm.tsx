"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: i * 0.05,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 xl:max-w-[1280px] 2xl:max-w-[1600px]">
      <div className="w-full mx-auto py-16 sm:py-24 tracking-widest">
        {/* Heading */}
        <motion.h3
          className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl py-4 text-center sm:text-left flex flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[..."Let's"].map((letter, i) => (
            <motion.span
              key={`lets-${i}`}
              custom={i}
              variants={textAnimation}
              className="text-gray-400 font-thin inline-block"
            >
              {letter}
            </motion.span>
          ))}
          &nbsp;
          {[..."Talk"].map((letter, i) => (
            <motion.span
              key={`talk-${i}`}
              custom={i + 5}
              variants={textAnimation}
              className="text-white font-extralight inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h3>

        {/* Subheading */}
        <p className="text-left text-gray-600 mb-6 text-sm sm:text-base 2xl:text-lg">
          Drop us a line or come grab a coffee, it&apos;s on us, and let&apos;s
          design the extraordinary together.
        </p>

        {/* Name Input */}
        <p className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-thin text-gray-400 mb-6">
          <span>Hey, I&apos;m </span>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-transparent border-b-2 border-opacity-50 border-gray-500 text-white outline-none placeholder-opacity-50 placeholder-gray-600 w-full sm:w-auto"
          />{" "}
          <span>Let&apos;s grab a virtual coffee</span>
        </p>

        {/* Email Input */}
        <p className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-thin text-gray-400 mb-6">
          and chat things out. Reach me back at
        </p>
        <p className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-thin text-gray-400 mb-6">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border-b-2 border-opacity-50 border-gray-500 text-white outline-none placeholder-opacity-50 placeholder-gray-600 w-full"
          />
        </p>

        {/* Message Input */}
        <p className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-thin text-gray-400 mb-6">
          Here’s what I’m thinking:
        </p>
        <textarea
          placeholder="Spill the ink of your mind right here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-transparent border-b-2 border-opacity-50 border-gray-500 text-white font-thin outline-none w-full h-30 sm:h-46 mb-6 placeholder-gray-600 resize-none leading-none pb-1"
        />

        {/* Submit Button */}
        <div className="flex justify-center sm:justify-end">
          <button className="bg-black text-white flex items-center justify-center py-3 px-10 2xl:py-4 2xl:px-12 border border-white rounded-none hover:bg-white hover:text-black transition-all duration-300">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
