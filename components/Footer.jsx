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
    <div className='  bg-[#1E0849] mt-10 lg:pb-[-20rem] w-full pb-5 '>
        <div className=''>
       <p className=' p-6 text-[20px] text-white md:pt-20 lg:pt-20 lg:ml-[9rem]  '>Yoga</p>
       <h2 className=' text-[#A197B4] text-[15px] w-[59%] p-6  relative lg:text-left lg:w-[20%] lg:ml-[9rem]  '>Take care of your health and your mind with the best Yoga classes.</h2>
       <p className=' text-[20px] p-6 text-white  relative lg:ml-[32rem] lg:bottom-[12rem] '>Address</p>
       <h2 className=' w-[39%] ml-6 text-[#A197B4] relative lg:text-left lg:w-[13%] lg:ml-[33rem] lg:bottom-[10rem]'>12345 M/01 Sol Avenue, Lima, Peru</h2>
       <p className=' text-[20px] relative  p-6 text-white lg:ml-[47rem] lg:bottom-[20rem] '>Contact</p>
       <h2 className=' w-[39%] ml-6 text-[#A197B4] relative lg:w-[13%] lg:ml-[48rem] lg:bottom-[18rem] '>+123 456 7890
yoga@email.com</h2>
<p className=' text-[20px] p-6 text-white relative lg:ml-[62rem] lg:bottom-[27.5rem]  '>Office</p>
<h2 className=' w-[39%] ml-6 text-[#A197B4] relative lg:w-[13%] lg:ml-[63rem] lg:bottom-[26rem] '>Monday - Saturday
9AM - 10PM</h2>
<div className=' p-6  ml-10 border-b  w-[77%]  relative lg:bottom-[22rem] lg:ml-[11rem] '></div>
<div style={gradientStyle} className=' text-white p-10  flex space-x-6 ml-[4rem] items-center relative lg:bottom-[19rem] lg:ml-[9rem]  '>
<   FaFacebook size={25} />
<FaInstagram size={25}/>
<FaTwitter size={25}/>
<FaYoutube size={25} />
</div>
<div className=' relative lg: bottom-[24rem] lg:ml-[50rem]'> 
<Image className=' relative top-5 ml-8 ' src={copywright} alt='daylight' height={80} width={15}/>
<h2 className=' text-[#A197B4]  ml-14'>Copyright Bedimcode. All rights reserved</h2>

</div>
        </div>
    </div>
  )
}