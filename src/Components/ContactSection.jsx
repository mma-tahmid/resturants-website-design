import React from 'react';
import "../css/contactSection.css"


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

            <div className="relative mt-[120px] mb-2  bg-cover bg-center  container h-[720px] bg-[url('/src/assets/bg_image_resturants.png')] max-w-[1536px]">
                <div className="absolute inset-0 bg-black bg-opacity-50" />

                <div className="relative z-10 p-10 mx-auto max-w-[1240px] text-white">

                    <div>
                        We ready to have you the best dining experiences
                    </div>


                    
                </div>
            </div >

        </>
    );
};

export default ContactSection;