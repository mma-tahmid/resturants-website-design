import React from 'react';
import { Link } from 'react-router-dom';

import { FaMedal } from 'react-icons/fa';
import { FiShoppingBag } from "react-icons/fi";
import { FiPackage } from "react-icons/fi";

const AboutSection = () => {

    const features = [
        {
            icon: <FiPackage className="text-[#BD1F17] w-8 h-8" />,
            title: "Fast Delivery",
            description: "Within 30 minutes",

        },
        {
            icon: <FaMedal className="text-[#BD1F17] w-8 h-8" />,
            title: "Absolute Dining",
            description: "Best buffet restaurant",
        },
        {
            icon: <FiShoppingBag className="text-[#BD1F17] w-8 h-8" />,
            title: "Pickup Delivery",
            description: "Grab your food order",

        },
    ];


    return (

        <>
            <div className=" container max-w-[1536px] bg-[#FFFFFF] bg-no-repeat  ">

                <div className='mx-auto max-w-[1240px] py-[50px] px-3'>

                    <div className=' grid md:grid-cols-2 grid-cols-1 gap-x-[40px]'>

                        <div>
                            <img className=' w-full h-full object-cover' src="/src/assets/burger.png" alt="" />
                        </div>


                        {/* // 2nd Part */}

                        <div className=''>


                            <div className='flex md:pt-0 pt-6 gap-x-8 border-b-2 border-[#B52B1D]  '>


                                <div> <Link className='text-[#333333] hover:text-[white] hover:bg-[#B52B1D] hover:px-[16px] hover:py-[6px] transition duration-300  font-["Roboto"] font-[500] text-[16px] leading-[24px]'>About</Link></div>


                                <div>
                                    <Link className='text-[#333333] hover:text-[white] hover:bg-[#B52B1D] hover:px-[16px] hover:py-[6px] transition duration-300  font-["Roboto"] font-[500] text-[16px] leading-[24px]'>Experience</Link>
                                </div>


                                <div><Link className='text-[#333333] hover:text-[white] hover:bg-[#B52B1D] hover:px-[16px] hover:py-[6px] transition duration-300  font-["Roboto"] font-[500] text-[16px] leading-[24px]'>Contact</Link></div>


                            </div>

                            <div className='w-[650px] pt-4 font-["Bebas Neue"] text-[45px] font-[700] uppercase'>
                                Exceptional culinary experience and delicious food
                            </div>

                            <div className='pt-3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.
                            </div>


                            {/* Button Section */}

                            <div className='flex items-center pt-8  gap-x-7'>
                                <button className='bg-[#FEBF00] px-6 py-4 uppercase font-["Roboto"] text-[18px] font-[700] leading-[24px]'>About More</button>

                                <div className='flex items-center gap-x-2 '>
                                    <img className=' w-[20px] h-[18px] object-cover' src="/src/assets/mobile_icon.png" alt="mobile_icon" />

                                    <h4 className='font-["Roboto"] text-[18px] font-[700] leading-[24px]'>+88 3426 739 485</h4>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>


                <div className="flex justify-center space-x-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-x-4 text-center bg-white  p-6"
                        >
                            <div className="bg-white rounded-full p-5 shadow-lg mb-3">
                                {feature.icon}
                            </div>

                            <div>
                                <h3 className="uppercase text-3xl text-[#0A1425] font-['Bebas Neue'] text-[#0A1425] font-[700]">{feature.title}</h3>
                                <p className="text-xl font-['Roboto'] text-left font-[400] text[#0A1425]">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </>
    );
};

export default AboutSection;