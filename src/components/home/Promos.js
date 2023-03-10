import React from 'react'
import {FiUser} from 'react-icons/fi'
function Promos() {
  return (
    <div className='my-20 py-10 md:px-20 px-8 bg-dry'>
      <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
        <div className='flex lg-gap-10 gap-6 flex-col'>
          <h1 className='xl:text-3xl text-xl capitalize font-sans font-medium  xl:leading-relaxed'>
            Download Your Movies Watch Offline.<br/> Enjoy On your Mobile
          </h1>
          <p className='text-text xl:text-sm xl:text-base leading-6 xl:leading-8'>
          You can watch Plixx through any internet-connected device that offers the Netflix app, including smart TVs, game consoles, streaming media players, set-top boxes, smartphones, and tablets. You can also watch Netflix on your computer using an internet browser. You can review the  system requirements for web browser compatibility, and check our internet speed recommendations to achieve the best performance... 
          </p>
          <div className='flex gap-4 md:text-lg text-sm '>
            <div className='flex-colo bg-black text-subMain px-6 py-3 rounded-md font-bold'>
              HD 4k
            </div>
            <div className='flex flex-row justify-center items-center gap-4 bg-black text-subMain px-6 py-3 rounded-md font-bold'>
             <FiUser/> 2k
            </div>
          </div>
        </div>
        <div className=''>
          <img src='/images/image.png' alt="Plixx" 
          className='w-full object-contain' />
        </div>
      </div>
    </div>
  )
}

export default Promos