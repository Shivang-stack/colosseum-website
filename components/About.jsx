import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>What&#39;s this fest is all about</h2>
          <p className='py-2 text-gray-300'>It&#39;s not your Normal College Fest</p>
          <p className='py-2 text-gray-300'>
          A WISE MAN ONCE SAID:
          “AFTER THE RAIN, THE SUN REAPPEARS. 
          THERE IS LIFE. AFTER THE PAIN THE JOY WILL STILL BE HERE.”
          And, all of us gathered here, after 2 long gut-wrenching years,
          post the pandemic, are living examples, 
          that we will always rise from everything that happens to us.
          COLOSSEUM isnt just a fest, its a legacy in AMCEC that we are 
          so proud to carry forward.
          Let&#39;s GET SET GO for everything that&#39;s coming up!! 
          <br/>
          BUCKLE UP YOUR SEATBELTS.
          </p>
          <p className='py-2 text-gray-300'>
          Would request you all to show up in large numbers. Get along & make memories with your friends, enjoy the day and also do participate in events & get a chance to win exciting prizes!
          </p>
          {/* <p className='py-2 text-gray-300 underline cursor-pointer'>Check out some of my latest projects.</p> */}
        </div>
        {/* <div className='w-full h-auto m-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <img className='rounded-xl' src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" alt="/" />
        </div> */}
      </div>
    </div>
  );
};

export default About;
