import React from 'react'
import response from '../data/dataObj';
import ContactDetails from './ContactDetails';

const ContactFooter = () => {
    const resumeCard = response.resumeCard;
    const contactDetails = response.contactDetails;
    const downloadPDF = () => {
        const link = document.createElement('a');
        link.href = '/assets/Chaitanya_Resume.pdf'; // Replace with your actual PDF file path
        link.download = `Chaitanya's Resume.pdf`; // The name of the file after download
        link.click();
      };

    return (
        <div className='w-full h-auto bg-[#1f2937]'  id='contactSection'>
            <div className='w-[90vw] h-full mx-auto px-10 py-5 flex-col gap-y-10 justify-start items-center'>
                <p className='text-md md:text-lg text-gray-300 text-opacity-80 uppercase'>Reach Out To Me :{")"}</p>
                <h2 className='text-3xl md:text-5xl mt-2 mb-20 flex-1 font-semibold text-gray-200 Hero-header'><span>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span> <span>D</span><span>e</span><span>t</span><span>a</span><span>i</span><span>l</span><span>s</span></h2>
                <div className='flex-col flex md:flex-row w-full mx-auto h-auto justify-between items-start p-4 gap-4'>
                    <div className='flex-1 h-auto mx-auto flex flex-col gap-y-8 flex-wrap'>

                        {
                            contactDetails.map((ele) => {
                                return (
                                    <div className='flex gap-8'>
                                        <img className='h-8 w-8' src={ele.imgPath} alt="" />
                                        <a className={`text-gray-50 text-lg md:text-xl ${ele.isLink? 'cursor-pointer' : "cursor-default" }`} href={ele.isLink ? ele.data : '#'}>{ele.data}</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex-1 flex rounded-lg bg-none justify-start items-center h-full gap-x-2">
                        <img className='h-12 md:h-20 w-12 md:w-20' src='\assets\ResumeIcon.png' alt="" />
                        <h3 className="font-bold text-md md:text-lg xl:text-3xl text-gray-50">{resumeCard.title}</h3>
                        <button href="#"
                            onClick={downloadPDF}
                            className="mt-4 text-center w-15 h-auto rounded-md text-xl md:text-4xl font-semibold text-gray-100 shadow-sm bg-gray-400 bg-opacity-0 hover:bg-opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            <img
                                src='\assets\downloadIcon.png'
                                alt="Resume Icon"
                                className="w-10 h-10"
                            />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactFooter
