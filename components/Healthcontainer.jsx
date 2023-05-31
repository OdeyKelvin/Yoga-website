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
      <div className=' justify-between'>
        <p className=' text-center relative top-[-11rem] text-[#220953]  text-4xl xl:text-5xl xl:w-[32%] xl:ml-[40rem] xl:top-[-19rem] '>Bring Happiness To Good Health!</p>
        <p className=' text-[#4B3E65] text-center relative w-[100%]  top-[-8rem] xl:w-[32%] xl:px-[1.1rem] xl:ml-[39rem] xl:-top-[17rem] text-xl xl:text-sm'>If you take care of your good health, take care of your mentality and lead a healthy life with positive thoughts every day.</p>
        <div className=' -top-14 relative xl:ml-[33rem] xl:-top-[14rem] '>
        <button style={gradientStyle} className='py-5 px-16 rounded-[34px] text-2xl ml-16 mb-16 xl:px-11 xl:py-4 xl:text-lg xl:ml-32 '>let's Start</button>
        <Image className=' ml-[15rem] relative  bottom-[6.6rem] xl:w-[1rem] xl:ml-[16rem] xl:mt-1 ' src={arrowrightline} alt='daylight' height={80} width={20}/> 
        </div>
        <div className='healthfitness xl:-mt-32 relative -top-10 xl:-top-[30rem] xl:ml-[14rem] '>
        <Image className='  items-center ml-8 relative -top-3 xl:w-[31%] ' src={healthfitness} alt='daylight' height={80} width={310}/> 
        <Image className=' xl:-mt-32 relative bottom-[19rem] ml-[2rem] xl:bottom-[15rem] xl:right-6' src={Descriptionboxhealth2} alt='daylight' height={80} width={150}/> 
        <Image className=' xl:-mt-32 relative bottom-[10rem] w-[34%] xl:w-[10%]  ml-[14rem] xl:left-12 xl:top-20' src={Descriptionboxhealth1} alt='daylight' height={80} width={150}/>
        </div>
      </div>
    </div>
  )
}
