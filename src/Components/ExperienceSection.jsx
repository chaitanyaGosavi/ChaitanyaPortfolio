import React from 'react'
import response from '../data/dataObj'

const ExperienceSection = () => {
  const timelineItems = response.timelineItems;
  const tobecontinued = response.toBeContinued;

  return (
    <div
      className="w-full h-auto min-h-[100vh] bg-[#f4f4f6]"
      id="experienceSection"
    >
      <div className="w-[90vw] h-auto mx-auto px-10 py-5 flex-col gap-y-10 justify-start items-center">
        <p className="text-sm md:text-lg mt-48 text-gray-900 text-opacity-80 uppercase">
          What I've done so far
        </p>
        <h2 className="text-4xl md:text-6xl my-2 flex-1 font-semibold text-gray-700 Hero-header">
          <span>W</span>
          <span>o</span>
          <span>r</span>
          <span>k</span> <span>E</span>
          <span>x</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
          <span>i</span>
          <span>e</span>
          <span>n</span>
          <span>c</span>
          <span>e</span>
        </h2>

        {/* Timeline wrapper */}
        <div className="relative flex flex-col my-20 w-full gap-5">
          {/* Vertical Line */}
          <div className="absolute left-2 md:left-3 h-full w-[2px] bg-gray-500"></div>

          {/* To be continued box */}


          <div className="flex items-start">
            <span className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-md mt-2 relative z-10"></span>
            <div className="w-6"></div>
            <div className="shadow-lg shadow-gray-500 rounded-xl p-6 bg-[#6b7583] w-full md:w-2/3">
              <h3 className="font-bold text-lg md:text-2xl text-gray-50">
                {tobecontinued.title}
              </h3>
            </div>
          </div>

          {timelineItems.map((item, index) => (
            <div key={index} className="flex items-start">
              {/* Dot */}
              <span className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white shadow-md mt-2 relative z-10"></span>

              {/* Connector to line */}
              <div className="w-6"></div>

              {/* Card */}
              <div className="shadow-lg shadow-gray-400 rounded-xl p-6 bg-[#566985] w-full md:w-2/3">
                <h3 className="font-bold text-lg md:text-2xl text-gray-50">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-lg">{item.company}</p>
                <p className="text-gray-200 mt-1">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default ExperienceSection
