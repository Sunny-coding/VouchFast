import Audience from "@/components/homepage/Audience";
import Hero from "@/components/homepage/Hero";
import Testimonials from "@/components/homepage/Testimonials";
import VideoBox from "@/components/homepage/VideoBox";
import Newsletter from "@/components/Newsletter";

const Homepage = () => {
  return (
    <>
      <Hero />
      <VideoBox />
      <Newsletter />
      <Testimonials />
      <Audience />
    </>
  );
};

export default Homepage;
