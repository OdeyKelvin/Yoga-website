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
        
       <div className=' mb-32 xl:-mt-32'>
        <p className="follow  text-center relative top-32 text-5xl xl:text-5xl xl:w-[23%] xl:ml-[32rem]  ">Follow Us On Instagram </p>
        <p  style={gradientStyle} className="yola relative top-32 text-center text-5xl xl:top-[9rem] ">#YOGA</p>
        <Image className=' relative top-[10rem] ml-[8rem] xl:w-[5%]  xl:ml-[40rem]' src={Buttonfollow} alt='daylight' height={80} width={100}/>
       </div>
       <div className=' followyoga xl:-mt-32 '>
       <Image className=' xl:-mt-32 relative top-20 ml-10 xl:ml-[20rem] xl:top-[-7rem] ' src={followyoga1} alt='daylight' height={80} width={140}/>
       <Image className=' xl:-mt-32 ml-48 xl:ml-[54rem] xl:bottom-[13rem] relative bottom-20 ' src={followyoga2} alt='daylight' height={80} width={140}/>
       <Image className=' xl:-mt-32 ml-10 relative bottom-20 xl:ml-[20rem] xl:top-1   ' src={followyoga3} alt='daylight' height={80} width={240}/>
       <Image className=' xl:-mt-32 ml-24 relative bottom-14 xl:ml-[49rem] ' src={followyoga4} alt='daylight' height={80} width={240}/>
       </div>
       
    </div>
  )
}
