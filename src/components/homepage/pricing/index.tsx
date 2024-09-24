import { grotesque } from "@/components/font/grotesque";
import PricingBox from "./PricingBox";
import pricingModel from "./pricingModel";
import { cn } from "@/lib/utils";

const Pricing = () => {
  return (
    <div className="container mx-auto px-5 lg:px-0 lg:my-36 mb-24">
      <h1
        className={cn(
          "text-7xl md:text-9xl font-black text-center",
          grotesque.className,
        )}
      >
        Pricing
      </h1>
      <p className="text-xl font-medium text-center mt-3 text-gray-400">
        Whether you are a freelancer, or an agency owner or a Founder,
        <br /> we have your back.
      </p>

      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 lg:px-16">
        {pricingModel.map((pricing, index) => (
          <PricingBox key={index} {...pricing} />
        ))}
      </section>
    </div>
  );
};

export default Pricing;
