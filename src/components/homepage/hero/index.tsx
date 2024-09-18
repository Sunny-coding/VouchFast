import Image from "next/image";

import Doodles from "./Doodles";

import heroSvg from "@/assets/hero.svg";
import doubleArrow from "@/assets/double-arrow.svg";

import { RoughNotation } from "react-rough-notation";

const Hero = () => {
  return (
    <div className="relative pb-28">
      <Doodles />

      <div className="container mx-auto">
        <Image
          src={heroSvg}
          width={30}
          height={30}
          alt="doodle"
          className="mt-16 mx-auto"
        />

        <h2 className="text-center text-lg lg:text-2xl mb-5 text-gray-400">
          One-stop platform
        </h2>

        <h1 className="text-5xl lg:text-6xl mt-4 lg:mt-6 text-center max-w-5xl mx-auto font-black">
          Your{" "}
          <RoughNotation type="highlight" iterations={1} color="#20e1db" show>
            <span className="text-background px-2">ultimate</span>
          </RoughNotation>{" "}
          Testimonial collecting tool.
        </h1>

        <p className="text-lg lg:text-xl max-w-4xl mt-10 text-center mx-auto text-gray-300">
          VouchFast offers everything you need to fetch testimonials from your
          clients.
        </p>

        <button className="px-10 py-4 mt-10 mx-auto text-xl flex items-center gap-2 hover:gap-3 rounded-full bg-white hover:bg-primary-400 transition duration-100 text-black font-black">
          Get Started
          <Image src={doubleArrow} height={20} width={20} alt="doodle" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
