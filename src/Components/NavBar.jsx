import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

const NavBar = () => {



    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen) // !false = true
    }


    // z-10 md:z-20
    return (

        <>
            <div className="sticky top-0 z-[1000]  container bg-[url('/src/assets/rectangle.png')] max-w-[1536px] bg-[#B52B1D] bg-no-repeat ">
                {/* max-w-screen-lg = max-w-[1024px] py-[35px] */}
                <div className=' mx-auto max-w-[1240px] py-[18px]  '>

                    <div className="flex justify-between items-center  p-3">

                        <div className='flex items-center gap-x-[6px] h-[29px] w-[159px]'>
                            {/* Logo Name  */}
                            <div className=''>
                                <Link to='/'> <img src="/src/assets/group.png" alt="logo" /> </Link>
                            </div>
                            <h4 className='font-["Poppins"] font-[400] text-[28.44px] leading-[28.44px]'>Restaurant</h4>
                        </div>


                        {/* Menu item */}

                        <ul className='hidden md:flex md: gap-6 lg:gap-x-10'>
                            <Link to="home" smooth={true} duration={500}> <li className='text-white font-["Raleway"] font-[500] text-[17px] cursor-pointer hover:text-yellow-300'>Home </li> </Link>
                            <Link to="about" smooth={true} duration={500}> <li className='text-white font-["Raleway"] font-[500] text-[17px] cursor-pointer'>About </li> </Link>
                            <Link to="portfolio" smooth={true} duration={500}> <li className='text-white font-["Raleway"] font-[500] text-[17px] cursor-pointer'>Portfolio </li> </Link>
                            <Link to="clients" smooth={true} duration={500}> <li className='text-white font-["Raleway"] font-[500] text-[17px] cursor-pointer'> Clients </li> </Link>
                            <Link to="blogs" smooth={true} duration={500}> <li className='text-white font-["Raleway"] font-[500] text-[17px] cursor-pointer'> Blog </li> </Link>
                            <Link to="contacts" smooth={true} duration={500}> <li className='text-white font-["Raleway"] font-[500] text-[17px] cursor-pointer'> Contacts </li> </Link>

                        </ul>






                        <div className='hidden sm:flex' >
                            <button className=' bg-[#FEBF00] p-1 sm:p-2 font-["Roboto"] text-[#0A1425] font-[200] sm:font-[700] text-[16px] uppercase'>Book A table </button>
                        </div>

                        {/* Hamburger Icons */}

                        <div className='md:hidden' >
                            <button onClick={toggleMenu} className='text-white'>
                                <svg
                                    fill='none'
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    viewBox='0 0 24 24'
                                    className='w-6 h-6'
                                >

                                    <path d="M4 6h16M4 12h16M4 18h16"> </path>
                                </svg>

                            </button>

                        </div>



                    </div>
                </div>


                {/* Mobile Menu */}






                {
                    isMenuOpen ?
                        (
                            <ul className='flex flex-col items-center leading-8 md:hidden'>
                                <Link to="home" smooth={true} duration={500}> <li className='text-white font-["Raleway"] font-[500] text-[17px] cursor-pointer'>Home </li> </Link>
                                <Link to="about" smooth={true} duration={500}> <li className='text-white font-["Raleway"] font-[500] text-[17px] cursor-pointer'>About </li> </Link>
                                <Link to="portfolio" smooth={true} duration={500}> <li className='text-white font-["Raleway"] font-[500] text-[17px] cursor-pointer'>Portfolio </li> </Link>
                                <Link to="clients" smooth={true} duration={500}> <li className='text-white font-["Raleway"] font-[500] text-[17px] cursor-pointer'> Clients </li> </Link>
                                <Link to="blogs" smooth={true} duration={500}> <li className='text-white font-["Raleway"] font-[500] text-[17px] cursor-pointer'> Blog </li> </Link>
                                <Link to="contacts" smooth={true} duration={500}> <li className='text-white font-["Raleway"] font-[500] text-[17px] cursor-pointer'> Contacts </li> </Link>

                                <div className='flex justify-center py-5 sm:hidden' >
                                    <button className=' bg-[#FEBF00] p-1 sm:p-2 font-["Roboto"] text-[#0A1425] font-[200px] sm:font-[700px] text-[16px] uppercase'>Book A table </button>
                                </div>

                            </ul>


                        )

                        : null
                }
            </div>

        </>
    );
};

export default NavBar;