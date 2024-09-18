// import PricingBox from "./PricingBox";
// import pricingModel from "./pricingModel";

const Pricing = () => {
  return (
    <div className="container mx-auto px-5 lg:px-0 my-36">
      <h1 className="text-7xl font-black text-center">Pricing</h1>
      <p className="text-xl font-medium text-center mt-3 text-gray-400">
        Whether you are a freelancer, or an agency owner or a Founder,
        <br /> we have your back.
      </p>

      {/* <section className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
        {pricingModel.map((pricing, index) => (
          <PricingBox key={index} {...pricing} />
        ))}
      </section> */}
    </div>
  );
};

export default Pricing;
