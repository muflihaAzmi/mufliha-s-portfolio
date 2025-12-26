"use client"
import { motion, Variants } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ProjectItem {
  img: string;
  title: string;
  desc: string;
  full: string;
  link: string;
}

export default function Projects() {
  const [open, setOpen] = useState<number | null>(null);

  const data: ProjectItem[] = [
    {
      img: "/pointer.png",
      title: "POINTER",
      desc: "A fully responsive project built with Next.js, Tailwind, and animations.",
      full: "This is a website includes framer-motion animations, dynamic routing, reusable components, using nextjs and tailwind css",
      link: "",
    },
    {
      img: "/lux.png",
      title: "LUXE ",
      desc: "Modern shopping UI design with filters and product pages.",
      full: "The e-commerce design features cart system, product variations, category filtering, and a clean minimal UI focused on usability...",
      link: "https://lux-interiors-nine.vercel.app/",
    },
  ];

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
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
      x: side === "left" ? -5 : 5,
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
      className="relative w-full mt-10 bg-gray-900 py-10 px-2"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h1
        variants={sectionVariants}
        className="text-4xl font-bold text-white text-center items-center md:mt-10 tracking-wider"
      >
        Work I&apos;ve Built{" "}
      </motion.h1>

      <div className="absolute left-1/2 top-36 h-200 border-l-2 border-dashed border-gray-600 -translate-x-1/2"></div>

      <div className="space-y-24 relative py-20">
        {data.map((item, i) => {
          const side = i %2 === 0 ? "left" : "right";

          return (
            <motion.div
              key={i}
              custom={side}
              variants={cardVariants}
              className={`relative flex w-full ${
                side === "left"
                  ? "justify-start md:pl-80"
                  : "justify-end md:pr-80"
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
                className="absolute top-8 left-1/2 hidden md:block -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-lg"
              />

              {/* Card */}
              <div
                className={`group w-96 p-4 rounded-xl shadow-lg bg-white cursor-pointer border transition-all duration-300 ${
                  side === "left" ? "mr-5" : "ml-5"
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
                  className="group flex items-center gap-2 rounded-3xl py-2 px-6 bg-gray-900 text-white mt-6 hover:bg-gray-600 transition duration-300"
                >
                  Details
                  <ChevronRight
                    className="
      opacity-0 translate-x-0
      group-hover:opacity-100 group-hover:translate-x-2
      transition-all duration-300
    "
                  />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {open !== null && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white w-[600px] max-h-[90vh] overflow-y-auto rounded-xl shadow-xl p-4 animate-scaleIn">
            <button
              onClick={() => setOpen(null)}
              className="float-right text-xl font-bold "
            >
              ×
            </button>

            <img
              src={data[open].img}
              className="w-full h-72 object-cover mb-4 mt-2"
              alt={data[open].title}
            />

            <h2 className="text-2xl font-bold mb-2">{data[open].title}</h2>

            <p className="text-gray-900 leading-relaxed">{data[open].full}</p>
            <Link href={data[open].link} target="_blank" className="">
              <ExternalLink
                size={30}
                className="text-gray-950 hover:text-pink-400"
              />
            </Link>
          </div>
        </div>
      )}
    </motion.div>
  );
}
