import React from 'react'
import response from '../data/dataObj'


const Projects = () => {
    const projects = response.ProjectsResponse;
    return (
        <>
            {projects.map((ele) => {
                return (
                    <div className='rounded-xl'>
                        <div className="relative w-[80vw] h-[280px] md:w-[460px] bg-cover hover:scale-105 duration-500 ease-in-out" key={ele.id}
                            style={{ backgroundImage: `url(${ele.imgPath})`}}>

                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                            <div className="absolute bottom-4 mx-4 text-left">
                                <h1 className="text-2xl font-semibold text-white">{ele.headerText}</h1>
                                <p className="mt-2 text-sm text-gray-300">
                                    {ele.infoText}
                                </p>
                                <a href="#"
                                 className="mt-4 block text-center w-full rounded-md bg-none bg-transparent px-2 py-1.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
