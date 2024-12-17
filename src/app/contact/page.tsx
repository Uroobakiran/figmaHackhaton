"use client "
import React from 'react'
import Image from 'next/image'
import LastSection from '@/components/last.Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone, faLocationDot , faGreaterThan } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  return (
    <div className='bg-white'>
       <div
          className="relative bg-cover bg-center w-full h-[316px] mb-8 flex items-center justify-center"
          style={{ backgroundImage: "url('/img/shopbanner.png')" }}>
          <div className="text-center">
            <Image
              src="/img/logo.png"
              alt="logo"
              height={77}
              width={77}
              className="mx-auto"/>
            <h1 className="text-3xl sm:text-5xl font-medium text-black"> Contact </h1>
            <p className="text-base sm:text-lg text-black mt-2">Home <FontAwesomeIcon icon={faGreaterThan} /> Contact</p>
          </div>
        </div>
        <div>
          <div className='text-center items-center justify-center'>
            <h1 className='text-[36px] sm:text-[48px] leading-[54px] font-semibold text-black mb-4'>Get In Touch With Us</h1>
            <p  className='text-[16px] font-normal leading-[24px] text-[#9F9F9F]'>For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
          </div>
          <div className='flex flex-wrap lg:justify-between justify-start bg-white p-4 sm:p-8  lg:w-3/4 mx-auto'>
            <div className="w-full md:w-1/3 bg-white  p-6 mb-6 md:mb-0"> 
              <div className='flex gap-10 mb-6 '>
                  <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: '30px' }}/>
                <div>
                  <h1 className='text-[24px] font-medium leading-[36px] text-[#000000]'>Address</h1>
                  <p className='text-[16px] sm:text-lg font-normal leading-[24px] text-[#000000]'>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
             </div>
             <div className='flex gap-10 mb-6 '>
                <FontAwesomeIcon icon={faPhone} style={{ fontSize: '30px' }} />
                <div>
                  <h1 className='text-[24px] font-medium leading-[36px] text-[#000000]'>Phone</h1>
                  <p className='text-[16px] sm:text-lg font-normal leading-[24px] text-[#000000]'>Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789</p>
                </div>
             </div>
             <div className='flex gap-10 mb-6 '>
                <FontAwesomeIcon icon={faClock} style={{ fontSize: '30px' }} />
                <div>
                  <h1 className='text-[24px] font-medium leading-[36px] text-[#000000]'> Working Time</h1>
                  <p className='text-[16px] sm:text-lg font-normal leading-[24px] text-[#000000]'>Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
          
              <form className=" w-full  md:w-1/2 bg-white  p-4 space-y-4 ">
                <div className="mb-4">
                  <label className="block text-black text-base font-medium  mb-1" htmlFor="your name"> Your name</label>
                  <input id="your name" type="text" placeholder='Abc' className="shadow appearance-none border rounded w-full  p-2 text-black leading-tight "/>
                </div>
                <div className="mb-4">
                  <label className="block text-black text-base font-medium  mb-1" htmlFor="email address"> Email address</label>
                  <input id="email address" type="text" placeholder='Abc@def.com' className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight "/>
                </div>
                <div className="mb-4">
                  <label className="block text-black text-base font-medium  mb-1" htmlFor="subject"> Subject</label>
                  <input id="subject" type="text" placeholder='This is an optional' className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight "/>
                </div>
                <div className="mb-4">
                  <label className="block text-black text-base font-medium  mb-1" htmlFor="message"> Message </label>
                  <input id="message" type="text" placeholder="Hi! i'd like to ask about" className=" h-32 shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight "/>
                </div>
                <button type="submit" className=" text-black py-2 px-6 rounded-[15px] w-[200px] border border-black "> Submit</button>
              </form>
             
          </div>
        </div>
        <LastSection />
    </div>
  )
}

export default Contact
