"use client"

import React from 'react';
import { Lora } from "next/font/google";
import { motion } from 'framer-motion';
import { Download } from "lucide-react";
import Link from 'next/link';



const lora = Lora({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function About() {
    return (
        <motion.div
            className={` container mx-auto flex items-center p-6 bg-gray-900 flex-col md:h-[500px] h-[700px] mt-20  ${lora.className}`}
        >
            <motion.h1
                className="text-4xl font-bold text-white text-center items-center mt-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </motion.h1>
            <div className="max-w-3xl text-center leading-relaxed text-white mt-10 space-y-6">

                <motion.span
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="block"
                >
                    I’m  <span className='text-[30px]'>Mufliha </span>, a front-end developer with a strong focus on creating visually
                    appealing and performance-driven web interfaces. I specialize in React,
                    Next.js, Tailwind CSS, and modern JavaScript, and I enjoy transforming ideas
                    into smooth, intuitive digital experiences.
                </motion.span>

                <motion.span
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="block"
                >
                    I’m continuously learning and working toward becoming a full-stack developer.
                    I’m passionate about clean UI, reusable components, responsive layouts, and
                    building projects that solve real problems. Currently, I’m exploring backend
                    concepts, APIs, and full-stack workflows to broaden my skill set.
                </motion.span>

            </div>
            <motion.div className='mt-10'
            >
                <Link
                    href="/mufliha.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:shadow-2xl hover:shadow-gray-500 hover:bg-gray-200 transition"
                >
                    <Download size={18} />
                    Download Resume
                </Link>
            </motion.div>
        </motion.div>
    );
}

