import React from "react";

const CTA = () => {
  return (
    <div className="container mx-auto px-5 lg:px-0 mb-16">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center w-full bg-gradient-to-r rounded-2xl to-primary-300 from-secondary-800 via-secondary-700 px-8 py-5 lg:px-16 lg:py-14">
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold">
            Ready to get started?
          </h1>
          <p className="mt-6 lg:text-xl font-medium w-full lg:max-w-2xl">
            Elevate your social media planning and achieve new heights of
            efficiency and effectiveness with Postiz.
          </p>
        </div>

        <button className="mt-10 lg:mt-0 bg-black px-7 lg:px-12 py-3 lg:py-5 text-lg rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;
