import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] py-12  text-sm">
      <div className="max-w-6xl mx-auto flex  gap-8 px-4">
        
        <div className=" flex items-center justify-center" >
          <p className="text-base text-[#9F9F9F] font-normal leading-[24px]">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>

        <div className="flex justify-between gap-8 w-full">
        <div>
          <h4 className="font-medium text-base mb-4 text-[#9F9F9F]">Links</h4>
          <ul className="space-y-2">
            <li>
            <Link href="#" className="text-base font-medium text-[#000000]">
                Home
                </Link>
            </li>
            <li>
            <Link href="#" className="text-base font-medium text-[#000000]">
                Shop
                </Link>
            </li>
            <li>
              <Link href="#" className="text-base font-medium text-[#000000]">
                About
                </Link>
            </li>
            <li>
            <Link href="#" className="text-base font-medium text-[#000000]">
                Contact
                </Link>
            </li>
          </ul>
        </div>

      
        <div>
          <h4 className="font-medium text-base mb-4 text-[#9F9F9F]">Help</h4>
          <ul className="space-y-2">
            <li>
            <Link href="#" className="text-base font-medium text-[#000000]">
                Payment Options
                </Link>
            </li>
            <li>
            <Link href="#" className="text-base font-medium text-[#000000]">
                Returns
                </Link>
            </li>
            <li>
              <Link href="#" className="text-base font-medium text-[#000000]">
                Privacy Policies
              </Link>
            </li>
          </ul>
        </div>

       
        <div>
          <h4 className="font-bold mb-4 text-[#9F9F9F]">Newsletter</h4>
         
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className=" text-[#9F9F9F] underline  px-4 py-2 w-full "
            />
            <button className="px-4 py-2 font-medium underline text-black  ">
              Subscribe
            </button>
          </div>
        </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 my-4 border-t border-[#9F9F9F]" />

      <div className="max-w-6xl mx-auto px-4 text-start text-[#000000]">
        © 2022 Meublé House. All rights reserved.
      </div>
    </footer>
    
  );
};

export default Footer;
