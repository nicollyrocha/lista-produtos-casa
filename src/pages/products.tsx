import { useEffect, useState } from "react";
import { getProducts } from "../services/getProducts";

interface ProductsInterface {
 className: string;
 id: string;
 _localId: string | undefined;
 _objCount: Number;
 attributes: {
  createdAt: string;
  image: string;
  name: string;
  updateAt: string;
  value: Number;
  description: string | undefined;
  quantity: Number;
 };
 createdAt: string;
 updatedAt: string;
}
export const ProductsPage = () => {
 const [products, setProducts] = useState<ProductsInterface[]>([]);

 useEffect(() => {
  get();
 }, []);

 const get = async () => {
  await getProducts().then((res) => {
   setProducts(res);
  });
 };

 return (
  <div className="bg-neutral-300 h-screen flex flex-col gap-5 items-center">
   <div className="mt-10 w-full grid grid-cols-3 items-center gap-5">
    {products ? (
     products.map((product) => (
      <div className="bg-neutral-400 rounded-md flex flex-col items-center gap-5 mb-10 mx-5">
       <img
        className="w-48 h-48 rounded mt-10"
        src={product.attributes.image}
        alt="product"
       />
       <div className="text-neutral-900">
        {product.attributes.name.length > 55
         ? product.attributes.name.slice(0, 55) + "..."
         : product.attributes.name}
       </div>
       <div className="text-neutral-900">
        {product.attributes.description ? (
         product.attributes.description.length > 55 ? (
          product.attributes.description.slice(0, 55) + "..."
         ) : (
          product.attributes.description
         )
        ) : (
         <></>
        )}
       </div>
       <div className="flex flex-row w-full justify-between mx-8">
        <div className="text-lg mb-4">
         R$ {product.attributes.value.toString()}
        </div>

        <div className="flex flex-row bg-white rounded-md gap-3 h-7 items-center px-2">
         <div className="flex">-</div>
         {product.attributes.quantity.toString()}
         <div className="flex">+</div>
        </div>
       </div>
      </div>
     ))
    ) : (
     <></>
    )}
   </div>
  </div>
 );
};
