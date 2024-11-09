import React from 'react';

const HeroSection = () => {


    return (

        <>
            <div className=" container bg-[url('/src/assets/rectangle.png')] max-w-[1536px] bg-[#B52B1D] bg-no-repeat ">
                {/* max-w-screen-lg = max-w-[1024px] */}
                <div className=' mx-auto max-w-[1240px] py-[35px]'>

                    <div className=" flex items-center justify-center ">


                        {/* <div className='md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-opacity-50 bg-[linear-gradient(90deg,_rgba(189,31,23,0)_32.88%,_rgba(189,31,23,0.7)_100%)] md:w-[550px]  lg:w-[800px] md:text-[50px] lg:text-[70px] font-["Bebas Neue"] font-[700]  text-left text-[white] uppercase'> */}
                        <div>
                            Taste the authentic <br /> Saudi cuisine
                            <div>
                                <p className='text-[24px] font-["Roboto"] font-[400] leading-[32px] text-left text-[white] lowercase'> <span className='uppercase'>A</span>mong the best Saudi chefs in the world, serving <br /> you something beyond flavor. </p>

                            </div>

                        </div>

                    </div>



                </div>
            </div >
        </>
    );
};

export default HeroSection;