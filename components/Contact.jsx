import Link from 'next/link';
import React from 'react';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-800 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <img
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src='https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80'
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Connect to our Coordinators</h2>
                <p>Checkout out our <Link href='https://www.instagram.com/colosseum_2022/'><a>Instagram</a></Link></p>
                <p className='py-4'>
                  Feel free to reach out to us
                </p>
                <p>
                Student Coordinators:
                </p>
                <p>Sibam Kumar    : 8310823408 </p>
                <p>Nishtha Sharma : 9783792439</p>
                <p>Shariq M Khan  : 7619114753</p>
              </div>
          
            </div>
          </div>

          {/* right */}
          
        </div>
        <div className='flex justify-center py-12'>
            <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
                </div>
            </Link>
        </div>
        <div className='flex justify-center py-12 text-[#5651e5]'>
          
        <a href='https://portfolio-nextjs-swart-kappa.vercel.app/'> &copy; Created by Shivang Yadav (CSE)</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
