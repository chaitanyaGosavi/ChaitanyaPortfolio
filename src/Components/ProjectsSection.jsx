import React from "react";
import Projects from "./Projects";

const ProjectsSection = () => {
  return (
    <div
      className="w-screen h-auto flex-col gap-y-10 justify-start items-center bg-[#0e0d0d]"
      id="projectSection"
    >
      <div className="w-[90vw] mx-auto h-auto p-8 py-5 px-10 flex flex-col bg-cover justify-start items-start">
        {/* Section Header */}
        <p className="text-sm md:text-lg mt-48 text-gray-300 text-opacity-80 uppercase">
          Personal Work
        </p>
        <h2 className="text-4xl md:text-6xl my-4 font-semibold text-gray-200 project-header">
          <span>P</span>
          <span>r</span>
          <span>o</span>
          <span>j</span>
          <span>e</span>
          <span>c</span>
          <span>t</span>
          <span>s</span>
        </h2>

        {/* Masonry Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
          {/* You can map your <Projects /> component like this */}
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
