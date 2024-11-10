import React from 'react'
import "../TechSkillSphere.css"
import TechSkillSphere from './TechSkillSphere'

const TechSkills = () => {
  return (
    <div className='w-screen h-auto min-h-[100vh] p-4 bg-[#f4f4f6]' id='techSkillSection'>
      <div className='w-[90vw] h-full mx-auto  p-8 mt-10 md:mt-48 flex-col justify-start items-center'>
        <p className='text-sm md:text-lg text-gray-900 text-opacity-80 uppercase'>My Skills</p>
        <h2 className='text-4xl md:text-6xl my-2 flex-1 font-semibold text-gray-700 Hero-header'><span>T</span><span>e</span><span>c</span><span>h</span><span>n</span><span>o</span><span>l</span><span>o</span><span>g</span><span>i</span><span>e</span><span>s</span></h2>
        <div className='flex-1 w-full h-auto mt-12 md:mt-20 mx-auto flex justify-center items-center md:gap-x-52 gap-x-8 gap-y-20 flex-wrap techSkillCnt'>
          <TechSkillSphere />
        </div>
      </div>
    </div>
  )
}

export default TechSkills
