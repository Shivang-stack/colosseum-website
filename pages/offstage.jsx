import Image from 'next/image';
import React from 'react';
import offstageImg from '../public/assets/projects/offstage.jpeg';
import Link from 'next/link';

const crypto = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={offstageImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Off Stage Events</h2>
          <h3>Here are Some details</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Debate</p>
          <h4>Details</h4>
          <p>
            details about event...
          </p>
          <h4>Date  : </h4>
          <h4>Time  : </h4>
          <h4>Venue : </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>Register</button>
          
        </div>
        
        <div className='col-span-4'>
          <p>Mobile Photography</p>
          <h4>Details</h4>
          <p>
            details about event...
          </p>
          <h4>Date  : </h4>
          <h4>Time  : </h4>
          <h4>Venue : </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>Register</button>
          
        </div>

        <div className='col-span-4'>
          <p>Beg, Borrow and Steal</p>
          <h4>Details</h4>
          <p>
            details about event...
          </p>
          <h4>Date  : </h4>
          <h4>Time  : </h4>
          <h4>Venue : </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>Register</button>
          
        </div>

        <div className='col-span-4'>
          <p>Treasure Hunt</p>
          <h4>Details</h4>
          <p>
            details about event...
          </p>
          <h4>Date  : </h4>
          <h4>Time  : </h4>
          <h4>Venue : </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>Register</button>
          
        </div>

        <div className='col-span-4'>
          <p>Painting, Sketching Or Art</p>
          <h4>Details</h4>
          <p>
            details about event...
          </p>
          <h4>Date  : </h4>
          <h4>Time  : </h4>
          <h4>Venue : </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>Register</button>
          
        </div>

        <div className='col-span-4'>
          <p>Minute to Win</p>
          <h4>Details</h4>
          <p>
            details about event...
          </p>
          <h4>Date  : </h4>
          <h4>Time  : </h4>
          <h4>Venue : </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>Register</button>
          
        </div>

        <div className='col-span-4'>
          <p>Know it or Blow it</p>
          <h4>Details</h4>
          <p>
            details about event...
          </p>
          <h4>Date  : </h4>
          <h4>Time  : </h4>
          <h4>Venue : </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>Register</button>
          
        </div>

        <div className='col-span-4'>
          <p>Poetry</p>
          <h4>Details</h4>
          <p>
            details about event...
          </p>
          <h4>Date  : </h4>
          <h4>Time  : </h4>
          <h4>Venue : </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>Register</button>
          
        </div>

        <div className='col-span-4'>
          <p>Short Film</p>
          <h4>Details</h4>
          <p>
            details about event...
          </p>
          <h4>Date  : </h4>
          <h4>Time  : </h4>
          <h4>Venue : </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>Register</button>
          
        </div>

        <div className='col-span-4'>
          <p>E-Gaming</p>
          <h4>Details</h4>
          <p>
            details about event...
          </p>
          <h4>Date  : </h4>
          <h4>Time  : </h4>
          <h4>Venue : </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>Register</button>
          
        </div>

        <Link href='/#registrations'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default crypto;
