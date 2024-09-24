import Link from "next/link";

import MainNav from "./MainNav";
import MobileNav from "./mobile";

import { cn } from "@/lib/utils";
import { grotesque } from "../font/grotesque";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-background z-50">
      <div className="relative container mx-auto px-5 lg:px-0 py-4 flex justify-between items-center text-lg">
        <h1 className="text-xl">
          <Link
            href={"/"}
            className={cn(
              "text-xl lg:text-3xl font-black",
              grotesque.className,
            )}
          >
            VouchFast
          </Link>
        </h1>

        <MainNav />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
