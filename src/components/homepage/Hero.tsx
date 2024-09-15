import Image from "next/image";

import heroSvg from "@/assets/hero.svg";
import starSvg from "@/assets/star.svg";
import spiralSvg from "@/assets/spiral.svg";
import doubleArrow from "@/assets/double-arrow.svg";

import { RoughNotation } from "react-rough-notation";

const Hero = () => {
  return (
    <div className="overflow-hidden pb-28">
      <Image
        src={starSvg}
        width={300}
        height={300}
        alt="doodle"
        className="absolute left-0 bottom-0 -translate-y-16 lg:top-0 h-[150px] w-[150px] lg:h-[300px] lg:w-[300px] -translate-x-1/2 lg:translate-y-72 opacity-20 -z-10"
      />
      <Image
        src={spiralSvg}
        width={200}
        height={200}
        alt="doodle"
        className="absolute right-0 bottom-0 -translate-y-52 translate-x-10 lg:translate-y-0 lg:translate-x-0 lg:top-1/4 h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] rotate-45 opacity-30 -z-10"
      />

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
          Applauz offers everything you need to fetch testimonials from your
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
