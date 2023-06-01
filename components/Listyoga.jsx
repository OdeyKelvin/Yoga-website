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
      <div className=' text-center items-center'>
        <p className=' text-2xl text-[#220953] font-semibold top-12 relative mr-[17rem] xl:mr-[50rem] xl:text-5xl xl:font-semibold xl:top-16 '>#01</p>
        <div className='listyoga xl:ml-[16rem] relative xl:top-8  '>
        <Image className=' relative top-[-3.8rem] z-10 ml-[6rem]  ' src={listyoga} alt='daylight' height={80} width={220}/> 
         <div className=' bg-[#E5D9fD] py-[3.4rem] w-[72%] relative bottom-[10rem] ml-[5rem] rounded-[58px] xl:w-[24%] '></div>
        </div>
         
         <div className=' text-lg p-[1rem] relative bottom-[8.7rem] xl:ml-[40rem] xl:text-sm xl:font-medium text-[#4B3E65] xl:w-[22%] xl:bottom-[14rem]  '>Get a list of specific influencers in your niche at your fingertips so you can focus on managing your status.</div>
         <div className='listeclips xl:right-20 items-center xl:ml-[60rem] relative xl:bottom-52  '>
         <Image className=' relative bottom-[5rem] ml-[6rem] xl:w-[27.7%] xl:ml-[6.2rem] xl:bottom-[7.6rem] ' src={listeclips1} alt='daylight' height={60} width={160}/>
         <Image className=' relative bottom-[13rem] ml-[6rem] xl:w-[27%] xl:ml-[6rem] xl:-top-[13.3rem] ' src={listeclips2} alt='daylight' height={60} width={152}/>
         <Image className=' relative bottom-[18.7rem] ml-[12.7rem] font-medium w-4 xl:ml-[10rem] xl:bottom-[17rem]  ' src={listarightarrow} alt='daylight' height={60} width={15}/>
         <div style={gradientStyle} className=' text-blue-600 bottom-[20.5rem] mr-[2.8rem] text-2xl xl:text-sm xl:bottom-[18.1rem] xl:mr-[7rem] relative '>Next</div>
         </div>
      </div>
    </div>
  )
}
