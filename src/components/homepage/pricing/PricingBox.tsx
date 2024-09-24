import { grotesque } from "@/components/font/grotesque";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface PricingBoxProps {
  heading: string;
  price: string | number;
  originalPrice?: string | number;
  description: string;
  features: string[];
  paymentType: string;
  active?: boolean;
}

const PricingBox = ({
  heading,
  price,
  originalPrice,
  description,
  features,
  paymentType,
  active,
}: PricingBoxProps) => {
  return (
    <div
      className={cn(
        "flex flex-col bg-accent shadow-lg rounded-lg p-10",
        active ? "border-2 border-primary relative" : "border border-zinc-700",
      )}
    >
      <div>
        <h3 className={cn("text-5xl font-black", grotesque.className)}>
          {heading}
        </h3>

        <p className="text-gray-300 mt-5">{description}</p>
      </div>

      <div className="flex items-center mt-7 pb-5 space-x-3 border-b border-zinc-700">
        {originalPrice && (
          <p className="text-xl text-gray-400 line-through">{originalPrice}</p>
        )}
        <p className={cn("text-5xl font-black", grotesque.className)}>
          {price}
        </p>
      </div>

      <div className="flex flex-col justify-between h-full">
        <ul className="mt-5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="text-primary" size={25} />
              <p className="ml-2 my-1 text-lg text-gray-300">{feature}</p>
            </li>
          ))}
        </ul>

        <Button className="mt-10 z-10">Get Started</Button>
      </div>
      <p className="text-gray-400 mt-2 text-center">{paymentType}</p>

      {active && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 right-0 -translate-y-1/2 w-min text-nowrap px-3 rounded-full bg-primary text-black font-medium">
          Launch offer
        </div>
      )}
    </div>
  );
};

export default PricingBox;
