import React, { useState } from 'react'
import '../App.css'

const Hero = () => {
    const [rotation, setRotation] = useState(0);
    const [xPoint, setXPoint] = useState(0);
    const [ypoint, setYPoint] = useState(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        // Calculate the center of the element
        const elementCenterX = left + width / 2;
        const elementCenterY = top + height / 2;

        // Calculate the angle between the cursor and the center of the element
        const deltaX = clientX - elementCenterX;
        const deltaY = clientY - elementCenterY;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        setRotation(angle);
        setXPoint(deltaX);
        setYPoint(deltaY);
    };
    return (
        <div className='w-screen h-[100vh] HeroSection'>
            <div className='w-[80vw] h-full mx-auto flex-1 text-justify flex flex-col justify-center text-gray-400'>
                <div className='flex w-[50%] justify-start items-center'>
                    <h2 className='text-6xl lg:text-8xl font-semibold text-gray-200'>Hi</h2>
                    <section className="stage">
                        <figure onMouseMove={handleMouseMove} style={{ transform: `rotate(${rotation}deg)` }} className="ball" >
                            <span className="shadow"></span>
                            <span className="iris"></span>
                        </figure>
                    </section>
                </div>
                <h2 className='text-6xl lg:text-8xl my-4 font-semibold text-gray-200 Hero-header'>I'm <span>C</span><span>h</span><span>a</span><span>i</span><span>t</span><span>a</span><span>n</span><span>y</span><span><span>a</span></span></h2>
                <p className='text-xl xl:text-3xl text-gray-300 text-opacity-80'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </div>
        </div>
    )
}

export default Hero