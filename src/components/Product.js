import React from "react";
import { NavLink } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { useCartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { id, title, category, price, image } = product;
  const { addToCart } = useCartContext();
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition ">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
            ></img>
          </div>
        </div>
        <div className="absolute top-6 -right-12 group-hover:right-5 p-2 flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <button>
            <div
              onClick={() => addToCart(product, id)}
              className="flex justify-center items-center bg-red-500 text-white w-10 h-10"
            >
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <NavLink
            to={`/product/${id}`}
            className="w-10 h-10 bg-white flex justify-center items-center drop-shadow-xl"
          >
            <BsEyeFill />
          </NavLink>
        </div>
      </div>
      <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
      <NavLink to={`/product/${id}`}>
        <h2 className="font-semibold mb-1">{title}</h2>
      </NavLink>
      <div className="font-semibold">${price}</div>
    </div>
  );
};

export default Product;
