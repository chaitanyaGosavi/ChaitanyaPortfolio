import React from 'react'
import response from '../data/dataObj'

const ExperienceSection = () => {
  const timelineItems = response.timelineItems;
  const tobecontinued = response.toBeContinued;
  return (
    <div className='w-full h-auto min-h-[100vh] bg-[#f4f4f6]'  id='experienceSection'>
      <div className='w-[90vw] h-auto mx-auto px-10 py-5 flex-col gap-y-10 justify-start items-center'>
        <p className='text-sm md:text-lg mt-48 text-gray-900 text-opacity-80 uppercase'>What I've done so far</p>
        <h2 className='text-4xl md:text-6xl my-2 flex-1 font-semibold text-gray-700 Hero-header'><span>W</span><span>o</span><span>r</span><span>k</span> <span>E</span><span>x</span><span>p</span><span>e</span><span>r</span><span>i</span><span>e</span><span>n</span><span>c</span><span>e</span></h2>
        <div className="relative flex flex-col my-20 items-center">
          <div className="absolute h-full left-0 md:left-1/2 md:transform -translate-x-1/2 outline-dashed outline-gray-900"></div>
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`w-full md:w-[75%] flex justify-end ${item.position === 'left' ? 'lg:justify-start' : 'lg:justify-end'} mb-8`}
            >
              <div className={`relative w-full md:w-1/2`}>
                <div className={`shadow-lg shadow-gray-500 rounded-lg p-6 bg-gray-800`}>
                  <h3 className="font-bold text-lg md:text-3xl text-gray-50">{item.title}</h3>
                  <p className="text-gray-400 text-sm md:text-xl">{item.company}</p>
                  <p className="text-gray-50">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
          <div
            className={`w-full md:w-[75%] flex justify-end ${tobecontinued.position === 'left' ? 'lg:justify-start' : 'lg:justify-end'} mb-8`}
          >
            <div className={`relative w-full md:w-1/2`}>
              <div className="shadow-lg shadow-gray-600 flex rounded-lg p-6 justify-start items-center gap-x-2 bg-gray-600">
                <h3 className="font-bold text-lg md:text-3xl text-gray-50">{tobecontinued.title}</h3>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ExperienceSection
