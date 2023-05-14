import React from 'react';
import lake from '../Componenets/Images/lake.jpg';
import Footer from '../Componenets/Footer'
const Create = () => {
    return (
        <div className="absolute top-[1em]  bg-[#1a001a] w-full">
            <div>
                <div>
                    <p><img className="h-[17em] w-screen " src={lake} alt="" /></p>
                    <p className="absolute top-0 mt-[7em] grid place-items-center text-neutral-500 text-[1.4em]">create Item</p>
                </div>

                <div className="flex flex-row justify-center mt-[2em]">
                    <div className=""></div>
                    <div>
                        <form>
                            <div>
                                <div>
                                    <p className="text-gray-400">upload file</p>
                                    <div>
                                        <select className="bg-neutral-900 h-[2em] w-[22em] rounded-[0.5em] hover:bg-neutral-700 border-4 border-solid text-neutral-600
                                         border-neutral-700">
                                            <option value="choose item">Choose item</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-gray-400">price</p>
                                    <div>
                                        <input className="bg-neutral-900 h-[2em] w-[22em] rounded-[0.5em] hover:bg-neutral-700
                                         border-4 border-solid border-neutral-700 text-neutral-600"
                                        type="text" placeholder="Enter the price " />

                                    </div>
                                </div>
                                <div >
                                    <p className="text-gray-400">Minimum bid</p>
                                    <div>
                                        <input className="bg-neutral-900 h-[2em] w-[22em] rounded-[0.5em] hover:bg-neutral-700 
                                        border-4 border-solid border-neutral-700 text-neutral-600" 
                                        type="text" placeholder="Enter Minimum bid " />

                                    </div>
                                </div>

                                <div className="flex flex-row ">
                                    <div>
                                        <p className="text-gray-400">starting Date</p>
                                        <div>
                                            <input className="bg-neutral-900 h-[2em] w-[11em] rounded-[0.5em] hover:bg-neutral-700
                                             border-4 border-solid border-neutral-700 text-neutral-600"
                                            type="Date" placeholde="Enter the price " />

                                        </div>
                                    </div>

                                    <div className="ml-[0.8em]">
                                        <p className="text-gray-400">expiration Date</p>
                                        <div>
                                            <input className="bg-neutral-900 h-[2em] w-[10em] rounded-[0.5em] hover:bg-neutral-700 text-neutral-200
                                             border-4 border-solid border-neutral-700" type="Date" placeholde="Enter the price " />

                                        </div>
                                    </div>


                                </div>

                                <div className="">
                                    <p className="text-gray-400">Title</p>
                                    <div>
                                        <input className="bg-neutral-900 h-[2em] w-[22em] rounded-[0.5em] hover:bg-neutral-700 border-4 border-solid border-neutral-700 text-neutral-200" 
                                        type="text" placeholder="Enter Title" />

                                    </div>
                                </div>

                                <div className="">
                                    <p className="text-gray-400">Description</p>
                                    <div>
                                        <input className="bg-neutral-900 h-[5em] w-[22em] rounded-[0.5em] hover:bg-neutral-700 text-neutral-200
                                        border-4 border-solid border-neutral-700"type="text" placeholder="Enter description " />

                                    </div>
                                </div>





                            </div>


                        </form>


                    </div>
                </div>

                <div><Footer/></div>
            </div>
        </div>
    )
}
export default Create