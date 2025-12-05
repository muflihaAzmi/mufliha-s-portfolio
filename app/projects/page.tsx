"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

interface ProjectItem {
  img: string;
  title: string;
  desc: string;
  full: string;
}

export default function Projects() {
  const [open, setOpen] = useState<number | null>(null);

  const data: ProjectItem[] = [
    {
      img: "/pointer.png",
      title: "POINTER WEBSITE",
      desc: "A fully responsive portfolio built with Next.js, Tailwind, and animations.",
      full: "This project includes framer-motion animations, dynamic routing, reusable components, and SEO optimized metadata...",
    },
    {
      img: "/lux.png",
      title: "LUXE WEBSITE",
      desc: "Modern shopping UI design with filters and product pages.",
      full: "The e-commerce design features cart system, product variations, category filtering, and a clean minimal UI focused on usability...",
    },
  ];

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.35,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: (side: "left" | "right") => ({
      opacity: 0,
      x: side === "left" ? -120 : 120,
    }),
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className="relative w-full mt-10 bg-gray-900 py-10"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Title */}
      <motion.h1
        variants={sectionVariants}
        className="text-4xl font-bold text-white text-center items-center mt-10 tracking-wider"
      >
Work I&apos;ve Built      </motion.h1>

      {/* Vertical line */}
      <div className="absolute left-1/2 top-36 h-200 border-l-2 border-dashed border-gray-600 -translate-x-1/2"></div>

      
      <div className="space-y-24 relative py-20">
        {data.map((item, i) => {
          const side = i % 2 === 0 ? "left" : "right";

          return (
            <motion.div
              key={i}
              custom={side}
              variants={cardVariants}
              className={`relative flex w-full ${
                side === "left" ? "justify-start md:pl-80" : "justify-end md:pr-80"
              }`}
            >
              {/* Connector Line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 50 }}
                transition={{ duration: 0.6 }}
                className={`absolute top-10 border-t-2 border-gray-500 ${
                  side === "left"
                    ? "right-1/2 translate-x-1/2"
                    : "left-1/2 -translate-x-1/2"
                }`}
              />

              {/* Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-lg"
              />

              {/* Card */}
              <div
                className={`group w-96 p-4 rounded-xl shadow-lg bg-white cursor-pointer border transition-all duration-300 ${
                  side === "left" ? "mr-10" : "ml-10"
                }`}
              >
                <img
                  src={item.img}
                  className="w-full h-36 object-cover rounded-lg"
                  alt={item.title}
                />

                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>

                <button
                  onClick={() => setOpen(i)}
                  className="rounded-3xl py-2 px-6 bg-gray-900 text-white mt-6"
                >
                  Details
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* MODAL */}
      {open !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white w-[600px] max-h-[90vh] overflow-y-auto rounded-xl shadow-xl p-6 animate-scaleIn">
            <button
              onClick={() => setOpen(null)}
              className="float-right text-xl font-bold"
            >
              ×
            </button>

            <img
              src={data[open].img}
              className="w-full h-72 object-cover rounded-lg mb-4"
              alt={data[open].title}
            />

            <h2 className="text-2xl font-bold mb-2">{data[open].title}</h2>

            <p className="text-gray-700 leading-relaxed">{data[open].full}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

