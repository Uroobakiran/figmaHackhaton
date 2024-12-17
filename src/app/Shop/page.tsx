"use client";
import ProductCard from "@/components/cart";
import LastSection from "@/components/last.Section";
import Image from "next/image";

type Products = {
  id: number;
  image: string;
  title: string;
  price?: number;
};

const products: Products[] = [
  { id: 1, image: "/img/cart1.png", title: "Outdoor Bar Table", price: 30000.0 },
  { id: 2, image: "/img/cart2.png", title: "Dining Chair", price: 15000.0 },
  { id: 3, image: "/img/cart3.png", title: "Console Table", price: 10000.0 },
  { id: 4, image: "/img/cart4.png", title: "Sofa Set", price: 50000.0 },
  { id: 5, image: "/img/cart5.png", title: "plain console_", price: 258200.0 },
  { id: 6, image: "/img/cart6.png", title: "Reclaimed teak Sideboard", price: 20000.0 },
  { id: 7, image: "/img/cart7.png", title: "SJP_0825", price: 200000.0 },
  { id: 8, image: "/img/cart8.png", title: "Bella chair and table", price: 100000.0 },
  { id: 9, image: "/img/cart9.png", title: "Granite square side table", price: 258800.0 },
  { id: 10, image: "/img/cart10.png", title: "Asgaard sofa", price: 250000.0 },
  { id: 11, image: "/img/cart11.png", title: "Maya sofa three seater", price: 115000.0 },
  { id: 12, image: "/img/cart12.png", title: "Outdoor sofa set", price: 244000.0 },
];

const Shop = () => {
  return (
    <div className="bg-white">
      
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
            Shop
          </h1>
          <p className="text-base sm:text-lg text-black mt-2">Home Shop</p>
        </div>
      </div>

     
      <div className="flex flex-wrap justify-between items-center px-4 sm:px-8 py-4 border-b border-gray-300 bg-[#FAF4F4]">
        <button className="text-sm font-medium text-black border px-3 py-1 rounded">
          Filter
        </button>
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          <p className="text-sm text-black">Showing 1-16 of {products.length} results</p>
          <div>
            <label htmlFor="sort" className="mr-2 text-sm text-black">
              Sort by
            </label>
            <select
              id="sort"
              className="border px-3 py-1 rounded text-sm focus:outline-none"
            >
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-8 py-8">
        {products.map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}
      </div>
       <div className="flex flex-wrap justify-center items-center space-x-4 py-6">
        <button className="bg-[#FBEBB5] text-[#000000] px-4 py-2 rounded-lg text-sm font-medium">1</button>
        <button className="bg-[#FBEBB5] text-[#000000] px-4 py-2 rounded-lg text-sm font-medium">2</button>
        <button className="bg-[#FBEBB5] text-[#000000] px-4 py-2 rounded-lg text-sm font-medium">3</button>
        <button className="bg-[#FBEBB5] text-[#000000] px-4 py-2 rounded-lg text-sm font-medium">Next</button>
       </div>
      <LastSection />
</div>
  );
};

export default Shop;
