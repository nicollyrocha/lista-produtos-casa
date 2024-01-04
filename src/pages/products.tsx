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
    <div className="flex flex-row items-center p-4">
      {products ? (
        products.map((product) => (
          <div className="bg-neutral-200 rounded-md flex flex-col items-center gap-5 mx-4">
            <img
              className="w-48 h-48 rounded mt-4"
              src={product.attributes.image}
              alt="product"
            />
            <div className="text-neutral-900 px-2">
              {product.attributes.name.length > 55
                ? product.attributes.name.slice(0, 55) + "..."
                : product.attributes.name}
            </div>

            <div className="text-lg">
              R$ {product.attributes.value.toString()}
            </div>

            <div className="flex bg-white rounded-md gap-3 h-7 items-center px-4 mb-4">
              <div className="flex">-</div>
              {product.attributes.quantity.toString()}
              <div className="flex">+</div>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};
