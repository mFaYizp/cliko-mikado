'use client'
import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className="w-full mx-auto px-24 pt-20px tracking-widest">
            <h3 className="text-6xl py-6">
                <span className="text-gray-400 font-thin">Let&apos;s</span>{' '}
                <span className=" text-white font-extralight">Talk</span>
            </h3>
            <p className="text-left text-gray-600 mb-4">
                Drop us a line or come grab a coffee, it&apos;s on us, and let&apos;s design the extraordinary together
            </p>
            <p className="text-5xl font-thin text-gray-400 mb-4">
                <span> Hey, I&apos;m{' '}</span>
                <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-transparent border-b-2 border-gray-500 text-white outline-none placeholder-opacity-50 placeholder-gray-600"
                />{' '}
                Let&apos;s grab a virtual coffee
            </p>
            <p className="text-5xl font-thin text-gray-400 mb-4">
                and chat things out. Reach me back at{' '}
                <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent border-b-2 border-gray-500 text-white outline-none placeholder-opacity-50 placeholder-gray-600"
                />
            </p>
            <p className="text-5xl font-thin mb-4 text-gray-400">
                Here’s what I’m thinking:
            </p><br/>
            <textarea
                placeholder="Spill the ink of your mind right here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-transparent border-b-2 border-gray-500 text-white font-thin outline-none w-full h-25 mb-4  placeholder-gray-600"
            />

            <div className="flex justify-end pb-[200px]">
                <button className="bg-black text-white py-2 px-4 border-[1px] border-white rounded">Submit</button>
            </div>
        </div>
    );
};

export default ContactForm;
