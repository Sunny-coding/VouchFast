import Image from "next/image";

import { cn } from "@/lib/utils";
import { grotesque } from "../font/grotesque";
import { RoughNotation } from "react-rough-notation";

import arrowSvg from "@/assets/arrow.svg";
import invertArrowSvg from "@/assets/arrow-invert.svg";
import { Fragment } from "react";

const TestimonialStep = ({ emoji, text }: { emoji: string; text: string }) => {
  return (
    <section className="w-full max-w-80">
      <span className="text-5xl">{emoji}</span>
      <p className="text-xl mt-5 text-gray-400">{text}</p>
    </section>
  );
};

const Consequences = () => {
  const steps = [
    { emoji: "🧑✍️", text: "Endless testimonials", arrow: arrowSvg },
    { emoji: "🔄", text: "Approval loops", arrow: invertArrowSvg },
    { emoji: "📉", text: "Brand image weakens", arrow: arrowSvg },
    { emoji: "😕", text: "Reputation fades" },
  ];

  return (
    <div className="container mx-auto mt-36 mb-16 text-center px-5 lg:px-0">
      <h1
        className={cn(
          "text-4xl lg:text-6xl font-bold mx-auto max-w-5xl",
          grotesque.className,
        )}
      >
        This can happen to{" "}
        <RoughNotation type="circle" show>
          <span className="text-red-600 p-2">You</span>
        </RoughNotation>{" "}
        right now!
      </h1>

      <p className="text-xl font-medium text-gray-400 mt-5 lg:mt-10">
        80% of potential clients need social proof to trust your business.
      </p>

      <div className="max-w-5xl mx-auto mt-16 lg:mt-24 flex flex-col md:flex-row items-center justify-between gap-5">
        {steps.map((step) => (
          <Fragment key={step.text}>
            <TestimonialStep emoji={step.emoji} text={step.text} />
            {step.arrow && (
              <Image
                src={step.arrow}
                width={50}
                height={50}
                alt=""
                className="rotate-90 my-5 md:rotate-0 md:my-0"
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Consequences;
