import { redirect } from 'next/navigation';

import { getServerSession } from '@/server/session';

import Audience from '@/components/homepage/Audience';
import Compare from '@/components/homepage/Compare';
import CTA from '@/components/homepage/CTA';
import Hero from '@/components/homepage/hero';
import Pricing from '@/components/homepage/pricing';
import Problem from '@/components/homepage/Problem';
import ProductBox from '@/components/homepage/ProductBox';
import Testimonials from '@/components/homepage/Testimonials';

// import Newsletter from '@/components/Newsletter';

const Homepage = async () => {
  const session = await getServerSession();
  if (session) redirect('/dashboard');

  return (
    <>
      <Hero />
      <ProductBox />
      <Problem />
      <Compare />
      <Audience />
      <Pricing />
      <Testimonials />
      <CTA />
      {/* <Newsletter /> */}
    </>
  );
};

export default Homepage;
