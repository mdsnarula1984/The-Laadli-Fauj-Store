'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from './CartContext';

const Icons = {
  Menu: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
  ),
  X: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
  )
};

export default function Navbar() {
  const { cart } = useCart() || { cart: [] };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when the menu is open (Crucial for UX)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-black text-orange-600 tracking-tighter uppercase italic z-[110]">
            The <span className="text-zinc-900 not-italic">Gurmukh</span> Store
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 font-bold text-[11px] uppercase tracking-[0.3em] text-zinc-400">
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <Link href="/shop" className="hover:text-orange-600 transition-colors">Arsenal</Link>
            <Link href="/about" className="hover:text-orange-600 transition-colors">About</Link>
            <Link href="/cart" className="bg-zinc-900 px-6 py-2.5 rounded-full flex items-center gap-3 hover:bg-orange-600 transition-all text-white shadow-xl">
              <span className="text-[10px]">Bag</span>
              <span className="bg-white/20 text-[10px] px-2 py-0.5 rounded-full min-w-[22px] text-center">{cart.length}</span>
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-6 z-[110]">
            <Link href="/cart" className="relative">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[9px] font-black h-4 w-4 rounded-full flex items-center justify-center">{cart.length}</span>
            </Link>
            <button onClick={toggleMenu} className="text-zinc-900 transition-transform active:scale-90">
              {isMenuOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- THE FULL-SCREEN WHITE OVERLAY --- */}
      <div 
        className={`fixed inset-0 bg-white z-[95] flex flex-col transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-12 px-6">
          <Link 
            href="/" 
            onClick={toggleMenu} 
            className="text-5xl font-black uppercase tracking-tighter text-zinc-900 hover:text-orange-600 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/shop" 
            onClick={toggleMenu} 
            className="text-5xl font-black uppercase tracking-tighter text-zinc-900 hover:text-orange-600 transition-colors"
          >
            Arsenal
          </Link>
          <Link 
            href="/about" 
            onClick={toggleMenu} 
            className="text-5xl font-black uppercase tracking-tighter text-zinc-900 hover:text-orange-600 transition-colors"
          >
            About
          </Link>

          {/* Decorative Bottom Detail */}
          <div className="mt-12 text-center">
            <div className="w-12 h-[2px] bg-zinc-100 mx-auto mb-6"></div>
            <p className="text-[10px] font-black text-orange-600 tracking-[0.4em] uppercase">
              Laadli Fauj • Est. 1699
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
