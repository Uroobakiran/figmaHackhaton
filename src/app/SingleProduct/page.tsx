import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function ProductPage() {
  return (
    <div className="max-w-6xl mt-4 mx-auto p-4 bg-white min-h-screen">
      <div className="bg-white shadow-lg rounded-lg md:flex">
        {/* Image Section */}
        <div className="w-full md:w-2/3 flex flex-col items-center">
        <div className=" flex gap-4 mb-4">
         
          {/* Thumbnails */}
          <div className="flex flex-col gap-6 w-16 md:w-1/4">
            <Image
              src="/img/single1.png"
              alt="Thumbnail 1"
              width={80}
              height={80}
              className="border bg-[#FFF9E5] rounded cursor-pointer "
            />
            <Image
              src="/img/single2.png"
              alt="Thumbnail 2"
              width={80}
              height={80}
              className="border bg-[#FFF9E5] rounded cursor-pointer "
            />
            <Image
              src="/img/single2.png"
              alt="Thumbnail 3"
              width={80}
              height={80}
              className="border bg-[#FFF9E5] rounded cursor-pointer "
            />
             <Image
              src="/img/single3.png"
              alt="Thumbnail 4"
              width={80}
              height={80}
              className="border bg-[#FFF9E5] rounded cursor-pointer "
            />
          </div>
          <Image
            src="/img/singlebig.png"
            alt="Asgaard Sofa"
            width={600}
            height={400}
            className="bg-[#FFF9E5] object-cover w-full"
          />
          </div>
        </div>

        
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-3xl font-bold mb-2">Asgaard Sofa</h1>
          <p className="text-2xl text-green-600 font-semibold mb-4">
            Rs. 250,000.00
          </p>
          <p className="text-gray-600 mb-4">
            Setting the bar as one of the best products in its class, the
            Asgaard sofa is a stylish and modern design, offering comfort and
            durability.
          </p>

         
          <div className="mb-4">
            <label className="font-semibold">Size:</label>
               <div className="flex gap-2 rounded">
                <button className="border w-[30px] h-[30px] bg-[#FBEBB5]">L</button>
                <button className="border w-[30px] h-[30px] bg-[#FAF4F4]" >XL</button>
                <button className="border w-[30px] h-[30px] bg-[#FAF4F4]">XS</button>
                </div>
          </div>

          
          <div className="mb-4">
            <label className="font-semibold">Color:</label>
            <div className="flex gap-2">
            <input type="radio"   id="color1" name="color" className="hidden peer"/>
            <label htmlFor="color1" className="w-8 h-8 rounded-full bg-[#816DFA] cursor-pointer border border-gray-300 peer-checked:ring-4 peer-checked:ring-[#816DFA]"></label>
            <input type="radio"  id="color2" name="color" className="hidden peer"/>
            <label htmlFor="color1" className="w-8 h-8 rounded-full bg-[#000000] cursor-pointer border border-gray-300 peer-checked:ring-4 peer-checked:ring-[#000000]"></label>
            <input type="radio" id="color3" name="color" className="hidden peer"/>
            <label htmlFor="color1" className="w-8 h-8 rounded-full bg-[#CDBA7B] cursor-pointer border border-gray-300 peer-checked:ring-4 peer-checked:ring-[#CDBA7B]"></label>
            </div>
          </div>

         
          <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
            Add to Cart
          </button>

          
          <p className="mt-4 text-gray-600">
            <strong>SKU:</strong> SS001
          </p>
          <p className="text-gray-600">
            <strong>Category:</strong> Sofas
          </p>
          <p className="text-gray-600">
            <strong>Tags:</strong> Sofa, Chair, Home, Shop
          </p>
          <p className="text-gray-600">
            <strong>Share</strong> 
            <FontAwesomeIcon icon={faFacebook} /> 
            <FontAwesomeIcon icon={faLinkedin} /> 
            <FontAwesomeIcon icon={faTwitter} />
          </p>
        </div>
      </div>
    </div>
  );
}
