import React from 'react';
import onstageImg from '../public/assets/projects/onstage.jpg';
import offstageImg from '../public/assets/projects/offstage.jpeg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='registrations' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Details/Registrations
        </p>
        <h2 className='py-4'>Explore Opportunities</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='On Stage Events'
            backgroundImg={onstageImg}
            projectUrl='/onstage'
          />
          <ProjectItem
            title='Off Stage Events'
            backgroundImg={offstageImg}
            projectUrl='/offstage'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
