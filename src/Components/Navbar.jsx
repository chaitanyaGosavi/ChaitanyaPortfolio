import React from 'react'

const Navbar = () => {
    return (
        <div className='w-screen bg-[#151a22] fixed z-10'>
            <div className="w-full lg:w-[80vw] lg:mx-auto flex items-center justify-center p-2">
                <div className='flex-1 w-1/4'>
                    <a href="#"><img className='w-8 h-8 md:w-16 md:h-16' src="\assets\logoBG.png" alt="logo" /> </a>
                </div>
                <div className="flex-1 w-3/4">
                    <ul className="w-full flex text-[12px] md:text-lg lg:text-xl items-center md:justify-between justify-center xl:space-x-5 uppercase">
                        <li className='flex-1'>
                            <a
                                href="#techSkillSection"
                                className="w-full px-2 md:px-4 py-1 rounded-lg font-semibold text-[#f4f4f6] hover:text-[#151a22] hover:bg-stone-100 bg-opacity-25 ease-in-out duration-300"
                            >
                                Skills
                            </a>
                        </li>
                        <li className='flex-1'>
                            <a
                                href="#projectSection"
                                className="w-full px-2 md:px-4 py-1 rounded-lg font-semibold text-[#f4f4f6] hover:text-[#151a22] hover:bg-stone-100 active:bg-stone-100 active:text-[#151a22] bg-opacity-25 ease-in-out duration-300"
                            >
                                Projects
                            </a>
                        </li>
                        <li className='flex-1'>
                            <a
                                href="#experienceSection"
                                className="w-full px-2 md:px-4 py-1 rounded-lg font-semibold text-[#f4f4f6] hover:text-[#151a22] hover:bg-stone-100 bg-opacity-25 ease-in-out duration-300"
                            >
                                Experience
                            </a>
                        </li>
                        <li className='flex-1'>
                            <a
                                href="#contactSection"
                                className="w-full px-2 md:px-4 py-1 rounded-lg font-semibold text-[#f4f4f6] hover:text-[#151a22] hover:bg-stone-100 bg-opacity-25 ease-in-out duration-300"
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
