import React from 'react'
import Image from 'next/image';
import arrowrightline from '../public/assets/arrowrightline.svg'
import routineyoga1 from '../public/assets/routineyoga1.svg'
import routineyoga2 from '../public/assets/routineyoga2.svg'
import Boxroutine1 from '../public/assets/Boxroutine1.svg'
import Boxroutine2 from '../public/assets/Boxroutine2.svg'
export default function Rountinecontainer() {
  const gradientStyle = {
    background: 'linear-gradient(73.19deg, #FF52AF 11.6%, #9F53FF 83.86%)',
    color: 'white',
  };
  return (
    <div className=''>
       <div className=' wrapper xl:-mt-[10rem]'>
          <p className="text-center relative bottom-20 text-[36px] font-semibold p-2 text-[#220953] xl:text-5xl xl:w-[32%] xl:leading-[81.6px] xl:bottom-[3rem] xl:ml-[12rem] ">Anytime, Any Place, Any Workout</p>
           <p className="text-[16px] leading-[22px] font-normal ml-4 relative bottom-12 text-center w-[331px] xl:w-[28%] xl:ml-[16rem] xl:mt-3 ">Take your routine at any time of your day, with the new videos and with the teachers who will guide you.</p>
           <div className=' relative  right-4 xl:ml-[9rem] xl:-top-[1rem] '>
        <button style={gradientStyle} className='py-5 px-16 rounded-[34px] text-2xl ml-16 mb-16 xl:px-11 xl:py-4 xl:text-lg xl:ml-32 '>Get Started Free</button>
        <Image className=' ml-[20rem] relative  bottom-[6.7rem] xl:w-[1rem] xl:ml-[19.5rem] xl:mt-1 ' src={arrowrightline} alt='daylight' height={80} width={20}/> 
        </div>
        <div className='routineyoga xl:-mt-30 xl:bottom-[24rem] relative xl:ml-[40rem] '>
        <Image className=' relative  left-8 bottom-10 xl:bottom-40 xl:-ml-4 ' src={routineyoga1} alt='daylight' height={80} width={280}/>
        <Image className=' relative xl:-mt-32 left-16 bottom-24 -z-10' src={routineyoga2} alt='daylight' height={80} width={280}/>
        <Image className=' -mt-32 relative top-[-2rem] ml-[4rem]   ' src={Boxroutine2} alt='daylight' height={80} width={150}/>
        <Image className=' -mt-32 top-[-11rem] ml-[11rem] relative' src={Boxroutine1} alt='daylight' height={80} width={150}/>
        </div>
       </div>
    </div>
  )
}
