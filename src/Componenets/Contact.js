import React from 'react';
import Footer from '../Componenets/Footer'
import lake from '../Componenets/Images/lake.jpg'
const Contact = () => {
    return (
        <div className="absolute top-[1em]  bg-[#1a001a] w-full  md:h-[102em] lg:h-[48em]">
            <div>
                <div>
                    <p><img className="h-[17em] w-screen " src={lake} alt="" /></p>
                    <p className="absolute top-0 mt-[7em] grid place-items-center text-neutral-500 text-[1.4em]">Contact</p>
                </div>

                <div className="grid place-items-center mt-[2em] space-y-[1.7em] ">
                    <div className="text-gray-400 text-2xl">Drop a Message</div>
                    <div className="text-gray-400 text-[0.7em]">Lorem ipsum dolor sit amet, consectetur adipiscing eli</div>
                    <div  className="text-gray-400 text-[0.7em]">Lorem ipsum dolor sit amet, consectetur adipiscing eli</div>

                </div>

                <div className="grid place-items-center mt-[1.2em] "> 
                    <form>
                        <div className="space-y-[1em] " >
                            <div className="text-white"><input className=" h-[2em] w-[25em] md:w-[30em]   rounded-[0.2em] bg-neutral-900 pl-[1em] text-[0.9em] 
                             hover:bg-neutral-700 border-4 border-solid border-neutral-700 " type="text"placeholder='Enter Your name'/></div>
                            <div><input className="text-gray-400 h-[2em] w-[25em] md:w-[30em] rounded-[0.2em] bg-neutral-900 pl-[1em] text-[0.9em]
                             hover:bg-neutral-700 border-4 border-solid border-neutral-700" type="text"placeholder='Enter Your Email'/></div>
                            <div><input className="text-gray-400 h-[2em] w-[25em] md:w-[30em] rounded-[0.2em] bg-neutral-900 pl-[1em] text-[0.9em]
                             hover:bg-neutral-700 border-4 border-solid border-neutral-700 w-[25em] md:w-[30em]" type="text"placeholder='Enter Your name'/></div>
                            <div><input className="text-gray-400 h-[8em] w-[25em] md:w-[30em] rounded-[0.2em] bg-neutral-900 pl-[1em] text-[0.9em] 
                            hover:bg-neutral-700 border-4 border-solid border-neutral-700" type="text"placeholder='Enter Your Message'/></div>

                        </div>
                    </form>
                </div>

            </div>
            <div>
                <Footer/>
            </div>


        </div>

    )
}
export default Contact;