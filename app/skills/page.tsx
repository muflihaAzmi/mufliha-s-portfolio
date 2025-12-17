"use client"
import Link from "next/link";
import { Code2, ExternalLink, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Skill() {
  const [open, setOpen] = useState(false); 

  const technicalSkills = [
    { title: "React", link: "https://react.dev/" },
    { title: "Next.js", link: "https://nextjs.org/" },
    { title: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { title: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { title: "Tailwind CSS", link: "https://tailwindcss.com/" },
    { title: "TypeScript", link: "https://www.typescriptlang.org/" }
  ];

  const softSkills = [
    "Communication",
    "Time Management",
    "Problem Solving",
    "Team Collaboration",
    "Adaptability",
    "Creativity"
  ];

  return (
    <div className="container mx-auto px-6 md:px-24 md:py-20 py-10">

      {/* Heading */}
      <motion.h1
        className="text-4xl font-bold text-zinc-800 text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
Tech Stack      </motion.h1>

      <div className="hidden md:flex justify-around ">

        <div className="w-1/4 bg-white shadow-md rounded-xl p-6 h-[500px] overflow-y-scroll hide-scrollbar">
          <h2 className="text-2xl font-bold text-zinc-800 mb-4">Soft Skills</h2>

          <ul className="space-y-4">
            {softSkills.map((skill, index) => (
              <motion.li
                key={index}
                className="p-3 bg-zinc-100 rounded-lg hover:bg-zinc-200 transition font-medium text-zinc-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
            
            <h2 className="text-2xl font-bold text-zinc-800 md:hidden">Technical Skills</h2>

        <div className="w-2/3 flex flex-col gap-6 h-[500px] overflow-y-scroll hide-scrollbar">

          {technicalSkills.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 hover:bg-gray-600 transition shadow-md rounded-xl p-10 flex justify-between items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3">
                <Code2 size={28} className="text-gray-100 " />
                <span className="text-lg font-semibold text-gray-100">
                  {item.title}
                </span>
              </div>

              <Link href={item.link} target="_blank" className="flex items-center gap-1">
                <ExternalLink size={18} className="text-gray-100" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="md:hidden flex flex-col gap-6">

        <div className="bg-white shadow-md rounded-xl p-4">
          <button
            className="flex justify-between items-center w-full"
            onClick={() => setOpen(!open)}
          >
            <h2 className="text-xl font-bold text-zinc-800">Soft Skills</h2>
            <ChevronDown
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {open && (
              <motion.ul
                className="mt-4 space-y-4"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {softSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="p-3 bg-zinc-100 rounded-lg font-medium text-zinc-700"
                  >
                    {skill}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

      
        <div className="flex flex-col gap-4 bg-white shadow-md rounded-xl p-4">
          <h2 className="text-xl font-bold text-zinc-800">Technical Skills</h2>

          {technicalSkills.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 hover:bg-gray-600  rounded-lg p-4 flex justify-between items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <span className="font-semibold  text-gray-100">{item.title}</span>
              <ExternalLink size={18} className=" text-gray-100" />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
