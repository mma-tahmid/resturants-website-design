import React from 'react';

const HeroSection = () => {


    return (

        <>
            <div className=" container bg-[url('/src/assets/rectangle.png')] max-w-[1536px] bg-[#B52B1D] bg-no-repeat  ">
                {/* max-w-screen-lg = max-w-[1024px] */}
                <div className='mx-auto max-w-[1240px] py-[35px] px-3'>

                    <div className="flex items-center justify-center md:flex-row flex-col">


                        <div className='w-full md:w-1/2 md:relative'>


                            <div className=' md:absolute md:z-10 md:top-[-155px] tracking-tighter font-["Bebas Neue"] text-[48px] md:text-[79px] md:font-[700] w-auto md:w-[820px] text-[white] uppercase leading-none md:bg-[linear-gradient(90deg,_rgba(189,31,23,0)_32.88%,_rgba(189,31,23,0.7)_100%)]'>Taste the authentic Saudi cuisine</div>



                            <p className=' text-[22px] font-["Roboto"] font-[400] md:leading-[32px] text-left text-[white] lowercase pt-5 '> <span className='uppercase'>A</span>mong the best Saudi chefs in the world, serving you something beyond flavor. </p>


                            <div className='md:absolute md:mt-8 mt-6'>
                                <button className=' bg-[#FEBF00] py-[16px] px-[24px] text-[18px] text-[#0A1425] font-[700] font-["Roboto"] uppercase rounded-sm'>Explore Menu</button>
                            </div>

                        </div>




                        <div className='mt-6 w-[full]  md:w-1/2'>

                            <img className=' md:pt-0 max-w-auto object-cover overflow-hidden' src="/src/assets/image1.png" alt="header_image" />

                        </div>




                    </div>



                </div>
            </div >




        </>
    );
};

export default HeroSection;

{/* <div className='md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-opacity-50 bg-[linear-gradient(90deg,_rgba(189,31,23,0)_32.88%,_rgba(189,31,23,0.7)_100%)] md:w-[550px]  lg:w-[800px] md:text-[50px] lg:text-[70px] font-["Bebas Neue"] font-[700]  text-left text-[white] uppercase'> */ }