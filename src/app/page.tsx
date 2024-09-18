import Audience from "@/components/homepage/Audience";
import Hero from "@/components/homepage/Hero";
import Testimonials from "@/components/homepage/Testimonials";
import ProductBox from "@/components/homepage/ProductBox";
import Newsletter from "@/components/Newsletter";
import CTA from "@/components/homepage/CTA";
import Pricing from "@/components/homepage/pricing";

const Homepage = () => {
  return (
    <>
      <Hero />
      <ProductBox />
      <Newsletter />
      <Testimonials />
      <Audience />
      <CTA />
      <Pricing />
    </>
  );
};

export default Homepage;
