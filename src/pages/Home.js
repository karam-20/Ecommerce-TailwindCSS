import React from "react";
import { useProviderContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const { product } = useProviderContext();

  const filterProduct = product.filter((i) => {
    return i.category === "men's clothing" || i.category === "women's clothing";
  });

  return (
    <div>
      <Hero />
      <section className="py-[10rem] ">
        <div className="container mx-auto">
          <div className="gap-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 max-w-sm mx-auto md:max-w-none md:mx-0 ">
            {filterProduct.map((curElem) => {
              return <Product product={curElem} key={curElem.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
