'use client'
import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <section className="w-full min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24">
            <div className="w-full max-w-screen-lg mx-auto py-16 sm:py-24 tracking-widest">
                {/* Heading */}
                <h3 className="text-4xl sm:text-5xl lg:text-6xl py-4 text-center sm:text-left">
                    <span className="text-gray-400 font-thin">Let&apos;s</span>{' '}
                    <span className="text-white font-extralight">Talk</span>
                </h3>

                {/* Subheading */}
                <p className="text-left text-gray-600 mb-6 text-sm sm:text-base">
                    Drop us a line or come grab a coffee, it&apos;s on us, and let&apos;s design the extraordinary together.
                </p>

                {/* Name Input */}
                <p className="text-2xl sm:text-3xl lg:text-4xl font-thin text-gray-400 mb-6">
                    <span>Hey, I&apos;m{' '}</span>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-transparent border-b-2 border-gray-500 text-white outline-none placeholder-opacity-50 placeholder-gray-600 w-full sm:w-auto"
                    />{' '}
                    <span>Let&apos;s grab a virtual coffee</span>
                </p>

                {/* Email Input */}
                <p className="text-2xl sm:text-3xl lg:text-4xl font-thin text-gray-400 mb-6">
                    and chat things out. Reach me back at
                </p>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-thin text-gray-400 mb-6">
                    <input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-transparent border-b-2 border-gray-500 text-white outline-none placeholder-opacity-50 placeholder-gray-600 w-full"
                    />
                </p>

                {/* Message Input */}
                <p className="text-2xl sm:text-3xl lg:text-4xl font-thin text-gray-400 mb-6">
                    Here’s what I’m thinking:
                </p>
                <textarea
                    placeholder="Spill the ink of your mind right here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-transparent border-b-2 border-gray-500 text-white font-thin outline-none w-full h-24 sm:h-32 mb-6 placeholder-gray-600 resize-none"
                />

                {/* Submit Button */}
                <div className="flex justify-center sm:justify-end">
                    <button className="bg-black text-white py-2 px-6 sm:px-8 border border-white rounded hover:bg-gray-800 transition-all duration-300">
                        Submit
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
