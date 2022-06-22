import Image from 'next/image';
import React from 'react';
import onstageImg from '../public/assets/projects/onstage.jpg';
import Link from 'next/link';

const onstage = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={onstageImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>On Stage Events</h2>
          <h3>Here are Some details</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
      <div className='col-span-4'>
          <h2>Solo Dance</h2>
          <h4>Details</h4>
          <p>
            details about event...
          </p>
          <h4>Date  : </h4>
          <h4>Time  : </h4>
          <h4>Venue : </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://forms.gle/7TiAUTs1u2rVUYnU9'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>
      
        <div className='col-span-4'>
          <h2>Group Dance</h2>
          <h4>Details</h4>
          <p>
            details about event...
          </p>
          <h4>Date  : </h4>
          <h4>Time  : </h4>
          <h4>Venue : </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://forms.gle/z8ab8CFLze24APUdA'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <h2>Dance Battle</h2>
          <h4>Details</h4>
          <p>
            details about event...
          </p>
          <h4>Date  : </h4>
          <h4>Time  : </h4>
          <h4>Venue : </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='//forms.gle/z8ab8CFLze24APUdA'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <h2>Solo Singing</h2>
          <h4>Details</h4>
          <p>
            Faculty Coordinators:<br/>
            Shilpa RM (EEE)<br/>
            Dr Usha Ravi (EC) <br/>
            Student Coordinator:<br/>
            Sankarshana Hooli:9901253065<br/> 
            Dhanusha:9620875845
          </p>
          <h4>Date  : </h4>
          <h4>Time  : </h4>
          <h4>Venue : </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href='https://forms.gle/xJYGTcnPUiEgwQgq9'>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <p>Mad Ads</p>
          <h4>Details</h4>
          <p>
            details about event...
          </p>
          <h4>Date  : </h4>
          <h4>Time  : </h4>
          <h4>Venue : </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href=''>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <p>Drama, Skit And Mimes</p>
          <h4>Details</h4>
          <p>
            details about event...
          </p>
          <h4>Date  : </h4>
          <h4>Time  : </h4>
          <h4>Venue : </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href=''>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <p>Standup Comedy</p>
          <h4>Details</h4>
          <p>
            details about event...
          </p>
          <h4>Date  : </h4>
          <h4>Time  : </h4>
          <h4>Venue : </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href=''>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <p>Mr And Ms AMC</p>
          <h4>Details</h4>
          <p>
            details about event...
          </p>
          <h4>Date  : </h4>
          <h4>Time  : </h4>
          <h4>Venue : </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href=''>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <p>Beat Boxing</p>
          <h4>Details</h4>
          <p>
            details about event...
          </p>
          <h4>Date  : </h4>
          <h4>Time  : </h4>
          <h4>Venue : </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href=''>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        <div className='col-span-4'>
          <p>Dj Night</p>
          <h4>Details</h4>
          <p>
            details about event...
          </p>
          <h4>Date  : </h4>
          <h4>Time  : </h4>
          <h4>Venue : </h4>
          
          <button className='px-8 py-2 mt-4 mr-8'>
            <Link  href=''>
            <a>Register</a>
            </Link>
            </button>
          
        </div>

        
        <Link href='/#registrations'>
            <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default onstage;
