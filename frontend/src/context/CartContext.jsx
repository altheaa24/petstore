import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('petstore-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('petstore-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (pet) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === pet.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === pet.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...pet, quantity: 1 }];
    });
  };

  const removeFromCart = (petId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== petId));
  };

  const updateQuantity = (petId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(petId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === petId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};
