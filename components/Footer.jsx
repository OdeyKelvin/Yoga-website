import React from 'react'
import Image from 'next/image';
import copywright from '../public/assets/copywright.svg'
import { FaFacebook,FaInstagram,FaTwitter, FaYoutube  } from 'react-icons/fa';
export default function Footer() {

    const gradientStyle = {
        background: 'linear-gradient(73.19deg, #FF52AF 11.6%, #9F53FF 83.86%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
  return (
    <div>
        <div className=' bg-[#1E0849] mt-10 pb-5 xl:h-[32rem]'>
       <p className=' p-6 text-[20px] text-white xl:pt-8 relative xl:top-20 xl:ml-[8rem] '>Yoga</p>
       <h2 className=' text-[#A197B4] text-[15px] w-[59%] p-6 xl:w-[19%] xl:p-6 xl:ml-[8rem] relative xl:top-24'>Take care of your health and your mind with the best Yoga classes.</h2>
       <p className=' text-[20px] p-6 text-white xl:bottom-[6.6rem] xl:ml-[38rem] relative'>Address</p>
       <h2 className=' w-[39%] ml-6 text-[#A197B4] relative xl:w-[10%] xl:ml-[39rem] xl:bottom-16'>12345 M/01 Sol Avenue, Lima, Peru</h2>
       <p className=' text-[20px] relative xl:bottom-[14.5rem] xl:ml-[52.5rem] p-6 text-white'>Contact</p>
       <h2 className=' w-[39%] ml-6 text-[#A197B4] relative xl:w-[10%] xl:ml-[53.5rem] xl:bottom-[12rem] '>+123 456 7890
yoga@email.com</h2>
<p className=' text-[20px] p-6 text-white relative xl:bottom-[22.5rem] xl:ml-[66rem]'>Office</p>
<h2 className=' w-[39%] ml-6 text-[#A197B4] relative xl:w-[12%] xl:ml-[67.7rem] xl:bottom-[20rem] '>Monday - Saturday
9AM - 10PM</h2>
<div className=' p-6  ml-10 border-b  w-[77%] xl:ml-[9.5rem] xl:bottom-[18rem] relative '></div>
<div style={gradientStyle} className=' text-white p-10  flex space-x-6 ml-[4rem] items-center relative xl:bottom-[16rem] xl:ml-[6.5rem] '>
<   FaFacebook size={25} />
<FaInstagram size={25}/>
<FaTwitter size={25}/>
<FaYoutube size={25} />
</div>
<div className=' xl:bottom-[21rem] xl:ml-[52.6rem] relative'> 
<Image className=' relative top-5 ml-8 ' src={copywright} alt='daylight' height={80} width={15}/>
<h2 className=' text-[#A197B4]  ml-14'>Copyright Bedimcode. All rights reserved</h2>

</div>
        </div>
    </div>
  )
}
