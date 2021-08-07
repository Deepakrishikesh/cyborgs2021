import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
const Footer = () => {
    return (
        <>
            <div className='flex justify-center bg-gray-900 blur-md m-auto lg:flex-row'>
                <div className='flex flex-col justify-start'>
                    <h1 className='text-xl text-white m-auto mt-4'>Contact us</h1>
                    
                    <div className='flex justify-start items-center m-auto mt-6 md:ml-0'>
                        <a href='https://instagram.com/cyborgs2k21?utm_medium=copy_link' target='_blank' rel='noreferrer'>
                                <FiInstagram className='text-white text-4xl' />
                        </a>
                        {window.innerWidth>800 ? <p className='text-white m-auto ml-4 cursor-default lg:hover:underline'>Instagram</p> : null}
                    </div>

                    <div className='flex justify-start items-center m-auto mt-4 mb-8 md:ml-0'>
                        <a href='mailto:cyborgs2k21@gmail.com' target='_blank' rel='noreferrer'>
                            <AiOutlineMail className='text-white text-4xl' />
                        </a>
                        {window.innerWidth>800 ? <p className='text-white m-auto ml-4 cursor-default lg:hover:underline'>Email</p> : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
