import Image from "next/image";
import doubleArrow from "@/assets/double-arrow.svg";
import cn from "@/util/cn";

interface IProps {
  action?: () => void;
  className?: string;
}

const GetStarted = ({ action, className }: IProps) => {
  return (
    <button
      onClick={action}
      className={cn(
        "px-10 py-4 mt-10 text-xl flex items-center gap-2 hover:gap-3 rounded-full bg-white hover:bg-primary-400 transition duration-100 text-black font-black",
        className,
      )}
    >
      Get Started
      <Image src={doubleArrow} height={20} width={20} alt="doodle" />
    </button>
  );
};

export default GetStarted;
