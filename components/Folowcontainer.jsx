import React from 'react'
import Buttonfollow from '../public/assets/Buttonfollow.svg'
import followyoga1 from '../public/assets/followyoga1.svg'
import followyoga2 from '../public/assets/followyoga2.svg'
import followyoga3 from '../public/assets/followyoga3.svg'
import followyoga4 from '../public/assets/followyoga4.svg'
import Image from 'next/image';
export default function Folowcontainer() {
    const gradientStyle = {
        background: 'linear-gradient(73.19deg, #FF52AF 11.6%, #9F53FF 83.86%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
  return (
    <div>
        
       <div className=' mb-32 md:-mt-[57rem]'>
        <p className="follow  text-center relative top-32 text-5xl md:w-[50%] md:ml-[12rem] md:leading-normal  ">Follow Us On Instagram </p>
        <p  style={gradientStyle} className=" p-2 yola relative top-32 text-center text-5xl  ">#YOGA</p>
        <Image className=' relative top-[11rem] ml-[8rem] md:ml-[23rem] md:w-[7%] md:top-[9rem] ' src={Buttonfollow} alt='daylight' height={80} width={100}/>
       </div>
       <div className=' followyoga md:-mt-32 '>
       <Image className=' md:-mt-32 relative top-20 ml-10 md:ml-[6.5rem] md:-top-[11rem] ' src={followyoga1} alt='daylight' height={80} width={140}/>
       <Image className=' md:-mt-32 ml-48 relative bottom-20 md:ml-[35rem] md:-top-[16rem] ' src={followyoga2} alt='daylight' height={80} width={140}/>
       <Image className=' md:-mt-32 ml-10 relative bottom-20 md:ml-[9rem] md:top-[-2rem]  ' src={followyoga3} alt='daylight' height={80} width={240}/>
       <Image className=' md:-mt-32 ml-24 relative bottom-14 md:ml-[26rem] md:top-[-4rem]  ' src={followyoga4} alt='daylight' height={80} width={240}/>
       </div>
       
    </div>
  )
}