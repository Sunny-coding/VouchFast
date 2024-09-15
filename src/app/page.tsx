import Audience from "@/components/homepage/Audience";
import Hero from "@/components/homepage/Hero";
import Testimonials from "@/components/homepage/Testimonials";
import ProductBox from "@/components/homepage/ProductBox";
import Newsletter from "@/components/Newsletter";

const Homepage = () => {
  return (
    <>
      <Hero />
      <ProductBox />
      <Newsletter />
      <Testimonials />
      <Audience />
    </>
  );
};

export default Homepage;
