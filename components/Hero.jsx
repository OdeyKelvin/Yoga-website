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
       <div className=' mt-[5rem] text-[#220953]  relative left-12 md:-left-[8rem] md:top-11 lg:mr-[35rem] '>
       <div className=' text-4xl font-medium lg:text-6xl lg:w-[60%] lg:ml-[28rem] '> Choose Your </div> 
       <h1 className=' text-4xl font-medium mt-8 mr-[4.6rem] md:mr-[7rem] lg:text-6xl lg:ml-[29rem] '>Best</h1>
       <h1 className=' text-4xl font-medium mt-4 ml-5  md:mr-[5rem] lg:text-6xl lg:ml-[32.3rem] '>Teacher</h1>
       </div>
         <div style={gradientStyle} className=' relative mt-[6rem] rotate-6 font-medium  px-4 py-3 rounded-lg  right-[3rem] text-5xl md:right-[15rem] md:top-10 lg:right-[52.7rem] lg:top-12 '>Yoga</div>
      </div>
      <div className='homestar mt-3 relative md:ml-[20rem] lg:ml-[38rem]  '>
        <div> <Image className='ml-[17rem] relative right-[13.5rem] bottom-[3rem] ' src={homestar1} alt='daylight' height={80} width={30}/></div>
        <div> <Image className='  ml-[17rem] relative right-[14rem] bottom-[4.3rem] ' src={homestar2} alt='daylight' height={80} width={45}/></div> 
        <div> <Image className='  ml-[17rem] relative right-[13rem] bottom-[6.2rem] ' src={homestar3} alt='daylight' height={80} width={15}/></div>
       </div>
       <p className=' p-2 text-xl relative bottom-[5rem] text-[#4B3E65]  items-center md:w-[40%] md:ml-16 md:-top-10 lg:w-[38%] lg:ml-[17rem] lg:text-left '>Calm your mind and body with the best yoga teachers available, relax your day and stay positive.</p>
       <div className='clippath relative md:ml-[-12.7rem] md:bottom-20 lg:bottom-[3.5rem] lg:ml-[-2rem] '>
         <div>
         <Image className='  ml-[17rem] relative  bottom-[5rem] ' src={clippath1} alt='daylight' height={80} width={20}/>
         </div>
         <div><Image className='  ml-[17.3rem] relative  bottom-[5.9rem] ' src={clippath2} alt='daylight' height={80} width={20}/></div>

       </div>
       <div>
       <button style={gradientStyle} className=' text-[#4B3E65] relative bottom-16   py-5 px-16 rounded-[34px] text-2xl md:text-xl md:right-[5rem]   md:py-5 md:px-12 lg:mr-[20rem]   '>Get Started Free</button>
       <div>
       <Image className=' ml-[18rem] relative  bottom-[6.6rem] md:ml-[18.8rem] lg:ml-[32.6rem] ' src={arrowrightline} alt='daylight' height={80} width={20}/> 
       </div>
       </div>
       <div className=' items-center '>
       <div className=' relative ml-[12rem] bottom-[4rem] text-[#220953] md:-ml-[12rem] lg:mr-[7rem] '> <h1 className=' relative text-4xl '>40+</h1>
        <p className=' text-lg text-[#220953]'>Participants</p></div>

        <div className=' relative bottom-[7.9rem] md:ml-[-22rem] mr-[10rem] lg:mr-[17rem] text-[#220953]'><h1 className=' text-4xl  '>300+</h1>
        <p className=' text-lg text-[#220953] '>Yoga Class</p></div>
       </div>
       
       <Image className=' ml-[3rem] bottom-20  relative items-center md:bottom-[39rem] md:left-[24rem] lg:ml-[25rem] lg:bottom-[42rem] lg:w-[30%]  ' src={homeyoga} alt='daylight' height={80} width={313}/> 
       
    </div>
  )
}