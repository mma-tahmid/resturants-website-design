
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const BlogSection = () => {


    return (

        <>

            <div className="bg-white py-8 px-4 md:px-16 lg:px-24">
                <h2 className="text-red-600 text-lg font-semibold mb-2">Crispy, Every Bite Taste</h2>
                <h1 className="text-3xl md:text-4xl font-bold mb-8">WHAT SOME OF MY CUSTOMERS SAY</h1>

                <div className="flex flex-col gap-y-14 md:flex-row border  rounded-lg overflow-hidden shadow-lg">

                    <div className='bg-yellow-400'>

                        <div className="  p-8  md:w-[40%] ">
                            <FaQuoteLeft className="text-3xl mb-4 text-gray-800" />
                            <p className=" w-[350px] md:w-[400px] h-[123px]  text-gray-800 text-lg mb-4">
                                You cant go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly,
                                juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.
                            </p>
                            <div className="flex items-center mt-4">
                                <div>
                                    <p className="font-semibold">KHALID AL DAWSRY</p>
                                    <p className="text-sm text-gray-600">Jeddah, Saudi</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* 2nd Content */}

                    <div className=" w-[full] md:w-[60%]">
                        <iframe 
                            // width="100%"
                            // height="100%"
                            width="900"
                            height="365"
                            src="https://www.youtube.com/embed/XMTaDlHgNEo"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        >

                        </iframe>
                    </div>

                </div>
            </div>









        </>
    );
};

export default BlogSection;