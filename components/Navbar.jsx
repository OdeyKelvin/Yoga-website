import Link from 'next/link'
import React, {useState} from 'react'
import daylighticon from '../public/assets/daylighticon.svg';
import hambugermenu from '../public/assets/hambugermenu.svg';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
export default function Navbar() {
   const [nav, setNav] = useState(false)
   const handleNav = () => {
      setNav(!nav);
    };
  return (
    <div className=' ' >
       <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16  '>
          <h1 className=' relative text-2xl left-[1rem] md:left-[12rem] mt-8 text-transparent bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text '>Yoga</h1>
       <ul className=' hidden text-[#220953] text-lg font-medium xl:mt-10 md:flex justify-between space-x-14 ml-[36rem] mt-6  '>
          <li className=' text-transparent bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text'> 
             <Link href='/'> Home</Link>
          </li>
          <li>
             <Link href='/'>Health</Link>
          </li>
          <li>
             <Link href='/'>Routine</Link>
          </li>
          <li>
             <Link href='/'>Follow</Link>
             
          </li>
          
          <div><Image className=' ml-6 mt-1' src={daylighticon} alt='daylight' height={80} width={20}/></div>
     
       </ul>
       
       <div onClick={handleNav}>
         {/* hamburger icon  */}
                     <div><Image className=' md:hidden ml-[17rem] mt-8' src={hambugermenu} alt='daylight' height={80} width={20}/></div>
       </div>
       
       <div><Image className=' md:hidden relative right-[3.4rem] mt-8' src={daylighticon} alt='daylight' height={80} width={20}/></div>
    {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-[100]' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] z-[100] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className=' relative flex bottom-4  w-full items-center justify-between'>
            <h1 className=' relative text-2xl text-transparent bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text '>Yoga</h1>

              <div
                onClick={handleNav}
                className='rounded-full  p-3 cursor-pointer'
              >
                <AiOutlineClose  size={25} />

              </div>
            </div>
            <ul className=' space-y-16 mt-20 text-2xl'>
            <li className='text-transparent bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text'> 
             <Link href='/'> Home</Link>
          </li>
          <li>
             <Link href='/'>Health</Link>
          </li>
          <li>
             <Link href='/'>Routine</Link>
          </li>
          <li>
             <Link href='/'>Follow</Link>
             
          </li>
            </ul>
            </div>
            </div>
            </div>

    </div>

          </div>
  )
}