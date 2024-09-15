import productImage from "@/assets/opera.png";
import Image from "next/image";

const VideoBox = () => {
  return (
    <div className="container px-5 lg:px-0 mx-auto my-16">
      <div className="bg-gradient-to-br p-1 from-primary-600 to-secondary-500 via-violet-600 rounded-xl lg:p-16">
        <Image src={productImage} alt="Product" className="rounded-2xl p-2" />
      </div>
    </div>
  );
};

export default VideoBox;
