import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {


    return (

        <>
            <div className=" container max-w-[1536px] bg-[#FFFFFF] bg-no-repeat  ">

                <div className='mx-auto max-w-[1240px] py-[50px] px-3'>

                    <div className=' grid md:grid-cols-2 grid-cols-1 gap-x-[40px]'>

                        <div>
                            <img className=' w-full h-full object-cover' src="/src/assets/burger.png" alt="" />
                        </div>


                        {/* // 2nd Part */}

                        <div>


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

            </div>

        </>
    );
};

export default AboutSection;