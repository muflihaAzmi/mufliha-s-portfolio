"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };


  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1], 
        staggerChildren: 0.25,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.section
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full py-10 bg-white text-gray-900 flex flex-col items-center px-2"
    >
      <motion.h2
        variants={item}
        className="text-4xl font-bold mb-6 tracking-wide"
      >
        Let&apos;s <span className="text-gray-800">Connect</span>
      </motion.h2>

      <motion.p
        variants={item}
        className="text-gray-500 text-center max-w-lg mb-10 leading-relaxed"
      >
        Feel free to reach out for collaborations, opportunities, or any
        questions!
      </motion.p>

      <motion.form
        variants={item}
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-800"
      >
     
        <motion.div variants={item} className="mb-4">
          <label className="block mb-2 text-sm">Your Name</label>
          <input
            name="user_name"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700
            focus:ring-2 focus:ring-purple-500 outline-none"
            type="text"
            placeholder="Enter your name"
          />
        </motion.div>

        <motion.div variants={item} className="mb-4">
          <label className="block mb-2 text-sm">Email</label>
          <input
            name="user_email"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700
            focus:ring-2 focus:ring-purple-500 outline-none"
            type="email"
            placeholder="Enter your email"
          />
        </motion.div>

        <motion.div variants={item} className="mb-6">
          <label className="block mb-2 text-sm">Message</label>
          <textarea
            name="message"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700
            focus:ring-2 focus:ring-purple-500 outline-none"
            rows={5}
            placeholder="Write your message..."
          ></textarea>
        </motion.div>

        <motion.div variants={item}>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-white hover:bg-gray-200 transition text-gray-900 font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {sent && (
            <p className="text-green-400 text-sm mt-4 text-center">
              Message Sent Successfully 
            </p>
          )}
        </motion.div>
      </motion.form>
    </motion.section>
  );
}

