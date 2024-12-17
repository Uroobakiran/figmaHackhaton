import Image from "next/image";

const ProductCard = (props: { products:any }) => {
  const { products } = props;

  return (
    <div>
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4">
      <Image
        src={products.image}
        alt={products.title}
        className="mx-auto"
        width={256}
        height={256}
        quality={80}
      />
      <div className="mt-4">
        <h2 className="text-[16px] font-normal text-[#000000]">{products.title}</h2>
        <p className="text-primary text-lg mt-2">{products.price}</p>
        </div>
        </div>
        <button className="mt-4 block w-full text-black py-2">
          View More
        </button>
    </div>
  );
};

export default ProductCard;
