import ProductCard from "@/components/cart";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

const TopPicks = () => {
  const allproducts : Product[] = [
    {id: 1 , image:"/img/cart1.png",  title:"Outdoor Bar Table" , price:30000.00 },
    { id: 2 ,image:"/img/cart2.png" , title:"Dining Chair" , price:15000.00 },
    {id: 3 , image:"/img/cart3.png" , title:"Console Table" , price:10000.00},
   { id: 4 , image:"/img/cart4.png" , title:"Sofa Set" , price:50000.00 },
   { id: 5 ,image:"/img/cart5.png" , title:"plain console_" , price:258200.00},
   { id: 6 ,image:"/img/cart6.png" , title:"Reclaimed teak Sideboard" , price:20000.00},
    {id: 7 ,image:"/img/cart7.png" , title:"SJP_0825" ,price:200000.00 },
    {id: 8 , image:"/img/cart8.png" , title:"Bella chair and table" ,  price:100000.00 },
   { id: 9 ,image:"/img/cart9.png"  , title:"Granite square side table" , price:258800.00 },
   { id: 10 ,image:"/img/cart10.png" , title:"Asgaard sofa" , price:250000.00 },
   { id: 11 ,image:"/img/cart11.png" , title:"Maya sofa three seater" , price:115000.00},
   { id: 12 ,image:"/img/cart12.png" , title:"Outdoor sofa set" , price:244000.00 }
]
  const fourProducts = allproducts.slice(0,4)
  return (
    <div className="px-4 sm:px-8 py-16 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Top Picks For You</h2>
        <p className="text-gray-600 mt-4">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {fourProducts.map((products) => (
        <ProductCard key={products.id} products={products}/>
      ))}
      </div>
    </div>
  );
};

export default TopPicks;
