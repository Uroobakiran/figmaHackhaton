import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div>
    <div className="w-full h-auto bg-yellow-100 flex flex-col md:flex-row items-center justify-between px-6 py-16">
     
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-[64px] md:text-6xl font-medium text-black leading-tight">
          Rocket Single Seater
        </h1>
        <button className="text-black text-[24px] font-medium py-2 px-6 rounded underline hover:no-underline hover:text-blue-500 transition">
          Shop Now
        </button>
      </div>

      
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <Image
          src="/img/homebanner.png"
          alt="Banner image"
          height={500}
          width={400}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
    <div className="flex bg-[#FAF4F4]">
        <div className="p-20">
          <Image src="/img/banner2.png" alt="banner image" height={1641} width={1092} />
          <h2 className="text-2xl font-semibold">Side Table</h2>
          <Link href="#" className="mt-2 inline-block text-green-500 underline">View More</Link>
        </div>
        <div className="p-20">
          <Image src="/img/banner3.png" alt="banner image" height={1055} width={1585} />
          <h2 className="text-2xl font-semibold">Side Table</h2>
          <Link href="#" className="mt-2 inline-block text-green-500 underline">View More</Link>
        </div>
      </div> 
    </div>
  );
};

export default Hero;
