"use client"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSearch , faUser, faExclamation  } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from "next/navigation"
const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    
      <header className={`px-4 py-4 flex justify-between items-center relative shadow-md ${
      isHomePage ? "bg-[#FBEBB5]" : "bg-transparent"
    }`}>
      <div className='w-1/3'></div>
        <nav className="flex space-x-6">
          <Link href="/"
            className="text-base font-medium text-[#000000]">Home
          </Link>
          <Link href="/Shop" target="-blank"
            className="text-base font-medium text-[#000000]">Shop
          </Link>
          <Link href="/about" target="-blank"
             className="text-base font-medium text-[#000000]">About
          </Link>
          <Link href="/contact" target="-blank"
            className="text-base font-medium text-[#000000]">Contact
          </Link>
        </nav>

       
        <div className="flex space-x-6 justify-start pr-12">
          <Link href="#" >
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faExclamation} />
          </Link>
          <Link href="#"
             className="">
              <FontAwesomeIcon icon={faSearch} />
            
          </Link>
          <Link href="#"
             className="">
              <FontAwesomeIcon icon={faShoppingCart} />
           
          </Link>
          <Link href="#"
            className="">
              <FontAwesomeIcon icon={faHeart} />
            
          </Link>
        </div>
      </header>
  
  );
};

export default Navbar;
