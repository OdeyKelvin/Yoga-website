import React from 'react'
import homestar1 from '../public/assets/homestar1.svg';
import homestar2 from '../public/assets/homestar2.svg';
import homestar3 from '../public/assets/homestar3.svg';
import clippath1 from '../public/assets/clippath1.svg'
import clippath2 from '../public/assets/clippath2.svg'
import arrowrightline from '../public/assets/arrowrightline.svg'
import homeyoga from '../public/assets/homeyoga.svg'
import Image from 'next/image';
export default function Hero() {
  const gradientStyle = {
    background: 'linear-gradient(73.19deg, #FF52AF 11.6%, #9F53FF 83.86%)',
    color: 'white',
  };
  return (
    <div className=' text-center '> 
      <div className=' flex justify-center items-center '>
       <div className=' mt-[5rem] text-[#220953]  relative left-12 '>
       <div className=' text-5xl font-medium xl:mr-[37rem] '> Choose Your </div> 
       <h1 className=' text-5xl font-medium mt-8 mr-[4.6rem] xl:mr-[48rem]'>Best</h1>
       <h1 className=' text-5xl font-medium mt-4 ml-5  xl:mr-[45rem]'>Teacher</h1>
       </div>
         <div style={gradientStyle} className=' xl:right-[46rem]  relative mt-[6rem] rotate-6 font-medium  px-4 py-3 rounded-lg  right-[3rem] text-5xl '>Yoga</div>
      </div>
      <div className='homestar mt-3 ml-2 xl:ml-[40rem]'>
        <div> <Image className='ml-[17rem] relative right-[13.5rem] bottom-[3rem] ' src={homestar1} alt='daylight' height={80} width={30}/></div>
        <div> <Image className='  ml-[17rem] relative right-[14rem] bottom-[4.3rem] ' src={homestar2} alt='daylight' height={80} width={45}/></div> 
        <div> <Image className='  ml-[17rem] relative right-[13rem] bottom-[6.2rem] ' src={homestar3} alt='daylight' height={80} width={15}/></div>
       </div>
       <p className=' text-xl relative bottom-[5rem]  items-center font-normal xl:w-[39%] xl:bottom-[5rem] xl:left-[12rem] p-4'>Calm your mind and body with the best yoga teachers available, relax your day and stay positive.</p>
       <div className='clippath relative xl:bottom-[7rem] xl:right-[5.7rem]'>
         <div>
         <Image className='  ml-[17rem] relative  bottom-[5rem] ' src={clippath1} alt='daylight' height={80} width={20}/>
         </div>
         <div><Image className='  ml-[17.3rem] relative  bottom-[5.9rem] ' src={clippath2} alt='daylight' height={80} width={20}/></div>

       </div>
       <div>
       <button style={gradientStyle} className=' text-[#4B3E65] relative bottom-16 xl:bottom-[6rem] xl:right-[20rem]  py-5 px-16 rounded-[34px] text-2xl'>Get Started Free</button>
       <div>
       <Image className=' md:hidden ml-[19.1rem] relative  bottom-[6.6rem] ' src={arrowrightline} alt='daylight' height={80} width={20}/> 
       </div>
       </div>
       <div className=' items-center '>
       <div className=' relative ml-[12rem] bottom-[4rem] text-[#220953] xl:right-[17rem]  '> <h1 className=' text-4xl xl:text-6xl'>40+</h1>
        <p className=' text-lg text-[#220953]'>Participants</p></div>

        <div className=' relative bottom-[7.9rem] mr-[10rem] text-[#220953] xl:mt-[5rem] xl:right-[20rem] xl:bottom-[13.9rem]'><h1 className=' text-4xl xl:text-6xl'>300+</h1>
        <p className=' text-lg text-[#220953] '>Yoga Class</p></div>
       </div>
       <div className=' homeyoga'>
       <Image className=' ml-[3rem] top-[46rem] absolute items-center xl:top-[6rem] xl:left-[40rem] xl:w-[34%]  ' src={homeyoga} alt='daylight' height={80} width={313}/> 
       </div>
    </div>
  )
}
