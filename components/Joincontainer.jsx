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
        <div style={gradientStyle} className=' pb-10 rounded-[30px] mx-6  xl:w-[70%] xl:ml-[13rem]'>
           <p className="  pt-10 text-center text-3xl xl:text-[56px]">Join our newsletter</p>
           <p className=' relative p-6  text-center xl:w-[58%] text-[15px] xl:ml-[13em] xl:top-2'>Subscribe to our newsletter to be aware of many things on discounts, gifts, training and much more. Just enter your email.</p>
           <div className=' mx-3 relative rounded-[34px] xl:top-6 bg-white text-[#5a4580] px-6 py-6 xl:w-[52%] xl:ml-[14rem] '>For latest update send mail</div>
           <div className=' relative mt-10 -ml-8  right-4 xl:ml-[22rem] xl:left-28 xl:bottom-[4.9rem] '>
        <button style={gradientStyle} className='py-5 xl:py-3 px-24 rounded-[34px] text-2xl ml-16 mb-16 xl:w-[30%] xl:px-4 xl:text-lg  '>Subscribe</button>
        <Image className=' -mt-28  ml-[17.4rem] relative top-3 xl:right-[4.7rem] ' src={arrowrightline} alt='daylight' height={80} width={20}/> 
        </div>
        </div>
      
    </div>
  )
}
