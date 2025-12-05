"use client";

import { useState } from "react";

export default function Footer() {
  const [show, setShow] = useState(false);

  return (
    <footer className="relative w-full mt-20 py-10 bg-gray-900 text-gray-300 flex flex-col items-center">
      
      <div 
        className="relative group"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <img 
          src="/anu.jpg" 
          alt="Logo"
          className="w-16 h-16 rounded-full cursor-pointer border border-gray-600 hover:scale-110 transition"
        />

        {show && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-white text-black rounded-xl shadow-xl p-4 w-48 animate-pop">
            
            <h3 className="text-center font-semibold mb-2">Follow Me</h3>

            <div className="flex flex-col gap-2">
              <a 
                href="https://github.com/yourprofile" 
                target="_blank" 
                className="hover:text-purple-600 transition"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                className="hover:text-blue-600 transition"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:youremail@example.com" 
                className="hover:text-red-600 transition"
              >
                Email
              </a>
              <a 
                href="https://instagram.com/yourprofile" 
                target="_blank" 
                className="hover:text-pink-500 transition"
              >
                Instagram
              </a>
            </div>
          </div>
        )}
      </div>

      <p className="mt-6 text-sm opacity-70">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>

    </footer>
  );
}
