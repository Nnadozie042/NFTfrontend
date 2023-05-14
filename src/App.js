import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaAddressCard } from 'react-icons/fa';
import Home from './Componenets/Home';
import Market from './Componenets/Market';
import Create from './Componenets/Create';
import drip from './Componenets/Images/drip.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import Detail from './Componenets/Detail';
import Wallet from './Componenets/Wallet';
import Contact from './Componenets/Contact';
import OutsideClickHandler from "react-outside-click-handler";






function App() {
  const [rate, setRate] = useState(false)
  const items = [

    {
      id: 1,
      image: 'Frame/yam.jpg',
      name: "cute cat",
      icon: "Frame/lot2.jpg",
      price: "$0123"

    },
    {
      id: 2,
      image: "Frame/rice.jpg",
      name: "eragon d' dragon",
      icon: "Frame/lot4.jpg",
      price: "$023454",

    },
    {
      id: 3,
      image: "Frame/monkey.jpg",
      name: "monkey framer",
      icon: "Frame/lot5.jpg",
      price: "00.8Etherium "

    },
    {
      id: 4,
      image: "Frame/beans.jpg",
      name: "self made",
      icon: "Frame/lot7.jpg",
      price: "2345"
    },
    {
      id: 5,
      image: "Frame/head.jpg",
      name: "head",
      icon: "Frame/avata.jpg",
      price: "$4056",
    },

    {
      id: 6,
      image: "Frame/face.jpg",
      name: "monkey framer",
      icon: "Frame/lot.jpg",
      price: "$2345"

    },
    {
      id: 7,
      image: "Frame/hat.jpg",
      name: "self made",
      icon: "Frame/avata.jpg",
      price: "2345"
    },
    {
      id: 8,
      image: "Frame/cat.jpg",
      name: "head",
      icon: "Frame/avata3.jpg",
      price: "$4056",
    }
  ]





  return (
    <BrowserRouter>
      <div className="App">
        <div className="fixed h-[4em] w-full bg-[#1a001a] border-b-2 border-solid border-violet-950 z-[1] ">
          <div className='flex flex-row justify-between pt-[0.7em]'>
            <div className="flex flex-row pl-[1em] pt-[em]">
              <p><img className='h-[2.5em] w-[2.5em] bg-violet-900 font-extrabold ' src={drip} alt="" /></p>
              <p className="text-2xl font-extrabold text-violet-800">NFTs</p>
            </div>
           
            
            
            <div className=" absolute ml-[20em]  md:ml-[48em] lg:hidden mt-[1em]" onClick={() => setRate(!rate)}>

             {rate ? (<FaTimes className="text-white" />) : (<FaBars className="text-white" />)}
              </div>
              <OutsideClickHandler onOutsideClick={() => {setRate(false)}}>
            <div className=" ">
            
              <div className=" md:flex md:flex-row md:justify-center">
                <div className="hidden md:hidden lg:mr-[2em] md:flex lg:flex md:mt-[0em]">
                  <div>
                    <ul className="space-y-[2em]  md:space-y-0 md:flex md:flex-row md:list-none md:space-x-[5em] md:text-gray-400 md:text-[0.8em] md:font-light ">
                      <li className="hover:text-violet-900">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="hover:text-violet-900">
                        <Link to="/Market">Market</Link>
                      </li>
                      <li className="hover:text-violet-900">
                        <Link to="/create">Create</Link>
                      </li>

                      <li className="hover:text-violet-900">
                        <Link to="/Contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-[2em] md:mt-0 ml-[1.5em]">
                    <Link to="/Wallet">
                      <button className="flex flex-row text-gray-400 border-2 border-solid border-gray-400 w-[9em] md:w-[9em] hover:bg-blue-900
                 h-[2.2em] pt-[0.2em] rounded-full pl-[0.8em] mr-[1em] space-x-[0.3em]">
                        <p className=" mt-[0.3em]  text-[0.8em]"><FaAddressCard /></p>
                        <p className=" md:whitespace-nowrap md:pl-[0.1em] text-[0.8em]">Connect wallet</p>

                      </button>
                    </Link>


                  </div>
                </div>

              
                  
                  {rate && ( <ul className=" lg:hidden  h-[20em] w-[15em] bg-slate-800 pl-[3em] pt-[1.5em]  mt-[3em] space-y-[2em] 
                   list-none  md:text-gray-400 md:text-[0.8em] md:font-light pl-[1em] text-neutral-400 ease-in md:h-[30em] w-[23em] md:mr-[0em] md:text-[1em] md:pl-[5em] md:space-y-[4em]">
                      <li className="hover:text-violet-900">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="hover:text-violet-900">
                        <Link to="/Market">Market</Link>
                      </li>
                      <li className="hover:text-violet">
                        <Link to="/create">Create</Link>
                      </li>

                      <li className="hover:text-violet-900">
                        <Link to="/Contact">Contact</Link>
                      </li>

                      <li>
                        <div className=" mr-[1.4em] mr-0 mt-[2em] md:mt-0">
                          <Link to="/Wallet">
                            <button className="w-[6em] h-[2em] flex flex-row text-gray-400 border-2 border-solid border-gray-400 w-[7.5em] md:w-[9em]
                     h-[2.4em] pt-[0.2em] rounded-full pl-[0.8em] mr-[1em]">
                              <p className="pt-[0.2em] text-[0.8em]"><FaAddressCard /></p>
                              <p className="whitespace-nowrap pl-[0.1em] text-[0.8em] ">Connect wallet</p>

                            </button>
                          </Link>

                        </div>
                      </li>
                    </ul>)}
                     </div>
             
              </div>


            

            </OutsideClickHandler>
          </div>
        </div>
        <div className="pt-[5em] bg-[#1a001a] w-full  ">
          <Routes>
            <Route exact path="/" element={<Home items={items} />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/Market" element={<Market items={items} />} />
            <Route path="/Market/:id" element={<Detail />} />
            <Route path="/Wallet" element={<Wallet />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
