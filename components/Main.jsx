import React from 'react';
import Image from 'next/image';
import poster from '../public/assets/poster.jpeg';


const Main = () => {
  return (
    <div id='home' className=''>
      <div className='w-full h-auto m-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-4 S'>     
          <Image
                src={poster}
                alt='/'
                width='1280'
                height='771'
              />
      </div>
    </div>
  );
};

export default Main;
