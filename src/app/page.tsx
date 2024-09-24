import Audience from "@/components/homepage/Audience";
import Hero from "@/components/homepage/hero";
import Testimonials from "@/components/homepage/Testimonials";
import ProductBox from "@/components/homepage/ProductBox";
import Newsletter from "@/components/Newsletter";
import CTA from "@/components/homepage/CTA";
import Pricing from "@/components/homepage/pricing";
import Consequences from "@/components/homepage/Consequences";

const Homepage = () => {
  return (
    <>
      <Hero />
      <ProductBox />
      <Consequences />
      <Audience />
      <Newsletter />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
};

export default Homepage;
