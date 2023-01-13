import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    //now lets check whether the item is already present on the cart or not

    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = cart.map((curElem) => {
        if (curElem.id === id) {
          return { ...curElem, amount: cartItem.amount + 1 };
        } else {
          return curElem;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  const removeCartItem = (id) => {
    const newCart = cart.filter((curElem) => {
      return curElem.id !== id;
    });
    setCart(newCart);
  };
  const clearCart = () => {
    setCart([]);
  };

  //increment
  const increseAmount = (id) => {
    const item = cart.find((curElem) => curElem.id === id);
    addToCart(item, id);
  };
  const decreseAmount = (id) => {
    const cartItem = cart.find((curElem) => {
      return curElem.id === id;
    });

    if (cartItem) {
      const newCart = cart.map((curElem) => {
        if (curElem.id === id) {
          return { ...curElem, amount: cartItem.amount - 1 };
        } else {
          return curElem;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeCartItem(id);
    }
  };
  useEffect(() => {
    const total = cart.reduce((accum, cartItem) => {
      return accum + cartItem.price * cartItem.amount;
    }, 0);
    setTotal(total);
  });
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accum, currentItem) => {
        return accum + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);
  return (
    <CartContext.Provider
      value={{
        cart,
        clearCart,
        addToCart,
        decreseAmount,
        increseAmount,
        removeCartItem,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartContext, useCartContext, CartProvider };
