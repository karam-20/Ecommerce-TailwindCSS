import React from "react";
import { useSidebarProviderContext } from "../contexts/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
import { useCartContext } from "../contexts/CartContext";
const Sidebar = () => {
  const { itemAmount } = useCartContext();
  const { isOpen, handleClose } = useSidebarProviderContext();
  const { cart, clearCart, total } = useCartContext();
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex  items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div className="cursor-pointer w-8 h-8 flex justify-center items-center">
          <IoMdArrowForward
            onClick={() => handleClose()}
            className="text-2xl"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[520px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((curElem) => {
          return <CartItem item={curElem} key={curElem.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex justify-between w-full items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ {total}
          </div>
          {/* clear cart */}
          <div
            onClick={() => clearCart()}
            className="cursor-pointer py-4 bg-red-500 text-white w-10 h-10 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
      </div>
      <div className="bg-primary text-white py-3 px-8 flex items-center justify-center cursor-pointer">
        <h1>Checkout</h1>
      </div>
    </div>
  );
};

export default Sidebar;
