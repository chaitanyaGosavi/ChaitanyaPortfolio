import React from 'react'
import response from '../data/dataObj'

const ExperienceSection = () => {
  const timelineItems = response.timelineItems;
  const tobecontinued = response.toBeContinued;
  return (
    <div className='w-full mt-[20vh]'  id='experienceSection'>
      <div className='w-[90vw] h-auto mx-auto px-10 py-5 rounded-3xl flex-col gap-y-10 justify-start items-center card'>
        <p className='text-lg text-gray-300 text-opacity-80 uppercase'>What I've done so far</p>
        <h2 className='text-5xl my-2 flex-1 font-semibold text-gray-200 Hero-header'><span>W</span><span>o</span><span>r</span><span>k</span> <span>E</span><span>x</span><span>p</span><span>e</span><span>r</span><span>i</span><span>e</span><span>n</span><span>c</span><span>e</span></h2>
        <div className="relative flex flex-col my-20 items-center">
          <div className="absolute w-2 bg-gray-300 h-full left-1/2 transform -translate-x-1/2 "></div>
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`w-[75%] flex justify-end ${item.position === 'left' ? 'lg:justify-start' : 'lg:justify-end'} mb-8`}
            >
              <div className={`relative w-1/2 ${item.position === 'left' ? 'pr-6' : 'pl-6'}`}>
                <div className="shadow-lg shadow-gray-500 rounded-lg p-6 timelineCard">
                  <h3 className="font-bold text-3xl text-gray-50">{item.title}</h3>
                  <p className="text-gray-900 text-xl">{item.company}</p>
                  <p className="text-gray-50">{item.date}</p>
                </div>
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 w-10 h-4 bg-gray-500 ${item.position === 'left' ? '-right-2 rounded-r-lg' : '-left-2 rounded-l-lg'
                    }`}
                ></div>
              </div>
            </div>
          ))}
          <div
            className={`w-[75%] flex justify-end ${tobecontinued.position === 'left' ? 'lg:justify-start' : 'lg:justify-end'} mb-8`}
          >
            <div className={`relative w-1/2 ${tobecontinued.position === 'left' ? 'pr-6' : 'pl-6'}`}>
              <div className="shadow-lg shadow-gray-500 flex rounded-lg p-6 timelineCard justify-start items-center gap-x-2">
                <h3 className="font-bold text-3xl text-gray-50">{tobecontinued.title}</h3>
              </div>
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 w-10 h-4 bg-gray-500 ${tobecontinued.position === 'left' ? '-right-2 rounded-r-lg' : '-left-2 rounded-l-lg'
                  }`}
              ></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ExperienceSection
