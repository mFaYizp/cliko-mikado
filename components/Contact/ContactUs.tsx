"use client";
import React, { useRef } from "react";
import { FloatingDock } from "../ui/floating-dock";
import { FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoBold } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { SOCIAL_LINKS } from "../Footer";
import { Button } from "../ui/button";
import { motion, useInView } from "framer-motion";

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animates only once when it enters the viewport

  return (
    <div className="min-h-screen text-white p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-bold mb-5 pl-4">Get in Touch</h2>
          <motion.h3
            ref={ref}
            className="text-5xl font-bold mb-8 pl-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Drop Us A Line
          </motion.h3>
          <div className="space-y-5">
            <p className="flex items-center pl-4">
              949, 28th main, 100 feet
              <br />
              ring rd, Marenahalli,
              <br />
              Jayanagara 9th block,
              <br />
              Bengaluru
            </p>
            <p className="flex items-center pl-4">+91 8197278080</p>
            <p className="flex items-center pl-4">info@mikado.biz</p>
            <div className="relative left-0 top-8">
              <FloatingDock items={SOCIAL_LINKS} desktopClassName="flex gap-1" />
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-1">Name *</label>
              <input
                type="text"
                className="w-full p-3 bg-transparent border-b-2 border-gray-700 rounded-none focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Email address *
              </label>
              <input
                type="email"
                className="w-full p-3 bg-transparent border-b-2 border-gray-700 rounded-none focus:outline-none"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Subject *</label>
            <input
              type="text"
              className="w-full p-3 bg-transparent border-b-2 border-gray-700 rounded-none focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Select an option *
            </label>
            <select
              className="w-full p-3 bg-transparent border-b-2 border-gray-700 rounded-none focus:outline-none"
              required
            >
              <option>Please choose an option</option>
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Feedback</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message *</label>
            <textarea
              rows={5}
              className="w-full p-3 bg-transparent pb-0 border-b-2 border-gray-700 rounded-none  pfocus:outline-none resize-none"
              required
            ></textarea>
          </div>
          <div className="text-sm text-gray-400">
            Fields marked with an asterisk (*) are required!
          </div>
          <Button
            type="submit"
            className="font-normal text-[0.75rem] md:text-[1rem] md:px-10 md:py-6 flex items-center space-x-1 border rounded-none hover:text-black hover:bg-white"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
