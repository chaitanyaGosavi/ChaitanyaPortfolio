import React from 'react'
import response from '../data/dataObj'


const Projects = () => {
    const projects = response.ProjectsResponse;
    return (
        <>
            {projects.map((ele, index) => {
                return (
                    <div
                        key={index}
                        className={`relative rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-300 p-2 border-gray-800 border-2
                            ${index === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
                            ${index === 3 ? "sm:row-span-2" : ""}
                            ${index === 5 ? "sm:col-span-2" : ""}`}
                        style={{
                            backgroundImage: `url(${ele.imgPath})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Animate each card */}
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-300 animate-fadeIn"></div>

                        <div className="relative p-6 flex flex-col justify-end h-full animate-fadeIn">
                            <h1 className="text-lg font-semibold text-gray-100">{ele.headerText}</h1>
                            <p className="mt-1 text-xs text-gray-200">{ele.infoText}</p>
                            <a href={ele.linkToProject} className="w-40 mt-3 px-4 py-2 rounded-md bg-[#c9c9c99d] text-gray-100 hover:bg-gray-400 transition">
                                View Demo
                            </a>
                        </div>
                    </div>

                )
            }
            )}
        </>

    )
}

export default Projects
