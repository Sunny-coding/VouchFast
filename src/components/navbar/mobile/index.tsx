"use client";

import { useState } from "react";
import MobileNav from "./MobileNav";
import Image from "next/image";

import menuIcon from "@/assets/menu-01.svg";

interface NavProps {
  className?: string;
}

const Index = ({ className }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={className}>
      <Image
        src={menuIcon}
        alt="Menu Icon"
        width={30}
        height={30}
        onClick={toggle}
      />
      {isOpen && <MobileNav />}
    </div>
  );
};

export default Index;
