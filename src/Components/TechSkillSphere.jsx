import React from 'react';
import response from '../data/dataObj'


const TechSkillSphere = () => {
    const skills = response.skillsResponse;
    return (
        <>
            {
                skills.map((ele) => {
                    return (
                        <div className='skillSphere shadow-xl shadow-gray-700 rounded-full'
                        key={ele.id}
                        >
                            <div
                                className="circle m-4 w-16 h-16"
                                style={{ backgroundImage: `url(${ele.imgPath})` }}
                            ></div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default TechSkillSphere
