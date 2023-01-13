import React, { createContext, useState, useEffect, useContext } from "react";

const ProductContext = createContext();
const API = "https://fakestoreapi.com/products";
const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  //fetch product
  const myproduct = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setProduct(data);
  };
  useEffect(() => {
    myproduct(API);
  }, []);

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
};
const useProviderContext = () => {
  return useContext(ProductContext);
};

export { useProviderContext, ProductContext, ProductProvider };
