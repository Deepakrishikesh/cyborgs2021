import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { fa }
const Footer = () => {
    return (
        <>
            <div className='flex justify-center bg-gray-900 blur-md m-auto lg:flex-row'>
                <div className='flex flex-col justify-start'>
                    <h1 className='text-xl text-white m-auto mt-4'>Contact us</h1>
                    
                    <div className='flex justify-start items-center m-auto mt-6 ml-0'>
                        <a href='https://instagram.com/cyborgs2k21?utm_medium=copy_link' target='_blank' rel='noreferrer'>
                                <img className='h-10 w-10 m-auto border-white border-2 rounded-full bg-white' src='https://image.flaticon.com/icons/png/512/1400/1400829.png' alt='Instagram'/>
                        </a>
                        <p className='text-white m-auto ml-4 cursor-default lg:hover:underline'>Instagram</p>
                    </div>

                    <div className='flex justify-start items-center m-auto mt-4 mb-8 ml-0'>
                        <a href='mailto:cyborgs2k21@gmail.com' target='_blank' rel='noreferrer'>
                                <img className='h-10 w-10 m-auto border-2 border-white rounded-full bg-white' src='https://image.flaticon.com/icons/png/512/561/561127.png' alt='Email'/>
                        </a>
                        <p className='text-white m-auto ml-4 cursor-default lg:hover:underline'>Email</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
