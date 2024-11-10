import React from 'react'
import response from '../data/dataObj'


const Projects = () => {
    const projects = response.ProjectsResponse;
    return (
        <>
            {projects.map((ele) => {
                return (
                    <div className='rounded-3xl border-2 border-[#151a22] p-2 md:p-[8px] bg-[#f4f4f6]'>
                        <div className="relative w-[80vw] h-[240px] rounded-2xl md:w-[460px] md:h-[280px] bg-cover projectCard" key={ele.id}
                        style={{backgroundImage:  `url(${ele.imgPath})`}}
                        >
                            <div className='bg-gray-900 bg-opacity-65 absolute w-full h-full rounded-2xl'></div>

                            <div className="absolute bottom-4 mx-4 text-left">
                                <h1 className="text-xl md:text-2xl font-semibold text-gray-100">{ele.headerText}</h1>
                                <p className="mt-2 text-xs md:text-sm text-gray-50">
                                    {ele.infoText}
                                </p>
                                <a href= {ele.linkToProject}
                                 className="mt-4 block text-center w-[120px] rounded-md bg-none bg-transparent px-2 py-1.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-gray-500 hover:text-[#f4f4f6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >View Demo</a>
                            </div>
                        </div>
                    </div> 
                )
            }
            )}
        </>

    )
}

export default Projects
