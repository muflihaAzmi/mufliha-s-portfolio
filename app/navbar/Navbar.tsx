"use client";
import Link from "next/link";
import React from "react";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  return (
    <div
      className={`w-full flex justify-center ${lora.className} font-medium `}
    >
      <div className="p-2 border md:w-130 flex justify-between rounded-4xl md:mt-10 mt-4  items-center text-gray-700 border-gray-300 w-80 md:gap-0 ">
        <div className=" transition duration-300 hover:scale-125">
          {" "}
          <img src="frontgirl.webp" className="w-10 h-10 rounded-full"></img>
        </div>
        <div className="flex justify-center md:block hidden">
          <Link href="/" className="px-4">
            Home
          </Link>
          <Link href="/about" className="px-4">
            About
          </Link>
          <Link href="/skills" className="px-4">
            Skills
          </Link>
          <Link href="projects" className="px-4">
            Projects
          </Link>
        </div>

        <div
          onClick={() => router.push("/contact-us")}
          className="bg-black px-4 py-2 rounded-4xl text-white transition duration-300 hover:scale-110 shadow-sm cursor-pointer"
        >
          Contact Me
        </div>
      </div>
    </div>
  );
}

export default Navbar;
