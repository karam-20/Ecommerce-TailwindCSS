import React from "react";
import { useSidebarProviderContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { useCartContext } from "../contexts/CartContext";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
const Header = () => {
  const { isOpen, setisOpen } = useSidebarProviderContext();
  const { itemAmount } = useCartContext();
  return (
    <div className="fixed w-full z-10 bg-slate-50 drop-shadow-sm px-[10rem] bg-transparent backdrop-blur-lg">
      <div className=" flex mx-auto items-center justify-between h-[100px] ">
        <NavLink to={"/"}>
          <div>
            <img className="w-[210px]" src={logo} />
          </div>
        </NavLink>
        <div
          className="cursor-pointer flex relative text-gray  max-w-[50px]"
          onClick={() => setisOpen(!isOpen)}
        >
          <BsBag />
          <div className="bg-red-500 absolute -top-1.5 left-3 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
