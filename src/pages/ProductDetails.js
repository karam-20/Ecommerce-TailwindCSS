import React from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";
import { useProviderContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCartContext();
  const { product } = useProviderContext();
  const singleProduct = product.find((curELem) => {
    return curELem.id === parseInt(id);
  });
  if (!singleProduct) {
    return (
      <div className="h-screen flex justify-center items-center">
        Loading....
      </div>
    );
  }
  const { title, image, price, description } = singleProduct;
  return (
    <div className="pt-32 pb-12 lg:py-32 h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex justify-center items-center flex-1 mb-8 lg:mb-0">
            <img className="max-w-[150px] lg:max-w-[300px]" src={image} />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(singleProduct, singleProduct.id)}
              className="bg-primary py-4 px-8 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
