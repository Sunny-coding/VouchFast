import productImage from '@/assets/product.jpg';

import Image from 'next/image';

const VideoBox = () => {
  return (
    <div className='container mx-auto my-16 px-5 lg:px-0'>
      <div className='rounded-xl bg-gradient-to-br from-cyan-500 via-violet-600 to-primary p-1 lg:p-16'>
        <Image
          src={productImage}
          alt='Product'
          className='rounded-2xl p-2'
        />
      </div>
    </div>
  );
};

export default VideoBox;
