import React from "react";
import links from "./navlinks";
import Link from "next/link";
import Image from "next/image";

import doubleArrow from "@/assets/double-arrow.svg";

interface MainNavProps {
  className?: string;
}

const MainNav = ({ className }: MainNavProps) => {
  return (
    <div className={className}>
      <section className="hidden lg:block absolute left-1/2 -translate-x-1/2">
        <ul className="flex space-x-4">
          {links.map((link) => (
            <li key={link.url}>
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="hidden lg:flex space-x-2">
        <button className="px-5 py-2 rounded-full border hover:border-primary-400 transition duration-200">
          Log In
        </button>

        <button className="px-5 py-2 flex items-center gap-2 rounded-full bg-white hover:bg-primary-400 transition duration-200 text-black font-black">
          Get Started
          <Image src={doubleArrow} height={20} width={20} alt="doodle" />
        </button>
      </section>
    </div>
  );
};

export default MainNav;
