"use client";

import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { motion } from "framer-motion";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
function Home() {
  return (
    <div className="container mx-auto flex items-center lg:pl-50 w-full bg-zinc-50 font-sans gap-5 lg:flex-row flex-col md:mt-30 mt-10 px-4">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col leading-none text-gray-900 text-center lg:text-start"
      >
        <span
          className={`${bebas.className} font-semibold md:text-[40px] text-[20px]`}
        >
          MUFLIHA AZMI
        </span>
        <span
          className={`${bebas.className} font-bold md:text-[120px] text-[80px]`}
        >
          FRONTEND
        </span>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/frontgirl.webp"
          alt="girl"
          width={300}
          height={200}
          className="rounded-2xl shadow-md"
        />
      </motion.div>
      <motion.div
        className="flex flex-col leading-none text-center lg:text-start"
        initial="hidden"
        animate="show"
      >
        {/* Big Text */}
        <motion.span
          className={`${bebas.className} font-bold md:text-[120px] text-[80px] text-gray-900 `}
          variants={{
            hidden: { x: 100, opacity: 0 },
            show: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          DEVELOPER
        </motion.span>

        <motion.span
          className={`${lora.className} text-gray-800 font-medium md:text-end text-center`}
          variants={{
            hidden: { x: -40, opacity: 0 },
            show: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
            },
          }}
        >
          A frontend developer crafting web experiences<br></br> with creativity
          and code.
        </motion.span>
      </motion.div>
    </div>
  );
}

export default Home;
