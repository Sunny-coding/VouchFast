import links from "./navlinks";
import Link from "next/link";
import Image from "next/image";

import doubleArrow from "@/assets/double-arrow.svg";

import { Sansita } from "next/font/google";

const sansita = Sansita({ subsets: ["latin"], weight: "700" });

const Navbar = () => {
  return (
    <nav className="relative">
      <div className="container mx-auto py-4 flex justify-between items-center text-lg">
        <h1 className="text-xl">
          <Link href={"/"} className={`text-3xl ${sansita.className}`}>
            Applauz
          </Link>
        </h1>

        <section className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <ul className="flex space-x-4">
            {links.map((link) => (
              <li key={link.url}>
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex space-x-2">
          <button className="px-5 py-2 rounded-full border hover:border-primary-400 transition duration-200">
            Log In
          </button>

          <button className="px-5 py-2 flex items-center gap-2 rounded-full bg-white hover:bg-primary-400 transition duration-200 text-black font-black">
            Get Started
            <Image src={doubleArrow} height={20} width={20} alt="doodle" />
          </button>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
