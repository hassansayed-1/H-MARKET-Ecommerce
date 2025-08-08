import React, { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";  


export const CartContext = createContext({
  cart: [],
  addToCart: async () => {},
  removeFromCart: async () => {},
  incrementQty: async () => {},
  decrementQty: async () => {},
  clearCart: async () => {},
  setCart: () => {},
  handleLogin: async () => {},
  handleLogout: () => {},
});

const LOCAL_CART_KEY = "guest_cart";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  // Get JWT from localStorage
  const getJwt = () => localStorage.getItem("jwt");
  const isAuthenticated = !!getJwt();

  // On mount: set user and load cart
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);

    if (storedUser && getJwt()) {
      fetchCartFromStrapi();
    } else {
      // Guest: load from localStorage
      const localCart = localStorage.getItem(LOCAL_CART_KEY);
      setCart(localCart ? JSON.parse(localCart) : []);
    }
    // eslint-disable-next-line
  }, []);

  // Save guest cart to localStorage on change
  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(cart));
    }
  }, [cart, isAuthenticated]);

  // Fetch cart from User
  const fetchCartFromStrapi = async () => {
    try {
      const jwt = getJwt();
      const res = await fetch(`${import.meta.env.VITE_API}/api/users/me?populate=cart`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      if (!res.ok) throw new Error("Failed to fetch cart");
      const data = await res.json();
      // If cart is array of product objects:
      setCart(data.cart || []);
      // If cart is array of product IDs, you may need to fetch product details here
    } catch {
      setCart([]);
    }
  };

  // Update cart in User
  const updateCartInStrapi = async (newCart) => {
    try {
      const jwt = getJwt();
      // If cart is array of product IDs:
      // const cartIds = newCart.map(item => item.id);
      await fetch("/api/users/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({ cart: newCart }),
        // If only IDs: body: JSON.stringify({ cart: cartIds }),
      });
    } catch {}
  };

  // Cart actions
  const addToCart = async (product) => {
    const exists = cart.find((item) => item.id === product.id);
    let newCart;
    if (exists) {
      newCart = cart.map((item) =>
        item.id === product.id ? { ...item, qty: (item.qty || 1) + 1 } : item
      );
    } else {
      newCart = [...cart, { ...product, qty: 1 }];
    }
    setCart(newCart);
    if (isAuthenticated) await updateCartInStrapi(newCart);
  };

  const removeFromCart = async (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    if (isAuthenticated) await updateCartInStrapi(newCart);
  };

  const incrementQty = async (id) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, qty: (item.qty || 1) + 1 } : item
    );
    setCart(newCart);
    if (isAuthenticated) await updateCartInStrapi(newCart);
  };

  const decrementQty = async (id) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, qty: Math.max(1, (item.qty || 1) - 1) } : item
    );
    setCart(newCart);
    if (isAuthenticated) await updateCartInStrapi(newCart);
  };

  const clearCart = async () => {
    setCart([]);
    if (isAuthenticated) await updateCartInStrapi([]);
    else localStorage.removeItem(LOCAL_CART_KEY);
  };

  // On login: fetch cart from Strapi
  const handleLogin = async () => {
    await fetchCartFromStrapi();
  };

  // On logout: clear cart from context and localStorage
  const handleLogout = () => {
    setCart([]);
    localStorage.removeItem(LOCAL_CART_KEY);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementQty,
        decrementQty,
        clearCart,
        setCart,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
