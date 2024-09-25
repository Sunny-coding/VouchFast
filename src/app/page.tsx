import Audience from '@/components/homepage/Audience';
import Compare from '@/components/homepage/Compare';
import Consequences from '@/components/homepage/Consequences';
import CTA from '@/components/homepage/CTA';
import Hero from '@/components/homepage/hero';
import Pricing from '@/components/homepage/pricing';
import ProductBox from '@/components/homepage/ProductBox';
import Testimonials from '@/components/homepage/Testimonials';
import Newsletter from '@/components/Newsletter';

const Homepage = () => {
  return (
    <>
      <Hero />
      <ProductBox />
      <Consequences />
      <Compare />
      <Audience />
      <Newsletter />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
};

export default Homepage;
