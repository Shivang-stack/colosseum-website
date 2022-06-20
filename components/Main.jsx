import React from 'react';
import Image from 'next/image';
import poster from '../public/assets/poster.PNG';


const Main = () => {
  return (
    <div id='home' className=''>
      <div className='w-full h-auto m-auto  rounded-xl flex items-center justify-center p-4 S'>     
          <Image
                src={poster}
                alt='/'
                width='1123'
                height='784'
              />
      </div>
    </div>
  );
};

export default Main;
