import React from "react";
import Image from "next/image";

import arrowSvg from "@/assets/curve-arrow-left.svg";

const Newsletter = () => {
  return (
    <div className="container mx-auto px-5 lg:px-0">
      <div className="relative bg-zinc-800 px-8 py-12 rounded-3xl">
        <h1 className="text-center text-3xl lg:text-5xl font-bold">
          Subscribe to the Newsletter
        </h1>

        <h2 className="text-center lg:text-xl py-5 font-medium text-gray-400">
          For occassional updates and tech blogs.
        </h2>

        <form className="flex items-center h-14 lg:h-16 max-w-2xl mx-auto bg-zinc-700 p-2 rounded-full">
          <input
            type="email"
            className="hidden lg:block w-full h-full pl-5 bg-transparent rounded-lg text-white outline-none lg:placeholder:text-lg"
            placeholder="Enter your email address"
          />

          <input
            type="email"
            className="lg:hidden w-full h-full pl-5 bg-transparent rounded-lg text-white outline-none lg:placeholder:text-xs"
            placeholder="Email address"
          />

          <button className="bg-white flex items-center h-full px-10 text-black text-sm lg:text-lg transition duration-200 hover:bg-primary-500 font-bold rounded-full">
            Subscribe
          </button>

          <Image
            src={arrowSvg}
            alt="doodle"
            height={200}
            width={200}
            className="absolute top-10 right-32"
          />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
