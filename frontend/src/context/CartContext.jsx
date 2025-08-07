import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({ cart: [], addToCart: () => {}, removeFromCart: () => {}, incrementQty: () => {}, decrementQty: () => {} });

export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage if available
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: (item.qty || 1) + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const incrementQty = (id) => {
    setCart((prev) => prev.map((item) =>
      item.id === id ? { ...item, qty: (item.qty || 1) + 1 } : item
    ));
  };

  const decrementQty = (id) => {
    setCart((prev) => prev.map((item) =>
      item.id === id ? { ...item, qty: Math.max(1, (item.qty || 1) - 1) } : item
    ));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQty, decrementQty }}>
      {children}
    </CartContext.Provider>
  );
};
