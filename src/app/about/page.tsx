import React from 'react'
import Image from 'next/image'
import LastSection from '@/components/last.Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGreaterThan } from '@fortawesome/free-solid-svg-icons';
const About = () => {
  return (
    <div>
       <div
               className="relative bg-cover bg-center w-full h-[316px] mb-8 flex items-center justify-center"
               style={{ backgroundImage: "url('/img/shopbanner.png')" }}
             >
               <div className="text-center">
                 <Image
                   src="/img/logo.png"
                   alt="logo"
                   height={77}
                   width={77}
                   className="mx-auto"
                 />
                 <h1 className="text-3xl sm:text-5xl font-medium text-black">
                   About
                 </h1>
                 <p className="text-base sm:text-lg text-black mt-2">Home <FontAwesomeIcon icon={faGreaterThan} /> About</p>
               </div>
             </div>
      <LastSection />
     
    </div>
  )
}

export default About
