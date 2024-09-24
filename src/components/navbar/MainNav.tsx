import links from "./navlinks";
import Link from "next/link";
import Image from "next/image";

import doubleArrow from "@/assets/double-arrow.svg";
import { Button } from "../ui/button";

const MainNav = () => {
  return (
    <>
      <section className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <ul className="flex space-x-4">
          {links.map((link) => (
            <li key={link.url}>
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="hidden lg:flex space-x-2">
        <Button variant="ghost">Login</Button>

        <Button className="gap-2">
          Get Started
          <Image src={doubleArrow} height={20} width={20} alt="doodle" />
        </Button>
      </section>
    </>
  );
};

export default MainNav;
