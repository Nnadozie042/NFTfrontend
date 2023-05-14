import React from 'react';
import lake from '../Componenets/Images/lake.jpg';
import Footer from '../Componenets/Footer';
import {FaBitcoin,FaCoins}from 'react-icons/fa'
const Wallet = () => {
  return (
    <div className="absolute top-[1em] bg-[#1a001a] w-full md:h-[105em] lg:h-[51em]">

      <div>
        <p><img className="h-[17em] w-screen " src={lake} alt="" /></p>
        <p className="absolute top-0 mt-[6em] grid place-items-center text-neutral-500 text-[1.5em] ">connect Your wallet</p>
      </div>
      <div className="grid place-items-center mt-[2em] text-gray-400 md:grid md:place-items-center md:text-gray-400 md:mt-[3em] md:space-y-[1.5em]">
        <div className="font-extrabold text-2xl"> connect your Wallet</div>
        <div className="text-[0.7em]">Once you have a MetaMask wallet</div>
        <div className="text-[0.7em]">Once you have a MetaMask wallet</div>

      </div>

      <div className="mt-[3em] ">
        <div className=" mt-[3em] grid place-items-center gap-y-[2em] md:grid md:grid-cols-2 md:justify-center md:gap-x-[2em] md:pt-[3em]
        lg:flex lg:flex-row lg:justify-center lg:space-x-[2em]">
          <div className=" grid place-items-center bg-neutral-900 p-4 rounded-md shadow-md rounded-[0.2em] space-y-[1em]" style={{ width: '16em', height: '13em' }}>
            <div className=""><p className="text-gray-400 pt-[0.8em] pl-[1em] "><FaBitcoin /></p></div>
            <div className="text-gray-400 ">Bitcoin</div>
            <div className="text-gray-400 text-[0.7em] space-y-[1em]">
              <p>Once you have a MetaMask wallet created</p>
              <p>you'll be able to create your own NFTs</p>
              <p>Navigate to opensea.io and click</p>
  
            </div>
          </div>
          <div className=" grid place-items-center bg-neutral-900 p-4 rounded-md shadow-md rounded-[0.2em] space-y-[1em]" style={{ width: '16em', height: '13em' }}>
            <div className= ""><p className="text-gray-400 pt-[1em] pl-[1em]  "><FaCoins/></p></div>
            <div className="text-gray-400 ">Coin Base</div>
            <div className="text-gray-400 text-[0.7em] space-y-[0.4em]">
              <p>Once you have a MetaMask wallet created</p>
              <p>you'll be able to create your own NFTs</p>
              <p>Navigate to opensea.io and click</p>
    
            </div>
          </div>
          <div className=" grid place-items-center bg-neutral-900 p-4 rounded-md shadow-md rounded-[0.2em] space-y-[1.5em]" style={{ width: '16em', height: '13em' }}>
            <div className=" flex justify-center  "><p className="text-gray-400 pt-[1em] pl-[1em text-[1.5em"><FaBitcoin /></p></div>
            <div className="text-gray-400 ">MetaMask</div>
            <div className="text-gray-400 text-[0.7em] space-y-[0.8em]">
              <p>Once you have a MetaMask wallet created</p>
              <p>you'll be able to create your own NFTs</p>
              <p>Navigate to opensea.io and click</p>
            
            </div>
          </div>
          <div className=" grid place-items-center bg-neutral-900 p-4 rounded-md shadow-md rounded-[0.2em] space-y-[2em]" style={{ width: '16em', height: '13em' }}>
            <div className=" "><p className="text-gray-400 pt-[1em] pl-[1em]"><FaBitcoin /></p></div>
            <div className="text-gray-400">Autherium</div>
            <div className="text-gray-400 text-[0.7em] space-y-[1em]">
              <p>Once you have a MetaMask wallet created</p>
              <p>you'll be able to create your own NFTs</p>
              <p>Navigate to opensea.io and click</p>
             
            </div>
          </div>
        </div>

      </div>

      <div>
        <Footer />

      </div>

    </div>
  )
}
export default Wallet;