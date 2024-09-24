import { MdAddBusiness } from "react-icons/md";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { SiFreelancer } from "react-icons/si";

import type { IconType } from "react-icons";
import { cn } from "@/lib/utils";
import { grotesque } from "../font/grotesque";

interface BoxProps {
  heading: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: IconType;
}

const Box = ({ heading, description, Icon }: BoxProps) => {
  return (
    <div className="bg-accent p-10 mx-5 lg:mx-0 rounded-2xl transition duration-200 lg:hover:scale-105 hover:rotate-1">
      <Icon size={50} className="text-primary" />
      <h2
        className={cn(
          "text-lg lg:text-3xl font-black mt-10",
          grotesque.className,
        )}
      >
        {heading}
      </h2>
      <p className="mt-5 text-zinc-400 text-lg font-medium">{description}</p>
    </div>
  );
};

const uses = [
  {
    heading: "Freelancers",
    description: "Collect more testimonials to make more money 💰",
    Icon: SiFreelancer,
  },
  {
    heading: "Agencies",
    description: "Streamline testimonial collection and approval across teams.",
    Icon: MdAddBusiness,
  },
  {
    heading: "SaaS Founders",
    description:
      "Automate gathering customer feedback and build trust with potential users.",
    Icon: RiLightbulbFlashLine,
  },
];

const Audience = () => {
  return (
    <div className="container mx-auto pt-24 pb-16 w-full">
      <h1
        className={cn(
          "text-center text-4xl lg:text-9xl font-bold my-16",
          grotesque.className,
        )}
      >
        Who is VouchFast for?
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {uses.map((use) => {
          return <Box key={use.heading} {...use} />;
        })}
      </section>
    </div>
  );
};

export default Audience;
