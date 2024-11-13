
// import "./css/clientsSection.css"
import "../css/clientsSection.css"

const ClientsSection = () => {

    return (

        <>
            <div className="container object-cover bg-[url('/src/assets/bg_image_clients.png')] bg-cover bg-top max-w-[1536px] bg-no-repeat h-[788px] ">


                <div className='  mx-auto max-w-[1240px] py-[90px] px-3'>

                    <div className="">

                        <h6 className=" clients-book px-6 relative font-['Roboto] text-[20px] font-[700] text-[#BD1F17]">Book Now</h6>


                        <h2 className="text-white font-['Bebas Neue'] text-[62px] font-[700] text-left mt-[16px] ">Book Your Table</h2>

                        <p className="mt-[16px] font-['Roboto'] text-[16px] font-[400] text-left text-[#F7F8F9] w-[545px]  ">Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>

                        <form action="" className=" mt-[40px] grid grid-cols-2 gap-x-[20px] gap-y-[24px] p-3" >


                            <div>
                                <input type="text" className="  w-[302px] h-[46px] border-2 border-solid border-[#E5E7EB] focus:outline-none bg-[#212122] placeholder:text-[rgb(255,255,255)] text-[white] placeholder:px-4 rounded-md" placeholder='Your Name' />
                            </div>

                            <div>
                                <input type="email" className="w-[302px] h-[46px] border-2 border-solid border-[#E5E7EB]  focus:outline-none bg-[#212122] placeholder:text-[white] text-[white] placeholder:px-4 rounded-md" placeholder='Email' name="" id="" />
                            </div>

                            <div>
                                <input className="w-[302px] h-[46px] border-2 border-solid border-[#E5E7EB] focus:outline-none bg-[#212122] placeholder:text-[white] text-[white] placeholder:px-4 rounded-md" type="date" name="" id="" />
                            </div>

                            <div>
                                <input type="number" min="0" className='w-[302px] h-[46px] border-2 border-solid border-[#E5E7EB] focus:outline-none bg-[#212122] placeholder:text-[white] text-[white] placeholder:px-4 rounded-md ' placeholder='Enter the Quantity' />
                            </div>


                            <div>
                                <textarea
                                    placeholder="Message"
                                    className=" border-2 border-solid border-[#E5E7EB] bg-[#212122] placeholder:text-[white] text-[white] placeholder:px-4 w-full p-2 rounded-md  focus:outline-none h-[140px]"
                                ></textarea>
                            </div>




                        </form>

                    </div>


                </div>
            </div>

        </>
    );
};

export default ClientsSection;