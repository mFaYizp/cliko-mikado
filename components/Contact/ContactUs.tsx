"use client";
import React, { useRef, useState } from "react";
import { FloatingDock } from "../ui/floating-dock";
import { SOCIAL_LINKS } from "../Footer";
import { Button } from "../ui/button";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const ContactPage = () => {
  const ref = useRef(null);
  const form = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [option, setOption] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      );
      setSubmitStatus('success');
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setOption("");
      setMessage("");
      form.current.reset();
    } catch (error) {
      setSubmitStatus('error');
      console.log('Failed to send email:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section className="h-full text-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 py-14 md:py-20 xl:py-36">
        {/* Left Section */}
        <div className="h-full hidden md:flex flex-col justify-between">
          <div className=" flex flex-col">
            <h2 className="text-4xl font-bold mb-5">Get in Touch</h2>
            <motion.h3
              ref={ref}
              className="text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Drop Us A Line
            </motion.h3>
            <div className="space-y-5">
              <p className="flex items-center">
                949, 28th main, 100 feet
                <br />
                ring rd, Marenahalli,
                <br />
                Jayanagara 9th block,
                <br />
                Bengaluru
              </p>
              <p className="flex items-center">+91 8197278080</p>
              <p className="flex items-center">info@mikado.biz</p>
            </div>
          </div>
          <div className="">
            <FloatingDock items={SOCIAL_LINKS} desktopClassName="flex gap-1" />
          </div>
        </div>
        <div className="block md:hidden">
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
        </div>
        {/* Right Section (Form) */}
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-1">Name *</label>
              <input
                type="text"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 bg-transparent border-b-2 border-opacity-50 border-gray-700 rounded-none focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email address *</label>
              <input
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-transparent border-b-2 border-opacity-50 border-gray-700 rounded-none focus:outline-none"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Subject *</label>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-3 bg-transparent border-b-2 border-opacity-50 border-gray-700 rounded-none focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Select an option *</label>
            <Select 
              name="option"
              value={option} 
              onValueChange={setOption}
              required
            >
              <SelectTrigger>
                <SelectValue className="text-gray-400" placeholder="Please choose an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                <SelectItem value="Support">Support</SelectItem>
                <SelectItem value="Feedback">Feedback</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message *</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={2}
              className="w-full p-3 bg-transparent pb-0 border-b-2 border-opacity-50 border-gray-700 rounded-none focus:outline-none resize-none"
              required
            ></textarea>
          </div>
          <div className="text-sm text-gray-400">
            Fields marked with an asterisk (*) are required!
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="font-normal text-[0.75rem] md:text-[1rem] md:px-10 md:py-6 flex items-center space-x-1 border rounded-none hover:text-black hover:bg-white disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>

          {submitStatus === 'success' && (
            <p className="text-green-500 text-center">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
