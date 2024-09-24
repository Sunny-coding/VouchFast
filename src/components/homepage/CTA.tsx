import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { grotesque } from "../font/grotesque";

const CTA = () => {
  return (
    <div className="container mx-auto px-5 lg:px-0 mb-16">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center w-full bg-primary rounded-2xl px-8 py-5 lg:px-16 lg:py-12">
        <div>
          <h1
            className={cn(
              "text-3xl lg:text-6xl font-bold text-black",
              grotesque.className,
            )}
          >
            Ready to get started?
          </h1>
          <p className="mt-6 lg:text-xl font-bold w-full lg:max-w-2xl text-gray-800">
            Get the praise you deserve <br />
            Because bragging just got easier!
          </p>
        </div>

        <Button className="bg-black text-white px-10 py-3 hover:bg-black hover:scale-105">
          Get Started &rarr;
        </Button>
      </div>
    </div>
  );
};

export default CTA;
