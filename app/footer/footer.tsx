"use client";

import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full mt-20 py-10 bg-gray-900 text-gray-300 flex flex-col items-center gap-4">

      <div className="relative group flex flex-col items-center">
        <img
          src="/anu.jpg"
          alt="Logo"
          className="w-16 h-16 rounded-full cursor-pointer border border-gray-600 hover:scale-110 transition"
        />

        <div className="flex gap-5 mt-4">
          
          <a
            href="https://github.com/"
            target="_blank"
            className="w-10 h-10 rounded-full border border-zinc-500 bg-zinc-200/10 backdrop-blur-md flex items-center justify-center hover:scale-110 hover:border-purple-400 hover:shadow-purple-500/30 hover:shadow-md transition-all"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="w-10 h-10 rounded-full border border-zinc-500 bg-zinc-200/10 backdrop-blur-md flex items-center justify-center hover:scale-110 hover:border-blue-400 hover:shadow-blue-500/30 hover:shadow-md transition-all"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:muflihaazmi@gmail.com"
            className="w-10 h-10 rounded-full border border-zinc-500 bg-zinc-200/10 backdrop-blur-md flex items-center justify-center hover:scale-110 hover:border-red-400 hover:shadow-red-500/30 hover:shadow-md transition-all"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            className="w-10 h-10 rounded-full border border-zinc-500 bg-zinc-200/10 backdrop-blur-md flex items-center justify-center hover:scale-110 hover:border-pink-400 hover:shadow-pink-500/30 hover:shadow-md transition-all"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>

      <p className="mt-2 text-sm opacity-70">
        © {new Date().getFullYear()} mufliha azmi. All rights reserved.
      </p>
    </footer>
  );
}
