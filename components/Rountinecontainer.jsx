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
       <div className=' wrapper md:-mt-[20rem]'>
        <div className=' mt-10 '>
        <p className="text-center relative bottom-20 text-[36px] font-semibold p-2 text-[#220953] md:top-[-44rem] md:ml-10 md:w-[39%] ">Anytime, Any Place, Any Workout</p>
           <p className="text-[16px] leading-[22px] font-normal ml-4 relative bottom-12 text-center w-[331px] md:top-[-44rem] md:w-[32%] md:ml-[5.5rem] ">Take your routine at any time of your day, with the new videos and with the teachers who will guide you.</p>
           <div className=' relative  right-4 md:top-[-42rem] md:ml-10 '>
        <button style={gradientStyle} className='py-5 px-16 rounded-[34px] text-2xl ml-16 mb-16 md:py-5 md:px-10  md:text-xl   '>Get Started Free</button>
        <Image className=' ml-[20rem] relative  bottom-[6.7rem] md:ml-[16rem]  ' src={arrowrightline} alt='daylight' height={80} width={20}/> 
        </div>

        </div>
          
        <div className='routineyoga md:bottom-[63rem] md:ml-[22rem] relative '>
        <Image className=' relative  left-8 bottom-10 md:top-[-10rem] md:w-[75%] ' src={routineyoga1} alt='daylight' height={80} width={280}/>
        <Image className=' relative md:-mt-32 left-16 bottom-24 -z-10 md:w-[75%]  ' src={routineyoga2} alt='daylight' height={80} width={280}/>
        <Image className=' -mt-32 relative top-[-2rem] ml-[4rem]   ' src={Boxroutine2} alt='daylight' height={80} width={150}/>
        <Image className=' -mt-32 top-[-11rem] ml-[11rem] md:ml-[17rem] md:-top-[14rem] relative' src={Boxroutine1} alt='daylight' height={80} width={150}/>
        </div>
       </div>
    </div>
  )
}