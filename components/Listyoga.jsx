import React from 'react'
import Image from 'next/image';
import listyoga from '../public/assets/listyoga.svg'
import listeclips1 from '../public/assets/listeclips1.svg'
import listeclips2  from '../public/assets/listeclips2.svg'
import listarightarrow  from '../public/assets/listarightarrow.svg'
export default function Listyoga() {
  const gradientStyle = {
    background: 'linear-gradient(73.19deg, #FF52AF 11.6%, #9F53FF 83.86%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };
  return (
    <div>
      <div className=' relative text-center items-center  md:bottom-[23rem] lg:-mt-20 '>
        <p className=' text-2xl text-[#220953] font-semibold top-12 relative mr-[19rem] md:mr-[42rem] md:top-2 md:text-3xl '>#01</p>
        <div className='listyoga md:ml-[3rem] relative md:bottom-10 lg:ml-[12rem]  '>
        <Image className=' relative top-[-3.8rem] z-10 ml-[6rem]  ' src={listyoga} alt='daylight' height={80} width={220}/> 
         <div className=' bg-[#E5D9fD] py-[3.4rem] w-[72%] relative bottom-[10rem] ml-[4rem] rounded-[58px]   md:w-[36%] lg:w-[24.5%] '></div>
        </div>
         
         <div className=' text-lg p-[1rem] relative bottom-[8.7rem] text-[#4B3E65]  md:w-[30%] md:bottom-[20rem] md:ml-[25rem] md:text-sm lg:text-right lg:ml-[33rem]'>Get a list of specific influencers in your niche at your fingertips so you can focus on managing your status.</div>
         <div className='listeclips  items-center relative  '>
         <Image className=' relative bottom-[5rem] ml-[6rem]  md:bottom-[26rem] md:w-[10%] md:ml-[42rem] lg:left-[17rem] ' src={listeclips1} alt='daylight' height={60} width={160}/>
         <Image className=' relative bottom-[13rem] ml-[6rem]  md:bottom-[30rem] md:w-[10%] md:ml-[42rem] lg:left-[17rem] lg:bottom-[33rem]' src={listeclips2} alt='daylight' height={60} width={152}/>
         <Image className=' relative bottom-[18.7rem] ml-[12.7rem] font-medium md:ml-[45.6rem]  md:bottom-[33.6rem] lg:ml-[65rem] lg:bottom-[38rem] ' src={listarightarrow} alt='daylight' height={60} width={15}/>
         <div style={gradientStyle} className=' text-blue-600 bottom-[20.5rem] mr-[2.8rem] text-2xl relative md:text-sm md:ml-[40rem] md:bottom-[34.5rem] lg:bottom-[39rem] lg:ml-[48rem] '>Next</div>
         </div>
      </div>
    </div>
  )
}