import Image from "next/image";

import Doodles from "./Doodles";

import heroSvg from "@/assets/hero.svg";
import doubleArrow from "@/assets/double-arrow.svg";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RoughNotation } from "react-rough-notation";
import { grotesque } from "@/components/font/grotesque";

const Hero = () => {
  return (
    <div className="relative pb-28">
      <Doodles />

      <div className="container mx-auto relative">
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

        <h1
          className={cn(
            "text-5xl lg:text-8xl mt-4 lg:mt-6 text-center max-w-6xl mx-auto font-black",
            grotesque.className,
          )}
        >
          Your{" "}
          <RoughNotation type="highlight" iterations={1} color="#22c55e" show>
            <span className="text-background px-2">ultimate</span>
          </RoughNotation>{" "}
          Testimonial collecting tool.
        </h1>

        <p className="text-lg lg:text-xl max-w-4xl mt-10 text-center mx-auto text-gray-300">
          VouchFast offers everything you need to fetch testimonials from your
          clients.
        </p>

        <Button className="absolute rounded-full px-7 py-4 left-1/2 -translate-x-1/2 mt-10 text-2xl gap-2">
          Get Started
          <Image src={doubleArrow} height={20} width={20} alt="doodle" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
