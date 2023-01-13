import React from "react";
import WomenImg from "../img/woman_hero.png";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <section className=" bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around items-center h-full pt-24">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500"></div>New Trend
          </div>
          <h1 className="text-[70px] leading-1.1 font-light mb-4">
            AUTUMM SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <NavLink
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </NavLink>
        </div>
        <div className="hidden lg:block">
          <img src={WomenImg} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
