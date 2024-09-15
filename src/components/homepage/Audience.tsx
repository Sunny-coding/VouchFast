import { MdAddBusiness } from "react-icons/md";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { SiFreelancer } from "react-icons/si";

import type { IconType } from "react-icons";

interface BoxProps {
  heading: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: IconType;
}

const Box = ({ heading, description, Icon }: BoxProps) => {
  return (
    <div className="bg-zinc-900 p-10 mx-10 lg:mx-0 rounded-2xl transition duration-200 lg:hover:scale-105 hover:rotate-1">
      <Icon size={50} className="text-primary-500" />
      <h2 className="text-lg lg:text-3xl font-bold mt-10">{heading}</h2>
      <p className="mt-5 text-gray-400 text-lg font-medium">{description}</p>
    </div>
  );
};

const uses = [
  {
    heading: "Freelancers",
    description:
      "Collect and showcase client testimonials to build trust and attract new projects.",
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
    <div className="container mx-auto pb-24">
      <h1 className="text-center text-2xl lg:text-5xl font-bold my-16">
        Who is Applauz for?
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
