import React from 'react'
import Image from 'next/image';
import arrowrightline from '../public/assets/arrowrightline.svg'
export default function Joincontainer() {
    const gradientStyle = {
        background: 'linear-gradient(73.19deg, #FF52AF 11.6%, #9F53FF 83.86%)',
        color: 'white',
      };
  return (
    <div>
        <div style={gradientStyle} className=' pb-10 rounded-[30px] mx-6 lg:w-[70%] lg:ml-[11.8rem] '>
           <p className="  pt-10 text-center text-3xl">Join our newsletter</p>
           <p className=' relative p-6  text-center md:w-[70%] md:ml-[7rem] '>Subscribe to our newsletter to be aware of many things on discounts, gifts, training and much more. Just enter your email.</p>
           <div className=' mx-3 relative rounded-[34px] bg-white text-[#5a4580] px-6 py-6 md:w-[70%] md:ml-[6rem]  '>For latest update send mail</div>
           <div className=' relative mt-10 -ml-8  right-4 md:ml-[27rem] md:bottom-[6.4rem] '>
        <button style={gradientStyle} className='py-5 md:py-3 md:px-2 px-24 rounded-[34px] text-2xl ml-16 mb-16 md:text-lg md:w-[44%] lg:ml-[6rem]  '>Subscribe</button>
        <Image className=' -mt-28  ml-[17.4rem] relative top-1  md:ml-[11.6rem] lg:top-3 lg:ml-[17rem]  ' src={arrowrightline} alt='daylight' height={80} width={20}/> 
        </div>
        </div>
      
    </div>
  )
}