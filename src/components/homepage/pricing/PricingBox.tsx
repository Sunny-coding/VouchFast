import cn from "@/util/cn";
import { ImCheckboxChecked } from "react-icons/im";

interface IProps {
  heading: string;
  price?: number | string;
  audience: string;
  features: string[];
  active?: boolean;
}

const PricingBox = ({ heading, price, audience, features, active }: IProps) => {
  return (
    <div
      className={cn(
        "p-6 rounded-2xl flex flex-col justify-between transition duration-200 lg:hover:scale-105",
        active
          ? "bg-gradient-to-tr from-blue-700 to-primary-500"
          : "bg-zinc-900",
      )}
    >
      <div>
        <div
          className={cn(
            "pb-5 border-b",
            active ? "border-primary-700" : "border-zinc-800",
          )}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">{heading}</h3>
            {active && (
              <h4 className="bg-secondary-600 rounded-2xl px-2 py-1 text-xs animate-bounce">
                Popular
              </h4>
            )}
          </div>

          {price && (
            <div className={cn("mt-5", active && "text-black")}>
              <span
                className={cn(
                  "font-bold",
                  active ? "text-7xl text-black" : "text-6xl text-primary-500",
                )}
              >
                ${price}
              </span>
              <span className="ml-3 text-4xl font-medium">/mo</span>
            </div>
          )}

          {!price && <p className="mt-5 text-5xl font-bold">Contact Sales</p>}

          <p
            className={cn(
              "mt-5 font-medium",
              active ? "text-gray-50" : "text-gray-300",
            )}
          >
            Best for {audience}
          </p>
        </div>

        <section className="mt-12">
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                <div className="group flex items-start mt-3">
                  <ImCheckboxChecked
                    size={25}
                    className={cn(
                      "lg:group-hover:text-green-500 mt-1",
                      active && "lg:group-hover:text-black",
                    )}
                  />
                  <span
                    className={cn(
                      "ml-3 text-lg font-medium lg:group-hover:text-green-500",
                      active && "lg:group-hover:text-black",
                    )}
                  >
                    {feature}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <button
        className={cn(
          "group mt-12 text-xl transition duration-100 font-bold text-primary-500 w-min text-nowrap lg:hover:scale-105",
          active && "text-black font-black",
        )}
      >
        Get Started <span className="ml-1 group-hover:ml-2">&#x279B;</span>
      </button>
    </div>
  );
};

export default PricingBox;
