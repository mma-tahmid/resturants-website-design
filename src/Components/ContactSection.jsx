import React from 'react';
import "../css/contactSection.css"

import { FiPhoneCall } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";



const ContactSection = () => {

    return (

        <>


            {/* Main Content */}

            {/* <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/src/assets/bg_image_resturants.png")' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="relative z-10 p-10 text-white">
                    <p>Your content here</p>
                </div>
            </div> */}

            <div className="relative mt-[120px] mb-2  bg-cover bg-center  container bg-[url('/src/assets/bg_image_resturants.png')] max-w-[1536px]">
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                {/* p-8 */}
                <div className="relative z-10 pt-[120px] pb-[50px]  mx-auto max-w-[1240px] text-white">


                    <div className='text-center font-["Bebas Neue"] text-[30px] sm:text-[50px] font-[700]'>
                        We ready to have you the best dining experiences
                    </div>

                    <div className='grid grid-cols-1 gap-y-11 md:gap-y-0 md:grid-cols-4 pt-12'>
                        <div className=' flex flex-col justify-center items-center '>
                            {/* icon in center */}
                            <div className='flex justify-center'>
                                <LuClock3 className='text-[#FEBF00] w-[22.5px] h-[22.5px] ' />
                            </div>


                            <h4 className='upppercase font-["Bebas Neue] text-[24px] font-[700]'>Opening hours</h4>
                            <p className='font-["Roboto"] text-[16px] font-[400] leading-[25px] pt-1 '>9:00 AM to 11:30 PM</p>
                            <p className='font-["Roboto"] text-[16px] font-[400] leading-3 '>Monday - Sunday</p>
                        </div>

                        <div className=' flex flex-col justify-center items-center '>
                            {/* icon in center */}
                            <div className='flex justify-center'>
                                <FiPhoneCall className='text-[#FEBF00] w-[25.6px] h-[25.6px]' />
                            </div>


                            <h4 className='upppercase font-["Bebas Neue] text-[24px] font-[700]'> LET&#39;S TALK </h4>
                            <p className='font-["Roboto"] text-[16px] font-[400] leading-[25px] pt-1 '>Phone: 1-800-222-4545</p>
                            <p className='font-["Roboto"] text-[16px] font-[400] leading-3 '>Fax: 1-800-222-4545</p>
                        </div>

                        <div className=' flex flex-col justify-center items-center '>
                            {/* icon in center */}
                            <div className='flex justify-center'>
                                <MdMailOutline className='text-[#FEBF00] w-[27.5px] h-[22.5px]' />
                            </div>


                            <h4 className='upppercase font-["Bebas Neue] text-[24px] font-[700]'>BOOK A TABLE</h4>
                            <p className='font-["Roboto"] text-[16px] font-[400] leading-[25px] pt-1 '>Email: demo@website.com</p>
                            <p className='font-["Roboto"] text-[16px] font-[400] leading-3 '>Support: support@website.com</p>
                        </div>

                        <div className=' flex flex-col justify-center items-center '>
                            {/* icon in center */}
                            <div className='flex justify-center'>
                                <MdOutlineLocationOn className='text-[#FEBF00] w-[20px] h-[25.5px]' />
                            </div>


                            <h4 className='upppercase font-["Bebas Neue] text-[24px] font-[700]'>Our Address</h4>
                            <p className='font-["Roboto"] text-[16px] font-[400] leading-[25px] pt-1 '>123 Stree New York City , United</p>
                            <p className='font-["Roboto"] text-[16px] font-[400] leading-3 '>United States Of America</p>
                        </div>
                    </div>



                    <div className='flex justify-center items-center gap-x-12 pt-[120px]'>
                        <div className=' relative border-2 rounded-full w-[53.4px] h-[53.4px]'>
                            <FaFacebook className='absolute top-[31%] left-[30%] w-[20px] h-[20px]' />
                        </div>

                        <div className=' relative border-2 rounded-full w-[53.4px] h-[53.4px]'>
                            <FaXTwitter className='absolute top-[31%] left-[30%] w-[20px] h-[20px]' />
                        </div>

                        <div className=' relative border-2 rounded-full w-[53.4px] h-[53.4px]'>
                            <FaInstagram className='absolute top-[31%] left-[30%] w-[20px] h-[20px]' />
                        </div>

                        <div className=' relative border-2 rounded-full w-[53.4px] h-[53.4px]'>
                            <IoLogoLinkedin className='absolute top-[31%] left-[30%] w-[20px] h-[20px]' />
                        </div>

                    </div>
                   

                    <div className='flex justify-center mt-6 font-[Roboto] text-[21px] font-[400] '> © 2023 All Rights Reserved </div>


                </div>
            </div >

        </>
    );
};

export default ContactSection;