import React from 'react'
import response from '../data/dataObj'

const ContactDetails = () => {
    const contactDetails = response.contactDetails;
    <>
        <div className='w-full my-20 h-auto mx-auto flex-col justify-center items-center gap-x-6 gap-y-20 flex-wrap'>

            {
                contactDetails.map((ele) => {
                    return (
                        <div className='text-gray-50'>
                            <span style={{ backgroundImage: `url(${ele.imgPath})` }}></span>
                            <span className='text-gray-50'>{ele.data}</span>
                        </div>
                    )
                })
            }
        </div>
    </>
}

export default ContactDetails
