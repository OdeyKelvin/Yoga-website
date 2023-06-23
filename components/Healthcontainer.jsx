import React from 'react'
import Image from 'next/image';
import arrowrightline from '../public/assets/arrowrightline.svg'
import healthfitness from '../public/assets/healthfitness.svg'
import Descriptionboxhealth2 from '../public/assets/Descriptionboxhealth2.svg'
import Descriptionboxhealth1 from '../public/assets/Descriptionboxhealth1.svg'
export default function Healthcontainer() {
    const gradientStyle = {
        background: 'linear-gradient(73.19deg, #FF52AF 11.6%, #9F53FF 83.86%)',
        color: 'white',
      };
  return (
    <div>
      <div className=' justify-between md:mt-40'>
        <p className=' text-center relative top-[-11rem] text-[#220953]  text-4xl md:w-[33%] md:ml-[26rem] md:top-[-58rem] lg:text-left lg:w-[30%] lg:text-4xl lg:left-[13rem] '>Bring Happiness To Good Health!</p>
        <p className=' p-4 text-[#4B3E65] text-center relative w-[100%]  top-[-8rem] md:w-[45%] md:ml-[25rem] md:top-[-57rem] md:text-lg lg:text-left lg:ml-[38rem] '>If you take care of your good health, take care of your mentality and lead a healthy life with positive thoughts every day.</p>
        <div className=' -top-14 relative md:-top-[56rem] md:ml-[23rem] lg:ml-[35rem]  '>
        <button style={gradientStyle} className='py-5 px-16 rounded-[34px] text-2xl ml-16 mb-16 md:text-xl md:py-3 md:px-10 '>let &#39;s Start</button>
        <Image className=' ml-[15rem] relative  bottom-[6.6rem] md:ml-[12.6rem] md:bottom-[6.2rem] ' src={arrowrightline} alt='daylight' height={80} width={20}/> 
        </div>
        <div className='healthfitness relative -top-10 md:top-[-80rem] md:ml-10 lg:ml-[16rem] '>
        <Image className='  items-center ml-8 relative -top-3 ' src={healthfitness} alt='daylight' height={80} width={310}/> 
        <Image className=' md:-mt-32 relative bottom-[19rem] ml-[2rem] md:bottom-[13rem] md:w-[14%] ' src={Descriptionboxhealth2} alt='daylight' height={80} width={150}/> 
        <Image className=' md:-mt-32 relative bottom-[10rem] w-[34%] md:w-[14%] md:top-[8.9rem] ml-[14rem] md:ml-[14rem] ' src={Descriptionboxhealth1} alt='daylight' height={80} width={150}/>
        </div>
      </div>
    </div>
  )
}