import Link from "next/link";

import MainNav from "./MainNav";
import MobileNav from "./mobile";

import { Sansita } from "next/font/google";

const sansita = Sansita({ subsets: ["latin"], weight: "700" });

const Navbar = () => {
  return (
    <nav className="relative">
      <div className="container mx-auto px-5 lg:px-0 py-4 flex justify-between items-center text-lg">
        <h1 className="text-xl">
          <Link href={"/"} className={`text-3xl ${sansita.className}`}>
            VouchFast
          </Link>
        </h1>

        <MainNav className="hidden lg:block" />
        <MobileNav className="lg:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
