import React from 'react'

const Navbar = () => {
    return (
        <div className='w-screen bg-[#78787875] fixed z-10'>
            <div className="w-screen lg:w-[80vw] lg:mx-auto flex items-center justify-between p-5">
                <div className='flex-1 w-full'>
                    <a href="#"><img className='w-10 h-10 md:w-16 md:h-16' src="src\assets\logoBG.png" alt="logo" /> </a>
                </div>
                <div className="flex-1">
                    <ul className="w-full flex text-sm md:text-lg lg:text-2xl items-center justify-center xl:space-x-5 space-x-1 uppercase">
                        <li className='flex-1'>
                            <a
                                href="#techSkillSection"
                                className="w-full px-4 py-1 rounded-lg font-semibold text-stone-100 hover:text-sky-600 hover:bg-stone-100 bg-opacity-25 ease-in-out duration-300"
                            >
                                Skills
                            </a>
                        </li>
                        <li className='flex-1'>
                            <a
                                href="#projectSection"
                                className="w-full px-4 py-1 rounded-lg font-semibold text-stone-100 hover:text-sky-600 hover:bg-stone-100 bg-opacity-25 ease-in-out duration-300"
                            >
                                Projects
                            </a>
                        </li>
                        <li className='flex-1'>
                            <a
                                href="#experienceSection"
                                className="w-full px-4 py-1 rounded-lg font-semibold text-stone-100 hover:text-sky-600 hover:bg-stone-100 bg-opacity-25 ease-in-out duration-300"
                            >
                                Experience
                            </a>
                        </li>
                        <li className='flex-1'>
                            <a
                                href="#contactSection"
                                className="w-full px-4 py-1 rounded-lg font-semibold text-stone-100 hover:text-sky-600 hover:bg-stone-100 bg-opacity-25 ease-in-out duration-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>



    )
}

export default Navbar
