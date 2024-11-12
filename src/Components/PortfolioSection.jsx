import React from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const PortfolioSection = () => {

    const foodItems = [
        { id: 1, name: 'Vegetables Burger', description: 'Barbecue Italian cuisine pizza', imageUrl: '/src/assets/burgers.png' },
        { id: 2, name: 'Special Pizza', description: 'Barbecue Italian cuisine pizza', imageUrl: '/src/assets/pizza.png' },
        { id: 3, name: 'Special French Fries', description: 'Barbecue Italian cuisine', imageUrl: '/src/assets/french_fry.png' },
        { id: 4, name: 'Cuisine Chicken', description: 'Japanese Cuisine Chicken', imageUrl: '/src/assets/chicken.png' },
    ];


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <>


            <div className="container max-w-[1536px] bg-[#FBF7F2] bg-no-repeat mt-6 p-6">

                <div className='mx-auto max-w-[1240px] py-[50px] px-3'>

                    <h2 className="text-red-600 text-sm">Crispy, Every Bite Taste</h2>
                    <h1 className="text-3xl font-bold mb-8">Popular Food Items</h1>

                    <Slider {...settings} className='mx-12'>
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> */}

                        {foodItems.map((item) => (
                            <div key={item.id} className="bg-white shadow-md rounded-md p-4 text-center">
                                <div>
                                    <img src={item.imageUrl} alt={item.name} className="mx-auto mb-4 w-24 h-24 object-contain" />
                                </div>

                                <div className="h-1 w-12 bg-red-600 mx-auto"></div>
                                <h3 className="font-semibold text-lg mt-[24px]">{item.name}</h3>
                                <p className="text-gray-500 text-sm mt-1">{item.description}</p>

                            </div>
                        ))}
                        {/* 
                        </div> */}
                    </Slider>

                    {/* <div className="flex justify-center mt-6">
                        <button className="bg-white shadow-md p-2 rounded-full mx-2">❮</button>
                        <button className="bg-white shadow-md p-2 rounded-full mx-2">❯</button>
                    </div> */}

                </div>

            </div >



        </>
    );
};

export default PortfolioSection;