import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Whats this fest is all about</h2>
          <p className='py-2 text-gray-300'>Its not your Normal College Fest</p>
          <p className='py-2 text-gray-300'>
          A WISE MAN ONCE SAID:<br/>
          “AFTER THE RAIN, THE SUN REAPPEARS.<br/> 
          THERE IS LIFE. AFTER THE PAIN THE JOY WILL STILL BE HERE.”<br/>
          And, all of us gathered here, after 2 long gut-wrenching years,<br/>
          post the pandemic, are living examples, <br/>
          that we will always rise from everything that happens to us.<br/>
          COLOSSEUM isnt just a fest, its a legacy in AMCEC that we are <br/>
          so proud to carry forward.<br/>
          Let&#39;s GET SET GO for everything that&#39;s coming up!!<br/> 
          <br/>
          BUCKLE UP YOUR SEATBELTS.
          </p>
          {/* <p className='py-2 text-gray-300'>
          Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industrys standard dummy text 
          ever since the 1500s, when an unknown printer took a galley of 
          type and scrambled it to make a type specimen book. It has 
          survived not only five centuries, but also the leap into electronic 
          typesetting, remaining essentially unchanged. It was popularised 
          in the 1960s with the release of Letraset sheets containing Lorem 
          Ipsum passages, and more recently with desktop publishing software 
          like Aldus PageMaker including versions of Lorem Ipsum
          
          </p> */}
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
