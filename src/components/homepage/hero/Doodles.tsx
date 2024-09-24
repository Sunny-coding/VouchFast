"use client";

import Image from "next/image";

import starSvg from "@/assets/star.svg";
import leafSvg from "@/assets/leaf.svg";

import { motion } from "framer-motion";

const Doodles = () => {
  return (
    <>
      <motion.div
        initial={{ x: -100, y: 100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "backInOut" }}
        className="absolute left-0 -bottom-1/4 lg:bottom-0 h-[150px] w-[150px] lg:h-[300px] lg:w-[300px] -z-10"
      >
        <Image
          src={starSvg}
          width={300}
          height={300}
          alt="doodle"
          className="opacity-20 lg:opacity-30 animate-spin-very-slow"
        />
      </motion.div>

      <motion.div
        initial={{ x: 200, y: -100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1, ease: "backInOut" }}
        className="absolute right-0 -bottom-0 lg:top-0 lg:right-20 h-[100px] w-[100px] lg:h-[180px] lg:w-[180px] rotate-45 -z-10"
      >
        <Image
          src={leafSvg}
          width={300}
          height={300}
          alt="doodle"
          className="opacity-20 lg:opacity-30 animate-spin-slow"
        />
      </motion.div>
    </>
  );
};

export default Doodles;
