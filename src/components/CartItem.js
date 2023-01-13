import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { useCartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeCartItem, increseAmount, decreseAmount } = useCartContext();
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-grap-200 w-full font-light text-grap-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <NavLink to={`/product/${id}`}>
          <img className="max-w-[80px] " src={image} />
        </NavLink>

        <div className="w-full flex flex-col">
          {/* title and remove */}
          <div className="flex justify-between mb-2">
            <NavLink
              className="uppercase text-sm font-medium max-w-[240px] text-primary hover:underline"
              to={`/product/${id}`}
            >
              {title}
            </NavLink>
            <div
              onClick={() => removeCartItem(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition duration-300" />
            </div>
          </div>
          <div className="flex text-sm capitalize gap-x-2 h-[36px]">
            {/* quantity */}
            <div className="flex flex-1 justify-center max-w-[100px] items-center h-full border text-primary font-medium">
              <div
                onClick={() => decreseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={() => increseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="flex flex-1 items-center justify-around">
              $ {price}
            </div>
            {/* final amount */}
            <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${
              price * amount
            }`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
