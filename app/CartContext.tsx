'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false); // New: Safety check for performance

  // 1. THE LOAD: Grab items from the Magic Pocket safely
  useEffect(() => {
    const savedCart = localStorage.getItem('sikhStoreCart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("The pocket was messy, resetting...", e);
        setCart([]);
      }
    }
    setIsLoaded(true); // Tell the app it's safe to show the items
  }, []);

  // 2. THE SAVE: Keep the pocket updated whenever the bag changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('sikhStoreCart', JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  // 3. THE ADD: Put a new Shashtar in the bag
  const addToCart = (product: any) => {
    setCart((prev) => [...prev, product]);
  };

  // 4. THE REMOVE: Take a specific piece out (The new logic!)
  const removeFromCart = (indexToRemove: number) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  // 5. THE TOTALS: Pre-calculate these so other pages don't have to work hard
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const totalItems = cart.length;

  // 6. THE MAGIC BROOM: Clean slate for the next mission
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('sikhStoreCart');
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      clearCart, 
      totalPrice, 
      totalItems,
      isLoaded 
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);