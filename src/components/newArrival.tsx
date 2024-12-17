import React from 'react';
import Image from 'next/image';

const NewArrival = () => {
  return (
    <div className="bg-yellow-100 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-16">
    
      <div className="w-full md:w-1/2 flex justify-center">
        <Image 
          src="/img/AsgaardSofa.png" 
          alt="Asgaard sofa" 
          height={799} 
          width={983} 
          className="max-w-full h-auto" 
        />
      </div>

      
      <div className="w-full md:w-1/2 mt-8 md:mt-0 space-y-4 text-center md:text-left">
        <p className="text-gray-600 text-lg font-medium">New Arrivals</p>
        <h1 className="text-3xl md:text-5xl font-bold text-black">
          Asgaard Sofa
        </h1>
        <button className="text-lg md:text-xl font-medium text-black py-2 underline hover:text-gray-700">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default NewArrival;
