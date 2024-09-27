// import PricingBox from "./PricingBox";
// import pricingModel from "./pricingModel";

const Pricing = () => {
  return (
    <div className='layout my-36'>
      <h1 className='text-center text-7xl font-black'>Pricing</h1>
      <p className='mt-3 text-center text-xl font-medium text-gray-400'>
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
