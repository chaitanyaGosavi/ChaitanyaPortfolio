import React from 'react'
import Projects from './Projects'

const ProjectsSection = () => {
    return ( 
        <div className='w-screen h-auto flex-col gap-y-10 justify-start items-center mt-[20vh]' id='projectSection'>
            <div className='w-[90vw] mx-auto rounded-3xl h-auto flex-colp-8 mt-36 py-5 px-10 ProjectsSection bg-cover justify-start items-center card'>
                <p className='text-sm md:text-lg text-gray-300 text-opacity-80 uppercase'>Personal Work</p>
                <h2 className='text-4xl md:text-6xl my-2 flex-1 font-semibold text-gray-200 Hero-header'><span>P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span><span>s</span></h2>
                <div className='flex-1 w-full my-20 h-auto mx-auto flex justify-center items-center gap-x-6 gap-y-20 flex-wrap'>
                    <Projects />
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection
